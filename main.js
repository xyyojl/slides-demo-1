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

let n
init()
var timer = setInterval(() => {
    makeLeave(getImage(n))
        .one('transitionend',(e) => {
            makeEnter($(e.currentTarget))
        })
    makeCurrent(getImage(n+1))
    n += 1
},3000)
document.addEventListener('visibilitychange',function(e){
    if(document.hidden){
        window.clearInterval(timer)
    }else{
        timer = setInterval(() => {
            makeLeave(getImage(n))
                .one('transitionend',(e) => {
                    makeEnter($(e.currentTarget))
                })
            makeCurrent(getImage(n+1))
            n += 1
        },3000) 
    }
})



function manageData(n){
    if(n>5){
        n = n % 5;
        if(n === 0){
            n = 5
        }
    } // n = 1 2 3 4 5
    return n
}

function init(){
    n = 1
    $('.images > img:nth-child(1)').addClass('current')
    .siblings().addClass('enter')
}


function getImage(n){
    return $(`.images > img:nth-child(${manageData(n)})`);
}

function makeCurrent($node){
    return $node.removeClass('leave enter').addClass('current')
}
function makeLeave($node){
    return $node.removeClass('current enter').addClass('leave')
}
function makeEnter($node){
    return $node.removeClass('current leave').addClass('enter')
}


