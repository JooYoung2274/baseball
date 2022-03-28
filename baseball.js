const readline = require("readline");
const { gamePlay, randomNum } = require("./function");

const randomArray = randomNum();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  console.log(`# 숫자를 입력해주세요 : ${input}`);
  if (input.length !== 3) {
    console.log("3자리 숫자를 입력해주세요");
  } else {
    gamePlay(input, randomArray);

    //   rl.close(); //test
  }
});

rl.on("close", () => {
  console.log("게임 종료"); //test
  process.exit();
});
