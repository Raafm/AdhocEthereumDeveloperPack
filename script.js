function is_palindrome(raw){
  //remove non alpha numeric
  //lowercase all the remaining chars
  const cleaned = raw.replaceAll(/[^0-9a-zA-Z]/g, '') .toLowerCase();
  //parse the str from left to right and, at the same time from right to left
  //if the the chars matches every time it is a palindrome
  //just need to check until the halfway because after that the checks are redundant (were already checked)
  const L = cleaned.length;
  for(let i = 0; i<= L/2; i++){
    let c1 = cleaned[i];
    let c2 = cleaned[L-1-i];
    if (c1 != c2) return false;
  }
  return true
}
function checkInput(str) {

  if (is_palindrome(str)){
      return str + " is a palindrome"
  }  
  return str + " is not a palindrome"

}

document.addEventListener('DOMContentLoaded', () => {
  const inputEl  = document.getElementById('text-input');
  const btn      = document.getElementById('check-btn');
  const resultEl = document.getElementById('result');

  btn.addEventListener('click', () => {
    const value = inputEl.value.trim();
    if (!value) {
      alert('Please input a value.');
    } else {
      const answer = checkInput(value);
      resultEl.textContent = answer;
    }
  });
});