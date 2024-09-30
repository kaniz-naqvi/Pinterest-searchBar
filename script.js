var images=[
    {
        name:"Profile picture for girls, hijab girl dp, eid status, selfie",
        imageurl:"https://i.pinimg.com/474x/9d/38/f6/9d38f6d13124aaa632443da31005203b.jpg",
        username:"Aylia",
        userimg:"https://i.pinimg.com/236x/e7/62/d8/e762d8c8eca288d9f04f20e9470afdd4.jpg"
    },
    {
        name:"Girl in nature, hijab fashion girl, selfie",
        imageurl:"https://i.pinimg.com/236x/5b/44/ae/5b44aeaf54d7935c23a2a2d84c0378fb.jpg",
        username:"Fashion Hub",
        userimg:"https://i.pinimg.com/236x/1f/3a/a2/1f3aa27489517ce51156ffaca4f563ae.jpg"
    },
    {
        name:"Hidden Face Girl Dp, hijab, megenta color, pink dress, hidden face",
        imageurl:"https://i.pinimg.com/236x/1f/3a/a2/1f3aa27489517ce51156ffaca4f563ae.jpg",
        username:"Eyes",
        userimg:"https://i.pinimg.com/236x/0f/80/65/0f80655d9030e8b6d7fae72e8563c259.jpg"  
    },
    {
        name:"Hidden Face Girl Dp, grey eys,hijab, phone case",
        imageurl:"https://i.pinimg.com/236x/17/5a/8b/175a8b0d5f6356c2e9c77fd6c683be75.jpg",
        username:"Ayman",
        userimg:"https://i.pinimg.com/236x/2f/12/c8/2f12c873a261e30a29791140103b4901.jpg"     
    },
    {
        name:"Girl in nature, hijab, lightings, nature, evening",
        imageurl:"https://i.pinimg.com/236x/62/01/29/620129b611e12ed8b4f5ec1787397e55.jpg",
        username:"Khadija",
        userimg:"https://i.pinimg.com/236x/ca/de/bc/cadebc9149fccfa3689fe16e756d3ed3.jpg"     
    },
    {
        name:"nature phone wallpaper, flowers, good morning, bright",
        imageurl:"https://i.pinimg.com/236x/e0/51/1c/e0511ced378054598dd24913ce650f67.jpg",
        username:"Dream Girl",
        userimg:"https://i.pinimg.com/236x/db/9d/7f/db9d7f3d87407283ef61db865df2292c.jpg"       
    },
    {
        name:"nature wallpaper for phone, colorful flowers, stones, nature lover",
        imageurl:"https://i.pinimg.com/474x/b2/dd/5d/b2dd5dcc1a86fb6a7de53a6b01260895.jpg",
        username:"Nimral",
        userimg:"https://i.pinimg.com/236x/f3/01/0d/f3010dd510be5f90cb23a70a1e1109c2.jpg"       
    },
    {
        name:"nature wallpaper night lovers, sunset",
        imageurl:"https://i.pinimg.com/236x/1d/69/9f/1d699f73e62314fe2a5ce39b58e217cb.jpg",
        username:"Mehak",
        userimg:"https://i.pinimg.com/236x/2f/42/3e/2f423e775724b114a31c0bade2d12714.jpg"       
    },
    {
        name:"nature wallpaper, white dress, nature, girls dp, hijab, white phone case",
        imageurl:"https://i.pinimg.com/236x/8e/53/38/8e5338d0f236ac8465011bfbf87b7753.jpg",
        username:"Rida",
        userimg:"https://i.pinimg.com/236x/09/78/f6/0978f6d112f176e7526e7a9aff403a57.jpg"  
    },
    {
        name:"nature wallpaper for phone, seaside lovers, evening, sadness, sunset",
        imageurl:"https://i.pinimg.com/236x/0c/de/40/0cde401f2a229c04159e8a6f772b87c1.jpg",
        username:"Kinza",
        userimg:"https://i.pinimg.com/236x/0c/de/40/0cde401f2a229c04159e8a6f772b87c1.jpg"  
    },
];
// Function to display images
function displayImages(imageArray) {
    const mainElement = document.querySelector("main");
    mainElement.innerHTML = ''; // Clear existing images
    imageArray.forEach((obj) => {
        mainElement.innerHTML += `
            <div class="images">
                <img src="${obj.imageurl}" alt="${obj.name}">
                <div class="username">
                    <div class="userimg">
                        <img src="${obj.userimg}" alt="profile image of user">
                    </div>
                    <div class="name">${obj.username}</div>
                </div>
            </div>`;
    });
}

// Initial display of all images
displayImages(images);
var searchBar = document.querySelector(".searchBar");
searchBar.addEventListener("input", searchResult);
function searchResult(){
    var input=searchBar.value.toLowerCase();
    const filteredImages=images.filter(image=>
        image.name.toLowerCase().includes(input)||
        image.username.toLowerCase().includes(input)
    );
    displayImages(filteredImages);
}
