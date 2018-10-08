import { ROWS, COLS } from "./config";

// NOTE: ROWS, COLS에는 행의 개수, 열의 개수가 저장되어 있습니다.
// 이 변수를 활용해서 코드를 작성하세요!

// - 설정 파일(config.js)를 편집해 게임 난이도를 바꾸어보세요.

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }];
  // 키보드를 누르지 않아도 이동할 수 있도록 방향 상태를 저장
  this.direction = "right";
  // 먹이의 좌표
  this.fruit = { x: 3, y: 5 };
}

SnakeGameLogic.prototype.up = function() {
  // 방향 상태 변경
  this.direction = "up";
};

SnakeGameLogic.prototype.down = function() {
  // 방향 상태 변경
  this.direction = "down";
};

SnakeGameLogic.prototype.left = function() {
  // 방향 상태 변경
  this.direction = "left";
};

SnakeGameLogic.prototype.right = function() {
  // 방향 상태 변경
  this.direction = "right";
};

SnakeGameLogic.prototype.nextState = function() {
  console.log(`nextState`);
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  let newHead;
  let newFruit = {};

  if (this.direction === "up") {
    newHead = {
      x: this.joints[0].x,
      y: this.joints[0].y - 1
    };
  } else if (this.direction === "down") {
    newHead = {
      x: this.joints[0].x,
      y: this.joints[0].y + 1
    };
  } else if (this.direction === "right") {
    newHead = {
      x: this.joints[0].x + 1,
      y: this.joints[0].y
    };
  } else if (this.direction === "left") {
    newHead = {
      x: this.joints[0].x - 1,
      y: this.joints[0].y
    };
  }

  if (
    newHead.y >= ROWS ||
    newHead.y < 0 ||
    newHead.x >= COLS ||
    newHead.x < 0 ||
    this.joints.some(joint => joint.x === newHead.x && joint.y === newHead.y)
  ) {
    return false;
  }

  if (newHead.x === this.fruit.x && newHead.y === this.fruit.y) {
    do {
      newFruit.x = Math.floor(Math.random() * COLS);
      newFruit.y = Math.floor(Math.random() * ROWS);
      this.fruit = newFruit;
    } while (
      (newFruit.x === newHead.x && newFruit.y === newHead.y) ||
      this.joints.some(
        joint => joint.x === newFruit.x && joint.y === newFruit.y
      )
    );
  } else {
    this.joints.pop();
  }

  this.joints.unshift(newHead);
  return true;
};

export default SnakeGameLogic;