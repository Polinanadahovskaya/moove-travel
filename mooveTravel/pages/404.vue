<template>
  <div class="not-found-page">
    <div class="header">
      <h1>404 - Страница не найдена</h1>
      <p>Пока мы ищем пропавшую страницу, вы можете поиграть в игру!</p>
    </div>

    <div class="game-container" @click="startGame" ref="gameContainer">
      <div class="game-screen">
        <div class="background" :style="{ backgroundPositionX: backgroundPosition + 'px' }"></div>
        <div class="clouds" :style="{ backgroundPositionX: backgroundPosition * 0.7 + 'px' }"></div>

        <div
            class="airplane"
            :class="{ 'airplane-jump': isJumping }"
            :style="{ left: airplanePosition + 'px', bottom: airplaneVerticalPosition + 'px' }"
        ></div>

        <template v-for="(suitcase, index) in suitcases">
          <div
              class="suitcase"
              :style="{ left: suitcase.position + 'px', bottom: '0', width: suitcase.width + 'px', height: suitcase.height + 'px' }"
          ></div>
          <div
              class="suitcase-strap"
              v-if="suitcase.hasStrap"
              :style="{ left: suitcase.position + suitcase.width/2 - 5 + 'px', bottom: suitcase.height + 'px' }"
          ></div>
        </template>

        <div class="ground" :style="{ backgroundPositionX: backgroundPosition + 'px' }"></div>

        <div class="game-over" v-if="gameOver">
          <h2>Игра окончена!</h2>
          <p>Ваш счет: {{ score }}</p>
          <button @click.stop="restartGame">Играть снова</button>
        </div>

        <div class="start-message" v-if="!gameStarted">
          <p>Нажмите здесь, чтобы начать</p>
        </div>
      </div>
    </div>

    <div class="score-display">
      Счет: {{ score }}
    </div>

    <div class="navigation">
      <router-link to="/">Вернуться на главную</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage',
  data() {
    return {
      gameStarted: false,
      gameOver: false,
      isJumping: false,
      airplanePosition: 100,
      airplaneVerticalPosition: 50,
      gravity: 0.4,
      velocity: 0,
      suitcases: [],
      baseSuitcaseSpeed: 5,
      currentDifficulty: 0,
      maxDifficulty: 5,
      minDifficulty: -5,
      score: 0,
      gameLoop: null,
      suitcaseInterval: null,
      backgroundPosition: 0,
      backgroundSpeed: 2,
      lastSuitcasePassed: true,
      lastSuitcaseMissed: false,
      activeSuitcases: 1,
      minSuitcaseSpacing: 400,
      maxSuitcaseSpacing: 500,
      jumpPower: 12,
      canDoubleJump: false
    }
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeyDown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    this.stopGame();
  },
  methods: {
    startGame() {
      if (this.gameStarted && !this.gameOver) return;

      this.gameStarted = true;
      this.gameOver = false;
      this.airplaneVerticalPosition = 50;
      this.velocity = 0;
      this.suitcases = [];
      this.score = 0;
      this.backgroundPosition = 0;
      this.airplanePosition = 100;
      this.currentDifficulty = 0;
      this.lastSuitcasePassed = true;
      this.canDoubleJump = false;

      this.gameLoop = requestAnimationFrame(this.updateGame);
      this.suitcaseInterval = setInterval(this.generateSuitcases, 2000);
    },

    generateSuitcases() {
      if (this.gameOver) return;

      this.activeSuitcases = Math.min(3, 1 + Math.floor((this.currentDifficulty + 5) / 4));

      const interval = Math.max(1200, 3000 - this.currentDifficulty * 120);
      clearInterval(this.suitcaseInterval);
      this.suitcaseInterval = setInterval(this.generateSuitcases, interval);

      const spacing = this.minSuitcaseSpacing +
          (this.maxSuitcaseSpacing - this.minSuitcaseSpacing) *
          (1 - this.currentDifficulty / this.maxDifficulty);

      for (let i = 0; i < this.activeSuitcases; i++) {
        const position = this.$refs.gameContainer.offsetWidth + (i * spacing);

        this.suitcases.push({
          position: position,
          passed: false,
          width: 40 + Math.random() * 20,
          height: 40 + Math.random() * 20,
          hasStrap: Math.random() > 0.5
        });
      }

      this.lastSuitcasePassed = false;
    },

    restartGame() {
      this.stopGame();
      this.startGame();
    },

    stopGame() {
      cancelAnimationFrame(this.gameLoop);
      clearInterval(this.suitcaseInterval);
    },

    updateGame() {
      if (this.gameOver) return;

      this.backgroundPosition -= this.backgroundSpeed;

      this.velocity -= this.gravity;
      this.airplaneVerticalPosition += this.velocity;

      if (this.airplaneVerticalPosition <= 0) {
        this.airplaneVerticalPosition = 0;
        this.isJumping = false;
        this.canDoubleJump = true;
      }

      const currentSpeed = this.baseSuitcaseSpeed + this.currentDifficulty * 0.5;
      this.suitcases.forEach(suitcase => {
        suitcase.position -= currentSpeed;
      });

      this.suitcases = this.suitcases.filter(s => s.position > -100);
      this.checkCollisions();
      this.adjustDifficulty();

      this.gameLoop = requestAnimationFrame(this.updateGame);
    },

    adjustDifficulty() {
      if (this.lastSuitcaseMissed) {
        this.currentDifficulty = Math.max(this.minDifficulty, this.currentDifficulty - 0.5);
        this.lastSuitcaseMissed = false;
      } else if (this.score > 0 && this.score % 3 === 0) {
        this.currentDifficulty = Math.min(this.maxDifficulty, this.currentDifficulty + 0.3);
      }

      this.backgroundSpeed = 2 + this.currentDifficulty * 0.1;
    },

    jump() {
      if (this.gameOver) return;

      if (!this.isJumping) {
        this.isJumping = true;
        this.velocity = this.jumpPower;
      } else if (this.canDoubleJump) {
        this.velocity = this.jumpPower * 0.8;
        this.canDoubleJump = false;
      }
    },

    checkCollisions() {
      const airplaneWidth = 60;
      const airplaneHeight = 40;

      const airplaneLeft = this.airplanePosition;
      const airplaneRight = airplaneLeft + airplaneWidth;
      const airplaneBottom = this.airplaneVerticalPosition;
      const airplaneTop = airplaneBottom + airplaneHeight;

      for (let suitcase of this.suitcases) {
        const suitcaseLeft = suitcase.position;
        const suitcaseRight = suitcaseLeft + suitcase.width;
        const suitcaseBottom = 0;
        const suitcaseTop = suitcaseBottom + suitcase.height;

        if (
            airplaneRight > suitcaseLeft + 15 &&
            airplaneLeft < suitcaseRight - 15 &&
            airplaneBottom < suitcaseTop &&
            airplaneTop > suitcaseBottom + 15
        ) {
          this.gameOver = true;
          this.stopGame();
          break;
        }

        if (!suitcase.passed && suitcaseRight < airplaneLeft) {
          suitcase.passed = true;
          this.score += 1;
          this.lastSuitcasePassed = true;
        }

        if (!suitcase.passed && suitcaseRight < -50) {
          this.lastSuitcaseMissed = true;
        }
      }
    },

    handleKeyDown(e) {
      if (e.code === 'Space' || e.key === 'ArrowUp') {
        e.preventDefault();
        this.jump();
      }
    }
  }
}
</script>

