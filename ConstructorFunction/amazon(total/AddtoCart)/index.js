function amazonProduct(n, c, i, p, g, s) {
  this.name = n;
  this.category = c;
  this.image = i;
  this.price = p;
  this.gender = g;
  this.sold = s;
}

let amazonArr = JSON.parse(localStorage.getItem("product"))||[]
function addproduct(event) {
  event.preventDefault();
  let form = document.getElementById("form");
  let name = document.getElementById("name").value;
  let category = document.getElementById("category").value;
  let image = document.getElementById("image").value;
  let price = document.getElementById("price").value;
  let gender = document.getElementById("gender").value;
  let sold = document.getElementById("sold").value;

  let obj = new amazonProduct(name, category, image, price, gender, sold);
  amazonArr.push(obj);
//   console.log(amazonArr);
 localStorage.setItem("product",JSON.stringify(amazonArr))
}
