// 作业 4
// 实现函数
//
// var findAllString = function(s1, s2) { }
//
// s1 是一个字符串
// s2 是一个字符串, 长度未知, 不一定为 1
// 返回参数 s2 在 s1 中出现的下标组成的 array   
// 如果 s2 没有在 s1 中出现, 返回 []

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

var findAllString = function(s1, s2) {
    var len = s2.length
    var arr = []
    for (var i = 0; i < s1.length; i++) {
        if (s1.slice(i, i + len) == s2) {
            arr.push(i)
        }
    }

    return arr
}

var testFindAllString = function() {
    var test1 = findAllString('1012100120', '10')
    var test2 = findAllString('1012100120', '100')
    var test3 = findAllString('1012100120', '3')

    ensure(arrayEquals(test1, [0, 4]), 'find all string error 1')
    ensure(arrayEquals(test2, [4]), 'find all string error 2')
    ensure(arrayEquals(test3, []), 'find all string error 3')
}

testFindAllString()
