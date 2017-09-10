// 作业 3
// 实现一个正五角星(国旗大星星那种)函数
// x y 是五角星顶部横边的左边点坐标
// length 是一条线的长度
// 这是一个正五角星
// vgwujcxy(x, y, length)

/*
 * 分步提示:
 *    1. 正五角星需要重复 5 次, 所以需要循环 5 次
 *    2. 每次循环中前进 length 的长度, 右转 144 度
 *    3. 别忘了循环的时候 i 增加 1
 */

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
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

setDelay(0)
vgwujcxy(-50, 0, 100)
