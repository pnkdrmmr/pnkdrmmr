// link.addEventListener('click', function (event) {
//   if (this.parentElement.classList.contains('disabled')) {
//     event.preventDefault();
//   }
// });

function centerContentResizer( par, chld ){
    container = par;
	content = container+' '+chld;
    $containerHeight = $(container).outerHeight();
    $contentHeight = $(content).outerHeight() + 120;
    if ( $containerHeight < $contentHeight ) {
    	$(container).css('min-height', $contentHeight);
    }
}





$(document).ready(function () {


	// check for disabled links
	$('a').each(function (e) {
		$(this).click(function (e) {
			if ( $(this).is('.disabled') || $(this).is('[disabled]') ) {
				console.log('Ah ah ah. You didnt say the magic word...')
				e.preventDefault();
			}
		})
	})


	// Nav Settings
	$btn            = $('.menu-toggle, .close-menu'),
	$nav            = $('.menu-modal'),
	$navLinks       = $('.main-nav li'),
	$socLinks       = $('.main-nav li'),
	modalOpen       = 'modal_open',
	navActive       = 'active',
	locked          = 'locked',
	$body           = $('body'),
	nav_Open        = function(e) {
	    $btn.toggleClass(navActive);
	    $body.toggleClass(modalOpen);
	    $body.toggleClass(locked);
	    
	    isOpen      = $btn.is('.'+navActive);
	    // Btn Settings
	    aTrans      = isOpen ? 'transition.wipeIn' : 'transition.wipeOut',
	    aStag       = isOpen ? 250 : 0,
	    aDelay      = isOpen ? 0 : 0,
	    aDur        = isOpen ? 500 : 0,
	    aOp         = isOpen ? 1 : 0,
	    aWdth       = isOpen ? '100%' : '0%';
	    // Links
	    $navLinks.velocity( aTrans,{
	        width:      aWdth,
	        maxWidth:   aWdth,
	        opacity:    aOp,
	        duration:   aDur,
	        delay:      aDelay,
	        stagger:    aStag
	    })
	}

    $btn.click(nav_Open);

	stickTHIS(".footer .container", 0) 


})

// $(document).ready(function () {
// 	// Scroll Triggers
// 	// console.log('Scroll Triggers Active')
// 	// const sections = document.querySelectorAll('.scroll-trigger');
// 	// const activeClass = 'active';
// 	// window.addEventListener('scroll', () => {
// 	//   	scrollHandler();
// 	// });

// 	// scrollHandler = function() {
// 	//   	var trigger_point = '300',
// 	//       	scrollPos = window.pageYOffset;

// 	// 	for (i = 0; i < sections.length; i++) {
// 	//     	const element = sections[i];
// 	//     	const elementScrollOffset = element.offsetTop - trigger_point;
// 	// 		if (scrollPos >= elementScrollOffset) {
// 	// 	      	element.classList.add(activeClass);
// 	// 	    } else if (scrollPos < elementScrollOffset) {
// 	// 	      	element.classList.remove(activeClass);
// 	// 	    }
// 	//   	}
// 	// };
// 	// scrollHandler();

	


// })




// Custom Animations
// $.Velocity
//     .RegisterEffect("transition.leftIn", {
//         defaultDuration: 300,
//         calls: [
//             [ { opacity: 1, translateX: [ 0, 50 ] } ]
//         ]
//     })
//     .RegisterEffect("transition.leftOut", {
//         defaultDuration: 100,
//         calls: [
//             [ { opacity: 0, translateX: [50, 0] } ]
//         ]
//     });


// $.Velocity
//     .RegisterEffect("transition.textIn", {
//         defaultDuration: 300,
//         calls: [
//             [ { opacity: 1, translateY: [ 0, 350 ] } ]
//         ]
//     })
//     .RegisterEffect("transition.textOut", {
//         defaultDuration: 100,
//         calls: [
//             [ { opacity: 0, translateY: [350, 0] } ]
//         ]
//     });


// $.Velocity
//     .RegisterEffect("transition.slideIn", {
//         defaultDuration: [ 100, 300 ],
//         calls: [
//             [ { opacity: [ 1,0 ], left: [ 0, 100 ], translateZ: [0,0] } ]
//         ]
//     });
// $.Velocity
//     .RegisterEffect("transition.slideOut", {
//         defaultDuration: 100,
//         calls: [
//             [ { opacity: [ 0,1 ], left: [100, 0], translateZ: [0,0]  } ]
//         ]
//     });

















