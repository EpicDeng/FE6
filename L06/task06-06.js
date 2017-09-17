// 作业 6
// 实现函数
// 
// var topStudent = function(students) { }
// 
// students 是 array
// 里面的每个元素都是如下格式的 object
// {
//     'name': 'gua',
//     'sex': '男',
//     'score': 127,
// }
// 返回 score 最高的那个元素(object)

// 以下是提交作业代码
/* ------------------------------------------------------------------------- */
var log = console.log.bind(console)

var ensure = function(condition, message) {
    if (!condition) {
        log("测试失败:", condition, "->", message)
    } else {
        log("测试成功:", condition)
    }
}

var topStudent = function(students) {
    var index = 0
    var top = students[0].score
    for (var i = 0; i < students.length; i++) {
        var n = students[i].score
        if (top < n) {
            index = i
        }
    }

    return students[index]
}

var __main = function() {
    var student_list = [{
        'name': 'gua1',
        'sex': '男',
        'score': 16
    }, {
        'name': 'gua2',
        'sex': '男',
        'score': 128
    }, {
        'name': 'gua3',
        'sex': '女',
        'score': 32
    }, {
        'name': 'gua4',
        'sex': '男',
        'score': 256
    }, {
        'name': 'gua5',
        'sex': '女',
        'score': 1024
    }, {
        'name': 'gua6',
        'sex': '男',
        'score': 512
    }]

    log(topStudent(student_list))
}

__main()
