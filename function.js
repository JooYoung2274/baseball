//1. 랜덤한 3자리 숫자 생성(정답 생성)
const randomNum = () => {
  let array = [];
  while (array.length < 3) {
    let num = Math.floor((Math.random() + 0.1) * 9);

    if (!array.includes(num)) {
      array.push(num);
    }
  }
  return array;
};

//세자리수 입력 (게임 시작)
const gamePlay = (input, randomArray) => {
  if (randomArray.join("") === input) {
    console.log("3 스트라이크 \n\n3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  } else {
    inputCheck(input, randomArray);
  }
};

const inputCheck = (input, randomArray) => {
  const inputArray = inputNum(input);
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < 3; i++) {
    if (inputArray[i] === randomArray[i]) {
      strike++;
    } else if (randomArray.includes(inputArray[i])) {
      ball++;
    }
  }
  console.log(`${strike} 스트라이크, ${ball} 볼 \n`);
};

// input값 숫자로 변경 후 배열로 리턴
const inputNum = (input) => {
  const inputArray = input.split("").map((v) => Number(v));
  return inputArray;
};

module.exports = {
  gamePlay,
  randomNum,
};
