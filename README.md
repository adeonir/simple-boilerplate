# Simple Boilerplate

This project is a simple boilerplate structure for generating static websites using Pug, Stylus, Babel, Gulp and Browsersync.

## Stack

- HTML Template Engine: [Pug](https://pugjs.org/)
- CSS Preprocessor: [Sass](https://sass-lang.com/)
- JS Transpiler: [Babel](https://babeljs.io/)
- Task Runner: [Gulp](https://gulpjs.com/)
- Browser Testing [Browsersync](https://www.browsersync.io/)

## Getting Started

### Installation

First of all, you need [NodeJS](https://nodejs.org/), [GulpJS](https://gulpjs.com/) and [Yarn](https://yarnpkg.com/) to install the dependencies and run this project.

```sh
# after clone this repository, enter the directory
$ cd simple-boilerplate

# install dependencies
$ yarn
```

Now you are ready, just run `yarn dev` to start a dev server.
When you are done, you can run `yarn build` to genereate the minified files.

### Scripts

- `dev`: run the developer server
- `build`: run linters and build the production build
- `eslint`: run js and pug files linter
- `stylelint`: run scss files linter

### Gulp Tasks

- `gulp`: run all tasks and initialize a server with live reload
- `gulp styles`: compile sass files
- `gulp scripts`: tranpile js files
- `gulp images`: compress images files
- `gulp vectors`: compress svg files
- `gulp pages`: compile pug files
- `gulp server`: inicialize a server
- `gulp clear`: clear the dist folder
- `gulp build`: generate the dist folder

## Folders Structure

```sh
.
├── src
│   ├── images
│   │   └── favicon.png
│   ├── pages
│   │   ├── layouts
│   │   │   └── default.pug
│   │   ├── partials
│   │   │   ├── footer.pug
│   │   │   ├── header.pug
│   │   │   └── main.pug
│   │   └── index.pug
│   ├── scripts
│   │   ├── hello.js
│   │   └── script.js
│   ├── styles
│   │   └── style.scss
│   └── vectors
│       └── simple.svg
├── .editorconfig
├── .eslintrc
├── .gitignore
├── .prettierrc
├── .stylelintrc
├── gulpfile.js
├── LICENSE
├── package.json
├── README.md
└── yarn.lock
```

### Code Standards

This project uses [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) (but without the semicolons xD)

### Thanks

Thanks to [@afonsopacifer](https://github.com/csshortcut/csshortcut-app) and [@willianjusten](https://github.com/Qualy-org/qualy-front) for the inspiration.

## License

This boilerplate is free and open source software, distributed under the [MIT License](https://gitlab.com/adeonir/simple-boilerplate/blob/master/LICENSE). So feel free to use this to create your site without linking back to me or using a disclaimer.
