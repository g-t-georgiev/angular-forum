# AngularForum

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Project Overview

AngularForum is a project for the Softuni angular course final exam. It is an app for reading, creating and managing themes and posts. The app has public and private parts. 
Public parts are "home page", where people can read and search all themes available, "theme details page", where people can read all posts for the current theme and "login/register page". Private part is "user profile page", where logged in users can read and edit their profile information, keep track of their own created themes, posts, as well as the themes they've subscribed to and the posts they've liked.

## Project Structure

```
├── .vscode
│   ├── extenstion.json
│   ├── launch.json
│   ├── tasks.json
├── .angular/
├── node_modules/
├── src
│   ├── app
│   │   ├── core
│   │   │   ├── header
│   │   │   │   ├── header.component.css
│   │   │   │   ├── header.component.html
│   │   │   │   ├── header.component.spec.ts
│   │   │   │   ├── header.component.ts
│   │   │   ├── app-theme-switch
│   │   │   │   ├── app-theme-switch.component.css
│   │   │   │   ├── app-theme-switch.component.html
│   │   │   │   ├── app-theme-switch.component.spec.ts
│   │   │   │   ├── app-theme-switch.component.ts
│   │   │   ├── app-lang-switch
│   │   │   │   ├── app-lang-switch.component.css
│   │   │   │   ├── app-lang-switch.component.html
│   │   │   │   ├── app-lang-switch.component.spec.ts
│   │   │   │   ├── app-lang-switch.component.ts
│   │   │   ├── interceptors
│   │   │   │   ├── index.ts
│   │   │   │   ├── attach-cookie.interceptors.spec.ts
│   │   │   │   ├── attach-cooke.interceptor.ts
│   │   │   │   ├── auth.interceptor.spec.ts
│   │   │   │   ├── auth.interceptor.ts
│   │   │   │   ├── response-message.interceptor.spec.ts
│   │   │   │   ├── response-message.interceptor.ts
│   │   │   ├── services
│   │   │   │   ├── index.ts
│   │   │   │   ├── auth.service.spec.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── message-bus.service.spec.ts
│   │   │   │   ├── message-bus.service.ts
│   │   │   │   ├── app-theme-switch.service.spec.ts
│   │   │   │   ├── app-theme-switch.service.ts
│   │   │   │   ├── app-lang-switch.service.spec.ts
│   │   │   │   ├── app-lang-switch.service.ts
│   │   │   ├── models
│   │   │   │   ├── index.ts
│   │   │   │   ├── base.ts
│   │   │   │   ├── user.ts
│   │   │   ├── directives
│   │   │   │   ├── index.ts
│   │   │   │   ├── clear-notification.directive.spec.ts
│   │   │   │   ├── clear-notification.directive.ts
│   │   │   ├── core.module.ts
│   │   ├── shared
│   │   │   ├── shared.module.ts
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
```