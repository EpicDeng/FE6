// 作业 10
// 实现函数
//
// var random01 = function() { }
//
// js 标准数学库有一个随机数函数
// Math.random()
// 它返回 0 - 1 之间的小数
//
// 用它实现本函数, 返回 0 或 1

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var log = console.log.bind(console)

var random01 = function() {
    return Math.round(Math.random())
}
