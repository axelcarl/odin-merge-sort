let nums = [4, 6, 3, 5, 5, 3, 3, 7, 7, 8, 8, 8, 1, 1, 1, 1]

function mergeSort(a) {
  let b = [];
  let c = [];
  let result = [];
  if (a.length == 1)
    return a;
  else {
    b = mergeSort(a.slice(0, Math.ceil(a.length / 2)))
    c = mergeSort(a.slice(Math.ceil(a.length / 2)))
    let i = 0;
    let j = 0;
    while (result.length < a.length) {
      if (b[i] <= c[j] || c[j] == null) {
        result.push(b[i])
        i++;
      }
      else {
        result.push(c[j])
        j++;
      }
    }
    return result;
  }
}
console.log(mergeSort(nums))