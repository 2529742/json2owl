function convert(object, base){
	var root = object;
	var parent = root;
	var children = parent.children;
	var classes = [];
	var createClasses = function(node){
		if(node.children.length>0){
			var children = node.children;
			for(var c in children){
				var child = children[c];
				classes.push('<owl:Class rdf:about="' + base + '#' + child.title.replace(/ /g,"_").replace(/"/g,"&quot;") + '"><rdfs:subClassOf rdf:resource="' + base + '#' + node.title.replace(/ /g,"_").replace(/"/g,"&quot;") +  '"/></owl:Class>&#10;');
				createClasses(child);	
			}
			
		}
	}
	for(var c in children){
		var child = children[c];
		classes.push('<owl:Class rdf:about="' + base + '#' + child.title.replace(/ /g,"_").replace(/"/g,"&quot;") + '"><rdfs:subClassOf rdf:resource="http://www.w3.org/2002/07/owl#Thing"/></owl:Class>&#10;');
		createClasses(child);
	}

	return classes;
}

