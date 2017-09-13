// 作业 11
// 知乎有一个求助题, 破译密码的
// 链接在此
// https://www.zhihu.com/question/28324597
// 这一看就是凯撒加密...
// 如果没思路, 可看本文件最后的提示
// 我把密码放在下面, 请解出原文

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

var decode4 = function(s, shift) {
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

var test_decode4 = function() {
    var code = 'VRPHWLPHV L ZDQW WR FKDW ZLWK BRX,EXW L KDYH QR UHDVRQ WR FKDW ZLWK BRX'
    var lower_code = lowercase1(code)
    for (var shift = 1; shift < 26; shift++) {
        log(decode4(lower_code, shift))
    }
}

test_decode4()
