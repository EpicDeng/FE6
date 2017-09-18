// 作业 3
// 实现函数
//
// var replaceAll = function(s, old, newString) { }
//
// s old newString 都是 string
// 返回一个「将 s 中出现的所有 old 字符串替换为 new 字符串」的字符串

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

var findIndex = function(sourceString, toFindString) {
    var len = toFindString.length
    var index = -1
    for (var i = 0; i < sourceString.length; i++) {
        if (sourceString.slice(i, i + len) == toFindString) {
            index = i
            break;
        }
    }

    return index
}

var replaceAll = function(s, old, newString) {
    var result = s

    while (true) {
        var index = findIndex(result, old)
        if (index == -1) {
            break;
        }

        result = result.slice(0, index) + newString + result.slice(index + old.length)
    }

    return result
}

var testReplaceAll = function() {
    ensure(replaceAll('1 2 3', ' ', '#') == '1#2#3', 'replace all test 1')
    ensure(replaceAll('1&2&3', '&', ' ') == '1 2 3', 'replace all test 2')
    ensure(replaceAll('hello#gua', '#', ' ') == 'hello gua', 'replace all test 3')
}

testReplaceAll()
