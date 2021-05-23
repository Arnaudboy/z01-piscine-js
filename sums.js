function f(target, current_sum=0, start=1, result=[], output=[]) {
    if (target === 0 || target === 1) return output;
    // .slice() => no modifications on result
    if (current_sum === target) return output.push(result.slice());

    for (let i = start; i < target; i++) {
        let temp_sum = current_sum + i;
        if (temp_sum <= target) {
            result.push(i);
            f(target, temp_sum, i, result, output);
            // remove last element => backtracking
            result.pop();
        } else {
            return;
        }
    }
};

let sums = function(target) {
    let output = [];
    let result = [];
    f(target, 0, 1, result, output);
    return output;
};

let n = 4;
let result = sums(n);
console.log(result);
