function reverseInteger(num) {
    const reversedString = num.toString().split('').reverse().join('');
    const reversedNum = parseInt(reversedString, 10);
  
    return reversedNum;
  }
  
  // Example usage:
  const originalNum = -256;
  const reversedNum = reverseInteger(originalNum);
  console.log(reversedNum); // Output: 54321
  