
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let masResult = [];
    if (matrix === undefined) return [];
    matrix.map((itemArray, index) => {
        console.log(itemArray, index);
        if (index === 0 || index % 2 === 0) {
            masResult.push(...itemArray);
        } else {
            masResult.push(...itemArray.reverse());
        }
    })
    return masResult
}
