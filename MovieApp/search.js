

async function search(){
    try{
        let query=document.getElementById("query").value;
        let res=await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=fcbdda70&s=${query}`);
        let data=await res.json();
        appendMovie(data.Search);
        // console.log(appendMovie)
    }
    catch(err){
        console.log("err",err)
    }
}
// search()

function appendMovie(data){
    // console.log(data);

    if(data==undefined){
        return false
    }
    let box=document.getElementById("box");
    box.innerHTML="";

    data.forEach(function(el){
     
        let div=document.createElement("div");
        let name=document.createElement("p");
        name.innerText=el.Title;
        let image=document.createElement("img");
        image.src=el.Poster;
        let year=document.createElement("p");
        year.innerText=el.Year
        div.append(image,name,year);
        box.append(div);

    })
}

let id;
function debounce(func,delay){
   
    if(id){
        clearTimeout(id)
    }

    id=setTimeout(function(){
    func()
    },delay)
}