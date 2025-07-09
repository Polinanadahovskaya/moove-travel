<template>
  <div class="not-found-page">
    <div class="header">
      <h1>404 - Страница не найдена</h1>
      <p>Пока мы ищем пропавшую страницу, вы можете поиграть в игру!</p>
    </div>

    <div class="game-container" @click="startGame" ref="gameContainer">
      <div class="game-screen">
        <div
            class="airplane"
            :class="{ 'airplane-jump': isJumping }"
            :style="{ bottom: airplanePosition + 'px' }"
        ></div>
        <div
            class="suitcase"
            v-for="(suitcase, index) in suitcases"
            :key="index"
            :style="{ right: suitcase.position + 'px', bottom: '0' }"
        ></div>
        <div class="ground"></div>

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
      airplanePosition: 0,
      gravity: 0.5,
      velocity: 0,
      suitcases: [],
      suitcaseSpeed: 5,
      score: 0,
      gameLoop: null,
      suitcaseInterval: null
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
      this.airplanePosition = 0;
      this.velocity = 0;
      this.suitcases = [];
      this.score = 0;

      // Запуск игрового цикла
      this.gameLoop = requestAnimationFrame(this.updateGame);

      // Генерация чемоданчиков
      this.suitcaseInterval = setInterval(this.generateSuitcase, 1500);
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

      // Обновление положения самолетика
      this.velocity -= this.gravity;
      this.airplanePosition += this.velocity;

      // Ограничение, чтобы самолетик не улетел ниже земли
      if (this.airplanePosition <= 0) {
        this.airplanePosition = 0;
        this.isJumping = false;
      }

      // Обновление положения чемоданчиков
      this.suitcases.forEach(suitcase => {
        suitcase.position -= this.suitcaseSpeed;
      });

      // Удаление чемоданчиков, которые вышли за пределы экрана
      this.suitcases = this.suitcases.filter(s => s.position > -50);

      // Проверка столкновений
      this.checkCollisions();

      // Увеличение счета
      this.score++;

      // Увеличение сложности
      if (this.score % 500 === 0) {
        this.suitcaseSpeed += 0.5;
      }

      // Продолжение игрового цикла
      this.gameLoop = requestAnimationFrame(this.updateGame);
    },

    generateSuitcase() {
      if (this.gameOver) return;

      this.suitcases.push({
        position: this.$refs.gameContainer.offsetWidth,
        passed: false
      });
    },

    jump() {
      if (this.isJumping || this.gameOver) return;

      this.isJumping = true;
      this.velocity = 12;
    },

    checkCollisions() {
      const airplaneWidth = 60;
      const airplaneHeight = 30;
      const suitcaseWidth = 40;
      const suitcaseHeight = 40;

      const airplaneLeft = 50;
      const airplaneRight = airplaneLeft + airplaneWidth;
      const airplaneTop = this.$refs.gameContainer.offsetHeight - this.airplanePosition - airplaneHeight;
      const airplaneBottom = airplaneTop + airplaneHeight;

      for (let suitcase of this.suitcases) {
        const suitcaseLeft = suitcase.position;
        const suitcaseRight = suitcaseLeft + suitcaseWidth;
        const suitcaseTop = this.$refs.gameContainer.offsetHeight - suitcaseHeight;
        const suitcaseBottom = suitcaseTop + suitcaseHeight;

        // Проверка столкновения
        if (
            airplaneRight > suitcaseLeft &&
            airplaneLeft < suitcaseRight &&
            airplaneBottom > suitcaseTop &&
            airplaneTop < suitcaseBottom
        ) {
          this.gameOver = true;
          this.stopGame();
          break;
        }

        // Отметка о пройденном чемоданчике для счета
        if (!suitcase.passed && suitcaseRight < airplaneLeft) {
          suitcase.passed = true;
          this.score += 100;
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
  font-family: Arial, sans-serif;
}

.header {
  margin-bottom: 30px;
}

.game-container {
  width: 600px;
  height: 200px;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
}

.game-screen {
  width: 100%;
  height: 100%;
  position: relative;
}

.airplane {
  width: 60px;
  height: 30px;
  position: absolute;
  left: 50px;
  bottom: 0;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,16.21V14l-8-5V3.5c0-0.83-0.67-1.5-1.5-1.5S11,2.67,11,3.5V9l-8,5v2.21l8-2.81V19l-2,1.5V22l3.5-1l3.5,1v-1.5L14,19 v-5.62L22,16.21z"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  transition: transform 0.1s;
}

.airplane-jump {
  transform: rotate(-20deg);
}

.suitcase {
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 0;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,4H7A2,2 0 0,0 5,6V18A2,2 0 0,0 7,20H17A2,2 0 0,0 19,18V6A2,2 0 0,0 17,4M7,6H17V8H7V6M7,10H17V12H7V10M7,14H14V16H7V14Z"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
}

.ground {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5px;
  background-color: #555;
}

.game-over {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.game-over button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.game-over button:hover {
  background-color: #3aa876;
}

.start-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px 20px;
  border-radius: 5px;
}

.score-display {
  font-size: 20px;
  margin-bottom: 20px;
}

.navigation a {
  color: #42b983;
  text-decoration: none;
  font-size: 18px;
}

.navigation a:hover {
  text-decoration: underline;
}
</style>