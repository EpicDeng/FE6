// 作业 2
// 
// 定义一个函数
// 参数是一个字符串 s
// 返回大写后的字符串
// 注意, 假设 s 字符串全是小写字母
// 
// 注意, 自行实现测试函数, 之后的题目都要求自行实现测试函数

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

var uppercase = function(s) {
    var lower = "abcdefghijklmnopqrstuvwxyz"
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var result = ''
    for (var i = 0; i < s.length; i++) {
        var c = find(lower, s[i])
        if (c != -1) {
            result = result + upper[c]
        }
    }

    return result
}

var test_uppercase = function() {
    var s = "hello"
    var s1 = "world"
    var s2 = "javascript"
    ensure(uppercase(s) == "HELLO", "uppercase(s) == 'HELLO'")
    ensure(uppercase(s1) == "WORLD", "uppercase(s1) == 'WORLD'")
    ensure(uppercase(s2) == "JAVASCRIPT", "uppercase(s2) == 'JAVASCRIPT'")
}

test_uppercase()
