
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

// load services page


    // Articles Section
let date_indicators = document.querySelectorAll(".date_indicator");

// Function to update time for all elements
const update_article_time = () => {
  const current_date = new Date();
  let new_month = (current_date.getMonth() + 1).toString().padStart(2, "0");
  let new_day = current_date.getDate().toString().padStart(2, "0");
  let new_year = current_date.getFullYear();
  let present_hour = current_date.getHours();
  let present_minute = current_date.getMinutes().toString().padStart(2, "0");

  let am_pm = present_hour >= 12 ? "PM" : "AM";
  if (present_hour > 12) {
    present_hour -= 12;
  }
  present_hour = present_hour.toString().padStart(2, "0");

  // Formatted date and time
  let formatted_time = `${new_month}.${new_day}.${new_year} at ${present_hour}:${present_minute} ${am_pm}`;

  // Update all elements with the class "date_indicator"
  date_indicators.forEach((element) => {
    element.textContent = formatted_time;
  });

  // Repeat every 10 seconds
  setTimeout(update_article_time, 10000);
};

// Call the function when the page loads
update_article_time();

// FAQS Section
let faqS_answersAll = document.querySelectorAll(".faqs_answer");

let faq_indicator_Icon = document.querySelectorAll(".faq_plus");

let faq_close_Icon = document.querySelectorAll(".faq_minus");

for (let i = 0; i < faq_indicator_Icon.length; i++) {
  faq_indicator_Icon[i].addEventListener("click", (index) => {
    faqS_answersAll[i].style.display = "block";
    faq_indicator_Icon[i].style.display = "none";
    faq_close_Icon[i].style.display = "block";
  })
  
  
}

for (let i = 0; i < faq_close_Icon.length; i++) {
  faq_close_Icon[i].addEventListener("click", (index) => {
    faqS_answersAll[i].style.display = "none";
    faq_indicator_Icon[i].style.display = "block";
    faq_close_Icon[i].style.display = "none";
  })
  
}

