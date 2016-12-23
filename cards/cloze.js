

function ClozeFlashcard(text, cloze){
	this.text = text;
	this.cloze = cloze;
	this.clozeDeleted = function(){
		console.log("Cloze Deleted: ", this.text);
	}
}