// 作业 8
// 实现 decode2
// 多了一个参数 shift 表示移的位数
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

var decode2 = function(s, shift) {
    var lower = "abcdefghijklmnopqrstuvwxyz"
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var result = ''
    for (var i = 0; i < s.length; i++) {
        var charIndex = find(lower, s[i])
        if (charIndex != -1) {
            if (charIndex - shift < 0) {
                charIndex = lower.length + charIndex - shift
            } else {
                charIndex = charIndex - shift
            }
            result = result + lower[charIndex]
        }
    }

    return result
}

var test_decode2 = function() {
    var s = "bga"
    var s1 = "yqtnf"
    var s2 = "pgbgyixovz"
    var shift = 1
    ensure(decode2(s, shift) == 'afz', "decode2(\'" + s + "\', " + shift + ") == 'afz'")
    ensure(decode2(s1, shift + 1) == 'world', "decode2(\'" + s1 + "\', " + (shift + 1) + ") == 'world'")
    ensure(decode2(s2, shift + 5) == 'javascript', "decode2(\'" + s2 + "\', " + (shift + 5) + ") == 'javascript'")
}

test_decode2()
