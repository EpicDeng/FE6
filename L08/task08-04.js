// 作业 4
//
// var difference = function(a, b) { }
// 
// a b 都是 array
// 
// 返回一个 array, 里面的元素是
// 所有在 a 中有 b 中没有的元素
// 这个 array 中不包含重复元素
// 

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

var findNum = function(source, targetNum) {
    for (var i = 0; i < source.length; i++) {
        log("source[i]:", source[i], "\ttargetNum:", targetNum)
        if (targetNum == source[i]) {
            log("found")
            return i
        }
    }

    return undefined
}

var unique = function(a) {
    var result = []
    for (var i = 0; i < a.length; i++) {
        if (findNum(result, a[i]) == undefined) {
            result.push(a[i])
        }
    }

    return result
}

function difference(a, b) {
    var result = []
    for (var i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) == -1) {
            result.push(a[i])
        }
    }

    return result
}

var testDifference = function() {
    var test1 = [1, 3, 6, 9, 11]
    var test2 = [3, 6, 9]
    var test3 = [1, 2, 3, 4]
    var test4 = [2, 4]

    ensure(arrayEquals(difference(test1, test2), [1, 11]), 'difference test 1')
    ensure(arrayEquals(difference(test3, test4), [1, 3]), 'difference test 2')
}

testDifference()
