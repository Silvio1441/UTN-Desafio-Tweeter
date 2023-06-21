const posts = [
    {
        name: "Lucas",
        nickname: "@LucasOK",
        timestamp: " 10 minutes ago",
        likes: 5,
        retweets: 3,
        comments: 2,
        userImage: "./img/20.jpg",
        content: "Lorem ipsum dolor sit amet consectetur."
    },
    {
        name: "Vanina",
        nickname: "@Vanina_es",
        timestamp: " 10 minutes ago",
        likes: 5,
        retweets: 3,
        comments: 2,
        userImage: "./img/54.jpg",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    },
    {
        name: "Matias",
        nickname: "@mati_co",
        timestamp: " 10 minutes ago",
        likes: 5,
        retweets: 3,
        comments: 2,
        userImage: "./img/57.jpg",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    }
]

const pepeHTML = document.querySelector(".posts");

const renderizarPosts = (posts)=> {
    pepeHTML.innerHTML = ""
    posts.forEach(post => {
        pepeHTML.innerHTML += `
        <div class = "container">
        <div class="perf-1"><br>
            <img src="${post.userImage}" alt="" class="userImg">
            <div class = "perfText">
            <span>${post.name}</span>
            <span>${post.nickname}</span>
            <span>${post.timestamp}</span>
            <p class = "lor">${post.content}</p>
        </div>
        <br>
        <div>
          
        </div>
        </div>

       
        <br>
        <div class = "resp">
            <br><br>
            <span>${post.likes} likes</span>
            <span>${post.retweets} retweets</span>
            <span>${post.comments} comments</span>
        </div>
        </div>
        
        
              `
    });
}

renderizarPosts(posts)