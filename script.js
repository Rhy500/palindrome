const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const originalText = textInput.value;

  if (!originalText.trim()) {
    alert("Please input a value.");
    return;
  }

  const cleaned = originalText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  const isPalindrome = cleaned === reversed;

  result.textContent = isPalindrome
    ? `${originalText} is a palindrome.`
    : `${originalText} is not a palindrome.`;
});
