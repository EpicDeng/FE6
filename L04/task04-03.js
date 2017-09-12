// 作业 3
//
// 实现 lowercase1
// 它能正确处理带 小写字母 的字符串

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

var lowercase1 = function(s) {
    var lower = "abcdefghijklmnopqrstuvwxyz"
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var result = ''
    for (var i = 0; i < s.length; i++) {
        var c = find(upper, s[i])
        if (c != -1) {
            result = result + lower[c]
        } else {
            result = result + s[i]
        }
    }

    return result
}

var test_lowercase1 = function() {
    var s = "hello"
    var s1 = "WORLd"
    var s2 = "JavaScript"
    ensure(lowercase1(s) == 'hello', "lowercase1(s) == 'hello'")
    ensure(lowercase1(s1) == 'world', "lowercase1(s) == 'world'")
    ensure(lowercase1(s2) == 'javascript', "lowercase1(s) == 'javascript'")
}

test_lowercase1()
