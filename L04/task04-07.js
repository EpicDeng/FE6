// 作业 7
// 实现 encode2
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

var encode2 = function(s, shift) {
    var lower = "abcdefghijklmnopqrstuvwxyz"
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var result = ''
    
    // 处理一下 shift 大于 26 的情况
    shift = shift % lower.length
    
    for (var i = 0; i < s.length; i++) {
        var charIndex = find(lower, s[i])
        if (charIndex != -1) {
            if (charIndex + shift > lower.length - 1) {
                charIndex = shift - (lower.length - charIndex)
            } else {
                charIndex = charIndex + shift
            }
            result = result + lower[charIndex]
        }
    }

    return result
}

var test_encode2 = function() {
    var s = "afz"
    var s1 = "world"
    var s2 = "javascript"
    var shift = 1
    ensure(encode2(s, shift) == 'bga', "encode2(\'" + s + "\', " + shift + ") == 'bga'")
    ensure(encode2(s1, shift + 1) == 'yqtnf', "encode2(\'" + s1 + "\', " + (shift + 1) + ") == 'yqtnf'")
    ensure(encode2(s2, shift + 5) == 'pgbgyixovz', "encode2(\'" + s2 + "\', " + (shift + 5) + ") == 'pgbgyixovz'")
}

test_encode2()
