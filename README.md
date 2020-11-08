// ---------- Approach ----------- //

1) Create Responsive layout for the Mobile first approach using Media queries pixel ranging upto 700px breakpoint.
2) Align the screen layout for tablet next between 701px to 1024px and then set the layout for desktop and larger screens.
3) Set the routes for the initial eager load of the page where page is not set for lazyloading.
4) Set the query params and call the api to get the results based on the filters.
5) For persistent reload check if query params exist or not.
6) Add the Angular universal to achieve server side rendering.


// --------- Instructions --------- //

1) Checkout from the github repo as given.
2) Do npm install.
3) Run npm run dev:ssr in the terminal.

OR Run this in your browser to view the application
http://13.232.90.34:4000/



# SpaceX

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

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
