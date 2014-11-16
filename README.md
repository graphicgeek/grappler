grappler
========

HTML5 Drag and Drop

```javascript
window.onload = function(){
	grappler('ul li').box('#box', function(dropped){
		console.log(dropped);//the dropped element
	});
};
```
