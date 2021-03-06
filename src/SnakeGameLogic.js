import {ROWS, COLS} from './config';
import { throws } from 'assert';

// NOTE: ROWS, COLS에는 행의 개수, 열의 개수가 저장되어 있습니다.
// 이 변수를 활용해서 코드를 작성하세요!

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [
    {x: 2, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 0},
  ];

  // 시작할 때 오른쪽으로 움직임
  this.memory = 'right';

  // 먹이의 좌표
  this.fruit = {x: 3, y: 5};
}

SnakeGameLogic.prototype.up = function() {
  // 윗 방향키를 눌렀다고 기억
  this.memory = 'top'
}

SnakeGameLogic.prototype.down = function() {
  // 아래 방향키를 눌렀다고 기억
  this.memory = 'down'
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 방향키를 눌렀다고 기억
  this.memory = 'left'
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 방향키를 눌렀다고 기억
  this.memory = 'right'
}

SnakeGameLogic.prototype.nextState = function() {
  
  // 머리를 담을 변수
  let newHead
  let join = this.joints
  let mem = this.memory
  let fruit = this.fruit

  // 새로울 머리에 담을 좌표
  if (mem === 'right') {
    newHead = {
      x : join[0].x + 1,
      y : join[0].y
    }
  } else if (mem === 'left') {
    newHead = {
      x: join[0].x - 1,
      y: join[0].y
    }
  } else if (mem === 'top') {
    newHead = {
      x: join[0].x,
      y: join[0].y - 1
    }
  } else if (mem === 'down') {
    newHead = {
      x: join[0].x,
      y: join[0].y + 1
    }
  }
  
  
  // 먹이를 먹었을 때 꼬리가 늘어남
  if (!(join[0].x === fruit.x && join[0].y === fruit.y)) {
    this.joints.pop()
  } else {
    fruit.x = Math.floor(Math.random()*COLS);
    fruit.y = Math.floor(Math.random()*ROWS);
  }
  
  // 뱀이 자기 몸에 부딪혔을 때
  if (this.joints.some(joints => joints.x === newHead.x && joints.y === newHead.y)) {
    return false
  }
  
  this.joints.unshift(newHead)

  // 머리가 특정 좌표 밖으로 나가면 게임을 종료시킨다.
  console.log(`nextState`);
  if(this.joints[0].x < 0 || this.joints[0].y < 0 || this.joints[0].y > 19 || this.joints[0].x > 29) {
    // 게임이 끝났으면 `false`를 반환
    return false
  } else {
    // 게임이 아직 끝나지 않았으면 `true`를 반환
    return true
  }
}

export default SnakeGameLogic;
