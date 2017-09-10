// 注意, 自行去定义 log 函数(抄上课的代码)
// 注意, 代码可以在写好后贴在 浏览器终端 中运行

// 例子 1
// 求数组的和
var sum = function(array) {
    // 先设置一个变量用来存数组的和
    var s = 0
    for (var i = 0; i < array.length; i++) {
        // 用变量 n 保存元素的值
        var n = array[i]
            // 累加到变量 s
        s = s + n
    }
    // 循环结束, 现在 s 里面存的是数组中所有元素的和了
    return s
}

var a = [1, 2, 3, 4]
log('sum', sum(a))

// 作业 1
// 参数是一个只包含数字的 array
// 求 array 的乘积
// 函数定义是
// var product = function(array) { }

/*
 * 提示：
 *     通过遍历数组，然后累乘的方式计算数组的乘积，参考例子 1
 * 
 * 分步提示：
 *     1. 先设置一个变量 s 用来存数组的乘积，初始值为 1
 *     2. 遍历数组，用变量 n 保存元素的值
 *     3. 累乘每次的变量 n 到变量 s
 *     4. 循环结束后，变量 s 里面存的是数组中所有元素的乘积
 *     5. 返回变量 s（很重要，一定要 return s）
 */

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var log = console.log.bind(console)

var product = function(array) {
    var p = 1
    for (var i = 0; i < array.length; i++) {
        var n = array[i]
        p = p * n
    }

    return p
}

var arr = [1, 3, 5, 7, 9]
console.log(product(arr))
