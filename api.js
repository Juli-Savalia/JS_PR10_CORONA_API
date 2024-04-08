const URL = "https://dummyjson.com/posts";
let para = document.querySelector("p");
let btn = document.querySelector( 'button' );

let corona = async () => {
    console.log("loading data..");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    para.innerText = data.posts[4].title;

}
btn.addEventListener('click', corona);
