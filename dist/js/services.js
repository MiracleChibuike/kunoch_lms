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
 

// addBorder;
const update_Active_Link = () => {
  if (home_Element) {
    home_Element.classList.add("yes");
  } else {
    home_Element.classList.remove("yes");
  }
};

// update_Active_Link();

const load_Home_page = () => {
    window.location.href = "Index.html"
};

// home_Element.addEventListener("click", (e) => {
//     load_Home_page()
// })

// let services_El = document.getElementById("services_El");

// services_El.addEventListener("click", (e) => {
//   window.location.href = "Services.html";
// });

const check = () => {
    if (services_El) {
        services_El.classList.add("yes")
    } else{
        services_El.classList.remove("yes")
    }
}

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
// contact_El.addEventListener("click", (e) => {
//   load_contact_page();
// });
