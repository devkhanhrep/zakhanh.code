let a=0
let count = 0
let sum = 0
while (count < 30) {
    if ( a % 7 === 0){
        sum += a;
        count++;
    }a++
}
document.write(sum)