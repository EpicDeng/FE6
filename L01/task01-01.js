
// 作业 1

// 画图资料
// ----------
// 画图的画面长宽各 300
// 原点在画布的中点
// 往右是 x 轴正向
// 往下是 y 轴正向
//
// 初始化的状态是箭头在原点 朝右
//
// 下面介绍一些常用的函数

// 定义一个变量表示步长
var step = 50

// forward 表示向前走
// 刚开始的时候朝右, 并且在坐标 (0, 0)
forward(step)

// penup 可以把笔抬起来, 这样往前走就不会画线了
penup()
forward(step)

// pendown 后又可以画线了
pendown()
forward(step)

// left 可以往左转, 参数是角度
left(90)
forward(step)

// setHeading(注意大小写) 可以设置箭头的朝向, 0 就是朝右
// 90 和 -90 的朝向, 自行摸索一下
setHeading(0)

// setPenSize 可以改变线条粗细
// 建议不要太大
setPenSize(5)

// setPenColor 可以设置画笔颜色, 颜色的具体数值可以通过下面这个网页得到
// http://www.codetc.com/tools/picker/
// 注意, 参数是一个字符串
var color = '#55C2DD'
setPenColor(color)

// right 可以右转
right(30)
forward(step)

// goto 可以直接走到某个坐标
// 这里是走到 (100, 200) 这个坐标
goto(100, 200)

// jump 可以无痕走到某个坐标
jump(0, 0)

// 隐藏箭头
hide()

// 显示箭头
show()


// ---
// 画图背景资料结束, 下面是作业
// 作业请参考上课的代码来做
// ---


// 例子 1
//
// 实现函数, 用于画一个边长 100 的正方形
// 参数 x, y 是正方形左上角坐标
var square = function(x, y) {
    jump(x, y)
    // 设置朝向, 确保箭头朝向 右边
    // 当然如果是用 goto 来画的话, 就不用关心朝向
    setHeading(0)
    // 循环画正方形
    // 当然, 你可以用 goto 来画
    // 只需要计算一下四个顶点的坐标 (这很简单)
    var i = 0
    while (i < 4) {
        forward(100)
        right(90)
        i = i + 1
    }
}

/*
* 实现函数, 用于画一个正方形, 边长由参数提供
* 参数 x, y 是正方形左上角坐标
* 参数 l 是正方行边长
* 函数声明如下
* square(x, y, l)
*
* 提示:
* 本题需要根据例子 1 的代码修改
*
* 分步提示:
* 1. 在例子 1 的基础上再增加一个参数 l
* 2. forward 的参数换成 l
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

setDelay(0)
square(0, 0, 100)
