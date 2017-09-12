// 作业 4

// 实现 uppercase1
// 它能正确处理带 大写字母 的字符串

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

var find = function(s1, s2) {
    for (var i = 0; i < s1.length; i++) {
        if (s2[0] == s1[i]) {
            return i
        }
    }

    return -1
}

var uppercase1 = function(s) {
    var lower = "abcdefghijklmnopqrstuvwxyz"
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var result = ''
    for (var i = 0; i < s.length; i++) {
        var c = find(lower, s[i])
        if (c != -1) {
            result = result + upper[c]
        } else {
            result = result + s[i]
        }
    }

    return result
}

var test_uppercase1 = function() {
    var s = "heLLo"
    var s1 = "WORLd"
    var s2 = "JavaScript"
    ensure(uppercase1(s) == "HELLO", "uppercase(s) == 'HELLO'")
    ensure(uppercase1(s1) == "WORLD", "uppercase(s1) == 'WORLD'")
    ensure(uppercase1(s2) == "JAVASCRIPT", "uppercase(s2) == 'JAVASCRIPT'")
}

test_uppercase1()
