// 作业3
// 画一排正方形, 一共 5 个
// 从 0 0 点开始, 边长为 30, 正方形之间间隔为 0
// 函数声明如下
// square5()

/*
 * 提示:
 * 根据资料中的循环例子, 计算每个正方形的坐标
 * 
 * 分步提示:
 * 1. 要画出 5 个正方形, 表明循环 5 次
 * 2. 计算每次循环的正方形左上角坐标 x, y
 * 3. 在每次循环中画正方形, 调用作业 1 中实现的函数
*/

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var square = function(x, y, l) {
    jump(x, y)
    setHeading(0)
    var i = 0
    while (i < 4) {
        forward(l)
        right(90)
        i = i + 1
    }
}

var square5 = function() {
    var x = 0
    var y = 0
    var l = 30

    var i = 0
    while (i < 5) {
        x = x + l
        square(x, y, l)
        i = i + 1
    }
}

setDelay(0)
square5()
