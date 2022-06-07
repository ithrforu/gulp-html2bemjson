# gulp-html2bemjson

> Compile html to [bemjson](https://ru.bem.info/technologies/classic/bemjson/) with [gulp](https://gulpjs.com/) and [html2bemjson](https://www.npmjs.com/package/html2bemjson) plugin.

## Usage

#### Install
```sh
$ npm install gulp-html2bemjson --save-dev 
```

## Examples

```javascript
import gulp from 'gulp';
import html2bemjson from 'gulp-html2bemjson';

export default () => {
  return gulp.src('src/pages/index/index.html')
    .pipe(html2bemjson())
    .pipe(gulp.dest('src/pages'))
};
```