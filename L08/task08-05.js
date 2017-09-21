// 作业 5
//
// var differenceAll = function(a, b) { }
// 
// a b 都是 array
// 
// 返回一个 array, 里面的元素是
// 所有在 a b 中的非公共元素
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
        if (targetNum == source[i]) {
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

var union = function(a, b) {
    var result = a.slice(0)
    for (var i = 0; i < b.length; i++) {
        result.push(b[i])
    }

    return unique(result)
}

function difference(a, b) {
    var result = []
    for (var i = 0; i < a.length; i++) {
        if (findNum(b, a[i]) == undefined) {
            result.push(a[i])
        }
    }

    return result
}

function differenceAll(a, b) {
    var da = difference(a, b)
    var db = difference(b, a)
    var result = union(da, db)

    return result
}

var testDifference = function() {
    var test1 = [1, 3, 6, 9, 11]
    var test2 = [2, 3, 6, 9, 12]
    var test3 = [1, 2]
    var test4 = [2, 3]

    ensure(arrayEquals(differenceAll(test1, test2), [1, 11, 2, 12]), 'differenceAll test 1')
    ensure(arrayEquals(differenceAll(test3, test4), [1, 3]), 'differenceAll test 2')
}

testDifference()
