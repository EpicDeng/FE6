// 作业 7
// 做不出尽早看提示或者到群里讨论或者发帖
//
// var formatedWeekday = function(day) { }
// 
// day 是代表星期的数字, 从周一到周日分别是 1 2 3 4 5 6 7
// 返回 '星期一' '星期二' 这样的描述字符串
// 

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var log = console.log.bind(console)

var formatedWeekday = function(day) {
    if (day < 1 || day > 7) {
        return undefined
    }

    var weekdays = {
        '1': "星期一",
        '2': "星期二",
        '3': "星期三",
        '4': "星期四",
        '5': "星期五",
        '6': "星期六",
        '7': "星期日"
    }

    return weekdays[day]
}

var __main = function() {
    for (var i = 0; i <= 7; i++) {
        log(formatedWeekday(i))
    }
}

__main()
