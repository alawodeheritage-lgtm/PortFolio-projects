let score = JSON.parse(localStorage.getItem
    ('score')) ||  {
        wins: 0,
        losses: 0,
        ties: 0
      };

      updateScoreElement();
      /* 
      if (!score) {
       score = {
          wins: 0,
          losses: 0,
          ties: 0
      };
    }
      */
  let isAutoPlaying = false;
  let intervalId;

  const autoPlay = () => {
    if (!isAutoPlaying) {
      intervalId = setInterval(() => {
        const playerMove = pickComputerMove();
        playGame(playerMove);
      }, 1000);
      isAutoPlaying = true;
      document.querySelector('.auto-play-button').textContent = 'Stop Auto Play';
    } else {
      clearInterval(intervalId);
      isAutoPlaying = false;
      document.querySelector('.auto-play-button').textContent = 'Auto Play';
    }
  };

  // Handle button click
  document.querySelector('.auto-play-button').addEventListener('click', autoPlay);

  // Handle keyboard press (A key toggles autoplay)
  document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'a') {
      autoPlay();
    }
    });

  document.querySelector('.js-Rock-button').addEventListener('click', () => {
    playGame('Rock')
  });

  document.querySelector('.js-Paper-button').addEventListener('click', () => {
    playGame('Paper')
  });

  document.querySelector('.js-Scissors-button').addEventListener('click', () => {
    playGame('Scissors')
  });
  document.body.addEventListener('keydown', (event ) => {
    if(event.key === 'r') {
      playGame('Rock');
    } else if(event.key === 'p') {
      playGame('Paper')
    } else if(event.key === 's') {
      playGame
    }
  });
    function playGame(playerMove) {
      const computerMove = pickComputerMove();

      let result = ''; 
  
      if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
          result = 'Tie.';
        } else if (computerMove === 'Paper') {
          result = 'You lose.';
        } else if (computerMove === 'Scissors') {
          result = 'You win .';
        }

      } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
          result = 'You win.';
        } else if (computerMove === 'Paper') {
          result = 'Tie.';
        } else if (computerMove === 'Scissors') {
          result = 'You lose.';
        }
  
      } else if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
          result = 'You lose';
        } else if (computerMove === 'Paper') {
          result = 'You win.';
        } else if (computerMove === 'Scissors') {
          result = 'Tie.';
        } 
      }

      if(result === 'You win.') {
        score.wins += 1;
      } else if (result === 'You lose.') {
        score.losses += 1;
      } else if (result === 'Tie.') {
        score.ties += 1;
      }  
       
      localStorage.setItem('score', JSON.stringify(score));  

      updateScoreElement();

      document.querySelector('.js-result').
      innerHTML = result; 

      document.querySelector('.js-moves').
      innerHTML = `You
    <img src="pictures-RockPaperScissors/${playerMove}-emoji.jpg" alt="" class="move-icon">
    <img src="pictures-RockPaperScissors/${computerMove}-emoji.jpg" alt="" class="move-icon">
    Computer`;
    } 
    
    function updateScoreElement() {
      document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, 
      Losses:${score.losses},
      Ties: ${score.ties}`;
    };
    const resetScore = () => {
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      updateScoreElement();
};
    const showConfirmation = () => {
      document.querySelector('.js-confirmation').style.display = 'block';
  };

    const hideConfirmation = () => {
      document.querySelector('.js-confirmation').style.display = 'none';
  };

    // Handle Reset Score button click
    document.querySelector('.reset-score-button').addEventListener('click', showConfirmation);

// Handle Backspace key to show confirmation instead of instantly resetting
   document.addEventListener('keydown', (event) => {
      if (event.key === 'Backspace') {
        event.preventDefault(); // Prevent browser from going back
        showConfirmation();
    }
  });

// Handle confirmation buttons
    document.querySelector('.yes-button').addEventListener('click', () => {
      resetScore();
      hideConfirmation();
});


    function pickComputerMove() {
      const randomNumber= Math.random();

      let computerMove = '';

      if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'Rock';
      } else if (randomNumber >= 1 / 3 && 
        randomNumber < 2 /3) {
         computerMove = 'Paper';
      } else if (randomNumber >= 2 / 3 && 
        randomNumber < 1) {
        computerMove = 'Scissors';
      }
      return computerMove;
    }  