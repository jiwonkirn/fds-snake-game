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
  
  // 꼬리를 담을 변수
  let tail;

  // 오른쪽 키를 눌렀을 때 오른쪽으로 뱀이 움직이게 하는 제어구문
  // 움직임의 방식은 꼬리를 잘라 머리 앞 순서에 붙인다.
  if (this.memory === 'right') {
    
    // 뱀의 머리 좌표가 먹이의 좌표와 일치한다면
    if (this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y) {
      // 꼬리를 자르지 않고
      tail = {} 
      // 먹이가 랜덤좌표로 생성된다.
      this.fruit.x = Math.trunc(Math.random() * 20)
      this.fruit.y = Math.trunc(Math.random() * 19)
    } else {
        // 뱀의 머리 좌표가 먹이의 좌표와 일치하지 않는다면 꼬리를 자른다.
        tail = this.joints.pop()
      }
    
    // 잘라낸 꼬리의 가로좌표를 현재 머리 다음 좌표로 주고
    tail.x = this.joints[0].x + 1
    // 잘라낸 꼬리의 세로좌표를 현재 머리와 같게 준다.
    tail.y = this.joints[0].y 
    // 좌표를 지정한 꼬리를 머리 위치에 요소추가한다.
    this.joints.unshift(tail)

    // 왼쪽 키를 눌렀을 때 오른쪽으로 뱀이 움직이게 하는 제어구문
  } else if (this.memory === 'left') {

    if (this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y) {
      tail = {} 
      this.fruit.x = Math.trunc(Math.random() * 30)
      this.fruit.y = Math.trunc(Math.random() * 20)
    } else {
        tail = this.joints.pop()
      }
  
    tail.x = this.joints[0].x - 1
    tail.y = this.joints[0].y 
    this.joints.unshift(tail)

    // 윗 키를 눌렀을 때 오른쪽으로 뱀이 움직이게 하는 제어구문
  } else if (this.memory === 'top') {
    
    if (this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y) {
      tail = {} 
      this.fruit.x = Math.trunc(Math.random() * 20)
      this.fruit.y = Math.trunc(Math.random() * 19)
    } else {
        tail = this.joints.pop()
      }

    tail.x = this.joints[0].x 
    tail.y = this.joints[0].y - 1
    this.joints.unshift(tail)

    // 아래 키를 눌렀을 때 오른쪽으로 뱀이 움직이게 하는 제어구문
  } else if (this.memory === 'down') {
    
    if (this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y) {
      tail = {} 
      this.fruit.x = Math.trunc(Math.random() * 20)
      this.fruit.y = Math.trunc(Math.random() * 19)
    } else {
        tail = this.joints.pop()
      }

    tail.x = this.joints[0].x 
    tail.y = this.joints[0].y +1
    this.joints.unshift(tail)

  }

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
