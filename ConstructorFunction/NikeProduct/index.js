
function nikeProduct(n,b,p,i){
    this.name=n;
    this.brand=b;
    this.price=p;
    this.image=i;
}

let nikeArr=JSON.parse(localStorage.getItem("pro"))||[]
function addProduct(event){
    event.preventDefault()
    let form=document.getElementById("form");
    let name=document.getElementById("name").value;
    let brand=document.getElementById("brand").value;
    let price=document.getElementById("price").value;
    let image=document.getElementById("image").value;

    let obj= new nikeProduct(name,brand,price,image);
    nikeArr.push(obj);
    // console.log(nikeArr)
    localStorage.setItem("pro",JSON.stringify(nikeArr));
}