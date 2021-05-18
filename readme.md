## Webpack 


![Webpack process](https://miro.medium.com/max/3414/1*uEu2bro4URUiey0lkBXWbA.png)

[Webpack](https://webpack.js.org/) is a powerful bundler used in many applications & frameworks. It can handle not only the combination and minification of JavaScript and CSS files, but also other assets such as image files (with the use of plugins).


### What is Webpack?

Webpack is a module bundler. It takes disparate dependencies, creates modules for them and bundles the entire network up into manageable output files. This is especially useful for Single Page Applications (SPAs), such as React apps, which is the defacto standard for Web Applications today.


### How does Webpack work?

When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

### Why use Webpack?

Developers often break JavaScript and CSS code into separate files. Separate files let you focus on writing more modular chunks of code that do one single thing. Files that do one thing decrease your cognitive load as maintaining them is a quite cumbersome task.

When it’s time to move your app to production, having multiple JavaScript or CSS files isn’t ideal.

When a user visits your site, each of your files will require an additional HTTP request, making your site slower to load. (**Note** the additional time needed to load _all_ of your unbundled assests could typically be measured in milliseconds.)

To remedy this, you can create a “build” of your app, which merges all your disparate JavaScript files into one file, and all of your disparate CSS files into one file.

This then minimizes the number and size of files the user gets. To create this “dist” you use a build tool such as Webpack.

If, for example, your app is divided into various files and folders like the following example:

```javascript
src/
  index.js
  ...
  css/
    app.css
  js/
    helpers.js
    ...
```

After you run `npm run dev` your build directory will look something like this:

```javascript
dist/
    main.css
      ...
    main.js
      ...
    media/
      logo.png
      ...
    index.html
  ...
```

Your app is still the same as it was before, but has been compacted to a small package called `dist`.

### How to use Webpack?

Let’s assume we have an application that can perform two simple mathematical tasks — sum and multiply. We decide to split these functions into separate files for easier maintenance:

`index.html`

```html

<html>
<head>
    <title>Webpack Tutorial</title>
</head>
<body>
<script src="./src/sum.js"></script>
<script src="./src/product.js"></script>
<script src="src/index.js"></script>
</body>
</html>
```

`index.js`
```javascript
var calcA = product(5, 3);
var calcB = sum(5, 3);

console.log('Product of 5 and 3 = ' + calcA);
console.log('Sum of 5 and 3 = ' + calcB);
```

`multiply.js`
```javascript
var product = function (a, b) {
    return a * b;
};
```

`sum.js`
```javascript
var sum = function (a, b) {
    return a + b;
};
```

The output of this would be:

`Product of 5 and 3 = 15`
`Sum of 5 and 3 = 8`

From the above code you can see two things:

1. `index.js` depends on `product.js` and `sum.js`. (i.e. If we include `index.js` before either `product.js` or `sum.js` dependencies we will get errors.)
2. `index.html` needs to import three separate files.

This is fine now, but we can imagine that when we scale this application and we may have dozens (if not hundreds) of dependencies like we do now, all of which would need to be downloaded before our application could run.

Webpack can help solve this problem by bundling and modularising our code.

Before using Webpack, we'll need to refactor our code using ES6 JavaScript syntax to make our dependencies available to one another.

`index.html`
```html
<html>
<head>
    <title>Webpack Tutorial</title>
</head>
<body>
    <script src="./dist/main.js"></script>
</body>
</html>
```

`index.js`
```javascript
import product from './product'
import sum from './sum'

const calcA = product(5, 3)
const calcB = sum(5, 3)

console.log(`Product of 5 and 3 = ${calcA}`)
console.log(`Sum of 5 and 3 = ${calcB}`)
```

`multiply.js`
```javascript
const product = (a, b) => {
    return a * b
}

export default product
```

`sum.js`
```javascript
const sum = (a, b) => {
    return a + b
}

export default sum
```

Now that we've refactored our code we're almost ready to use Webpack. First let's initialize a new Node.js project by running the command 'npm init'. (**Note** run `npm init -y` to initialize a new project without answering setup questions.)

Install Webpack by running the command `npm install -D webpack webpack-cli`

And finally, run `npx webpack` to minimize and bundle our code. (Alternatively, add an npm script `"dev": "webpack"` and run `npm run dev`)


## Custom Setup
Create a `webpack.config.js` in the root of your application and include the basic setup:

```javascript
module.exports = {
    //environment
    mode: "development",
    devServer: {
        //entry point when server starts
        //start in dist folder instead of root
       contentBase : "./dist",
        //hot reload enabled
        //Hot Module Replacement (HMR) exchanges, adds, or removes modules while an 
        //application is running, without a full reload. 
        // This can significantly speed up development
        hot: true
    }
}
```


Now want webpack to handle all js files within out app and make it backward compatible to accommodate older browsers. We can use [Babel](https://babeljs.io/setup) for this.

**[Babel Webpack Installation](https://babeljs.io/setup#installation)

```javascript
module.exports = {
    ...
    module:{
        //adding babel to your app
        rules:[
            {
                test: /\.js/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        ...
    }
}
```
### CSS loaders



---

# Additional Resources

* [webpack.js](https://webpack.js.org/)
* [weback.js > Getting Started](https://webpack.js.org/guides/getting-started/)