class Body {
  // this is what's called when you use the "new" keyword
  constructor($el) { // $el is '#board'
    this.node = $('<div id="head"></div>');
		$el.append(this.node);
		let headReference = $('#head');
		// the body's position will be determined by referencing the head's position
		this.node.css({ top: headReference.position().top, left: headReference.position().left }); 
	}

}

// pass in additional information into constructor
	// offsetTop() {
	// 	//check which direction the snake is traveling
  //   let headDirection = head.currentDirection;
	// 	let headPosition = currentHead;
	// 	//if going down then add on top
	// 	if (headDirection === 'down') {
	// 		console.log(headPosition.top - 50)
	// 		return headPosition.top - 50;		
	// 	//if going up at bottom		
	// 	} else if (headDirection === 'up') {
	// 		console.log(headPosition.top + 50)
	// 		return headPosition.top + 50;
	// 	}
	// }

	// offsetLeft() {
	// 	//check which direction the snake is traveling
	// 	let headDirection = $('#head').currentDirection;
	// 	let headPosition = $('#head').position();
	// 	//if going left then add right
	// 	//if going right add left
	// 	if (headDirection === 'right') {
	// 		return headPosition.left - 50;
	// 	} else if (headDirection === 'left') {
	// 		return headPosition.left + 50;
	// 	}
	// }