// 作业 9
// 画 冈比亚国旗
// gambia()

/*
 * 提示:
 *     冈比亚国旗和德国国旗类似, 中间的矩形由一个大纵向矩形和两个小纵向矩形组成,
 *     所以画 5 个矩形
 * 
 * 分步提示:
 *     1. 最上面和最下面两个矩形和德国国旗一致
 *     2. 中间的矩形分成三个矩形, 高度占比分别为 1:6:1, 分别计算出这三个矩形的中心坐标
 *     3. 分别计算中间三个矩形的长度和高度
 *     4. 使用 center_rect 画出 5 个矩形, 每次传入的参数不一致
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

var gambia = function() {
    var x = 0
    var y = 0
    var flagWidth = 300
    var flagHeight = 200
    rect_center(x, y, flagWidth, flagHeight)

    var yt = -flagHeight / 2 + flagHeight / 6
    var h = flagHeight / 3
    rect_center(x, yt, flagWidth, h)

    rect_center(x, y, flagWidth, h)

    var yb = flagHeight / 2 - flagHeight / 6
    rect_center(x, yb, flagWidth, h)

    var xt = -flagWidth / 2
    var yt1 = y - h / 2
    var h1 = flagHeight / 20
    rect(xt, yt1, flagWidth, h1)

    var xb = -flagWidth / 2
    var yb1 = y + h / 2 - h1
    rect(xb, yb1, flagWidth, h1)
}

setDelay(0)
gambia()
