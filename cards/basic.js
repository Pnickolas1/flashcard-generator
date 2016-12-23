module.exports = {};

function BasicFlashcard(front, back){
	this.front;
	this.back;
	this.flashcard = function(){
		console.log("front: ", this.front + "\n" + "Back: ", this.back);
	}
}