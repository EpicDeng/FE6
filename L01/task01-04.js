// 作业4
// 画一排正方形, 一共 5 个
// 从 0 0 点开始, 边长为 30, 正方形之间间隔为 10 像素
// 函数声明如下
// square5_10()

/*
 * 提示:
 * 作业 4 和作业 3 的不同之处在于每个正方形的左上角坐标不同, 计算出每个左上角的坐标之后,
 * 参考作业 3 的提示
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

var square5_10 = function() {
    var x = -100
    var y = 0
    var l = 30

    var i = 0
    while (i < 5) {
        x = x + l + 10
        square(x, y, l)
        i = i + 1
    }
}

setDelay(0)
square5_10()
