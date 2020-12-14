window.addEventListener('DOMContentLoaded', getData);


const datalink2 = "http://keep-it-simple.site/wp-json/wp/v2/room?_embed";

function getData() {

  //console.log('DOM fully loaded and parsed');
  const urlParams = new URLSearchParams(window.location.search);
  console.log("URLSearchParams " + window.location);
  const the_room_id = urlParams.get("room_id");

  //our routing of the script
  if (the_room_id) {
    fetch("http://keep-it-simple.site/wp-json/wp/v2/room/" + the_room_id + "?_embed")
      .then(res => res.json())
      .then(showRoom) //skipping the ForEach loop
  } else if (!the_room_id && window.location.pathname == "singleroom.html") {

    window.location.replace("index.html");
  } else {
    fetch(datalink2)
      .then(res => res.json())
      .then(handleData)
  }
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

      copy.querySelector(".roomnumber").textContent = room.title.rendered;
      copy.querySelector(".guestnumber").textContent = room.guestnumber;
     copy.querySelector(".facilities").textContent = room.facilities;

    const roomDescription = copy.querySelector('#room-description');
  if (roomDescription) {
    roomDescription.innerHTML = room.description;
  }

       const roomImage =  copy.querySelector(".img-room")
  if (roomImage) {
    roomImage.src = room._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
  }


  const a = copy.querySelector('a');
  if (a) {
    a.href += room.id;
  }

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

