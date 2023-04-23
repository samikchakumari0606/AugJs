

let nikeArr=JSON.parse(localStorage.getItem("pro"))||[]
// console.log(nikeArr)
let container=document.getElementById("container");
let numOfProduct=document.getElementById("no_of_product");
let totalPrice=document.getElementById("price");
displayTable(nikeArr);


function displayTable(nikeArr){
    container.innerHTML="";
    let addToCart= 0;
    let total=0;
    nikeArr.forEach(function(elem,index){
        addToCart++;
        total=total+Number(elem.price)
        let div=document.createElement("div");
        let name=document.createElement("p");
        name.innerText=elem.name;
        let brand=document.createElement("p");
        brand.innerText=elem.brand;
        let price=document.createElement("p");
        price.innerText=elem.price;
        let del=document.createElement("button");
        del.innerText="delelte";
        del.addEventListener("click",function(){
            delpro(index)
        })
        div.append(name,brand,price,del);
        container.append(div);
        numOfProduct.innerText=addToCart;
        totalPrice.innerText=total;
    })
}

function delpro(index){
    nikeArr.splice(index,1);
    displayTable(nikeArr);
    localStorage.setItem("pro",JSON.stringify(nikeArr))
}