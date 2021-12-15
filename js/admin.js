$(function() {

	jQuery.fn.change_description = function()
	{
		var row_id = this.attr('rowid');
		$.ajax({
	      url: "admin_change_description.php",
	      type: "GET",
	      data: ({id : this.attr('rowid'), description: this.val()}),
	      success: function(serverresponse){
     		$("#description_test_area_" + row_id).stop()
     		.animate(
     			{
     			borderBottomColor:"rgb(72,100,100)",
     			borderLeftColor:"rgb(72,100,100)",
     			borderRightColor:"rgb(72,100,100)",
     			borderTopColor:"rgb(72,100,100)",
     			backgroundColor:"rgb( 44, 120, 0 )"
     			}
     			, 500)
     		.animate(
     			{
     			borderBottomColor:"rgb(255,255,255)",
     			borderLeftColor:"rgb(255,255,255)",
     			borderRightColor:"rgb(255,255,255)",
     			borderTopColor:"rgb(255,255,255)",
     			backgroundColor:"rgb( 255, 255, 255 )"
     			}
     			, 4000);
	      },
	      error: function(serverresponse){
	      		alert(serverresponse.responseText + "THE DESCRIPTION DID NOT CHANGE IN DATABASE");
	      }
	   	}
		);
	}

	jQuery.fn.change_category = function()
	{
		var row_id = this.attr('rowid');
		$.ajax({
	      url: "admin_change_category.php",
	      type: "GET",
	      data: ({id : this.attr('rowid'), category: this.val()}),
	      success: function(serverresponse){  
	   			$("#select_categories_" + row_id).stop()
     			.animate(
     			{
     			borderBottomColor:"rgb(200,200,0)",
     			borderLeftColor:"rgb(200,200,0)",
     			borderRightColor:"rgb(200,200,0)",
     			borderTopColor:"rgb(200,200,0)",
     			backgroundColor:"rgb( 200, 200, 0 )"
     			}
     			, 500)
     			.animate(
     			{
     			borderBottomColor:"rgb(255,255,255)",
     			borderLeftColor:"rgb(255,255,255)",
     			borderRightColor:"rgb(255,255,255)",
     			borderTopColor:"rgb(255,255,255)",
     			backgroundColor:"rgb( 255, 255, 255 )"
     			}
     			, 4000);
	      },
	      error: function(serverresponse)
	      {
	      	alert(serverresponse.responseText + "THE CATEGORY DID NOT CHANGE");
	      }
	   	}
		);
	}


	jQuery.fn.remove_row = function()
	{
		var row_id = this.attr('rowid');

		$.ajax({
	      url: "admin_remove_row.php",
	      type: "GET",
	      data: ({id : row_id}),
	      success: function(serverresponse){  
	      	$("#panel_" + row_id).hide(3000);
	      },
	      error: function(serverresponse) {
	         alert(serverresponse.responseText + "THE ROW DID NOT DELETE");
	      }
	   	}
		);
	}


    jQuery.fn.goon = function()
	{
		 $("#description_test_area_1").animate({'background-color': "#db1a35"}, 1200);
	}


	jQuery.fn.change_ordering = function()
	{
		var row_id = this.attr('rowid');

		$.ajax({
	      url: "admin_change_ordering.php",
	      type: "GET",
	      data: ({id : row_id, direction: this.attr('direction')}),
	      dataType: "text",
	      success: function(serverresponse){  
     		$("#description_test_area_" + row_id).stop()
	      	.animate(
     			{
     			backgroundColor:"rgb( 181, 210, 255 )"
     			}
     			, 500).animate({backgroundColor:"rgb( 255, 255, 255 )"}, 4000);
	      	$("#ordering_value_" + row_id).text(serverresponse);
	      },
	      error: function(serverresponse) {
	         alert(serverresponse.responseText + "THE SORT ORDER DID NOT CHANGE");
	      }
	   	}
		);
	}

	$('#change_commodore').bind('click', function(event) {
		$('link[href*="admin.css"]').attr('href', 'css/commodore.css');
	});

	$('#change_default').bind('click', function(event) {
		$('link[href*="commodore.css"]').attr('href', 'css/admin.css');
	});

	//LAZY security check
	//Pretty good password check, in my opinion
	$(document).ajaxSend(function(event, jqXHR, ajaxOptions) {
		

		//{ "url": "admin_change_description.php?id=1&description=wdsessdf", "type": "GET", "isLocal": false, "global": true, "processData": true, "async": true, "contentType": "application/x-www-form-urlencoded; charset=UTF-8", "accepts": { "*": "*/*", "text": "text/plain", "html": "text/html", "xml": "application/xml, text/xml", "json": "application/json, text/javascript", "script": "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, "contents": { "xml": {}, "html": {}, "json": {}, "script": {} }, "responseFields": { "xml": "responseXML", "text": "responseText", "json": "responseJSON" }, "converters": { "text html": true }, "flatOptions": { "url": true, "context": true }, "jsonp": "callback", "dataTypes": [ "*" ], "crossDomain": false, "hasContent": false }

		//DEBUGGING OUT OF CURIOSITY. OF COURSE IN A PRODUCTION ENVIRONMENT OR ENTERPRISE CLIENT I WOULDN'T HAVE THIS HERE

        //$( "#debug" ).text(JSON.stringify(ajaxOptions, null, 4));
        ajaxOptions.url = ajaxOptions.url + "&password=" + $("#admin_password").val();
    });

});
