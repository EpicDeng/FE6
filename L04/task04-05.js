// 作业 5
// 实现一个叫 凯撒加密 的加密算法, 描述如下
// 对于一个字符串, 整体移位, 就是加密
// 以右移 1 位为例
// 原始信息 'afz' 会被加密为 'bga'
// 实现 encode1 函数, 把明文加密成密码并返回
// 右移 1 位
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

var encode1 = function(s) {
    var lower = "abcdefghijklmnopqrstuvwxyz"
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var result = ''
    for (var i = 0; i < s.length; i++) {
        var charIndex = find(lower, s[i])
        if (charIndex != -1) {
            if (charIndex + 1 > lower.length - 1) {
                charIndex = 1 - (lower.length - charIndex)
            } else {
                charIndex = charIndex + 1
            }
            result = result + lower[charIndex]
        }
    }

    return result
}

var test_encode1 = function() {
    var s = "afz"
    var s1 = "world"
    var s2 = "javascript"
    ensure(encode1(s) == 'bga', "encode1(s) == 'bga'")
    ensure(encode1(s1) == 'xpsme', "encode1(s1) == 'xpsme'")
    ensure(encode1(s2) == 'kbwbtdsjqu', "encode1(s2) == 'kbwbtdsjqu'")
}

test_encode1()
