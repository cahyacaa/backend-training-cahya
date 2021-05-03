var a = [0, 2, 3, 42, 4, 2]

rateeach = (inputarr) => {
    let arr = []
    inputarr.forEach(element => {
        result = element / inputarr.length
        arr.push(result)
    });
    return arr
}


rate = (inputarr) => {
    let baru=0
    inputarr.forEach(element => {
        baru+=element
        result= baru/inputarr.length
    });
    return result.toFixed(2)
}
console.log(a)
console.log(rate(a))