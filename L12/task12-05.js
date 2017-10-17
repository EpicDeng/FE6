// 作业 5
//
// var queryFromObject = function(param) { }
// 
// param 是一个 object
// 例子如下
// param 是 {
// 'foo': 1,
// 'bar': 'far',
// }
// 返回如下 string, 顺序不做要求(foo bar 的顺序)
// foo=1&bar=far
// 

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var log = console.log.bind(console)

var queryFromObject = param => {
    var keyValues = []
    var keys = Object.keys(param)

    for (var i = 0; i < Object.keys(param).length; i++) {
        var key = keys[i]
        var value = param[key]
        var keyValue = key + '=' + value
        keyValues.push(keyValue)
    }

    var result = keyValues.join('&')

    return result
}

var __main = () => {
    var obj = {
        'foo': 1,
        'bar': 'far',
    }

    log(queryFromObject(obj))
}

__main()
