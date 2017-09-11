// 本次作用用到了 string, 主要是...
// 0, 用下标引用字符串
// 2, 循环
// 3, 选择 (也就是 if)
// 1, 字符串切片
//
// 注意, 提示在文件最末尾
// ============
//
// 请以之前上课中 string 相关的内容作为参考
//
// 定义我们的 log 函数
var log = console.log.bind(console)
//
// ======
// 测试
// 本次作业起, 我们开始使用自动测试的方法来验证结果
// ======
//
// 定义我们用于测试的函数
// ensure 接受两个参数
// condition 是 bool, 如果为 false, 则输出 message
// 否则, 不做任何处理
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if (!condition) {
        log("测试失败:", condition, "...", message)
    } else {
        log("测试成功！", condition)
    }
}

// 例子
// 测试的使用
//
// 注意看, 我们使用了上文定义的 ensure 来进行测试
var test_sample = function() {
    // ensure 函数接受两个参数
    // 第一个是一个 bool 值, 如果为 true 则不会有任何反应
    // 否则会打印第二个参数
    ensure(1 === 1, '如果测试失败, 这句话会被打印出来')
    ensure(1 > 2, '测试 1 > 2 失败')
}

test_sample()
// 调用上面的 test_sample 可以得到如下输出
// *** 测试失败: 测试 1 > 2 失败


// 作业 1
// 10 分钟做不出就看提示
//
// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var find = function(s1, s2) {
    /*
    s1 s2 都是 string
    但 s2 的长度是 1

    返回 s2 在 s1 中的下标, 从 0 开始, 如果不存在则返回 -1
    */
    log("debug >> s2:", s2)
    for (var i = 0; i < s1.length; i++) {
        if (s2[0] == s1[i]) {
            log("debug >> s2:", s2[0], "s1[i]:", s1[i], "i:", i)
            return i
        }
    }

    return -1
}

var test_find = function() {
    // ensure 函数接受两个参数
    // 第一个是一个 bool 值, 如果为 true 则不会有任何反应
    // 否则会打印第二个参数
    var s1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var s2 = 'Z'
    var s3 = 'z'
    ensure(find(s1, s2) != -1, '!find(s1, s2) != -1')
    ensure(find(s1, s3) == -1, '!find(s1, s3) == -1')
}

test_find()
