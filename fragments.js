 let toch = document.querySelectorAll('h2, h3, h4');

 toch.forEach(function(e){
 	let newstr = e.innerHTML.replace(/ /g, "-");
 	e.id = newstr

 });

