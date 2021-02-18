# HMR Tests

## Branch `master` - Angular 11 - No HMR plugin

* `npm i`
* `npm run start`
* open `localhost:4200`
* click the button
* the value changes from 'initial' to 'changed'
* change anything in one of the files, for example add a color to the `.value` class in `app.component.css`
* the page is reloaded, but the value is back to 'initial'
