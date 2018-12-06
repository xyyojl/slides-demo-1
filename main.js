/*
    思路：
    1. 无缝轮播有3种状态。显示在前面的界面，离开，进入
    2. 要初始化，把第一张图片显示给用户看，其他图片保持enter的状态
    3. 第一张图片离开，第二张图片显示给用户看，第三张图片还是保持enter状态
    4. 第二张图片离开，第三张图片显示给用户看，第一张图片还是保持enter状态
    5. 第三张图片离开，第一张图片显示给用户看，第二张图片还是保持enter状态
    6. 需要getImage，x，初始化，makeCurrent，makeLeave，makeEnter

    应用到的知识
    

 */
$('.images > img:nth-child(1)').addClass('current');
$('.images > img:nth-child(2)').addClass('enter');
setTimeout(()=>{
    $('.images > img:nth-child(1)').removeClass('current').addClass('leave')
        .one('transitionend',(e) => {
            $(e.currentTarget).removeClass('leave').addClass('enter');
        })
    $('.images > img:nth-child(2)').removeClass('enter').addClass('current')    
},3000)
setTimeout(()=>{
    $('.images > img:nth-child(2)').removeClass('current').addClass('leave')
        .one('transitionend',(e) => {
            $(e.currentTarget).removeClass('leave').addClass('enter');
        })
    $('.images > img:nth-child(3)').removeClass('enter').addClass('current')    
},6000)
setTimeout(()=>{
    $('.images > img:nth-child(3)').removeClass('current').addClass('leave')
        .one('transitionend',(e) => {
            $(e.currentTarget).removeClass('leave').addClass('enter');
        })
    $('.images > img:nth-child(4)').removeClass('enter').addClass('current')    
},9000)
setTimeout(()=>{
    $('.images > img:nth-child(4)').removeClass('current').addClass('leave')
        .one('transitionend',(e) => {
            $(e.currentTarget).removeClass('leave').addClass('enter');
        })
    $('.images > img:nth-child(5)').removeClass('enter').addClass('current')    
},12000)
setTimeout(()=>{
    $('.images > img:nth-child(5)').removeClass('current').addClass('leave')
        .one('transitionend',(e) => {
            $(e.currentTarget).removeClass('leave').addClass('enter');
        })
    $('.images > img:nth-child(1)').removeClass('enter').addClass('current')    
},15000)
