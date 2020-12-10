window.addEventListener('DOMContentLoaded', getData);

const datalink2 = "http://keep-it-simple.site/wp-json/wp/v2/room?_embed&orderby=count";

////////////////////////////////////////////////////////////////////////////WORDPRESS DATA///////////////////////////////////////////////////////
function getData() {
    ////fetch
  //console.log('DOM fully loaded and parsed');

  fetch(datalink2)
    .then(res => res.json())
    .then(handleData)
}
////////////////////////////////////////////////////loop//////////////////////////////////////////////
function handleData(posts) {
  console.log(posts);
  posts.forEach(showRoom);
}
////finds the template clones the template fills in the template apends it =shows the product=bike
function showRoom(room) {
  console.log(room);
    //////////////////////////////////////////////////////finds the template////////////////////////////
  const template = document.querySelector("template").content;
   /////////////////////////////////////////////////////////////////// clones the template//////////////////////////
  const copy = template.cloneNode(true);
    //////////////////////////////////////////fills in the template/////////////////////////
      copy.querySelector(".type").textContent = room._embedded["wp:term"][0][0].name;
    copy.querySelector(".img-room").src = room._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
      copy.querySelector(".roomnumber").textContent = room.title.rendered;
      copy.querySelector(".guestnumber").textContent = room.guestnumber;
     copy.querySelector(".facilities").textContent = room.facilities;


    ///////////////////////////////////////////////////////////appends the template///////////////////////////
  document.querySelector("main").appendChild(copy);
}
////////////////////////////////////////////////////////////////////////////WORDPRESS DATA END///////////////////////////////////////////////////////









////////////////////////////////////////////////////////////////////////////BURGER MENU///////////////////////////////////////////////////////

setBurgerMenu();

function setBurgerMenu(){

    const burger = document.querySelector("svg");
    const nav = document.querySelector("nav");
    burger.addEventListener("click", e => burger.classList.toggle("open"));
    burger.addEventListener("click", e => nav.classList.toggle("move"));
}

///////////////////////////////////////////////////////////////////////////BURGER MENU END///////////////////////////////////////////////////////
