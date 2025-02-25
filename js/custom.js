document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth < 1025) {
        const navItems = document.querySelectorAll(".nav_item.has_submenu");
        
        navItems.forEach((item) => {
            const toggle = item.querySelector(".toggle_dropdown");
            const dropdownMenu = item.querySelector(".dropdown_menu");
            
            if (toggle && dropdownMenu) {
                dropdownMenu.style.display = "none";
                dropdownMenu.style.transition = "transform 0.4s ease-in-out";
                
                toggle.addEventListener("click", function (event) {
                    event.stopPropagation();
                    
                    document.querySelectorAll(".dropdown_menu").forEach(menu => {
                        if (menu !== dropdownMenu) {
                            menu.style.display = "none";
                            menu.previousElementSibling.classList.remove("active");
                        }
                    });
                    
                    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
                        dropdownMenu.style.display = "block";
                        toggle.classList.add("active");
                    } else {
                        dropdownMenu.style.display = "none";
                        toggle.classList.remove("active");
                    }
                });
            }
        });

        document.addEventListener("click", function (event) {
            if (!event.target.closest(".nav_item.has_submenu")) {
                document.querySelectorAll(".dropdown_menu").forEach(menu => {
                    menu.style.display = "none";
                    menu.previousElementSibling.classList.remove("active");
                });
            }
        });
    }
});
