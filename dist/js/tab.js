
$(function(){
	/*$('.nav-tabs-header').mouseover(function(){
		$(this).addClass('active');
	});
	$('.nav-tabs-header').mouseout(function(){
		$(this).removeClass('active');
	})

	$('.icon-down').mouseout(function(){
		$(this).removeClass('active');
	})
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
		$(this).find('div').hide();
	})
	var bodyHeight = $(document.body).height()-145;
	
	//alert(bodyHeight);

	$('.page-content').height(bodyHeight);
*/
	//var tabHtml = '<li class="nav-tabs-header " role="presentation"><a aria-controls="home" data-toggle="tab" href="#home" name="home" role="tab">充值列表</a><i class="close-tab"></i></li>';

	/*$('.treeview-menu li').click(function(){
		var url = $(this).find('a').attr('ref');
		var tabName = $(this).text();
		var iframeId = $('.page-content iframe').attr('frameborder');
		var tabId = iframeId;
		var maxTabId = $('.menu-tabs li:last-child').attr('tabid');
		
		maxTabId = parseInt(maxTabId) +1;

		var tabHtml = '<li class="nav-tabs-header " role="presentation" tabid='+maxTabId+'><a aria-controls="home" data-toggle="tab" href="#home" name="home" role="tab">'+tabName+'</a><i class="close-tab" onclick="closeTab('+maxTabId+')"></i></li>';
		var iframeHtml = '<div class="page-content"  id="content" style="padding: 10px;height: 668px;"><iframe src="'+url+'" frameborder="'+maxTabId+'" style="width:100%;height: 100%;"  id="appiframe-0" class="appiframe"></iframe></div>';
		$('.menu-tabs').append(tabHtml);
		$('.menu-tabs li').removeClass('active');
		$('.menu-tabs li:last-child').addClass('active');
		$('.main-content>div').hide();
		$('.main-content').append(iframeHtml);
		$('.main-content').find("[frameborder="+maxTabId+"]").show();
		//$('#appiframe-0').attr('src',url);
	})*/

	/*$('.close-tab').click(function() {
		alert(1234);
		$iframeId = $(this).parent('li').attr('tabid');
		$(this).parent('li').remove();
		$('.main-content').find("[frameborder="+maxTabId+"]").remove();

	})*/
})

