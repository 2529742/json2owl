$(function(){
	$('#btn_convert').click(function(){
		var jsoninput = $('#jsoninput').val();
		var base = $('#base').val();
		var object = {};
		try{
			object = JSON.parse(jsoninput);
			object = (object.children)? object: ((object.root)? object.root: object);
			var classes = convert(object, base);
			$('#xmlout').append(classes.toString().replace(/</g,'&lt;').replace(/>/g,'&gt;'));
		}
		catch(e){ console.log('Failed to parse JSON: '+e);}
	})

});

