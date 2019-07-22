//https://codeforces.com/problemset/problem/1195/B

var line = readline();
var n = line.split(' ')[0];
var k = line.split(' ')[1];
var sum = 0;

if(n == 1 && k ==1){
    print(0);
}

for(var i =1; i <= n-1; i++){
    if(gaussSum(i) - (n-i) == k){
        print(n-i);
        break;
    }
}

function gaussSum(n){
    return (n * (n+1))/2;
}