// 作业 3
// 实现函数
//
// var findAllIn = function(s1, s2) { }
// s1 是一个字符串
// s2 是一个长度为 1 的字符串
// 返回参数 s2 在 s1 中出现的所有下标组成的 array
// 如果 s2 没有在 s1 中出现, 返回空数组 []

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

var findAllIn = function(s1, s2) {
    var arr = []
    for (var i = 0; i < s1.length; i++) {
        if (s2[0] == s1[i]) {
            arr.push(i)
        }
    }

    return arr
}

var testFindAllIn = function() {
    var test1 = findAllIn('10121320', '1')
    var test2 = findAllIn('10121320', '0')
    var test3 = findAllIn('10121320', '3')
    var test4 = findAllIn('10121320', '9')

    ensure(arrayEquals(test1, [0, 2, 4]), 'find all in error 1')
    ensure(arrayEquals(test2, [1, 7]), 'find all in error 2')
    ensure(arrayEquals(test3, [5]), 'find all in error 3')
    ensure(arrayEquals(test4, []), 'find all in error 4')
}

testFindAllIn()
