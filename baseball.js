const readline = require("readline");

//랜덤한 3자리 숫자 생성(정답 생성)
const randomNum = () => {
  let array = [];
  while (array.length < 3) {
    //1 ~ 9 사이 숫자 생성
    let num = Math.floor((Math.random() + 0.1) * 9);

    // 중복된 수 확인
    if (!array.includes(num)) {
      array.push(num);
    }
  }
  return array;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  //입력값이 3자리 숫자가 아닐 때
  if (input.length !== 3) {
    console.log("3자리 숫자를 입력해주세요");
  } else {
    const array = randomNum();
    // console.log(input); //test
    console.log(array); //test
    //   rl.close(); //test
  }
});

rl.on("close", () => {
  console.log("게임 종료"); //test
  process.exit();
});
