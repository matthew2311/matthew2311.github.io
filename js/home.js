$(document).ready(function() {

    var currSlide = 1
    
    document.getElementById('radio' + currSlide).checked = true;

    function slideImage(){

    if(currSlide < 5){
        $('.slider-container').animate({
            'left': '-=100%'
        
        },2000)
        currSlide++
    }
    else{
        $('.slider-container').animate({
            'left': '1'
        },1500)
        currSlide = 1
    }
    document.getElementById('radio' + currSlide).checked = true;
}


setInterval(slideImage, 7000)

$('.left').click(function(){
    if(currSlide > 1){
        $('.slider-container').animate({
          'left': '+=100%'
        })
        currSlide--
    }
    document.getElementById('radio' + currSlide).checked = true;
})

$('.right').click(function(){
    if(currSlide < 5){
        $('.slider-container').animate({
            'left': '-=100%'
        })
        currSlide++
    } else{
        if(currSlide+1 == 6){
            $('.slider-container').animate({
                'left': '1'
            })
            currSlide = 1
        }
    }
    document.getElementById('radio' + currSlide).checked = true;
})

})




