export default function (rowString, columnString) {
  let matrix = [];
  for (let i = 0; i <= rowString.length; i++) {
    matrix[i] = new Array(columnString.length + 1).fill(0);
  }
  for (let i = 1; i <= rowString.length; i++) {
    matrix[i][0] = i;
  }
  for (let i = 1; i <= columnString.length; i++) {
    matrix[0][i] = i;
  }

  for (let i = 1; i <= rowString.length; i++) {
    for (let j = 1; j <= columnString.length; j++) {
      if (rowString[i - 1] === columnString[j - 1]) {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1],
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
        );
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
        );
      }
    }
  }
  return matrix[rowString.length][columnString.length];
}
