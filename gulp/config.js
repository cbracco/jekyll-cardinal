/**
 * Config
 * Define paths, settings, and options for gulp tasks
 */

// Paths
var src               = 'app';
var srcAssets         = 'app/_assets';
var build             = 'build';
var development       = 'build/development';
var developmentAssets = 'build/assets';
var production        = 'build/production';
var productionAssets  = 'build/production/assets';

// Config
module.exports = {
  // Browsersync
  browsersync: {
    development: {
      server: {
        baseDir: [development, build, src]
      },
      port: 9999,
      xip: true,
      files: [
        developmentAssets + '/css/*.css',
        developmentAssets + '/js/*.js',
        developmentAssets + '/img/**'
      ],
      notify: {
        styles: ['display: hidden; padding: 12px; font-family: sans-serif; position: fixed; font-size: 14px; z-index: 10000; left: 50%; bottom: 0; width: 200px; margin: 0; margin-left: -100px; border-top-left-radius: 3px; border-top-right-radius: 3px; color: #fff; text-align: center; background-color: rgb(27, 32, 50);']
      }
    },
    production: {
      server: {
        baseDir: [production]
      },
      port: 9998,
      xip: true
    }
  },
  // Delete
  delete: {
    src: [developmentAssets]
  },
  // Styles
  styles: {
    src: srcAssets + '/styles/main.less',
    dest: developmentAssets + '/css',
    // Autoprefixer
    autoprefixer: {
      browsers: [
        'last 2 versions',
        'safari 5',
        'ie 8',
        'ie 9',
        'opera 12.1',
        'ios 6',
        'android 4'
      ],
      cascade: true
    }
  },
  // Scripts
  scripts: {
    // Enable source maps
    debug: true,
    // Additional file extensions to make optional
    extensions: ['.coffee', '.hbs'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: './' + srcAssets + '/scripts/main.js',
      dest: developmentAssets + '/js',
      outputName: 'main.js'
    }, {
      entries: './' + srcAssets + '/scripts/head.js',
      dest: developmentAssets + '/js',
      outputName: 'head.js'
    }]
  },
  // Copy Images
  copy:{
    images: {
      src: srcAssets + '/images/**/*',
      dest: developmentAssets + '/img'
    }
  },
  // Jekyll
  jekyll: {
    development: {
      src: src,
      dest: development,
      config: '_config.yml'
    },
    production: {
      src: src,
      dest: production,
      config: '_config.yml,_config.build.yml'
    }
  },
  // Watch
  watch: {
    jekyll: [
      '_config.yml',
      '_config.build.yml',
      src + '/_data/**/*.{json,yml,csv}',
      src + '/_includes/**/*.{html,xml}',
      src + '/_layouts/*.html',
      src + '/_locales/*.yml',
      src + '/_plugins/*.rb',
      src + '/_posts/*.{markdown,md}',
      src + '/**/*.{html,markdown,md,yml,json,txt,xml}',
      src + '/*'
    ],
    styles: srcAssets + '/styles/**/*.less',
    scripts: srcAssets + '/scripts/**/*.js',
    images: srcAssets + '/images/**/*'
  },
  // Optimize
  optimize: {
    styles: {
      src: developmentAssets + '/css/*.css',
      dest: productionAssets + '/css/',
      options: {
        keepSpecialComments: 0
      }
    },
    scripts: {
      src: developmentAssets + '/js/*.js',
      dest: productionAssets + '/js/',
      options: {}
    },
    images: {
      src: developmentAssets + '/img/**/*.{jpg,jpeg,png,gif,svg}',
      dest: productionAssets + '/img/',
      options: {
        optimizationLevel: 5,
        progessive: true,
        interlaced: true
      }
    },
    html: {
      src: production + '/**/*.html',
      dest: production,
      options: {
        collapseWhitespace: true,
        conservativeCollapse: true
      }
    }
  },
  // Revision
  revision: {
    src: {
      assets: [
        productionAssets + '/css/*.css',
        productionAssets + '/js/*.js',
        productionAssets + '/img/**/*'
      ],
      base: production
    },
    dest: {
      assets: production,
      manifest: {
        name: 'manifest.json',
        path: productionAssets
      }
    },
    // Collect
    collect: {
      src: [
        productionAssets + '/manifest.json',
        production + '/**/*.{html,xml,txt,json,css,js}',
        '!' + production + '/feed.xml'
      ],
      dest: production
    }
  },
  // Gzip
  gzip: {
    src: [
      production + '/**/*.{html,xml,json,css,js}'
    ],
    dest: production,
    options: {}
  },
  // Deploy
  deploy: {
    // Rsync
    rsync: {
      src: production + '/**',
      options: {
        destination: '~/path/to/project/root/',
        root: production,
        hostname: 'domain.com',
        username: 'user',
        incremental: true,
        progress: true,
        relative: true,
        emptyDirectories: true,
        recursive: true,
        clean: true,
        exclude: ['.DS_Store'],
        include: []
      }
    }
  }
};
