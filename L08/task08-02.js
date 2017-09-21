// 作业 2
//
// var intersection = function(a, b) { }
// 
// a b 都是 array
// 
// 返回一个 array, 里面的元素是同时出现在 a b 中的元素
// 也就是取交集
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

var intersection = function(a, b) {
    var len = 0
    var longer = []
    var shorter = []
    if (a.length > b.length) {
        len = a.length
        longer = a.slice(0)
        shorter = b.slice(0)
    } else {
        len = b.length
        longer = b.slice(0)
        shorter = a.slice(0)
    }

    var result = []
    for (var i = 0; i < len; i++) {
        if (findNum(shorter, longer[i]) != undefined) {
            var j = 0
            while (j < shorter.length) {
                if (findNum(longer, shorter[j]) != undefined) {
                    result.push(shorter[j])
                }
                j++
            }
        }
    }

    return unique(result)
}

var testIntersection = function() {
    var test1 = [1, 3, 5, 7, 9]
    var test2 = [2, 4, 6, 8, 10]
    var test3 = [1, 3, 6, 9, 11]
    var test4 = [3, 6, 9]

    ensure(arrayEquals(intersection(test1, test2), []), 'intersection test 1')
    ensure(arrayEquals(intersection(test4, test3), [3, 6, 9]), 'intersection test 2')
}

testIntersection()
