# Simple Boilerplate

This project is a simple boilerplate structure for generating static websites using ES6, Pug, Stylus, Gulp and Browsersync.

## Stack

- Task Runner: [Gulp](https://gulpjs.com/)
- HTML Template Engine: [Pug](https://pugjs.org/)
- CSS Preprocessor: [Stylus](http://stylus-lang.com/)
- JS Transpiler: [Babel](https://babeljs.io/)
- Browser Testing [Browsersync](https://www.browsersync.io/)

It uses [Jeet](http://jeet.gs/) for grid system, [Kouto Swiss](http://kouto-swiss.io/) for animations, reset and a lot of great mixins and [Rupture](https://github.com/jenius/rupture) for responsive utilities. Also uses ITCSS for the CSS architecture. RSCSS for the CSS structure is recommended.

## Getting Started

### Installation

First of all, you need [NodeJS](https://nodejs.org/), [GulpJS](https://gulpjs.com/) and [Yarn](https://yarnpkg.com/) to install the dependencies and run this project.

```sh
# clone this repository
$ git clone git@github.com:adeonir/simple-boilerplate.git
$ cd simple-boilerplate

# install dependencies
$ yarn install
```

Now you are ready to start.

## Folders Structure
```sh
.
├── dist
├── src
│   ├── assets
│   │   ├── images
│   │   │   └── simple.png
│   │   │   └── favicon.png
│   │   ├── scripts
│   │   │   └── script.js
│   │   ├── styles
│   │   │   ├── settings/*.styl
│   │   │   ├── tools/*.styl
│   │   │   ├── generic/*.styl
│   │   │   ├── elements/*.styl
│   │   │   ├── objects/*.styl
│   │   │   ├── components/*.styl
│   │   │   ├── trumps/*.styl
│   │   │   └── style.styl
│   │   └── svg
│   │   │   └── simple.svg
│   ├── layouts
│   │   ├── default.pug
│   ├── partials
│   │   ├── footer.pug
│   │   └── header.pug
│   └── index.pug
├── .editorconfig
├── .eslintrc
├── .gitignore
├── gulpfile.js
├── LICENSE
├── package.json
├── README.md
└── yarn.lock
```

### Code Standards

This project uses [Eslint](https://eslint.org/) and [JavaScript Standart Style](https://standardjs.com/).

### Gulp Tasks

- `gulp`: run all tasks and initialize a server for changes
- `gulp styles`: compile stylus files
- `gulp pug`: compile pug files
- `gulp scripts`: execute js files
- `gulp images`: compress images files
- `gulp svg`: compress svg files
- `gulp browser-sync`: inicialize a server
- `gulp clear`: clear the dist folder
- `gulp build`: run all files and generate the dist folder
- `gulp deploy`: run all tasks and deploy files to gh-pages

### Thanks

Thanks to [@afonsopacifer](https://github.com/csshortcut/csshortcut-app) and [@willianjusten](https://github.com/Qualy-org/qualy-front) for the inspiration.

## License

This boilerplate is free and open source software, distributed under the [MIT License](https://gitlab.com/adeonir/simple-boilerplate/blob/master/LICENSE). So feel free to use this to create your site without linking back to me or using a disclaimer.
