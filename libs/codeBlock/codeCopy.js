// build time:Mon Apr 13 2020 12:19:08 GMT+0800 (GMT+08:00)
$(function(){var $copyIcon=$('<i class="fas fa-copy code_copy" title="复制代码" aria-hidden="true"></i>');var $notice=$('<div class="codecopy_notice"></div>');$(".code-area").prepend($copyIcon);$(".code-area").prepend($notice);function copy(text,ctx){if(document.queryCommandSupported&&document.queryCommandSupported("copy")){try{document.execCommand("copy");$(ctx).prev(".codecopy_notice").text("复制成功").animate({opacity:1,top:30},450,function(){setTimeout(function(){$(ctx).prev(".codecopy_notice").animate({opacity:0,top:0},650)},400)})}catch(ex){$(ctx).prev(".codecopy_notice").text("复制失败").animate({opacity:1,top:30},650,function(){setTimeout(function(){$(ctx).prev(".codecopy_notice").animate({opacity:0,top:0},650)},400)});return false}}else{$(ctx).prev(".codecopy_notice").text("浏览器不支持复制")}}$(".code-area .fa-copy").on("click",function(){var selection=window.getSelection();var range=document.createRange();range.selectNodeContents($(this).siblings("pre").find("code")[0]);selection.removeAllRanges();selection.addRange(range);var text=selection.toString();copy(text,this);selection.removeAllRanges()})});
//rebuild by neat 