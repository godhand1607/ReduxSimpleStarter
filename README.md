# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```

### Styleguide
We'll refer to [airbnb's react styleguide](https://github.com/airbnb/javascript/blob/master/react/README.md) with the exception of using 4 spaces instead of 2

#### Lint Setup
1. Follow steps [here](https://www.npmjs.com/package/eslint-config-airbnb)
1. Be sure to include the add the `-save-exact` flag when install/saving npm plugins
1. Create a `.eslintrc` file on root
    ```json
    {
        "extends": "airbnb",
        "rules": {
            "indent": ["error", 4],
            "react/jsx-indent": ["error", 4]
        }
    }
    ```
1. Setup npm `lint` scripts in `package.json`
    ```json
    {
        "scripts": {
            "lint": "eslint \"src/**/*.jsx\""
        }
    }
    ```
1. Run `npm run lint`
