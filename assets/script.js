function hideads(argument) {
   /*exit ads*/
   document.getElementById("exitads").style.display="none";
   document.getElementById("content_ads").style.display = "none";

   /*back to top*/
   window.onscroll = function() {scrollFunction()};
function scrollFunction() {

if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
document.getElementById("myBtn").style.display = "block";
} else {
document.getElementById("myBtn").style.display = "none";
}
}

document.getElementById('myBtn').addEventListener("click", function(){
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
});
}