// 作业 6
// 实现一个函数画中国国旗(以下国旗题目都是如此 不重复了)
// 调用 2 个函数画中国国旗
// 一个画红色背景
// 另一个画五角星（函数里调用 5 次，不要求角度朝向，不要求尺寸, 只要 5 个五角星即可）
// 当然你也可以使用第 5 题 wujcxy 这个函数画出比较完美的国旗 (不过这不是学习的重点)
// china()

/*
 * 提示:
 *     中国国旗由两部分组成, 矩形和 5 个五角星, 依次画完
 * 
 * 分步提示:
 *     1. 使用 rect 函数画一个矩形
 *     2. 使用 wujcxy 画 5 个五角星(调用 5 次)
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

var vgwujcxy = function(x, y, length) {
    jump(x, y)
    setHeading(0)
    var i = 0
    while (i < 5) {
        forward(length)
        right(144)
        i = i + 1
    }
}

var sin = function(degree) {
    // 如上课所述, 数学库里面的 sin 函数接受弧度作为参数
    // 我们这个函数接受角度, 下面是弧度转角度的公式
    var radians = degree * Math.PI / 180
    return Math.sin(radians)
}

var cos = function(degree) {
    var radians = degree * Math.PI / 180
    return Math.cos(radians)
}

var wujcxy = function(x, y, r) {
    var du = 18
    var x1 = x - cos(du) * r
    var y1 = y - sin(du) * r
    var length = cos(du) * r * 2
    vgwujcxy(x1, y1, length)
}

var china = function() {
    var x = 0
    var y = 0
    var flagWidth = 300
    var flagHeight = 200
    rect_center(x, y, flagWidth, flagHeight)

    var bigStarX = -flagWidth / 2 + 50
    var bigStarY = -flagHeight / 2 + 50
    var bigStarRadius = 30
    wujcxy(bigStarX, bigStarY, bigStarRadius)

    var smallStarX1 = -flagWidth / 2 + 100
    var smallStarY1 = -flagHeight / 2 + 20
    var smallStarRadius = 10
    wujcxy(smallStarX1, smallStarY1, smallStarRadius)

    var smallStarX2 = -flagWidth / 2 + 120
    var smallStarY2 = -flagHeight / 2 + 40
    wujcxy(smallStarX2, smallStarY2, smallStarRadius)

    var smallStarY3 = -flagHeight / 2 + 70
    wujcxy(smallStarX2, smallStarY3, smallStarRadius)

    var smallStarY4 = -flagHeight / 2 + 90
    wujcxy(smallStarX1, smallStarY4, smallStarRadius)
}

setDelay(0)
china()
