import {ROWS, COLS} from './config';

// NOTE: ROWS, COLS에는 행의 개수, 열의 개수가 저장되어 있습니다.
// 이 변수를 활용해서 코드를 작성하세요!

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [
    {x: 4, y: 0},
    {x: 3, y: 0},
    {x: 2, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 0},
  ];

  this.memory = 0;

  // 먹이의 좌표
  this.fruit = {x: 3, y: 5};
}

SnakeGameLogic.prototype.up = function() {

  

  // 위쪽 화살표 키를 누르면 실행되는 함수
  let tail
  this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y ? tail = {} : tail = this.joints.pop()

  tail.x = this.joints[0].x
  tail.y = this.joints[0].y - 1
  this.joints.unshift(tail)

  this.memory = 'top'
  console.log('top');
}

SnakeGameLogic.prototype.down = function() {
  // this.memory = 2

  // 아래쪽 화살표 키를 누르면 실행되는 함수
  let tail
  this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y ? tail = {} : tail = this.joints.pop()

  tail.x = this.joints[0].x
  tail.y = this.joints[0].y + 1
  this.joints.unshift(tail)

  this.memory = 'down'
  console.log('down');
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  let tail
  this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y ? tail = {} : tail = this.joints.pop()

  tail.x = this.joints[0].x - 1
  tail.y = this.joints[0].y
  this.joints.unshift(tail)

  this.memory = 'left'
  console.log('left');
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  let tail
  this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y ? tail = {} : tail = this.joints.pop()

  tail.x = this.joints[0].x + 1
  tail.y = this.joints[0].y 
  this.joints.unshift(tail)

  this.memory = 'right'
  console.log('right');
}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // if (this.memory === 'right') {
  //   this.joints[this.joints.length-1].x += 1
  // } else if (this.memory === 'left') {
  //   for(let item of this.joints) {
  //     item.x -= 1
  //   }
  // } else if (this.memory === 'top') {
  //   for(let item of this.joints) {
  //     item.y -= 1
  //   }
  // } else if (this.memory === 'bottom') {
  //   for(let item of this.joints) {
  //     item.y += 1
  //   }
  // }

  console.log(`nextState`);
  if(this.joints[0].x < 0 || this.joints[0].y < 0 || this.joints[0].y > 19 || this.joints[0].x > 29) {
    // 게임이 끝났으면 `false`를 반환
    return false
  } else {
    // 게임이 아직 끝나지 않았으면 `true`를 반환
    return true
  }
}

// if (memory === 1) {
//   return SnakeGameLogic.prototype.right()
// }

export default SnakeGameLogic;
