
// Prevent Image dragging

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
        }else{
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

    const check_Active_Link = () => {
      if (home_Element) {
        // Add the 'active' class
        home_Element.classList.add("yes");
        console.log("Active class added:", home_Element);
      } else {
        console.error("Element with ID 'Home_El' not found in the DOM");
      }
    };

    // Call the function
    check_Active_Link();
