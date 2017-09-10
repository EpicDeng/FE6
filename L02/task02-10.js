// 作业 10
// 画 瑞士国旗
// switzerland()

/*
 * 提示:
 *     瑞士国旗由一个大矩形和两个小矩形组成, 需要画三个矩形
 * 
 * 分步提示:
 *     1. 瑞士国旗中的两个矩形大小是一样的, 都按照长边 150, 短边 50 来计算
 *     2. 瑞士国旗的长宽按 400 * 300 计算, 中心点坐标为 (0, 0), 三个矩形的中心坐标都是中心点
 *     3. 计算出三个矩形的中心点坐标、长、宽
 *     4. 依次画出这三个矩形
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

var switzerland = function() {
    var x = 0
    var y = 0
    var flagWidth = 300
    var flagHeight = 200
    rect_center(x, y, flagWidth, flagHeight)

    var v = 125
    var h = 37.5
    rect_center(x, y, v, h)
    rect_center(x, y, h, v)
}

setDelay(0)
switzerland()
