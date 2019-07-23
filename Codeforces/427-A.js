// https://codeforces.com/problemset/problem/427/A

var line = readline();
var n = line.split(' ')[0];
line = readline();
var array=line.split(' ');
var sum =0;
var temp;
var solution = 0;

for(var i = 0 ;  i < array.length;i++){
    temp = parseInt(array[i]);
    if(temp < 0){
        if(sum === 0){
            solution++
        }
        else{
            sum--;
        }
    }
    else{
        sum += temp;
    }
}

print(solution);