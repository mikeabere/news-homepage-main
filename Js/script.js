

const menuicon = document.getElementById("menu"); //select the menu Id
const closeicon = document.getElementById("close"); //select the close Id
const sidebar = document.getElementById("sidebar"); //select the sidebar Id
const backdrop = document.querySelector(".backdrop"); //select the backdrop Class

//code when you click the menu icon
menuicon.addEventListener("click", () => {
  sidebar.classList.add("sidebar");

  sidebar.style.display = "block";

  backdrop.classList.add("backdrop");
  backdrop.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  
});

//code when you click the close icon
closeicon.addEventListener("click", () => {
  sidebar.classList.remove("sidebar");

  sidebar.style.display = "none";

  backdrop.classList.remove("backdrop");
  backdrop.style.background = "none";
});
