var pinglunList = require('./pinglunList');
var indexList = require('./indexList');
var rebaList = require('./rebaList');
module.exports = function() {
    return {
      "pinglunList": pinglunList,
      "indexList":indexList,
      "rebaList":rebaList,
    }
}
