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
$('.images > img:nth-child(3)').addClass('enter');
$('.images > img:nth-child(4)').addClass('enter');
$('.images > img:nth-child(5)').addClass('enter');
let n = 1
setInterval(() => {
    $(`.images > img:nth-child(${manageData(n)})`).removeClass('current').addClass('leave')
        .one('transitionend',(e) => {
            $(e.currentTarget).removeClass('leave').addClass('enter')
        })
    $(`.images > img:nth-child(${manageData(n+1)})`).removeClass('enter').addClass('current')
    n += 1
},3000)

function manageData(n){
    if(n>5){
        n = n % 5;
        if(n === 0){
            n === 5
        }
    }
    return n
}


