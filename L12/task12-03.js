// 作业 3
//
// var capString = function(str) { }
// 
// 给定一个英文句子 str（一个只有字母的字符串）
// 返回「将句中所有单词变为有且只有首字母大写的形式」的 string
// 
// 提示：
// 假设 str 中只包含字母和空格
// 单词之间以空格隔开
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

var capString = function(str) {
    var s = str.toLowerCase().split(' ')
    var arr = []

    for (var i = 0; i < s.length; i++) {
        var w = s[i]
        var r = w.slice(0, 1).toUpperCase() + w.slice(1)
        arr.push(r)
    }
    var result = arr.join(' ')

    return result
}

var testCapString = function() {
    var test1 = capString('hello world') == 'Hello World'
    var test2 = capString('programming is fun') == 'Programming Is Fun'

    ensure(test1, 'test cap string 1')
    ensure(test2, 'test cap string 2')
}

testCapString()
