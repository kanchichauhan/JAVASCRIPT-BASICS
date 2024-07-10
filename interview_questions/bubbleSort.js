const arr = [45,34,56,78,34,1,23,12,45,911,499];
let i,j;
// BUBBLE SORT -  Iteratively compares adjacent elements and swaps them if they are in the wrong order.

for (i=0;i<arr.length;i++) {
    for (j=i+1;j<arr.length;j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp
        }
    }
}
console.log(arr)