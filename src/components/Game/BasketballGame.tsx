// BasketballGame.tsx

import React, { useEffect, useRef, useState } from 'react';
import Phaser from 'phaser';
import { useTheme } from '../Util/ThemeContext.tsx';

const BasketballGame: React.FC = () => {
    const { theme } = useTheme();
    const [score, setScore] = useState(0);
    const gameContainerRef = useRef<HTMLDivElement>(null);
    const scoreRef = useRef(score);
    useEffect(() => {
        scoreRef.current = score;
    }, [score]);

    useEffect(() => {
        // Get the reference to the game container
        const gameContainer = gameContainerRef.current;

        if (!gameContainer) {
            return;
        }
        const screenWidth = gameContainer.clientWidth;
        const screenHeight = gameContainer.clientHeight;

        const config: Phaser.Types.Core.GameConfig = {
            parent: gameContainer,
            type: Phaser.AUTO,
            transparent: true,
            width: screenWidth,
            height: screenHeight,
            scene: {
                preload: preload,
                create: create,
                update: update,
            },
            physics: {
                default: 'matter',
                matter: {
                    debug: false, // Set to true for debugging physics bodies
                },
            },
        };

        const game = new Phaser.Game(config);
        let ball: Phaser.Physics.Matter.Sprite;
        let hoop: Phaser.Physics.Matter.Sprite;
        let scoreText: Phaser.GameObjects.Text;

        function preload(this: Phaser.Scene) {
            // Load assets (ball, hoop, etc.)
            if (theme === 'dark') {
                this.load.image('ball', 'src/assets/ballDark.svg');
                this.load.image('hoop', 'src/assets/hoopDark.svg');
            } else {
                this.load.image('ball', 'src/assets/ball.svg');
                this.load.image('hoop', 'src/assets/hoop.svg');
            }
        }

        function create(this: Phaser.Scene) {
            const graphics = this.add.graphics()
            // Create the score text
            scoreText = this.add.text(screenWidth / 2, 100, '0', {
                fontSize: '48px',
                fontFamily: 'Arial, sans-serif',
                color: theme === 'dark' ? '#fff' : '#000',
                backgroundColor: 'transparent',
                padding: { left: 10, right: 10 },
                align: 'center',
            }).setOrigin(0.5, 0);

            // Create game elements (ball, hoop, etc.)
            const arrow = this.add.sprite(2, 2, 'arrow');
            arrow.setOrigin(1, 1); // Set the origin to the center of the sprite

            ball = this.matter.add.sprite(screenWidth / 2, screenHeight / 2, 'ball', undefined, {
                shape: {
                    type: 'circle',
                    radius: 350, // Adjust the radius as needed
                },
            });

            hoop = this.matter.add.sprite(screenWidth - 90, screenHeight / 2, 'hoop', undefined, {
                shape: {
                    type: 'rectangle',
                    width: 80, // Adjust the width as needed
                    height: 80, // Adjust the height as needed
                },
                isStatic: true,
                isSensor: true,
            });

            // Create the ground
            const ground = this.matter.add.rectangle(screenWidth / 2, screenHeight, screenWidth + 3, 50, {
                isStatic: true, // Make the ground immovable
            });
            ground.render.opacity = 1;

            const hoopStart = this.matter.add.rectangle(screenWidth - 150, (screenHeight / 2) - 36, 5, 5, {
                isStatic: true, // Make the ground immovable
            });
            hoopStart.render.opacity = 1;

            const hoopEnd = this.add.rectangle(screenWidth - 35, (screenHeight / 2) - 135, 10, 200, 0x2ca9bc);
            // set physics states
            this.matter.add.gameObject(hoopEnd, { isStatic: true });

            this.matter.add.trapezoid(screenWidth , screenHeight-29, 1000, 100, 0.5, {
                isStatic: true, // Make it static so that it doesn't move
                friction: 0, // No friction for a better bounce
                restitution: 1, // Full restitution for a perfect bounce
                angle: -Math.PI / 4, // Angle of the slope (adjust as needed)
            });

            ball.setBounce(0.9);
            const ballMass = 81000
            console.log(ball.world.setGravity())
            ball.setMass(ballMass)
            ball.setDisplaySize(100, 100);
            hoop.setDisplaySize(120, 120);
            // Enable input for the ball
            ball.setInteractive({ draggable: true });
            const velocityFactor = 1;

            function circleColor(graphics: Phaser.GameObjects.Graphics) {
                theme === 'dark' ? graphics.fillStyle(0xFFFFFF) : graphics.fillStyle(0x000000)
            }

            const drawTrajectory = (graphics: Phaser.GameObjects.Graphics, ballX: number, ballY: number, force: Phaser.Math.Vector2) => {
                graphics.clear();
                const timeStep = 1;
                const totalTime = 25;
                const velocity = force.clone()
                console.log(`ballX: ${ballX}, ballY: ${ballY}`);
                for (let t = 0; t <= totalTime; t += timeStep) {
                    // Calculate the new position using the decomposed force components
                    const x = ballX + velocity.x * t;
                    const y = ballY + velocity.y * t + 0.5*9.8*t*t;
                    console.log(`T: ${t}, newX: ${x}, newY: ${y}`);

                    //Damping factor due to air friction
                    velocity.x *= Math.pow(1 - 0.0135, timeStep);
                    velocity.y *= Math.pow(1, timeStep);

                    // Draw a small circle at each point in the trajectory
                    circleColor(graphics);
                    graphics.fillCircle(x, y, 5); // Draw a circle at the calculated position
                }
            };



            let distance = 0;

            // Calculate the angle between the ball and the mouse
            let angle = 0;

            // Determine the velocity based on the distance (you may need to adjust the factor)

            // Apply force to the ball in the direction of the angle
            let force: Phaser.Math.Vector2;
            this.input.on('drag', (pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject) => {


                if (gameObject === ball) {
                    distance = Phaser.Math.Distance.Between(pointer.x, pointer.y, ball.x, ball.y);
                    angle = Phaser.Math.Angle.Between(ball.x, ball.y, pointer.x, pointer.y);
                    force = new Phaser.Math.Vector2(Math.cos(angle) * velocityFactor * distance, Math.sin(angle) * velocityFactor * distance);
                    drawTrajectory(graphics, ball.x, ball.y, force);
                }
            });

            this.input.on('dragend', (pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject) => {
                if (gameObject === ball) {
                    // Calculate the distance between the initial ball position and the final mouse position
                    distance = Phaser.Math.Distance.Between(pointer.x, pointer.y, ball.x, ball.y);
                    angle = Phaser.Math.Angle.Between(ball.x, ball.y, pointer.x, pointer.y);
                    force = new Phaser.Math.Vector2(Math.cos(angle) * velocityFactor * distance, Math.sin(angle) * velocityFactor * distance);
                    ball.applyForce(force);
                }
            });

            this.matter.world.on('collisionstart', (event: any) => {
                // Check if the ball collides with the hoop
                if (event.pairs.some((pair: any) => (pair.bodyA === ball.body || pair.bodyB === ball.body) && (pair.bodyA === hoop.body || pair.bodyB === hoop.body))) {
                    if (ball.body?.velocity) {
                        if (ball.body?.velocity.y > 0) {
                            // Ball passed through the hoop
                            console.log('Scored!');
                            setScore(prevScore => (prevScore + 2) )
                            scoreRef.current += 2; // Update the ref without triggering a re-render
                        }
                    }
                }
            });
        }

        function update(this: Phaser.Scene) {
            // Update game state
            if (ball) {
                const minX = ball.displayWidth / 2;
                const maxX = screenWidth - ball.displayWidth / 2;

                // Clamp the ball's position
                if (ball.x < minX) {
                    ball.x = maxX;
                } else if (ball.x > maxX) {
                    ball.x = minX;
                }
                scoreText.setText(`Scored: ${scoreRef.current}`)
            }

        }

        return () => {
            // Cleanup
            game.destroy(true);
        };
    }, [theme]);

    return <div id="game-container" ref={gameContainerRef} className="z-10 w-full h-full" />;
};

export default BasketballGame;
