
//Creating an object 
const product={
    name : "pen",
    price : 20,
    stock : 200
};

console.log(product)

for(let count in product){
    console.log(`${count} : ${product[count]}`);
}