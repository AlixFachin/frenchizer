# frenchizer

## Disclaimer
This package was realized during a bootcamp at [Code Chrysalis](https://www.codechrysalis.io).
The aim of this package is to code a very simple (and silly) function and learn how to publish a package to NPM with some CI/CD features.

## A utility function to translate english into "french"


<img src="https://media.giphy.com/media/3o6MbsT5NgoQAUldPq/giphy.gif" width="400px">

This neat utility will enable to change your English sentence into French so that every person in Paris will understand what you mean. 

*Please note*: This utility will however *not* make them listen to you, respect you or care about what you are trying to say.

For example,
```js
toFrench('This is the castle of our master, Guy de Loimbard!')
```
will return

```js
'Uh zis is ze castle of ouR masteR, Guy de LoimbaRd sacrebleu!'
```

or 
```js
toFrench("I don't think he will be very keen you see, because he already got one")
```
becomes
```js
"Uh I don't zink he will be veRy keen you see, because he alReady got one sacrebleu"
```

## To use this function
Please download this package with 
```
npm install frenchizer
```
Then use it in your functions as follows:
```js
const {toFrench} = require('frenchizer');

...

const thingIShouldSayInParis = toFrench('Hello! Who is it?");
```

<img src="https://media.giphy.com/media/uZZVDe6K1Sb2U/giphy.gif" width="400px">

This author will not be liable for any taunt due to the French characters.

## To contribute
If you want to add new ways or suggestions to translate English into "french", please create a PR into the following GitHub repo:
<https://github.com/AlixFachin/frenchizer>

