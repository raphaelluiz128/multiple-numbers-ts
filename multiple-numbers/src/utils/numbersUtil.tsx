//generation of numbers
//Verification of multiple numbers of 35 (Nama Team), then of 7 (Team) and last of 5 (Nama)

function multiple(n: number, m: number): any {
  if (n % m === 0) {
    return 1;
  }
};

function generateNumbers(): any {
  var numbers: any[] = new Array(100).fill(0).map((e, i) => (i + 1));
  for (var i = 0; i < 100; i++) {
    if (multiple(numbers[i], 35) === 1) {
      numbers[i] = 'Nama Team';
    } else if (multiple(numbers[i], 7) === 1) {
      numbers[i] = 'Team';
    } else if (multiple(numbers[i], 5) === 1) {
      numbers[i] = 'Nama';
    }
  }
  return numbers;
};

export default generateNumbers();