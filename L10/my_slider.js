// 轮播图
// 每个网站包括苹果都有的轮播图组件（什么是组件）
/*
1. 写一个 div 里面有 3 个 img 标签
2. 只显示当前活动的 img 标签
3. 加 1 个按钮，点击的时候切换图片
*/

// 1
var autoPlay = function() {
    var interval = 2000
    setInterval(function() {
        // 每 2s 都会调用这个函数
        playNextImage()
    }, interval)
}

// 1.1
var playNextImage = function() {
    var slide = e('.my-slider')

    // 初始状态下，显示第一张图片，并且切换到下一张（也就是第二张图片）
    // 1 作为 offset 传递给 nextIndex 函数
    var offset = 1
    var index = nextIndex(slide, offset)
    showImageAtIndex(slide, index)
}

var nextIndex = function(slide, offset) {
    // 找到 slide div
    // var slide = button.parentElement
    // 得到图片总数和当前图片下标
    // 因为得到的是 String，所以用 parseInt 转成 Number
    // 也可以用 Number() 函数来转
    var numberOfImgs = parseInt(slide.dataset.imgs)
    var activeIndex = parseInt(slide.dataset.active)

    // log('click slide')
    // 求出 button 的 data-offset
    // 上一张按钮的 offset 是 -1
    // 下一张按钮的 offset 是 1
    // 注意，这里的 offset 是一个字符串，所以要转成数字，这里用的是 Number
    // var offset = Number(button.dataset.offset)
    // 求出下一张图片的 id
    var i = (numberOfImgs + activeIndex + offset) % numberOfImgs
    return i

    return (parseInt(slide.dataset.imgs) + parseInt(slide.dataset.active) + offset) % parseInt(slide.dataset.imgs)
}

// 1.3
var showImageAtIndex = function(slide, index) {
    var nextIndex = index

    // 设置父节点 slide 的 data-active
    slide.dataset.active = nextIndex

    // 删除当前图片的 class 给下一张图片加上 class
    var className = 'image-active'
    removeClassAll(className)

    // 得到下一张图片的选择器
    var nextSelector = '#id-slider-image-' + String(nextIndex)
    log(nextSelector)
    var img = e(nextSelector)
    img.classList.add(className)

    // 切换小圆点
    // 1. 删除当前小圆点的 class
    removeClassAll('ind-current')

    // 2. 得到下一个小圆点的选择器
    var indSelector = '#id-ind-' + String(nextIndex)
    var ind = e(indSelector)
    ind.classList.add('ind-current')
}

// 2
var bindEventSlider = function() {
    var selector = '.my-slider-button'
    bindAll(selector, 'click', function(event) {
        var button = event.target

        // 找到 slide div
        var slide = button.parentElement

        // 求出下一张图片的 index
        var offset = Number(button.dataset.offset)
        var index = nextIndex(slide, offset)

        // 显示下一张图片
        showImageAtIndex(slide, index)
    })
}

// 3
var bindEventIndicator = function() {
    var selector = '.slider-ind'
    bindAll(selector, 'click', function(event) {
        var self = event.target

        var index = Number(self.dataset.index)

        // 得到 slide
        var slide = self.closest('.my-slider')

        // 直接播放第 n 张图片
        showImageAtIndex(slide, index)
    })

    bindAll(selector, 'mouseover', function(event) {
        var self = event.target
        self.style.cursor = 'pointer'
    })
}

// 4
var bindToggleButtonsVisibility = function() {
    bindAll('.my-slider-container', 'mouseover', function(event) {
        var btns = es('.my-slider-button')
        for (var i = 0; i < btns.length; i++) {
            btns[i].style.visibility = 'visible'
        };
    })

    bindAll('.my-slider-container', 'mouseout', function(event) {
        var btns = es('.my-slider-button')
        for (var i = 0; i < btns.length; i++) {
            btns[i].style.visibility = 'hidden'
        };
    })
}

var __main = function() {
    autoPlay()
    bindEventSlider()
    bindEventIndicator()
    bindToggleButtonsVisibility()

    // GuaSlide.new(selector)
}

var testInterval = function() {
    log('开始时间', new Date())

    // 第一个参数是定时会被调用的函数
    // 第二个参数是延迟的时间，以毫秒为单位，1000 毫秒等于 1 秒
    // setTimeout 只会执行一次
    // setTimeout(function() {
    //     log('结束时间', new Date())
    // }, 2000)

    // clearTimeout(clockId)

    // setInterval 会无限执行函数
    // setTimeout 和 setInterval 函数都有一个返回值
    // 返回值可以用来清除定时函数
    // var clockId = setInterval(function() {
    //     log('时间到', new Date())
    // }, 1000)
    log('用来删除定时器的 id', clockId)
    clearInterval(clockId)
}


__main()