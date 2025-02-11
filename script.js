function checkPalindrome() {
     
   let str = document.getElementById("text-input").value;
   let resultText = document.getElementById("result");
if(str===""){
alert('Please input a value')
}
   // Remove non-alphanumeric characters and convert to lowercase
   let cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
   
   // Reverse the string and compare with the original
   if (cleanStr === cleanStr.split("").reverse().join("")) {
       resultText.textContent = `${str} is a palindrome!`;
       resultText.style.color = "green";
   } else {
       resultText.textContent = `${str} is not a palindrome.`;
       resultText.style.color = "red";
   }
}