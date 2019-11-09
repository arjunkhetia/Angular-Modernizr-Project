# Angular Modernizr Project   ![Version][version-image]

![Linux Build][linuxbuild-image]
![Windows Build][windowsbuild-image]
![NSP Status][nspstatus-image]
![Test Coverage][coverage-image]
![Dependency Status][dependency-image]
![devDependencies Status][devdependency-image]

The quickest way to get start with Angular - 8.2.13 & Modernizr - 3.8.0, just clone the project:

```bash
$ git clone https://github.com/arjunkhetia/Angular-Modernizr-Project.git
```

Install dependencies:

```bash
$ npm install
```

Start the Angular app at `http://localhost:4200/`:

```bash
$ npm start
```

Angular project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Modernizr

Modernizr is a JavaScript library which is designed to detect HTML5 and CSS3 features in various browsers, which lets JavaScript avoid using unimplemented features or use a workaround such as a shim to emulate them. Modernizr aims to provide this feature detection in a complete and standardized manner.

```ts
angular.json -

"scripts": [
  "src/assets/modernizr.js"
]

component.ts -

declare global {
  interface Window {
    Modernizr
  }
}

public Modernizr: any;

ngOnInit(): void {
  this.Modernizr = window.Modernizr;
  console.log('Modernizr : ', this.Modernizr);
}
```
# Modernizr -

### Screen
![modernizr](https://github.com/arjunkhetia/Angular-Modernizr-Project/blob/master/src/assets/modernizr.png "modernizr")

[version-image]: https://img.shields.io/badge/Version-1.0.0-orange.svg
[linuxbuild-image]: https://img.shields.io/badge/Linux-passing-brightgreen.svg
[windowsbuild-image]: https://img.shields.io/badge/Windows-passing-brightgreen.svg
[nspstatus-image]: https://img.shields.io/badge/nsp-no_known_vulns-blue.svg
[coverage-image]: https://img.shields.io/coveralls/expressjs/express/master.svg
[dependency-image]: https://img.shields.io/badge/dependencies-up_to_date-brightgreen.svg
[devdependency-image]: https://img.shields.io/badge/devdependencies-up_to_date-yellow.svg
