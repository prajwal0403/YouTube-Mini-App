
    const results_div=document.getElementById("search_results");
    searchVideo();

    async function searchVideo(){
     
     try{ 
        let video_querry=document.getElementById("video").value||"most popular videos in india";
        let response= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${video_querry}&type=video&key=AIzaSyAjJ9JfRn7o_pYYJnPsqAgoKpGD600QDQU&maxResults=20`);
        let data=await response.json()
        let videos=data.items; 

        appendvideos(videos);


        console.log(data)
     }
     catch(err){
         console.log(err);
     }
    }
    const appendvideos = (items) =>{
        results_div.innerHTML=null;
        items.forEach(({snippet, id:{videoId}}) => {
            // let { 
            //     medium: { url }, }=el.snippet.thumbnails;
            // console.log(url);

           let div=document.createElement("div")
            let iframe=document.createElement("img");
            iframe.src=snippet.thumbnails.medium.url;
            iframe.height="160";
            iframe.width="250";
            let name=document.createElement("p")
            name.textContent=snippet.title
         let data_to_send={
             snippet:snippet,
             videoId:videoId
         }

  div.onclick =()=>{
 showVideo(data_to_send)
      }



            div.append(iframe,name)
            results_div.append(div)
        })

    }
    function showVideo(data){
        localStorage.setItem("clicked_video",JSON.stringify(data))
        window.location.href="video.html"
    }


    //queston 2

    