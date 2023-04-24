
const video_details_div=document.getElementById("box")
function videoItem(){
    let {videoId}=JSON.parse(localStorage.getItem("clicked_item"));
    let iframe=document.createElement("iframe");
    iframe.src=`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
    iframe.width="100%";
    iframe.height="100%";
    iframe.setAttribute('allowfullscreen',true);
    video_details_div.append(iframe);

}