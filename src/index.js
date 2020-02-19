
// You should implement your task here.

module.exports = function towelSort (matrix) {

    let result = new Array();
    if (matrix != undefined){
for (let i = 0; i < matrix.length; i++) {
    if (i%2 != 0) {
        for (let j = matrix[i].length-1; j > 0; j--) {
            for (let k = 0; k < j; k++) {
                if (matrix[i][k] < matrix[i][k+1]) {
                    tmp = matrix[i][k];
                    matrix[i][k] = matrix[i][k+1];
                    matrix[i][k+1] = tmp;
                }                
            }
        }
    }
}


for (let i = 0; i < matrix.length; i++) { 
    for (let j = 0; j < matrix[i].length; j++) {
        result.push(matrix[i][j]);
    }
}
    }
  return result;
}
