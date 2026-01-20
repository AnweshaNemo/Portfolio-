var sidemnu = document.getElementById("sidemenu");

function openmenu(){
    sidemnu.style.right="0";
}

function closemenu(){
    sidemnu.style.right="-200px";
}

var icon=document.getElementById("icon");
icon.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-themes")){
        icon.src="sun.png";
    }else{
        icon.src="moon.png";
    }
}

var typed=new Typed(".auto-type", {
    strings: ["Data Analyst" , "Software Engineer", "Python developer","Student"],
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