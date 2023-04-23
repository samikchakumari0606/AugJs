// console.log(this)

// function NikeProduct(){

//     let objNew={
//         name:"NikeProduct",
//         product:2000,
//     }
//     console.log(objNew.name)
// }

// NikeProduct()

// // constructor function

// function NikeProduct(n,p){
//     this.name=n;
//     this.price=p;
// }

// let product1= new NikeProduct("sheos",2000);
// console.log("product1",product1)

function NikeProduct(n, p) {
  this.name = n;
  this.price = p;
}

let arr = [];
function addProduct(event) {
  event.preventDefault();
  let form = document.getElementById("product_from");
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  
  let p1 = new NikeProduct(name, price);
  arr.push(p1);
  console.log("arr", arr);
}
