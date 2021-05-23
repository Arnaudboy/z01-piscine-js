const sign = (num) => {return num != 0 ? num/Math.abs(num) : 0};
const sameSign = (num1, num2) => {return (num1/num2) > 0 ? true : num1 == 0 && num2 == 0 ? true : false};
