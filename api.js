const URL = "https://dummyjson.com/posts";
let data = document.querySelector("posts");
let btn = document.querySelector( 'button' );

let corona = async () => {
    console.log("loading data..");
    let response = await fetch(URL);
    // console.log(response);
    let data = await response.json();
    // console.log(data);
    // para.innerText = data.posts[4].title;

    let allposts =  data.posts;
    console.log(allposts);
    let tbl="";
    allposts.map((post)=>{
        tbl += `
                <div class="d-flex">
                    <div class="card w-100" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.body}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
              `
    })

    document.getElementById("posts").innerHTML = tbl;
}
btn.addEventListener('click', corona)