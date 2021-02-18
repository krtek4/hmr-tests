# HMR Tests

## Branch `hmr-plugin-11` - Angular 11 - HMR plugin

* `npm i`
* `npm run start`
* open `localhost:4200`
* click the button
* the value changes from 'initial' to 'changed'
* change anything in one of the files, for example add a color to the `.value` class in `app.component.css`
* the page is reloaded, but blank
* the error "[HMR] Update failed: Error: Injector has already been destroyed." is visible in the console
