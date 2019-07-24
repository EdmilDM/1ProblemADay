// naive implementation, only 60% needs optimizing
// https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/flags/
// https://app.codility.com/demo/results/trainingJWZ9TY-7VE/

function solution(A) {
    const peaks = [];
    
    for(let i=1; i < A.length;i++){
        if(A[i-1] < A[i] && A[i+1] < A[i]){
            peaks.push(i);
        }
    }
    
    if(peaks.length===0){
        return 0;
    }
    
    
    for(let i = peaks.length; i >= 1; i--){
        if(i ===1){
            return 1;
        }
        else if(i === peaks.length){
            if(checkMax(peaks)){
                return i;
            }
        }
        else{
            if(find(peaks,i)){
                return i;
            }
        }
    }
    return 0;
}

function checkMax(peaks){
    for(let i=0; i < peaks.length;i++){
        if(i === peaks.length -1){
            return true;
        }
        
        if(peaks[i+1] - peaks[i] < peaks.length){
            return false;
        }
    }
    return true;
}

function find(peaks, n){
    let position = 0, currentLength = 0, possibleSolution = [];
    for(let i=0; i < peaks.length - n; i++){
        for(let j=i; j < peaks.length;j++){
            if(possibleSolution.length === 0){
                possibleSolution.push(peaks[j]);
            }
            else{
                if(peaks[j] - possibleSolution[possibleSolution.length-1] >= n){
                    possibleSolution.push(peaks[j]);
                }
            }
            
        }
        if(possibleSolution.length === n ){
            return true;
        }
        possibleSolution = [];
    }
    return false;
}