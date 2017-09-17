// 作业 5
// 实现函数
// 
// var endsWith = function(s1, s2) { }
//
// s1 是一个字符串
// s2 是一个字符串
// 检查 s1 是否以 s2 结尾, 返回 true 或者 false

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

var endsWith = function(s1, s2) {
    var len = s2.length
    if (s1.slice(s1.length - len, s1.length) == s2) {
        return true
    }

    return false
}

var testEndsWith = function() {
    ensure(endsWith('guagua', 'guagua'), 'ends with error 1')
    ensure(!endsWith('guagua', 'melon'), 'ends with error 2')
    ensure(endsWith('melongua', 'gua'), 'ends with error 3')
}

testEndsWith()
