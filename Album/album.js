


let id;
function start(){
    let myImg=JSON.parse(localStorage.getItem("img"))||[];
    let box=document.getElementById("box");
    let img=document.createElement("img");
    box.innerHTML=null;


    let i=0;
    img.src=myImg[0];
    box.append(img);
    i++;
    id=setInterval(function(){
        img.src=myImg[i];
        i++;

        if(i==3){
            i=0;
        }

        box.append(img)
    },3000)
}



function stop(){
    clearInterval(id)
}