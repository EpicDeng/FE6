// 作业 4
// 实现一个函数画日本国旗
// 调用 2 个函数画日本国旗
// 一个画背景的白色矩形
// 一个画中间的红色圆
// japan()

/*
 * 提示:
 *     日本国旗由两部分组成, 矩形和圆形. 所以依次画出这两个图形
 * 
 * 分步提示:
 *     1. 调用 center_rect 函数画一个矩形
 *     2. 调用 circle 函数画一个圆形
 */

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */

var xhair = function(x, y, l) {
    var newL = l / 2
    setHeading(0)
    jump(x - newL, y)
    forward(l)
    jump(x, y + newL)
    setHeading(90)
    forward(l)
    jump(x, y)
}

var polygon = function(x, y, n, l) {
    jump(x, y)
    setHeading(0)
    var degree = 180 * (n - 2)
    var d = 180 - degree / n

    var i = 0
    while (i < n) {
        forward(l)
        right(d)
        i = i + 1
    }
}

var circle = function(x, y, r) {
    var n = 360
    var l = (2 * Math.PI * r) / n
    polygon(x, y - r, n, l)
}

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

var japan = function() {
    var x = 0
    var y = 0
    var flagWidth = 300
    var flagHeight = 200
    rect_center(x, y, flagWidth, flagHeight)

    var r = flagHeight * 3 / 5 / 2
    circle(x, y, r)
}

setDelay(0)
japan()
