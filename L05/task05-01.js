/* ------------------------------------------------------------------------- */
// 本次作业主要是 string 和 DOM API 练习
// string 题目用到的知识仍然是
// 0, 用下标引用字符串
// 2, 循环
// 3, 选择 (也就是 if)
// 1, 字符串切片
//
// 注意, 有提示
// 注意, 如果觉得题目有问题就直接在群里问
// ============
//
// 请以之前上课中 string 相关的内容作为参考
// 请自行编写测试
//
// *** 注意, 在后面, 会有题目的提示
// 多看提示, 并且有问题要及时在群里发问, 不要做无谓的卡壳

// 定义我们的 log 函数
var log = console.log.bind(console)

// ======
// 测试
// ======
//
// 定义我们用于测试的函数
// ensure 接受两个参数
// condition 是 boolean, 如果为 false, 则输出 message
// 否则, 不做任何处理
var ensure = function(condition, message) {
    if (!condition) {
        log("测试失败:", condition, "->", message)
    } else {
        log("测试成功:", condition)
    }
}

// 定义一个增强的 ensureEqual
var ensureEqual = function(a, b, message) {
    if (a != b) {
        log(`*** 测试失败, ${a} 不等于 ${b}, ${message}`)
    }
}

// ======
// 资料
// ======
//
// String 函数可以把数字转成字符串
// 例如 String(1) 就能得到 '1'
// 注意, String 是大写开头的函数, 不要弄错大小写
//
// includes 函数可以检查一个字符串是否包含另一个字符串
// 例如 'good'.includes('o') 返回 true
// var name = 'gua'
// name.includes(1) // 返回 false


// 作业 1
//
// var zfill = function(n, width) { }
// n 是 int 类型
// width 是 int 类型
//
// 把 n 的位数变成 width 这么长，并在右对齐，不足部分用 0 补足并返回
// 具体请看测试, 注意, 返回的是 string 类型
//
// 返回 string 类型

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var zfill = function(n, width) {
    var result = String(n)

    // 
    if (result.length > width) {
        return result
    }

    // 
    var begin = result.length
    for (var i = begin; i < width; i++) {
        result = '0' + result
    }

    return result
}


// 测试函数
var test_zfill = function() {
    ensure(zfill(1, 4) === '0001', 'zfill 测试 1')
    ensure(zfill(23, 4) === '0023', 'zfill 测试 2')
    ensure(zfill(12345, 4) === '12345', 'zfill 测试 3')
    ensure(zfill(169, 5) === '00169', 'zfill 测试 4')
}

// 调用测试函数
test_zfill()
