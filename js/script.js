var toggle = document.getElementById('mobile_toggle');

toggle.addEventListener("click",function(){

    var menu = document.getElementById('mega_menu')

    if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }

})


const MegaButton = document.querySelectorAll("#mega_link");

MegaButton.forEach((el) =>
  el.addEventListener("click", (event) => {
    
    const subMenu = event.target.parentElement.querySelector("#mega_menu_dropdown");
    if (subMenu.style.display === "block") {

        subMenu.style.display = "none";
        el.style.fontWeight = "500";

      } else {
        subMenu.style.display = "block";
        el.style.fontWeight = "900";

      }


  })
);
