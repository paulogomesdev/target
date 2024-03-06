export default function verify(num) {
  let n1 = 0;
  let n2 = 1;
  while (n2 < num) {
    [n1, n2] = [n2, n1 + n2];
  }
  return n2 === num;
}

const inputNumber = document.getElementById('input-verify');
const buttonVerify = document.getElementById('button-verify');

buttonVerify.addEventListener('click', () => {
  const num = parseInt(inputNumber.value);
  if (isNaN(num)) {
    window.alert('Número válido!');
  } else if (verify(num)) {
    window.alert(`O número ${num} pertence a sequência de Fibonacci.`);
  } else {
    window.alert(`O número ${num} não pertence sequência de Fibonacci.`);
  }
});