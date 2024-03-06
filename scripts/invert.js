export default function invert() {
    const result = document.getElementById('invertRes');
    const wordInput = document.getElementById('input-invert');
    const word = wordInput.value;
  
    let newText = '';
    for (let i = word.length - 1; i >= 0; i--) {
      newText += word[i];
    }
    result.textContent = newText;
  }
  const button = document.getElementById('button-invert');
  button.addEventListener('click', invert);
  