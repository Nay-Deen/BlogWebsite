// Filter into categories
$(document).ready(function(){
    $('.filter-item') .click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all') {
            $(".post-box").show("1000");
        }
        else{
            $(".post-box")
            .not("."+ value)
            .hide("1000");
            $(".post-box")
            .filter("." + value)
            .show("1000");

        }
    });
    // Add active filter class to clicked category item 
    $('.filter-item').click(function(){
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
});
});
// Change header background on scroll
let header = document.querySelector('header')
window.addEventListener('scroll', () => {
header.classList.toggle("shadow", window.scrollY > 0);
});

