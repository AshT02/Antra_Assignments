document.addEventListener("DOMContentLoaded", () => {
   
    const model = (() => {
        let score = 0;
        let timer = 30;
        let gameOver = true;
        let countdown = null;
        let moleInterval = null;

        const startGame = (updateViewCallback, gameOverCallback) => {
            if (!gameOver) return;

            gameOver = false;
            score = 0;
            timer = 30;
            updateViewCallback(score, timer);

            countdown = setInterval(() => {
                timer--;
                updateViewCallback(score, timer);

                if (timer <= 0) {
                    endGame(gameOverCallback);
                }
            }, 1000);

            moleInterval = setInterval(() => {
                if (!gameOver) updateViewCallback(score, timer, true);
            }, 1000);
        };

        const increaseScore = () => {
            if (!gameOver) {
                score++;
                return score;
            }
            return score;
        };

        const endGame = (gameOverCallback) => {
            clearInterval(countdown);
            clearInterval(moleInterval);
            gameOver = true;
            gameOverCallback(score);
        };

        return { startGame, increaseScore, endGame };
    })();

  
    const view = (() => {
        const holes = document.querySelectorAll(".hole");
        const startButton = document.getElementById("startButton");
        const scoreDisplay = document.getElementById("score");
        const timerDisplay = document.getElementById("timer");

        const updateUI = (score, timer, showMole = false) => {
            scoreDisplay.textContent = `Score: ${score}`;
            timerDisplay.textContent = `Time: ${timer}s`;

            holes.forEach(hole => {
                hole.classList.remove("img");
                hole.removeEventListener("click", handleMoleClick);
            });

            if (showMole) {
                let randomHole = holes[Math.floor(Math.random() * holes.length)];
                randomHole.classList.add("img");
                randomHole.addEventListener("click", handleMoleClick);
            }
        };

        const showGameOver = (score) => {
            alert(`Game Over!\nYour final score: ${score}`);
        };

        const handleMoleClick = () => controller.increaseScore();

        const bindStartGame = (handler) => startButton.addEventListener("click", handler);

        return { updateUI, showGameOver, bindStartGame };
    })();


    const controller = (() => {
        const startGame = () => {
            model.startGame(
                (score, timer, showMole) => view.updateUI(score, timer, showMole),
                (finalScore) => view.showGameOver(finalScore)
            );
        };

        const increaseScore = () => {
            const updatedScore = model.increaseScore();
            view.updateUI(updatedScore, model.timer);
        };

        view.bindStartGame(startGame);

        return { startGame, increaseScore };
    })();
});
