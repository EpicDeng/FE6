// 作业 14
// 绘制坐标轴
// var coordinateAxis = function() {
//     // 在坐标原点处绘制两条坐标轴
// }
//
// var forecast3 = function(temps, space, base) { }

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var log = console.log.bind(console)

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

var coordinateAxis = function() {
    var canvasWidth = 400
    var canvasHeight = 300
    var xBegin = -canvasWidth / 2
    var yBegin = canvasHeight / 2

    // 初始化画笔
    jump(0, 0)
    setHeading(0)

    // 画 x 轴
    jump(xBegin, 0)
    forward(canvasWidth)

    // 画 y 轴
    jump(0, yBegin)
    setHeading(90)
    forward(canvasHeight)
}

var forecast3 = function(temps, space, base) {
    // 初始化画笔
    jump(0, 0)
    setHeading(0)

    // 画布宽度
    var bgWidth = 400
    // 柱状图里每个图宽 30，间距为 space
    var boxPerWidth = 30
    // 柱子总数所需宽度
    var canvasWidth = (boxPerWidth + space) * temps.length - space
    // 左外边距
    var marginLeft = bgWidth - canvasWidth

    // 柱子的缩放因子：数字越大，柱子越高
    var boxHeightScale = 12
    // 居于坐标轴上显示
    var boxYOffset = 0

    // 绘制第一个柱子
    var xBegin = (-bgWidth + marginLeft + boxPerWidth / 2 + space) / 2
    var hBegin = (temps[0] - base) * boxHeightScale
    var yBegin = boxYOffset - hBegin / 2
    rect_center(xBegin, yBegin, boxPerWidth, hBegin)

    // 绘制其余的柱子
    var x = xBegin
    for (var i = 1; i < temps.length; i++) {
        x = x + boxPerWidth + space
        var h = (temps[i] - base) * boxHeightScale
        var y = boxYOffset - h / 2
        rect_center(x, y, boxPerWidth, h)
    }
}

var temps = [22, 19, 22, 21, 25, 27, 30, 28]
var space = 15
var base = 25
setDelay(3)
setPenColor("#B7B2AF")
coordinateAxis()
setPenColor("#0071D9")
forecast3(temps, space, base)
hide()
