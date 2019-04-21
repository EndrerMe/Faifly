var elements = document.querySelectorAll(".mList__el");

document.getElementById('mobileBtn').addEventListener('click', (e) => {
  document.getElementById('mobileMenu').style.display = (document.getElementById('mobileMenu').style.display == 'none') ? 'block' : 'none';
});

for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function(){
    document.getElementById('mobileMenu').style.display = "none";
  };
}