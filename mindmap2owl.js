$(function(){
	$('#jsoninput').append(JSON.stringify(tree)); 
	$('#btn_convert').click(function(){
		var jsoninput = $('#jsoninput').val();
		var base = $('#base').val();
		var object = {};
		try{
			object = JSON.parse(jsoninput);
			object = (object.children)? object: ((object.root)? object.root: object);
			var classes = convert(object, base);
			var pre = '<?xml version="1.0"?>\n'+
					'<rdf:RDF xmlns="'+ base +'"\n'+
					'xml:base="'+base+'"\n'+
					'xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"\n'+
					'xmlns:owl="http://www.w3.org/2002/07/owl#"\n'+
					'xmlns:xsd="http://www.w3.org/2001/XMLSchema#"\n'+
					'xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n>'+
					'<owl:Ontology rdf:about="http://www.sampleontology.org#"/>\n'+
					'<owl:ObjectProperty rdf:about="'+base+'#description">\n'+
					'<rdfs:subPropertyOf rdf:resource="http://www.w3.org/2002/07/owl#topObjectProperty"/>\n'+
					'</owl:ObjectProperty>\n'+
					'<owl:DatatypeProperty rdf:about="'+base+'#use">\n'+
					'<rdfs:subPropertyOf rdf:resource="http://www.w3.org/2002/07/owl#topDataProperty"/>\n'+
					'</owl:DatatypeProperty>';

			$('#xmlout')
			.append(pre.replace(/</g,'&lt;').replace(/>/g,'&gt;'))
			.append(classes.join("").replace(/</g,'&lt;').replace(/>/g,'&gt;'))
			.append('&lt;/rdf:RDF&gt;');
		}
		catch(e){ console.log('Failed to parse JSON: '+e);}
	})

});

