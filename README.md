# AngularForum

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Project Overview

AngularForum is a project for the Softuni angular course final exam. It is an app for reading, creating and managing themes and posts. The app has public and private parts. 
Public parts are "home page", where people can read and search all themes available, "theme details page", where people can read all posts for the current theme and "login/register page". Private part is "user profile page", where logged in users can read and edit their profile information, keep track of their own created themes, posts, as well as the themes they've subscribed to and the posts they've liked.

## Project Architecture

├── .vscode/
├── .angular/
├── node_modules/
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.module.ts
│   ├── assets
│   │   ├── .gitkeep
│   ├── environments
│   │   ├── environment.prod.ts
│   │   ├── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
├── .browserlistrc
├── .editorconfig
├── .gitignore
├── angular.json
├── karma.conf.js
├── package-lock.json 
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json