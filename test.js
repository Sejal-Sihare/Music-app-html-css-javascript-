console.log("sejal");
let songindex=0;
let audioelement= new Audio('songs/1.mp3')
let masterplay=document.getElementById('masterplay')
let myprogressbar=document.getElementById('myprogressbar')
let gif=document.getElementById('gif')
let mastersongname=document.getElementById('mastersongname')
let songitem=Array.from(document.getElementsByClassName('songitem'))

let songs=[
    {songname: "Ghar more pardesiya",filepath:"songs/1.mp3",coverpath: "cover1.peg.jpeg"},
    {songname: "Desi KalaKar 2",filepath:"songs/2.mp3",coverpath: "cover1.peg.jpeg"},
    {songname: "Heeriye",filepath:"songs/3.mp3",coverpath: "cover1.peg.jpeg"},
    {songname: "Tu aake Dekhle",filepath:"songs/4.mp3",coverpath: "cover1.peg.jpeg"},
    {songname: "Love Dose",filepath:"songs/5.mp3",coverpath: "cover1.peg.jpeg"}
]
songitem.forEach((element,i)=>{
   
element.getElementsByTagName("img")[0].src=songs[i].coverpath;
element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
})


// audioelement play
//handle play pause click
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play()
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')
        gif.style.opacity=1
    }
    else{
        audioelement.pause()
        masterplay.classList.remove('fa-pause-circle')
        masterplay.classList.add('fa-play-circle')
        gif.style.opacity=0
    }
})
//listen audio
audioelement.addEventListener('timeupdate',()=>{
  
   //updateseekbar
   progress= parseInt((audioelement.currentTime/audioelement.duration)*100)
   
   myprogressbar.value=progress
})
myprogressbar.addEventListener('change',()=>{
audioelement.currentTime=myprogressbar.value*audioelement.duration/100
})
 const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.add('fa-pause-circle')
        element.target.classList.remove('fa-play-circle')
     })
     }
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       
        makeallplays()
        
        songindex=parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioelement.src=`songs/${songindex+1}.mp3`
        mastersongname.innerText=songs[songindex].songname;
        
        audioelement.currentTime=0;
        mastersongname.
        audioelement.play()
        gif.style.opacity=1
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=4){
songindex=0;
    }
    else{

songindex+= 1
}
audioelement.src=`songs/${songindex+1}.mp3`
mastersongname.innerText=songs[songindex].songname;
audioelement.currentTime=0
audioelement.play()

        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
songindex=0;
    }
    else{

songindex -= 1
}
audioelement.src=`songs/${songindex+1}.mp3`
mastersongname.innerText=songs[songindex].songname;
audioelement.currentTime=0
        audioelement.play()

        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')

})