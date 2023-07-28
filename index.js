/*
 *Author:Md Sholayman
 *Description:First assignment project in MERN-stack Development Course.
 *Date : 28 July , 2023
 */

//topic-1:Online Store Discount Calculator (If-Else Statement)

function disCalculator(amount) {
  if (amount < 50) {
    console.log("No discount is available");
  } else if (amount >= 50 || amount <= 100) {
    const discount = (amount * 5) / 100;
    const total = amount - discount;
    console.log(total, discount);
  } else if (amount >= 100 || amount <= 200) {
    const discount = (amount * 10) / 100;
    const total = amount - discount;
    console.log(total, discount);
  } else if (amount >= 200) {
    const discount = (amount * 15) / 100;
    const total = amount - discount;
    console.log(total, discount);
  }
}

disCalculator();

//Topic-2: Filter Even Numbers

const givenArr = [12, 34, 45, 23, 6, 78, 54, 90];

const filteredArr = givenArr.filter((arr) => arr % 2 == 0);
console.log(filteredArr);

//Topic-3: Multiplication Table Generator

function onMultiplication(input) {
  for (let i = 1; i < 11; i++) {
    console.log(input + "*" + i + "=" + input * i);
  }
}
onMultiplication();

//Topic: Grade Calculator (JavaScript Switch Case)

function calculateGrade(mark) {
  let grade;
  switch (true) {
    case mark >= 90:
      grade = "A";
      break;

    case mark == 89 || mark >= 80:
      grade = "B";
      break;

    case mark == 79 || mark >= 70:
      grade = "C";
      break;

    case mark == 69 || mark >= 60:
      grade = "D";
      break;

    case mark < 60:
      grade = "F";
      break;

    default:
      "Invalid Score";
      break;
  }
  console.log(grade);
}

calculateGrade(90);
