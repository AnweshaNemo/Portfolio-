var sidemnu = document.getElementById("sidemenu");


var typed=new Typed(".auto-type", {
    strings: ["Data Analyst" , "Machine Learning Engineer" , "Python developer","Student"],
    typeSpeed : 120,
    backSpeed : 100,
    loop : true 
})

var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-content");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");

    document.getElementById(tabname).classList.add("active-tab")
}