require('mysql2/node_modules/iconv-lite').encodingExists('foo');

import iconv from 'iconv-lite';
import encodings from 'iconv-lite/encodings';
iconv.encodings = encodings;
