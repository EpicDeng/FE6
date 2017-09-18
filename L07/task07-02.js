// 作业 2
// 实现函数
//
// var split = function(s, delimiter = ' ') { }
//
// s 是 string
// delimiter 是 string, 默认为空格 ' '
//
// 以 delimiter 为分隔符号, 返回一个 array
// 例如
// split('1 2 3', ' ') 返回 ['1', '2', '3']
// split('a=b&c=d', '&') 返回 ['a=b', 'c=d']
// 注意, 测试 array 是否相等得自己写一个函数用循环来跑

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var log = console.log.bind(console)

var ensure = function(condition, message) {
    if (!condition) {
        log("测试失败:", condition, "->", message)
    } else {
        log("测试成功:", condition)
    }
}

var arrayEquals = function(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false
    }

    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            return false
        }
    }

    return true
}

var split = function(s, delimiter = ' ') {
    var arr = []
    var len = delimiter.length
    var startIndex = 0
    for (var i = 0; i < s.length; i++) {
        if (s.slice(i, i + len) == delimiter) {
            arr.push(s.slice(startIndex, i))
            startIndex = i + len
        }
    }
    arr.push(s.slice(startIndex))

    return arr
}

var testSplit = function() {
    var test1 = split('1 2 3')
    var test2 = split('a=b&c=d', '&')

    ensure(arrayEquals(test1, ['1', '2', '3']), 'split test 1')
    ensure(arrayEquals(test2, ['a=b', 'c=d']), 'split test 2')
}

testSplit()
