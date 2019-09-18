# newsapi.js

`newsapi.js` is a TypeScript (and plain JS) library for [newsapi.org](https://newsapi.org).

## How do I use this thing?
Just run:
```
npm install newsapi.js -s
```
And some examples:
```js
const news = require("newsapi.js");

// For TypeScript: import {NewsAPIClient} from "newsapi.js"

const sources = news.getSources()
    .then(source => console.log(sources)) // Wouldn't do this if I were you
    .catch((err) => console.error(err));

const topHeadlines = news.getTopHeadlines()
    .then(headline => {
        const articles = headline.articles;
        console.log(articles[0].title);
    });
```

## How do I contribute?
Just create a PR! Testing information is below:
### How to test this library.
All the hard Mocha & TypeScript work is done for you. But you need to provide yourself a token from here: https://newsapi.org/account.

Once you have received a token, create a file at `src/test/config/test.config.json` with the following content:
```json
{
    "token": "token here"
}
```
While replacing the string `token here` with your token.
Then run the following:
```
$ npm install
```
and to test:
```
$ npm test
```

# Licence
We abide by the [MIT license](https://github.com/The-Grape-Vine/newsapi.js/blob/master/LICENSE).   