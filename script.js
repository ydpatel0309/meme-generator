const generateMemeBtn= document.querySelector(".meme-btn")
const memeTitle= document.querySelector(".meme-generator .meme-title")
const memeAuthor= document.querySelector(".meme-generator .meme-author")
const memeImage= document.querySelector(".meme-generator img")

generateMemeBtn.addEventListener("click", generateMeme)

const updateDetails = (url,title,author) =>{
    memeImage.setAttribute("src", url);
    memeAuthor.innerHTML=author;
    memeTitle.innerHTML=title;
}
function generateMeme(){
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((Response)=>Response.json())
    .then((data)=>{
        //console.log("oj");
        updateDetails(data.url,data.title,data.author);
    });

};

// console.log("generateMeme");