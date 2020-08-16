
var $taskContentInner = null;
var $content;
var $navWraper  = $("#task-content");
window.onresize = function(){
   var bodyHeight = window.innerHeight-141;
    $('.page-content').height(bodyHeight); 
}
$(function(){
    var bodyHeight = window.innerHeight-141;
    $('.page-content').height(bodyHeight);
	$taskContentInner = $("#task-content-inner");
	$content         = $("#content");

	$("#task-content-inner").on("click", "li", function () {
	 	
        openapp($(this).attr("app-url"), $(this).attr("app-id"), $(this).attr("app-name"));
        return false;
    });

    $("#task-content-inner").on("click", ".close-tab", function (event) {

        closeapp($(this).parent());
       
        return false;
    });

    $("#icon-next").click(function () {
    	var contentInner = $("#task-content-inner").width();
    	
       
    });

    $('.close-iframe-box div').mouseover(function(){
        $(this).css({"background-color":"#eee"});
    })
    $('.close-iframe-box div').mouseout(function(){
        $(this).css({"background-color":"#fff"});
    })
    $('.icon-down').mouseover(function(){
        $(this).find('div').show();
    })
    $('.icon-down').mouseout(function(){
        $(this).removeClass('active');
        $(this).find('div').hide();
    })

})


	//  点击按钮向左移动
function move_left(){
    var maxrelnum = $('#task-content-inner li:last').attr('app-id');//    最大rel
    var leftLegth = calUlLength(maxrelnum);

    //  当前向左偏离长度
    var leftAbsolut = Math.abs(parseInt($('#task-content-inner').css('left')));
    //  可视区长度1003.19
    var visiableLength = $('#task-content').width() ;

    //  如果可视区+左偏离小于 leftLegth，
    if(Number(leftLegth) - visiableLength>0){
        var leftmin = 100;
        //左移 leftAdd + leftAbsolut
        click_left(leftAbsolut + leftmin)
    }
}

function click_left(left){
    $('#task-content-inner').animate({top:'0',left:'-'+left+'px'},500);
}

//  点击按钮向右移动
function click_right(right=0){
    $('#task-content-inner').animate({top:'0',left:right+'px'},500);
}


function calUlLength(rel){
    var length = 0;
    $('#task-content-inner li').each(function(){
        length += Number($(this).width())
    });
    return length;
} 

   
	var task_item_tpl = '<li class="nav-tabs-header " role="presentation" tabid="" app-url="pages/forms/testform.html" app-id="" app-name="">'+
                        '<a class="tabs-item-text" aria-controls="home" data-toggle="tab" href="#home" title=""></a>'+
                        '<i class="close-tab"></i></li>';


    var appiframe_tpl = '<iframe  style="width:100%;height: 100%;border: 0px" class="appiframe"></iframe>';

    function openapp(url, appId, appname, refresh){
    	var $app = $("#task-content-inner li[app-id='"+appId+"']");
    	$('#task-content-inner .active').removeClass('active');
        $('#task-content-inner .li-onselect').removeClass('li-onselect');
    	if($app.length==0){
    		var task = $(task_item_tpl).attr("app-id", appId).attr("app-url", url).attr("app-name", appname).addClass("active").addClass("li-onselect");
	        task.find(".tabs-item-text").html(appname).attr("title", appname);
	        $taskContentInner.append(task);
	        $(".appiframe").hide();
	        $appiframe = $(appiframe_tpl).attr("src", url).attr("id", "appiframe-" + appId);
        	$appiframe.appendTo("#page-content");

             //  计算左边li长度总和
            var leftLegth = calUlLength(appId);
            //  当前向左偏离长度
            var leftAbsolut = Math.abs(parseInt($('#task-content-inner').css('left'))); //ul
            //  可视区长度
            var visiableLength = $('#task-content').width() ; //div
            //  如果可视区+左偏离小于 leftLegth，
            if(Number(visiableLength) + Math.abs(Number(leftAbsolut))<Number(leftLegth)){
                var leftAdd = Number(leftLegth) - (Number(visiableLength) + Math.abs(Number(leftAbsolut)))
                //左移 leftAdd + leftAbsolut
                click_left(leftAdd + leftAbsolut)
            }
    	}else{
    		$app.addClass("active").addClass("li-onselect");
	        $(".appiframe").hide();
	        var $iframe = $("#appiframe-" + appId);
	       // var src     = $iframe.get(0).contentWindow.location.href;

	         $iframe.show();
    	}
    }

    function closeapp($this) {
	    if (!$this.is(".noclose")) {
            var liwidth = $this.width();
	        $this.prev().click();
	        $this.remove();

	        $("#appiframe-" + $this.attr("app-id")).remove();
            var leftAbsolut = Math.abs(parseInt($('#task-content-inner').css('left')));
            if(leftAbsolut>=liwidth){
                click_left(leftAbsolut-liwidth);
            }
	       
	    }

	}

	//一键关闭顶部打开的菜单
    $("#close-all").click(function () {
        $("#task-content-inner").children().each(function () {
            //保留首页。保留当前页面菜单。
            if ($(this).attr("app-id") !=0) {
                $(this).remove();
            }
        });
        $("#page-content iframe[frameborder !=0]").each(function () {
        	//alert($(this).attr("src"));
            //保留首页iframe
            if ($(this).attr("src").indexOf("pages/forms/testform.html") < 0) {
                $(this).remove();
            }
            $('#appiframe-0').show();
        });
        click_right();
      
    });
    //一键关闭其他
    $("#close-others").click(function () {
        $("#task-content-inner").children().each(function () {
            //保留首页。保留当前页面菜单。
            if ($(this).attr("app-id") != 0 && $(this).attr("class").indexOf("active") < 0) {
                $(this).remove();
            }
        });
        $("#page-content iframe:hidden").each(function () {
            //保留首页iframe
            if ($(this).attr("src").indexOf("pages/forms/testform.html") < 0) {
                $(this).remove();
            }
        });
        click_right();
       
    });
    //一键当前标签
    $("#close-this").click(function () {
        var thisTab = $('#task-content-inner .active');
        var appid = thisTab.attr('app-id');
        var showIframe = thisTab.prev().attr('app-id');
        var liwidth = thisTab.width();
        
        $("#task-content-inner").children().each(function () {
            //保留首页。保留当前页面菜单。
            if ($(this).attr("app-id") != 0 && $(this).attr("class").indexOf("active") > 0) {
                $(this).remove();
                $("#appiframe-" + appid).remove();
                $("#appiframe-"+showIframe).show();   
                $('#task-content-inner li[app-id="'+showIframe+'"]').addClass('active').addClass("li-onselect");
            }
        });
        
        var leftAbsolut = Math.abs(parseInt($('#task-content-inner').css('left')));
        if(leftAbsolut>=liwidth){
            click_left(leftAbsolut-liwidth);
        }
       
    });