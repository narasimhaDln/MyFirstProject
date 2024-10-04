let input = [1, 4, 5, 6, 10];
function maxNumber(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > max) {
      max=arr[i]
    }
  }
  console.log(max)
}
maxNumber(input)