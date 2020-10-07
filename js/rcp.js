const game = ()=> {
    let pscore = 0;
    let csore = 0;
    const winner = document.querySelector('.winner');

    // start the game
    const start_game = () => {
        const play_button = document.querySelector('.intro button');
        const intro_screen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        play_button.addEventListener('click', () => {
            intro_screen.classList.add('fadeOut');
            match.classList.add('fadeIn');

        })
    }; 

    // play match 
    const play_match = () => {
        const options = document.querySelectorAll('.options button');
        const player_hand = document.querySelector('.player-hand');
        const computer_hand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach( hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = "";
            });
        });

        // computer options , generate random numbers
        const cmpt_options = ['rock','paper','scissors'];

        options.forEach( option => {
            option.addEventListener("click",function() {  // use reglar function else "this" won't work here
                const cmpt_number = Math.floor(Math.random() * 3);  
                const cmpt_choice = cmpt_options[cmpt_number];

                setTimeout(() => {
                // call cmpare_hands  
                cmpare_hands(this.textContent, cmpt_choice);

                // update images
                player_hand.src = `./assets/${this.textContent}.png`;
                computer_hand.src = `./assets/${cmpt_choice}.png`;

                },2000);

                // adding the animations
                player_hand.style.animation = "shakePlayer 2s ease";
                computer_hand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    // update score 
    const update_score = () => {
        const player_score = document.querySelector('.player-score p');
        const computer_score = document.querySelector('.computer-score p');
        if(pscore === 3 || csore === 3)
        {   
            if(pscore === 3) {
                winner.textContent = "Player won the match"
            }
            else {
                winner.textContent = "Computer won the match"
            }
            pscore = 0;
            csore = 0;
        }
        player_score.textContent = pscore;
        computer_score.textContent = csore;
    }

    const cmpare_hands = (player_choice,cmpt_choice) => {
        // update text
        // const winner = document.querySelector('.winner');

        if(player_choice === cmpt_choice) {
            winner.textContent = " It's a tie ";
            return;
        }

        if (player_choice === 'rock') {
            if(cmpt_choice === 'scissors') {
                winner.textContent = "Player scores";
                pscore++;
                update_score();
                return;
            }
            else {
                winner.textContent = "Computer scores";
                csore++;
                update_score();
                return;
            }
        }

        if (player_choice === 'paper') {
            if(cmpt_choice === 'rock') {
                winner.textContent = "Player scores";
                pscore++;
                update_score();
                return;
            }
            else {
                winner.textContent = "Computer scores";
                csore++;
                update_score();
                return;
            }
        }
        if (player_choice === 'scissors') {
            if(cmpt_choice === 'paper') {
                winner.textContent = "Player scores";
                pscore++;
                update_score();
                return;
            }
            else {
                winner.textContent = "Computer scores";
                csore++;
                update_score();
                return;
            }
        }

    }

    // call all the inner functions
    start_game();
    play_match();
};

game();