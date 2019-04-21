/** ---------------------------------------
 *появление якоря
 ----------------------------------------*/

window.onscroll = function() {
	var about          = document.getElementById('about');
    /** ---------------------------------------
    * getBoundingClientRect собирает всю информацию о блоке, 
    * тоесть его отступы (внутрение и внешние), высоту и ширину
    * отступ сверху считается с самого верха сайта
    * все считается в пикселях
     ----------------------------------------*/
	var aboutInfo      = about.getBoundingClientRect();
	var navToHead      = document.getElementById('navToTop');
    /** ---------------------------------------
    * в переменную scrolled записывается то насколько пользователь проскролил
    * вниз, считается с самого верха сайта
    * все считается в пикселях
     ----------------------------------------*/
    var scrolled       = window.pageYOffset || document.documentElement.scrollTop;


    /** ---------------------------------------
    * проверки если пользоваетль проскролил до определенного момента, 
    * тоесть если пользоваетль сейчас находится на блоке about то
    * якорь появляется, если польхователь на блоке header то изчезает
     ----------------------------------------*/

     if (aboutInfo.top <= 300) {
        navToHead.style.display = 'flex';
     } else {
        navToHead.style.display = 'none';
     }
}