<style scoped>
.not-found-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
  background-color: #f5f5f5;
  font-family: 'Comic Sans MS', cursive, sans-serif;
}

.header {
  margin-bottom: 30px;
}

.game-container {
  width: 700px;
  height: 350px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #87CEEB 0%, #E0F7FA 100%);
  border: 3px solid #42b983;
  border-radius: 15px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  margin-bottom: 25px;
}

.game-screen {
  width: 100%;
  height: 100%;
  position: relative;
}

.background {
  position: absolute;
  width: 200%;
  height: 100%;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><circle cx="20" cy="20" r="3" fill="white"/><circle cx="50" cy="30" r="2" fill="white"/><circle cx="80" cy="15" r="4" fill="white"/></svg>');
  background-repeat: repeat-x;
  z-index: 0;
}

.clouds {
  position: absolute;
  width: 200%;
  height: 100%;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50" width="200" height="50"><path d="M30,30 Q40,20 50,30 Q60,10 70,25 Q80,5 90,20 Q100,10 110,25 Q120,15 130,30 Q140,20 150,30" fill="none" stroke="white" stroke-width="3" stroke-linecap="round"/></svg>');
  background-repeat: repeat-x;
  background-position-y: 30%;
  z-index: 0;
  opacity: 0.9;
}

.airplane {
  width: 60px;
  height: 40px;
  position: absolute;
  left: 100px;
  bottom: 50px;
  background-image: url('/src/assets/images/samolet.svg');
  background-repeat: no-repeat;
  background-size: contain;
  transition: transform 0.2s;
  z-index: 2;
  filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.3));
}

.airplane-jump {
  transform: rotate(-15deg) translateY(-10px);
}

.suitcase {
  position: absolute;
  background: linear-gradient(to bottom, #8D6E63 0%, #6D4C41 100%);
  border-radius: 8px;
  z-index: 1;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
  border: 2px solid #5D4037;
}

.suitcase-strap {
  position: absolute;
  width: 12px;
  height: 20px;
  background: linear-gradient(to bottom, #5D4037 0%, #3E2723 100%);
  border-radius: 5px;
  z-index: 1;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.ground {
  position: absolute;
  bottom: 0;
  width: 200%;
  height: 0;
  background: linear-gradient(to bottom, #8B4513 0%, #A0522D 100%);
  z-index: 1;
}

.game-over {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.97);
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  z-index: 3;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  border: 3px solid #FF5722;
  width: 300px;
}

.game-over h2 {
  color: #FF5722;
  margin-bottom: 20px;
  font-size: 28px;
}

.game-over p {
  font-size: 20px;
  margin-bottom: 25px;
}

.game-over button {
  padding: 12px 25px;
  background: linear-gradient(to bottom, #FF5722 0%, #E64A19 100%);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s;
  margin-top: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}

.game-over button:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}

.start-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.95);
  padding: 20px 30px;
  border-radius: 20px;
  z-index: 3;
  font-size: 22px;
  font-weight: bold;
  color: #FF5722;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  border: 2px solid #FF5722;
}

.score-display {
  font-size: 28px;
  margin-bottom: 25px;
  font-weight: bold;
  color: #FF5722;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.navigation a {
  color: #FF5722;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 25px;
  transition: all 0.3s;
  border: 2px solid #FF5722;
}

.navigation a:hover {
  background-color: #FF5722;
  color: white;
  text-decoration: none;
  transform: scale(1.05);
}
</style>