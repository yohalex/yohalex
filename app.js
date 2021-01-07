
// link nabar
const links = document.querySelectorAll(".navBar ul li");
const sections = document.querySelectorAll("section");

/*Selection un lien de navigation et affiche son contenu */
links.forEach((link) => {
  //Affiche le contenu du lien cliqué
  link.addEventListener("click", () => {
    const index = link.innerText.toLowerCase().replace(" ", ""); 
    sections.forEach((section) => {
      section.style.display = (section.getAttribute("id") === index) ? "block" : "none"; 
     
    });
    //changé l'apparence du lien clicqué
    links.forEach((link)=>{
      const temp = link.innerText.toLowerCase().replace(" ", "");
      if(temp === index && link.classList.contains('link-selected')===false){
          link.classList.add('link-selected') ; 
          link.classList.remove('link-navBar') ; 
      }else if (temp !== index && link.classList.contains('link-selected')===true){
        link.classList.add('link-navBar') ; 
        link.classList.remove('link-selected') ; 
      }
    })
  });
});






// animation présentation
const monterBloc = document.querySelector("#présentation>main>div:nth-child(1)");
const descendreBloc = document.querySelector("#présentation>main>div:nth-child(2)");
let animation = setInterval(()=>{
    monterBloc.style.display = "none" ;
    descendreBloc.style.display = "none" ;
    aside.style.display ="block";
} , 1000)


const aside = document.querySelector("#présentation>main>aside") ; 