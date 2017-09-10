// 作业 8
// 画德国国旗
// germany()

/*
 * 提示:
 *     德国国旗由三个横向矩形组成, 依次画出这三个矩形
 * 
 * 分步提示:
 *     1. 计算出三个矩形的高, 均为 1/3 * h
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

var germany = function() {
    var x = 0
    var y = 0
    var flagWidth = 400
    var flagHeight = 210
    rect_center(x, y, flagWidth, flagHeight)

    var yt = -flagHeight / 2 + flagHeight / 6
    var h = flagHeight / 3
    rect_center(x, yt, flagWidth, h)

    rect_center(x, y, flagWidth, h)

    var yb = flagHeight / 2 - flagHeight / 6
    rect_center(x, yb, flagWidth, h)
}

setDelay(0)
germany()
