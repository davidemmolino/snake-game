class Apple {

  constructor($el) {
    this.node = $('<img id="apple"></img>');
    this.node.attr('src', 'src/assets/apple.jpg');
		$el.append(this.node);
		// randomizes the apple's regen
		this.node.css({ top: this.randomizer(), left: this.randomizer() });
	}

	randomizer() {
		// const testApple = $('#apple');
		const testHead = $('#head').position();
		// declare a variable with top coordinate using Math
		let value = Math.floor(Math.random() * 13) * 50;
		// Math.floor(Math.random() * 13) * 50
		// if both values === new Head.position
		// reinvoke randomizer ?
    if (top === testHead.top && left === testHead.left) {
			return this.randomizer();
		}
		return value;
  }
	
	// conditional if apple and snake are in the same place
	// need to confirm the snake position
	// console.log()
	// going down is positive and right is positive
	// upper left corner is (0,0)
}

// getBoundingClientRect()

// var rect = element.getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);

