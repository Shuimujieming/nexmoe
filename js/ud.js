
/*置顶置底*/
   $(function(){
        $("#updown > #lamu img").eq(0).click(function(){$("html,body").animate({scrollTop :0}, 800);return false;});
        $("#updown > #leimu img").eq(0).click(function(){$("html,body").animate({scrollTop : $(document).height()}, 800);return false;});
      });
