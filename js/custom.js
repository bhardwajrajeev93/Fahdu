
// header toggle
$(document).ready(function () {
    $(".toggle_button").click(function(){
        $(this).toggleClass("open");
        $(".site_navigation").slideToggle();
    });

// logo slider
        $(".logo_slider").slick({
          autoplay: true,
          autoplaySpeed: 0,
          speed: 5000,
          arrows: false,
          swipe: false,
          slidesToShow: 7,
          cssEase: "linear",
          pauseOnFocus: false,
          variableWidth: true,
          pauseOnHover: false
        });
// template slider
$(".template_slider").slick({
    centerMode:true,
    speed: 1000,
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    
  });

  $(".testimonial_slider").slick({
    centerMode:true,
    speed: 1000,
    arrows: true,
    slidesToShow: 3,
  });


});
// submenu js
document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth < 1025) {
        const navItems = document.querySelectorAll(".nav_item.has_submenu");

        navItems.forEach((item) => {
            const toggle = item.querySelector(".nav_link");
            const dropdownMenu = item.querySelector(".dropdown_menu");

            if (toggle && dropdownMenu) {
                dropdownMenu.style.height = "0";
                dropdownMenu.style.overflow = "hidden";
                dropdownMenu.style.transition = "height 0.4s ease-in-out";

                toggle.addEventListener("click", function (event) {
                    event.stopPropagation();
                    document.querySelectorAll(".dropdown_menu").forEach(menu => {
                        if (menu !== dropdownMenu) {
                            menu.style.height = "0";
                            menu.previousElementSibling.classList.remove("open");
                        }
                    });
                    if (dropdownMenu.style.height === "0px" || dropdownMenu.style.height === "") {
                        dropdownMenu.style.height = dropdownMenu.scrollHeight + "px";
                        toggle.classList.add("open");
                    } else {
                        dropdownMenu.style.height = "0";
                        toggle.classList.remove("open");
                    }
                });
            }
        });

        document.addEventListener("click", function (event) {
            if (!event.target.closest(".nav_item.has_submenu")) {
                document.querySelectorAll(".dropdown_menu").forEach(menu => {
                    menu.style.height = "0";
                    menu.previousElementSibling.classList.remove("active");
                });
            }
        });
    }
});



// create heart 
function createHeartmore(heartContainermore) {
    const heartmore = document.createElement('i');
    heartmore.classList.add('fa-solid', 'fa-heart', 'heartmore');
    heartmore.style.position = 'absolute';
    heartmore.style.left = `${Math.random() * 100}%`;
    heartmore.style.opacity = '1';
    heartContainermore.appendChild(heartmore);
    setTimeout(() => {
        heartmore.style.opacity = '0';
        heartmore.style.transform = 'translateY(-30px)';
        setTimeout(() => {
            heartmore.remove();
        }, 1000);
    }, 3000);
}
const heartContainersMore = document.querySelectorAll('.heart_container_more');
heartContainersMore.forEach(container => {
    setInterval(() => createHeartmore(container), 300);
});

// reels counters
// Function to increment the counter
function incrementCounter(element, initialValue, maxValue, incrementBy) {
    let currentValue = initialValue;
    setInterval(() => {
        currentValue += incrementBy;
        if (currentValue > maxValue) {
            currentValue = initialValue;
        }
        element.textContent = currentValue;
    }, 100);
}
const likesCount = document.querySelector('.likes_count');
const commentsCount = document.querySelector('.comments_count');
const initialLikes = 1048;
const initialComments = 545;
const maxLikes = 9000;
const maxComments = 10000;
incrementCounter(likesCount, initialLikes, maxLikes, 1);
incrementCounter(commentsCount, initialComments, maxComments, 1); 


// custom accordian
document.addEventListener('DOMContentLoaded', function () {
    const accordionHeads = document.querySelectorAll('.accordian_head');

    accordionHeads.forEach(head => {
        head.addEventListener('click', function () {
            // Get the parent card of the clicked head
            const accordionCard = this.closest('.accordian_card');
            const accordionBody = this.nextElementSibling;
            const isOpen = accordionBody.classList.contains('open');

            // Remove the 'active-card' class from all cards
            document.querySelectorAll('.accordian_card.active-card').forEach(card => {
                if (card !== accordionCard) {
                    card.classList.remove('active-card');
                    card.querySelector('.accordian_body').classList.remove('open');
                    card.querySelector('.accordian_head').classList.remove('active');
                }
            });

            // Toggle the clicked card
            if (!isOpen) {
                accordionCard.classList.add('active-card');
                accordionBody.classList.add('open');
                this.classList.add('active');
            } else {
                accordionCard.classList.remove('active-card');
                accordionBody.classList.remove('open');
                this.classList.remove('active');
            }
        });
    });
});
