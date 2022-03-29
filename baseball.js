const readline = require("readline");
const { gamePlay, randomNum, gameRestart } = require("./function");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//게임 시작 판별 변수
let onOff = true;
//랜덤한 세자리 수 (정답)
let randomArray = randomNum();

rl.on("line", (input) => {
  if (!onOff) {
    const restart = gameRestart(input);
    if (!restart) {
      rl.close();
    } else {
      randomArray = randomNum();
      return (onOff = restart);
    }
  }
  console.log(`\n# 숫자를 입력해주세요 : ${input}`);
  const restart = gamePlay(input, randomArray);
  if (!restart) {
    onOff = restart;
    console.log(
      "3 스트라이크 \n\n3개의 숫자를 모두 맞히셨습니다! 게임 종료 \n\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
  }
});

rl.on("close", () => {
  console.log("\n게임 종료");
  process.exit();
});
