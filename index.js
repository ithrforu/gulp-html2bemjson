import through2 from 'through2';
import html2bemjson from 'html2bemjson';

export default function gulpHtml2bemjson() {
  return through2.obj(function(file, _, cb) {
    if (file.isBuffer()) {
      const html = file.contents.toString();
  
      const bemjson = html2bemjson.stringify(html, {
          preserveComments: false,
          naming: { elem: '__', mod: '--' },
          indent: '  '
        });
  
      file.contents = Buffer.from(bemjson);
      file.extname = '.bemjson.js';
    }
    cb(null, file);
  });
}