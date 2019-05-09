![UI5 logo](/docs/images/UI5_logo_wide.png)

# UI5 Web Components Vue Sample Application

[Vue](https://vuejs.org/) sample application to demonstrate the usage of the [UI5 Web Components](https://github.com/SAP/ui5-webcomponents). It shows how to bind properties, to subscribe to events, using nested components and the bootstrapped Vue build.
 
This project was bootstrapped with [Vue CLI](https://cli.vuejs.org/)
 
## Prerequisites
- [Node.js](https://nodejs.org/) (**version 8.5 or higher** ⚠️)

## Getting started
1. [Clone this repository](https://help.github.com/articles/cloning-a-repository/) using the [GitHub Command line tool](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and navigate into the downloaded directory.
    ```sh
    git clone https://github.com/SAP/ui5-webcomponents-sample-vue.git
    cd ui5-webcomponents-sample-vue
    ```
1. Install all dependencies
    ```sh
    npm install
    ```

1. Start a local server and run the application. (The running application can be found here: http://localhost:8080)
    ```sh
    npm run serve
    ```


## Noteworthy
 
### Consume UI5 Web Components
Import the desired component(s) in your app to define the UI5 Web Component.
 
For example, to use `ui5-button` you need to import it:
 
```js
import "@ui5/webcomponents/dist/Button"; // loads ui5-button
```
 
Then, you can use the custom element in an HTML page:
 
```html
<ui5-button>Hello world!</ui5-button>
```

## Browser support

Currently only Chrome, Safari and Firefox support Web Components natively.

If your application should run on browsers without native Web Components support (Edge and/or IE11), import one the following modules before your first Web Component import: 

### Edge only

```js
import "@ui5/webcomponents-base/src/browsersupport/Edge";
```

### Edge and IE11

```js
import "@ui5/webcomponents-base/src/browsersupport/IE11";
```

*Note:* Importing the module for IE11 support automatically enables Edge support as well, so there is no need to import them both explicitly.

Example:

```js
import "@ui5/webcomponents-base/src/browsersupport/IE11"; // This will enable Edge and IE11 support for all Web Components below
import "@ui5/webcomponents/dist/Button"; // loads ui5-button
import "@ui5/webcomponents/dist/Label"; // loads ui5-label
```

## Configure Vue to work with Web Components defined outside of it
To use Web Components in Vue Application a configuration option should be provided in the `main.js` file to tell the Vue about these components. More can be found in the documentation of [Vue.config.ignoredElements](https://vuejs.org/v2/api/#ignoredElements):

**main.js**
```js
Vue.config.ignoredElements = [/^ui5-/];
```


## Configure Vue Build
When UI5 Web Components are used they include all of their translation files and CLDR data files in the application bundle.
In order to decrease the bundle size of the application a custom Webpack configuration should be provided. 

Create `vue.config.js` file:

**vue.config.js**
```js
module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: [/cldr\/.*\.json$/, /i18n\/.*\.json$/],
          loader: 'file-loader',
          options: {
            name: 'static/media/[name].[hash:8].[ext]',
          },
          type: 'javascript/auto'
        }
      ]
    }
  }
};
```

### Where is the npm package?
- [UI5 Web Components](https://www.npmjs.com/package/@ui5/webcomponents)

## Limitations
No limitations known.

## Known Issues
No major bugs known.

## Support
We welcome all comments, suggestions, questions, and bug reports. Please follow our [Support Guidelines](https://github.com/SAP/ui5-webcomponents/blob/master/SUPPORT.md#-content) on how to report an issue, or chat with us in the `#webcomponents` channel of the [OpenUI5 Community Slack](https://join-ui5-slack.herokuapp.com/).

## Contribute to UI5 Web Components
Please check our [Contribution Guidelines](https://github.com/SAP/ui5-webcomponents/blob/master/CONTRIBUTING.md).

## License
Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the Apache Software License, Version 2.0 except as noted otherwise in the [LICENSE](/LICENSE.txt) file.
