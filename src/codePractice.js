import {ROWS, COLS} from './config';

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
  
  // 새로운 머리를 담을 변수
  let newHead;
  const mem = this.memory;
  const join = this.joint;
  
  if (mem === 'right') {
      newHead = {
      x : join[0].x + 1,
      y : join[0].y
      }
    } else if (mem === 'left') {
      newHead = {
        x : join[0].x - 1,
        y : join[0].y
        }
    } else if (mem === 'top') {
      newHead = {
        x : join[0].x,
        y : join[0].y - 1
      }
    } else if (mem === 'down') {
      newHead = {
        x : join[0].x,
        y : join[0].y + 1
      }
    }

  join.unshift(newHead);


  // 머리의 위치와 나머지의 위치를 모두 한번씩 비교해봤을 때, 위치가 동일하면, 게임을 종료시킨다.
  for (let i = 1; i < this.joints.length; i++) {
    if (this.joints[0].x === this.joints[i].x && this.joints[0].y === this.joints[i].y) {
      return false
    }
  }

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
