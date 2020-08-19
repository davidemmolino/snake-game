// creates a constructor function - research ES6 classes
class Head {
  constructor($el) {
    this.node = $('<div id="head"></div>');
    this.currentDirection = 'down';
		this.SPEED = 500;
		// this allows our head to append to the board
		$el.append(this.node);
		// head's starting coordinates
		this.node.css({ top: 0, left: 0 });
		// bind allows Head to use prototype.move to be used in the constructor function
		setTimeout(this.move.bind(this), this.SPEED);
		// the snake body
		this.body = [];
		// keeps score when apples are eaten
		this.score = 0;
	}
  // same as Head.prototype.move = function() {...}
  move() {
		// head's current direction
		let direction = this.currentDirection;
		// head's current position
		let position = this.node.position();
		// head's previous position
		let previous = this.node.position();
		// snakeBody will eventually be initialized to a new instance of the body 
		let snakeBody;
		// declare a variable apple and initialize to the apple id's position --> tracks the apple's coordinates every regen
		let apple = $('#apple').position();
		// reference the apple in html word
		const testApple = $('#apple');

		// Depending on the keypress, the direction for the head will be reassigned and these conditional statements will move the head in correspondence to those direction changes
		if (direction === 'right' && position.left < 650) {
			position.left += 50;
    } else if (direction === 'down' && position.top < 650) {
			position.top += 50;
		} else if (direction === 'left' && position.left > 0) {
			position.left -= 50;
		} else if (direction === 'up' && position.top > 0) {
			position.top -= 50;
		}

		// if apple coordinates === head of snake coordinates
		if (apple.top === position.top && apple.left === position.left) {
			// remove the apple
      testApple.remove();
			// reassigning snakeBody with the new instance of Body
			snakeBody = new Body($('#board'));
			// we will be pushing the new instance of body into our body array in the constructor
			this.body.push(snakeBody);
			// create a new instance of Apple to appear on the board
			new Apple($('#board'));
			// each time the snake eats the apple, the score increases by 1
			this.score++;
		}		

		// if snake hits border --> game over


		// else the snake doesn't hit the border and doesn't eat the apple
		if (this.body[0]) {
			if (this.body.length >= 4) {
				for (let i = 0; i < this.body.length; i++) {
					// if head's position is the same as the body's position, end game
					if (position.top === this.body[i].node.position().top && position.left === this.body[i].node.position().left) {
						this.node.css({display: 'none'});
						testApple.remove();
						for (let i =0; i < this.body.length; i++) {
							this.body[i].node.remove();
						} 
						// initiates game over
						$('#game-over').css({display: 'block'});
						$('#game-over-splash').addClass('on');
						setTimeout(function() {
							$('.game-over.splash .message').addClass('on');
						}, 1200);
					}
				}
			}

			let shiftingBody = this.body.shift();
			shiftingBody.node.css(previous);
			this.body.push(shiftingBody);
			
		}

		this.node.css(position);
		setTimeout(this.move.bind(this), this.SPEED);
		
	}	
}
