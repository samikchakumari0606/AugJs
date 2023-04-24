

let api=`AIzaSyBBiN6y4Prkq-jlZP70BWWzcF1nz8IxLvM` 

const searchItem=async() =>{
    try{
        let query=document.getElementById("search").value;
        const res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${api}`);
        const data=await res.json();
        // console.log("data",data.items)
        let actual_data=data.items
        appendVideos(actual_data)
    }
    catch(err){
        console.log("err",err)
    }
   
    
}

//trending videos


// async function trendingVideos(){

//     try{
//       let query=document.getElementById("query").value;
//       let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${my_api}&chart=mostPopular&regionCode=IN`)
//       let data=await res.json();
//       let actual_data=data.items;
//       appendVideos(actual_data)
  
//       console.log("data",data);
//      }
//      catch(err){
//       console.log("err",err);
//      }
    
//   }
//   trendingVideos();

const appendVideos=(data)=>{
    let second=document.getElementById("second");
    second.innerHTML=null;

    data.forEach(({snippet,id})=>{

        const videoId=id.videoId;
        // console.log("videoID",videoId)
        const title=snippet.title;
        // console.log("title",title)
        const channel_Title=snippet.channelTitle;
        // console.log("channel",channel_Title);
        const thumbnail=snippet.thumbnails.high.url
        // console.log("thumbnails",thumbnail)


        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=thumbnail;
        let title_html=document.createElement("h5");
        title_html.innerText=title
        let channel_html=document.createElement("h6");
        channel_html.innerText=channel_Title;

        let data={
            videoId,
            snippet,
        }

        div.onclick=()=>{
            storeClickedVideo(data)
        }

        div.append(img,title,channel_html)
        second.append(div)
        

        
    })

}

function storeClickedVideo(data){
  localStorage.setItem("clicked_item",JSON.stringify(data));
  window.location.href='video.html'
}