// Core space battle game structure
const gameFeatures = {
  combat: "Real-time space combat with strategy elements",
  ships: "Multiple spacecraft classes and upgrades",
  progression: "Pilot level system with skill trees",
  social: "Fleet chat and alliance systems",
  economy: "Player-driven ship marketplace"
};

console.log("OKMAYA REALMS space battle features loaded:", gameFeatures);

// Phaser Space Battle Game

class SpaceBattleScene extends Phaser.Scene {
    constructor() {
        super({ key: 'SpaceBattleScene' });
    }

    preload() {
        // Load real spacecraft images
        this.load.image('playerShip', 'assets/images/game/spacecraft/player_ship.png');
        this.load.image('enemyShip1', 'assets/images/game/spacecraft/enemy_ship1.png');
        this.load.image('enemyShip2', 'assets/images/game/spacecraft/enemy_ship2.png');
        this.load.image('bossShip', 'assets/images/game/spacecraft/boss_ship.png');
        this.load.image('spaceBg', 'assets/images/game/backgrounds/space_bg.png');
    }

    create() {
        // Create space background with real image
        this.add.image(400, 300, 'spaceBg').setDisplaySize(800, 600);
        
        // Add some additional stars for atmosphere
        for (let i = 0; i < 50; i++) {
            const x = Math.random() * 800;
            const y = Math.random() * 600;
            const size = Math.random() * 1.5 + 0.5;
            this.add.circle(x, y, size, 0xFFFFFF, 0.6);
        }

        // Create player ship with real image
        this.player = this.add.image(100, 300, 'playerShip');
        this.player.setDisplaySize(40, 30);
        
        // Create enemy ships with real images
        this.enemies = this.add.group();
        for (let i = 0; i < 5; i++) {
            const enemyType = i % 2 === 0 ? 'enemyShip1' : 'enemyShip2';
            const enemy = this.add.image(600 + i * 50, 100 + i * 80, enemyType);
            enemy.setDisplaySize(35, 25);
            this.enemies.add(enemy);
        }

        // Create bullets
        this.bullets = this.add.group();
        this.enemyBullets = this.add.group();

        // Player controls
        this.cursors = this.input.keyboard.createCursorKeys();
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // Game state
        this.score = 0;
        this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#FFD700' });
        
        // Instructions
        this.add.text(16, 550, 'Use ARROW KEYS to move, SPACE to shoot', { fontSize: '16px', fill: '#FFFFFF' });
        this.add.text(16, 570, 'Defend the galaxy from alien invaders!', { fontSize: '16px', fill: '#FFFFFF' });

        // Start enemy movement
        this.time.addEvent({
            delay: 2000,
            callback: this.moveEnemies,
            callbackScope: this,
            loop: true
        });

        // Start enemy shooting
        this.time.addEvent({
            delay: 3000,
            callback: this.enemyShoot,
            callbackScope: this,
            loop: true
        });
    }

    update() {
        // Player movement
        if (this.cursors.left.isDown && this.player.x > 15) {
            this.player.x -= 5;
        }
        if (this.cursors.right.isDown && this.player.x < 785) {
            this.player.x += 5;
        }
        if (this.cursors.up.isDown && this.player.y > 15) {
            this.player.y -= 5;
        }
        if (this.cursors.down.isDown && this.player.y < 585) {
            this.player.y += 5;
        }

        // Player shooting
        if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
            this.shoot();
        }

        // Update bullets
        this.bullets.children.entries.forEach(bullet => {
            bullet.x += 10;
            if (bullet.x > 800) {
                bullet.destroy();
            }
        });

        // Update enemy bullets
        this.enemyBullets.children.entries.forEach(bullet => {
            bullet.x -= 8;
            if (bullet.x < 0) {
                bullet.destroy();
            }
        });

        // Check collisions
        this.checkCollisions();
    }

    shoot() {
        const bullet = this.add.rectangle(this.player.x + 20, this.player.y, 8, 4, 0x00FF00);
        this.bullets.add(bullet);
    }

    enemyShoot() {
        this.enemies.children.entries.forEach(enemy => {
            if (Math.random() < 0.3) {
                const bullet = this.add.rectangle(enemy.x - 15, enemy.y, 6, 3, 0xFF0000);
                this.enemyBullets.add(bullet);
            }
        });
    }

    moveEnemies() {
        this.enemies.children.entries.forEach(enemy => {
            enemy.x -= 20;
            if (enemy.x < -50) {
                enemy.x = 850;
                enemy.y = Math.random() * 500 + 50;
            }
        });
    }

    checkCollisions() {
        // Player bullets vs enemies
        this.physics.add.overlap(this.bullets, this.enemies, (bullet, enemy) => {
            bullet.destroy();
            enemy.destroy();
            this.score += 10;
            this.scoreText.setText('Score: ' + this.score);
        });

        // Enemy bullets vs player
        this.physics.add.overlap(this.enemyBullets, this.player, (bullet, player) => {
            bullet.destroy();
            this.score -= 5;
            this.scoreText.setText('Score: ' + this.score);
        });
    }
}

// Game configuration disabled since game container was removed
// const config = {
//     type: Phaser.AUTO,
//     width: 800,
//     height: 600,
//     parent: 'game-container',
//     scale: {
//         mode: Phaser.Scale.FIT,
//         autoCenter: Phaser.Scale.CENTER_BOTH,
//     },
//     physics: {
//         default: 'arcade',
//         arcade: {
//             gravity: { y: 0 }
//         }
//     },
//     scene: SpaceBattleScene
// };

// const game = new Phaser.Game(config);