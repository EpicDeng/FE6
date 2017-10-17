// 作业 6
//
// var argsFromQuery = function(queryString) { }
// 
// queryString 是一个 string
// 例子如下
// queryString 是 'foo=1&bar=far'
// 返回如下 object, 顺序不做要求(foo bar 的顺序)
// {
// 'foo': '1',
// 'bar': 'far',
// }
// 提示：
// 先按照 & split 整个 queryString 得到一个数组
// 对于数组的每个元素都再次按照 = split 得到包含两个元素的数组
// 数组的第一个元素是 object 的 key，第二个元素是 object value
// 

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var log = console.log.bind(console)

var argsFromQuery = queryString => {
    var keyValues = queryString.split('&')
    var args = {}

    for (var i = 0; i < keyValues.length; i++) {
        var keyValue = keyValues[i].split('=')
        var key = keyValue[0]
        var value = keyValue[1]
        args[key] = value
    }

    return args
}

var __main = () => {
    var str = 'foo=1&bar=far&baz=qux'

    log(argsFromQuery(str))
}

__main()
