/*
    思路：

*/
let $buttons = $('#buttonWrapper > button');
let $slides = $('#slides');
let current = 0;    //当前的索引
let $images = $slides.children('img');

makeFakeSlides()
$slides.css({transform:'translateX(-400px)'})
bindEvents()


function bindEvents(){
    $buttons.eq(0).on('click',function(){
        if(current === 2){
            console.log('说明你是从最后一张到第一张')
            //你既然是做了一个假的1，执行完之后，马上用真的代替
            $slides.css({transform:'translateX(-1600px)'})
                .one('transitionend',function(){
                    console.log(1)
                    $slides.hide()
                        .offset()
                    $slides.css({transform:'translateX(-400px)'}).show()
                    
                })
        }else{
            $slides.css({transform:'translateX(-400px)'})
        }
        current = 0
    })
    $buttons.eq(1).on('click',function(){
        console.log(current)
        $slides.css({transform:'translateX(-800px'})
        current = 1
    })
    $buttons.eq(2).on('click',function(){
        if(current === 0){
            console.log('说明你是从第一张到最后一张')
            $slides.css({transform:'translateX(-0px)'})
                .one('transitionend',function(){
                    console.log(1)
                    $slides.hide()
                        .offset()
                    $slides.css({transform:'translateX(-1200px)'}).show()
                    
                })
        }else{
            $slides.css({transform:'translateX(-1200px)'})
        }
        current = 2
    })
}


function makeFakeSlides(){
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq($images.length-1).clone(true)
    $slides.append($firstCopy)
    $slides.prepend($lastCopy)
}