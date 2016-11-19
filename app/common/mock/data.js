var pinglunList = require('./pinglunList');
var indexList = require('./indexList');
var xinxianList = require('./xinxianList');
var rebaList = require('./rebaList');

module.exports = function() {
    return {
      "pinglunList": pinglunList,
      "indexList":indexList,
      "xinxianList":xinxianList,
      "rebaList":rebaList
    }
}
