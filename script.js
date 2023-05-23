function sortList() {
  const input = document.getElementById('inputList').value;
  const numbers = parseNumbers(input);
  const sortedList = numbers.sort((a, b) => a - b);
  document.getElementById('output').textContent = `Sorted List: ${sortedList.join(', ')}`;
}

function calculateMinimum() {
  const input = document.getElementById('inputList').value;
  const numbers = parseNumbers(input);
  const minimum = Math.min(...numbers);
  document.getElementById('output').textContent = `Minimum: ${minimum}`;
}

function calculateAverage() {
  const input = document.getElementById('inputList').value;
  const numbers = parseNumbers(input);
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const average = sum / numbers.length;
  document.getElementById('output').textContent = `Average: ${average.toFixed(2)}`;
}

function parseNumbers(input) {
  return input.split(',').map(num => parseInt(num.trim(), 10));
}
