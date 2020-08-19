$(document).ready(function() {
  const head = new Head($('#board'));
	const apple = new Apple($('#board'));



  $('body').on('keydown', function(e) {
    if (e.keyCode === 37 && head.currentDirection !== 'right') {
      console.log('pressed left');
			head.currentDirection = 'left';
			// body.currentDirection = 'left';
    } else if (e.keyCode === 38 && head.currentDirection !== 'down') {
      console.log('pressed up');
			head.currentDirection = 'up';
			// body.currentDirection = 'left';
    } else if (e.keyCode === 39 && head.currentDirection !== 'left') {
      console.log('pressed right');
			head.currentDirection = 'right';
    } else if (e.keyCode === 40 && head.currentDirection !== 'up') {
      console.log('pressed down');
      head.currentDirection = 'down';
    }
	});
});

// export { head as default};