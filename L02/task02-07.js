// 作业 7
// 实现一个函数画法国国旗
// france()

/*
 * 提示:
 *     法国国旗由三个纵向矩形组成, 依次画出这三个矩形
 * 
 * 分步提示:
 *     1. 计算出三个矩形的宽, 均为 1/3 * w
 *     2. 计算出三个矩形的左上角坐标, 分别为 x1, y1、x2, y2 和 x3, y3
 *     3. 调用三次 rect 函数, 每次传入不一样的参数
 */

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var rect = function(x, y, w, h) {
    jump(x, y)
    setHeading(0)
    var i = 0
    while (i < 2) {
        forward(w)
        right(90)
        forward(h)
        right(90)
        i = i + 1
    }
}

var rect_center = function(x, y, w, h) {
    var newX = x - w / 2
    var newY = y - h / 2
    rect(newX, newY, w, h)
}

var france = function() {
    var x = 0
    var y = 0
    var flagWidth = 300
    var flagHeight = 200
    rect_center(x, y, flagWidth, flagHeight)

    var xl = -flagWidth / 2 + flagWidth / 6
    var w = flagWidth / 3
    rect_center(xl, y, w, flagHeight)

    rect_center(x, y, w, flagHeight)

    var xr = flagWidth / 6 * 2
    rect_center(xr, y, w, flagHeight)
}

setDelay(0)
france()
