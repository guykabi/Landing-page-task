
  function sendDetails (form){ //Sending the form from laptop screen
       emailjs.sendForm('service_fsolbnj','template_nblsqn6','#formUserDetails').then((res)=>{
         if(res.status === 200)
         {
            form.submit()
            location.href = "thankyou.html"
         }})
}  

function sendDetails2 (form){ //Sending the form to emailjs from mobile mode
  emailjs.sendForm('service_fsolbnj','template_nblsqn6','#formUserDetails2').then((res)=>{
    if(res.status === 200)
    {
       form.submit()
       location.href = "thankyou.html"
    }})
}  
  

function navigateTo(){ //Scroll to contact form on mobile mode 
  let elem = document.getElementById("exactHere");
    elem.scrollIntoView({behavior:'smooth'});
} 

//Take the paramater from the thank you page to see
//if there is need to scroll to the detail form
const params = new URLSearchParams(window.location.search);
let detail =  params.get("detail")

function navigateOnLoad(){ //Scroll to contact form on mobile mode from the thank you page
  if(detail === 'yes'){
    let elem = document.getElementById("exactHere");
    elem.scrollIntoView({behavior:'smooth'});
  }
} 


function playVideo() //Switch the cover image of the first video to autoplay the video
{
  let video = document.getElementById('video1') 
  let coverImage = document.getElementById('coverImage1')
  coverImage.style.display='none'
  video.style.display='block'
}

function playVideo2() //Switch the cover image of the second video to autoplay the video
{
  let video = document.getElementById('video2') 
  let coverImage = document.getElementById('coverImage2')
  coverImage.style.display='none'
  video.style.display='block'
}









