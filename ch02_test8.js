var path = require('path');

var directories = ['Users','Mars','docs'];

var dirStr = directories.join();
console.log(dirStr);

var dirStr2 = directories.join(path.sep);
console.log(dirStr2);

var filePath = path.join('/User/Mars/','notepad.exe');
console.log('filePath: ' + filePath);

var dirName = path.dirname(filePath);
console.log('dirName : ' + dirName);

var baseName = path.basename(filePath);
console.log('baseName : ' + baseName);

var extName = path.extname(filePath);
console.log('extName : ' + extName);