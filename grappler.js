var grappler = (function(selector){

	var grappled = [];

	function getIndex(element){
		var index = grappled.indexOf(element);

		if(index == -1){
			grappled.push(element);
			index = grappled.indexOf(element);
		}
		return index;
	}

	var grappler = {

		dragger: function(element){
			element.setAttribute("draggable", "true");

			element.addEventListener("dragstart", function(e){
				e.dataTransfer.setData('dropped', getIndex(element));
			});
		},//dragger

		dropper: function(element, callback){
			console.log(element);
			element.addEventListener('dragover', function(e){
				 e.preventDefault();
				 return true;
			});
			element.addEventListener("drop", function(e){
				callback(grappled[e.dataTransfer.getData('dropped')]);
			});
		}

	}//grappler

	return function(selector){

		this.box = function(selector, callback){
			var matches = document.querySelectorAll(selector);
			for (var i = 0; i < matches.length; i++) {
				grappler.dropper(matches[i], callback);
			}				
		}

		var matches = document.querySelectorAll(selector);
			
		for (var i = 0; i < matches.length; i++) {
			grappler.dragger(matches[i]);
		}		
		return this;
	}

})();