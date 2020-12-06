'use strict';
const osenv = require('osenv');
//const osenv = require('electron').remote.require('osenv');
console.log(__filename);
function getUsersHomeFolder(){

  return osenv.home();
}
