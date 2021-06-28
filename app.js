var  hero = document.querySelector('.hero');
var  slider = document.querySelector('.slider');
var  logo = document.querySelector('.logo');
var  headline = document.querySelector('.headline');
var  hamburger =  document.querySelector('.hamburger')

const tl = new TimelineMax();
tl.fromTo(hero,1,{height: "0%"} , {height:"80%", ease:Power2.easeInOut})
.fromTo(
    hero,1.2,
    {width:"100%"},
    {width:"80%", ease:Power2.easeInOut}
)
.fromTo(slider, 1.2,{x:"-100%"}, {x:"0%"}, "-=1.5")
.fromTo(headline,1.2, {y: "100px", opacity:"0"}, {y:"0", opacity: "1",ease:Power2.ease})
.fromTo(logo,1,{x:"-70%", opacity:"0"},{x:"0%", opacity:"1", ease:Power2.easeInOut}, "-=1.5")
.fromTo(hamburger,1,{x:"105%", opacity:"0"}, {x:"0%", opacity:"1", ease:Power2.ease}, "-=1.5")

var navigation = document.querySelector('.navigation');

hamburger.onclick = function (){
    hamburger.classList.toggle('active');
    navigation.classList.toggle('active');
}


