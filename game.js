//alert('I am working!');
let canvas = document.getElementById('canvas');//dom element
          let context = canvas.getContext('2d');//not dom element
          let x = 10;
          let y = 10;

          function drawRect() {
            context.fillStyle = 'pink';
            context.clearRect(0, 0, 1200, 600);
            context.fillRect(x, y, 50, 50);
          }

          /*let interval = setInterval(() => {
            drawRect();
            x += 5;
            //y += 55;
          }, 200);*/

          //first variant
          /*let gameLoop = () => {
            drawRect();
            x += 5;
            requestAnimationFrame(gameLoop);//not crossbrowser
          }*/

          //second variant
          let NextGameStep = (() => {
            //requests for different brouthers
            return requestAnimationFrame;
            /*webkitRequestAnimationFrame ||
            function(callback) {
              setTimeout(callback, 1000/60);
            };*/
          })();
          //call GameEngine ???
          let GameEngineStart = (callback) => {
            GameEngine = callback;
            GameEngineStep();
          }

          let GameEngineStep = () => {
            GameEngine();
            NextGameStep(GameEngineStep);

          }
          
          let setGameEngine = (callback) => {
            GameEngine = callback;
          }

          let gameLoopRight = () => {
            drawRect();
            x += 1; 
            y++;
            if(x >= 350)  setGameEngine(gameLoopLeft);
            
          }

          let gameLoopLeft = () => {
            drawRect();
            x -= 1;
            y--;
            if(x <= 10)  setGameEngine(gameLoopRight);
          }
          GameEngineStart(gameLoopRight);