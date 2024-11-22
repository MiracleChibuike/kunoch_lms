//  Prevent Image dragging

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("mousedown", function (event) {
    event.preventDefault();
  });
  img.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });
});

// Add a box_shadow to the nav_container when a user scrolls
let nav_Container = document.querySelector(".nav_Container");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav_Container.classList.add("nav_shadow");
  } else {
    nav_Container.classList.remove("nav_shadow");
  }
});

// nav_Links.forEach((link) => {
//   link.addEventListener("click", () => {
//     // Remove the active class from all links
//     nav_Links.forEach((nav) => nav.classList.remove("active"));

//     // Add the active class to the clicked link
//     link.classList.add("active");
//   });
// });
let home_Element = document.getElementById("Home_El");

const load_Home_page = (e) => {
  window.location.href = "Index.html"
} 

// addBorder;
const update_Active_Link = () => {
  if (home_Element) {
    home_Element.classList.add("yes");
  } else {
    home_Element.classList.remove("yes");
  }
};

// update_Active_Link();

let services_El = document.getElementById("services_El");

const load_services_page = (e) => {
  window.location.href = "Services.html";
};

let about_El = document.getElementById("about_EL");

const about_Page = (e) => {
  window.location.href = "About_Us.html";
};

let contact_El = document.getElementById("Contact");

const load_contact_page = (e) => {
  window.location.href = "Contacts.html";
};

let nav_links = document.querySelector(".nav_ContentsAll");
let menu = document.getElementById("menu_show");
let cancel = document.getElementById("menu_hide");

// console.log(nav_links);
// console.log(menu);
// console.log(cancel);

const show_Items = () => {
    if (nav_links.style.display = "none") {
        // console.log("true")
        nav_links.style.display = "block";
        menu.style.display ="none";
        cancel.style.display ="block"
      }
};

menu.addEventListener("click", show_Items);

const close_Items = () => {
    if (nav_links.style.display = "block") {
        cancel.style.display = "none";
        menu.style.display ="block";
        nav_links.style.display ="none"
      }
};

cancel.addEventListener("click", close_Items);