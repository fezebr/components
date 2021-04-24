// js code//
const items = [
	'طراح',
	'برنامه نویس',
	'وردبرس',
	'گرافیست!',
  ]
  const app = document.getElementById('app')
  let count = 0 
  let index = 0
  let typingEffect = () => {
	let text = items[index]
	if (count < text.length) {
	  setTimeout(() => {
		app.innerHTML += text[count]
		count++
		typingEffect()
	  }, Math.floor(Math.random(10) * 100))
	} else {
	  count = 0;
	  index = (index + 1 < items.length) ? index + 1 : 0
	  setTimeout(() => {
		app.innerHTML = ''
		typingEffect()
	  }, 1500)
	}
  }
  ////////////////naaav///////////////////

  function changeDot() {
    const scrollValue = $(window).scrollTop();
    const heightSec2 = $('.sec2').offset().top;
    const heightSec3 = $('.sec3').offset().top;
	const heightSec4 = $('.sec4').offset().top;
  const heightSec5 = $('.sec5').offset().top;
  const heightSec6 = $('.sec6').offset().top;
  const heightSec7 = $('.sec7').offset().top;

    if (scrollValue < heightSec2) {
        $('nav li').not('.dot1').removeClass('active');
        $('.dot1').addClass('active');
    } else if (scrollValue < heightSec3) {
        $('nav li').not('.dot2').removeClass('active');
        $('.dot2').addClass('active');
    } else if (scrollValue < heightSec4) {
        $('nav li').not('.dot3').removeClass('active');
        $('.dot3').addClass('active');
    } else if (scrollValue < heightSec5){
        $('nav li').not('.dot4').removeClass('active');
        $('.dot4').addClass('active');
    }
    else if (scrollValue < heightSec6){
      $('nav li').not('.dot5').removeClass('active');
      $('.dot5').addClass('active');
  } 
  else if (scrollValue < heightSec7){
    $('nav li').not('.dot6').removeClass('active');
    $('.dot6').addClass('active');
} 
    else  {
        $('nav li').not('.dot7').removeClass('active');
        $('.dot7').addClass('active');
    }
  }

$(window).on("scroll", changeDot)

$('nav li').on('click', function () {
    const goToSection = '.s' + $(this).attr('id');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top + 1
    })
})

$(".texthover").mouseenter(function(){
  display:blo
});
  