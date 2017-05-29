// scripts.js
var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of  the late Cretaceous period.';
	dinosaur = 'triceratops';
	bigLetterDinosaur = dinosaur.toUpperCase();
	fixedText = text.replace('Velociraptor', bigLetterDinosaur);
	halfFixedText = fixedText.slice(0,72);
console.log(halfFixedText);