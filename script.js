// jQuery(selector).function()




jQuery(document).ready(function(){
jQuery("#hide").click(function(){
    jQuery(".box").hide(1000);
});

jQuery("#show").click(function(){
    jQuery(".box").show(1000);
});

jQuery("#toggle").click(function(){
    jQuery(".box").toggle(1000);
    
});

jQuery("#fadein").click(function(){
    jQuery(".box").fadeIn(1000);
    
});

jQuery("#fadeout").click(function(){
    jQuery(".box").fadeOut(1000);
    
});

jQuery("#fadetoggle").click(function(){
    jQuery(".box").fadeToggle(1000);
    
});

jQuery("#slideup").click(function(){
    jQuery(".box").slideUp(1000);
    
});
jQuery("#slidedown").click(function(){
    jQuery(".box").slideDown(1000);
    
});
jQuery("#slidetoggle").click(function(){
    jQuery(".box").slideToggle(1000);
    
    
});

    
});







