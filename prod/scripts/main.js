$(document).ready(function(){!function(t){t.fn.goTo=function(){return t("html, body").animate({scrollTop:t(this).offset().top+"px"},"fast"),this}}(jQuery),$(".contact-me").on("click",function(t){$(".page-footer").goTo()}),$(".about-me").on("click",function(t){$(".pic").goTo()}),$(".button-collapse").sideNav({menuWidth:250,edge:"right",closeOnClick:!0}),$(".parallax").parallax();[{selector:"#test",offset:400,callback:Materialize.showStaggeredList("#test")}]});