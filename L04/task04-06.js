// 作业 6
// 实现 decode1 函数, 把作业 5 加密的密码解密为明文并返回
//
// 注意:
//     s 是一个只包含小写字母的字符串

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

var decode1 = function(s) {
    var lower = "abcdefghijklmnopqrstuvwxyz"
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var result = ''
    for (var i = 0; i < s.length; i++) {
        var charIndex = find(lower, s[i])
        if (charIndex != -1) {
            if (charIndex - 1 < 0) {
                charIndex = lower.length + charIndex - 1
            } else {
                charIndex = charIndex - 1
            }
            result = result + lower[charIndex]
        }
    }

    return result
}

var test_decode1 = function() {
    var s = "bga"
    var s1 = "xpsme"
    var s2 = "kbwbtdsjqu"
    ensure(decode1(s) == 'afz', "decode1(s) == 'afz'")
    ensure(decode1(s1) == 'world', "decode1(s1) == 'world'")
    ensure(decode1(s2) == 'javascript', "decode1(s2) == 'javascript'")
}

test_decode1()
