function stickTHIS(el,hght) {

    // =========================
    // JQ Easing Plugin REQUIRED
    // https://raw.githubusercontent.com/gdsmith/jquery.easing/master/jquery.easing.min.js
    // =========================

    stickThis       = $(el),
    jumpCls         = 'jump-fix'
    jumpFix         = $('#'+jumpCls),
    stckCls         = 'stuck',
    status          = 'init',
    below           = 'stuck',
    above           = 'unstuck',
    count           = 0,

    // This is how far below header the sticky shows on scroll
    wait            = hght;if(wait==null){wait=0;}
    
    // Create Jumpfix
    jumpCreate      = '<div id="'+jumpCls+'"></div>';
    stickThis.before(jumpCreate);
    jumpEL          = document.getElementById(jumpCls);



    // Init function watchers
    initStick();
    $(document).ready(function() {
        initStick();
    });
    $(window).scroll(function() {
        initStick();
    });
    $(window).resize(function() {
        initStick();
    });


    function initStick() {
        windWdth        = $(window).width();
        windHght        = $(window).height();
        stickHght       = stickThis.height();
        stickFromTop    = Math.round( jumpEL.getBoundingClientRect().top - ( windHght / 2 ) + ( stickHght / 2 ) );

        $('#status').text(status);
        $('#mid').text(stickFromTop+'px');



        if ( windWdth > 750) {
            if ( stickFromTop < 0 && status != below) {
                status = below;
                stickThis
                    .css('position','fixed')
                    .css('top','50%')
                    .css('left','50%')
                    .css('transform','translate(-50%,-50%)');
                jumpEL.setAttribute("style", "height: "+stickHght+"px;");
            } 
            if ( stickFromTop >= 0 && status != above) {
                status = above;
                stickThis
                    .css('position','relative')
                    .css('top','0%')
                    .css('left','0%')
                    .css('transform','translate(0%,0%)');
      
                jumpEL.setAttribute("style", "height: 0px;");

            }
        } else {
            // stickThis
            //  .css('position','initial')
      //        .css('top','initial')
      //        .css('left','initial')
      //        .css('transform','initial');
         //    jumpEL.setAttribute("style", "height: 0px;");

        }
    }
}



// function setFixed(el, stop, startPos) {
//     trig = $(el)[0];
//     thisEl = $(el);
//     stopAt = $(stop)[0];
//     stopraw = $(stop);
//     startPos = startPos;
//     status = 'Page Load';
//     fixed = 'fixed';
//     rel = 'relative';
//     stop = 'stop';
//     prevStatus = '';
//     cssTop = thisEl.css('margin-top');
//     trigOnLoad = trig.offsetTop;

//     initFixed()
//     $(window).scroll(function() {
//         initFixed()
//     })

//     function initFixed() {


//         pageWidth = $(window).outerWidth();
//         // Start Settings
//         trigFromTop = trig.offsetTop;
//         trigHeight = trig.offsetHeight / 2;
//         plus = 0;
//         trigPoint = trigFromTop + trigHeight + plus;
//         windowHeight = $(window).height();
//         scrollTop = $(window).scrollTop();
//         mid = scrollTop + Math.floor(windowHeight / 2);
//         // Stop Settings
//         // fromBottom = stopAt.offsetTop;
//         bodyHeight = document.body.offsetHeight;
//         // stopPoint = fromBottom - trigHeight;
//         // Trigger Points
//         startFixed = trigPoint <= mid;
//         startRel = trigPoint > mid;
//         stopHere = mid >= stopPoint;

//         // if ( ( windowHeight < 950 || pageWidth < 1500 ) && mid < 500 ) {
//         //   $('.overlay-trigger').css('font-weight','400');
//         // } else {
//         //   $('.overlay-trigger').css('font-weight','bold');
//         // }

//         if (startFixed || startPos == fixed) {
//             status = fixed;
//             thisEl
//                 .css('position', 'fixed')
//                 .css('top', '50%')
//                 .css('bottom', 'initial')
//                 .css('transform', 'translateY(-50%) translateZ(0)')
//                 .css('margin-top', '0');
//         }
//         if (startRel && startPos != fixed) {
//             status = rel;
//             thisEl
//                 .css('position', 'relative')
//                 .css('top', '0%')
//                 .css('bottom', 'initial')
//                 .css('transform', 'translateY(0%) translateZ(0)')
//                 .css('margin-top', cssTop);
//         }
//         if (stopHere) {
//             status = stop;
//             thisEl
//                 .css('position', 'absolute')
//                 .css('top', 'initial')
//                 .css('bottom', '50%')
//                 .css('transform', 'translateY(-50%) translateZ(0)')
//                 .css('margin-top', '0');
//         }
//         if (pageWidth < 750) {
//             thisEl
//                 .css('top', 'initial')
//                 .css('bottom', 'initial')
//                 .css('transform', 'initial')
//                 .css('position', 'relative')
//                 .css('margin-top', '2em');
//         }
//         currStatus = prevStatus != status;
//         if (currStatus) {
//             console.log(status)
//             console.log(pageWidth)
//         }

//         // $('#mid').text(mid + 'px');
//         // $('#trig').text(trigOnLoad + 'px');
//         // $('#stop').text(stopPoint + 'px');
//         // $('#status').text(status);
//         // $('#start').text(startPos);

//         // $('#trigPoint').css('top', stopPoint);

//         prevStatus = status;
//     }
// }

// // console.log('fufuuufufck')

// $(document).ready(function () {
//     setFixed('.footer .container')
//     // console.log('i work')
// })




