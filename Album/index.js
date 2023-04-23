

function addImage(){
    let url= document.getElementById("url").value;
    let myImg=JSON.parse(localStorage.getItem("img"))||[];
     myImg.push(url);
     localStorage.setItem("img",JSON.stringify(myImg))
}