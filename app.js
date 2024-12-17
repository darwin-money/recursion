function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return `${year} is a leap year.`;
    } else {
      return `${year} is not a leap year.`;
    }
  }
  
  console.log(isLeapYear(2024));  // "2024 is a leap year."
  console.log(isLeapYear(2023));  // "2023 is not a leap year."

  
  function ticketPrice(age) {
    if (age <= 12) {
      return "Ticket price: $10 (Children)";
    } else if (age >= 13 && age <= 17) {
      return "Ticket price: $15 (Teenagers)";
    } else {
      return "Ticket price: $20 (Adults)";
    }
  }
  
  console.log(ticketPrice(10));  // "Ticket price: $10 (Children)"
  console.log(ticketPrice(16));  // "Ticket price: $15 (Teenagers)"
  console.log(ticketPrice(30));  // "Ticket price: $20 (Adults)"

  
  function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  console.log(fibonacci(0));  // 0
  console.log(fibonacci(1));  // 1
  console.log(fibonacci(5));  // 5
  console.log(fibonacci(10)); // 55

  
  function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Base case: If string length is 0 or 1, it's a palindrome
    if (str.length <= 1) {
      return true;
    }
    
    // Recursive case: Compare first and last characters
    if (str[0] === str[str.length - 1]) {
      return isPalindrome(str.slice(1, str.length - 1));
    }
    
    return false;
  }
  
  console.log(isPalindrome("A man, a plan, a canal, Panama"));  // true
  console.log(isPalindrome("hello"));  // false
  