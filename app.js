$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })

    // toogle navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    
})

// typing animation
var typed = new Typed(".typing", {
    strings: ["an Engineer", "a Student", "a Junior Web Developer", "a Junior Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});