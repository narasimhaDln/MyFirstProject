let input = [1, 4, 5, 6, 10];
function sumNumber(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum=sum+arr[i]
  }
  console.log(sum)
}
sumNumber(input)