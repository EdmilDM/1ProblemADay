//https://codeforces.com/contest/441/problem/A

var A = [];
var solution = [];
var line = readline();
var n = line.split(' ')[0];
var v = line.split(' ')[1];
 
for(var i =0; i < n; i++){
    A.push(readline().split(' '));
    for(var j = 1; j <= A[i][0]; j++){
        if(parseInt(A[i][j]) < parseInt(v)){
            solution.push(i+1);
            break;
        }
    }
}
 
print(solution.length);
print(solution.join(' '));