// 作业 10
// 10 分钟做不出就看提示
//
// var replace = function(s, old_str, new_str) { }
// 
// 3 个参数 s old_str new_str 都是字符串
// 返回一个「将 s 中的 old_str 字符串替换为 new_str 字符串」的字符串
// 假设 old 存在并且只出现一次
// 
// 返回 string 类型
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

var ensureEqual = function(a, b, message) {
    if (a != b) {
        log(`*** 测试失败, ${a} 不等于 ${b}, ${message}`)
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

var replace = function(s, old_str, new_str) {
    var result = s

    while (true) {
        var index = findIndex(result, old_str)
        if (index == -1) {
            break;
        }

        result = result.slice(0, index) + new_str + result.slice(index + old_str.length)
    }

    return result
}

// 测试函数
var test_replace = function() {
    ensure(replace("hello world", "world", "javascript") === "hello javascript", 'replace 测试 1')
    ensure(replace("world is good", "world", "javascript") === "javascript is good", 'replace 测试 2')
    ensure(replace("hello the world", "the", "javascript") === "hello javascript world", 'replace 测试 3')
}

test_replace()
