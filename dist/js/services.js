let main_loader = document.querySelector(".loader")
let support = document.getElementById("center_load");
let content_El = document.getElementById("content")


//  Prevent Image dragging
const showloader = () => {
  setTimeout( () => {
      support.style.display = "none";
      content_El.style.display = "block";
  main_loader.style.display = "none";
  }, 3000)
  // content.style.display = "block"

};
showloader();

console.log(support);


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


let nav_container = document.querySelector(".nav_ContentsAll");
let menu_Display = document.getElementById("menu_show");
let cancel_Icon = document.getElementById("menu_hide");

console.log( nav_container);
console.log( menu_Display);
console.log( cancel_Icon);

const show_Items = () => {
    if (nav_container.style.display = "none"){
        console.log("True")
        nav_container.style.display = "block";
        menu_Display.style.display = "none";
        cancel_Icon.style.display = "block"
    }
};

menu_Display.addEventListener("click", show_Items)

const hide_Items = () => {
    if (nav_container.style.display = "block"){
        nav_container.style.display = "none";
        cancel_Icon.style.display = "none"
        menu_Display.style.display = "block"
    }
};

cancel_Icon.addEventListener("click", hide_Items)

