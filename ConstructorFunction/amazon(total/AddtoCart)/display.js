

let displayArr =JSON.parse(localStorage.getItem("product"))||[];
let container=document.getElementById("container");
let totalFinal=document.getElementById("total");


displayTable(displayArr);



function displayTable(displayArr){
    container.innerHTML=""
    let totalProduct=0;
    let totalPrice=document.getElementById("cart_total");
    let total=0;

    displayArr.forEach(function(elem,index){
        totalProduct++; // TO CALULATE NUMBER OF PRODUCT;//ADD TO CART NUMBER OF PRODUCT
        total=total+Number(elem.price)
        

        let div=document.createElement("div");
        let name=document.createElement("p");
        name.innerText=elem.name;
        let category=document.createElement("p");
        category.innerText=elem.category;
        let image=document.createElement("img");
        image.src=elem.image;
        let price=document.createElement("p");
        price.innerText=elem.price;
        let gender=document.createElement("p");
        gender.innerText=elem.gender;
        let sold=document.createElement("p");
        sold.innerText=elem.sold;
        let del=document.createElement("button");
        del.innerText="Delete";
        del.addEventListener("click",function(){
            delproduct(index)
        })
        div.append(image, name,category,price,gender,sold,del);
        container.append(div);
        totalFinal.innerText=totalProduct; //Add to cart
        totalPrice.textContent=total       // total price of the product

    })
}


function delproduct(index){
    displayArr.splice(index,1);
    console.log(displayArr);
    localStorage.setItem("product",JSON.stringify(displayArr));
    displayTable(displayArr);
   
}