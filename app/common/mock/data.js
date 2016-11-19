var pinglunList = require('./pinglunList');
var indexList = require('./indexList');
var xinxianList = require('./xinxianList')
module.exports = function() {
    return {
      "pinglunList": pinglunList,
      "indexList":indexList,
      "xinxianList":xinxianList
    }
}
