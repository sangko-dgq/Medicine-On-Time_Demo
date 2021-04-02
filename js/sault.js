(function($){
$.fn.setwaterfall = function (options){
	function findLowestIndex(Arr){
		var index = 0,i;
		for (i in Arr){
			Arr[i] < Arr[index] ? index = i : "";
		}
		return index;
	};
	function findBigestIndex(Arr){
		var index = 0,i;
		for (i in Arr){
			Arr[i] > Arr[index] ? index = i : "";
		}
		return index;
	};
   var boxwidth = $(this).outerWidth()+parseInt($(this).css("marginLeft"))*2;
   var wrapWidth = $(this).parent().width();
   var col = Math.floor(wrapWidth/boxwidth);
   var row = Math.floor($(this).length/col) == $(this).length/col?$(this).length/col:(Math.floor($(this).length/col)+1);
   var colhigharry = [],colpos,leftpos,toppos;
   for(var len = 0;len < col;len++){
	colhigharry.push(0);
   };
   $(this).each(function(index){
	var pos = index;
	var col1height = 0;
	var col2height = 0;
	var col3height = 0;
	var col4height = 0;
	if(pos<col){
		leftpos = boxwidth*pos + "px";
		$(this).css({"top":"0","left":leftpos});
		colhigharry[index] = $(this).height()+parseInt($(this).css("marginTop"))*2+parseInt($(this).css("paddingTop"))*2;
	}else{
	   colpos = findLowestIndex(colhigharry);
	   leftpos = boxwidth*colpos+"px";
	   toppos = colhigharry[colpos]+"px";
	   $(this).css({"top":toppos,"left":leftpos});
	   colhigharry[colpos] =  colhigharry[colpos] + $(this).height()+parseInt($(this).css("marginTop"))*2+parseInt($(this).css("paddingTop"))*2;
	}           
   });
   var wraphighindex = findBigestIndex(colhigharry);
   var wraphigh = colhigharry[wraphighindex]+"px";
   $(this).parent().height(wraphigh);
   var selector = $(this).selector;
   window.onresize = function(){$(selector).setwaterfall();};
	}
})(jQuery)