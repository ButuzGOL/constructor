import gulp from 'gulp';
import changed from 'gulp-changed';
import less from 'gulp-less';
import csso from 'gulp-csso';
import autoprefixer from 'gulp-autoprefixer';
import browserify from 'browserify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import babelify from 'babelify';
import uglify from 'gulp-uglify';
import del from 'del';
import notify from 'gulp-notify';
import sourcemaps from 'gulp-sourcemaps';
import connect from 'gulp-connect';
import ghPages from 'gulp-gh-pages';

const paths = {
  src: './src',
  app: './src/app',
  dist: './dist',
  assets: './src/app/assets'
};

const config = {
  scripts: {
    src: paths.app + '/app.js',
    outputName: 'bundle.js',
    dest: paths.dist + '/scripts'
  },
  images: {
    src: paths.assets + '/images/**/*',
    dest: paths.dist + '/images'
  },
  fonts: {
    src: paths.assets + '/fonts/**/*',
    dest: paths.dist + '/fonts'
  },
  connect: {
    root: [paths.dist, paths.src],
    livereload: true,
    port: 9009
  },
  styles: {
    src: paths.assets + '/styles/main.less',
    watch: paths.assets + '/styles/**/*.less',
    dest: paths.dist + '/styles'
  },
  assets: {
    src: ['../src/assets/**/*.*'],
    dest: paths.dist + '/components/assets'
  },
  static: {
    src: [paths.src + '/index.html'],
    dest: paths.dist
  },
  browserify: {
    debug: true,
    extensions: ['.jsx']
  }
};

gulp.task('clean', (cb) => {
  del([paths.dist], cb);
});

gulp.task('connect', () => {
  connect.server(config.connect);
});

gulp.task('copy-static', () => {
  return gulp.src(config.static.src)
    .pipe(gulp.dest(config.static.dest));
});

gulp.task('watchify', () => {
  const args = watchify.args;
  args.debug = config.browserify.debug;
  args.extensions = config.browserify.extensions;

  const bundler = watchify(browserify(config.scripts.src, args));

  function rebundle() {
    return bundler
      .bundle()
      .on('error', notify.onError())
      .pipe(source(config.scripts.outputName))
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(connect.reload());
  }

  bundler.transform(babelify)
    .on('update', rebundle);

  return rebundle();
});

gulp.task('browserify', () => {
  browserify(config.scripts.src, config.browserify)
    .transform(babelify)
    .bundle()
    .pipe(source(config.scripts.outputName))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.scripts.dest));
});

gulp.task('styles', () => {
  return gulp.src(config.styles.src)
    .pipe(changed(config.styles.dest))
    .pipe(less({ errLogToConsole: true }))
    .on('error', notify.onError())
    .pipe(autoprefixer('last 1 version'))
    .pipe(csso())
    .pipe(gulp.dest(config.styles.dest))
    .pipe(connect.reload());
});

gulp.task('images', () => {
  return gulp.src(config.images.src)
    .pipe(gulp.dest(config.images.dest))
    .pipe(connect.reload());
});

gulp.task('fonts', () => {
  return gulp.src(config.fonts.src)
    .pipe(gulp.dest(config.fonts.dest))
    .pipe(connect.reload());
});

gulp.task('assets', () => {
  return gulp.src(config.assets.src)
    .pipe(gulp.dest(config.assets.dest));
});

gulp.task('watchTask', () => {
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.styles.watch, ['styles']);
});

gulp.task('deploy', () => {
  return gulp.src(paths.dist + '/**/*')
    .pipe(ghPages({ remoteUrl:
  'https://' + process.env.GH_TOKEN + '@github.com/Selectica/components-ui.git'
  }));
});


gulp.task('start', ['clean'], () => {
  gulp.start(['watchTask', 'styles', 'images', 'fonts', 'assets']);
});

gulp.task('build', ['clean'], () => {
  gulp.start(['browserify', 'styles', 'images', 'fonts', 'copy-static', 'assets']);
});

gulp.task('default', ['start']);
