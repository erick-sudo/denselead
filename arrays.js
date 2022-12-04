const numbers = ((x)=>{
    let random = []
    for(let i=0;i<x;i++){
        random.push(Math.ceil(Math.random()*1000))
    }
    return random
})(50)

console.log(numbers)

console.table(numbers.filter(x => x%2==0))