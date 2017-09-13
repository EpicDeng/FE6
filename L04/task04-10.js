// 作业 10
// 实现 decode3
// 多了一个参数 shift 表示移的位数
// 如果 s 中包含了不是字母的字符, 比如空格或者其他符号, 则对这个字符不做处理保留原样
//
// 注意:
//     s 是一个只包含小写字母和不是字母的字符的字符串

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

var decode3 = function(s, shift) {
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
        } else {
            result = result + s[i]
        }
    }

    return result
}

var test_decode3 = function() {
    var s = "123yza456"
    var s1 = "khoor 789 zruog"
    var shift = 1
    ensure(decode3(s, shift) == '123xyz456', "decode3(\'" + s + "\', " + shift + ") == '123xyz456'")
    ensure(decode3(s1, shift + 2) == 'hello 789 world', "decode3(\'" + s1 + "\', " + (shift + 2) + ") == 'hello 789 world'")
}

test_decode3()
