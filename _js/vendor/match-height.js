equalheight = function(container){

    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function() {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

// $( document ).ready(function() {
    // var item = '.blog-card';
    // $(window).load(function() {
    //     equalheight(item);
    // });
    // $(window).resize(function(){
    //     equalheight(item);
    // });
    

    

// });


function matchHeight(el) {
    function init() {
        eventListeners();
        matchHeight();
    }
    function eventListeners(){
        $(window).on('resize', function() {
            matchHeight();
        });
    }
    function matchHeight(){
        var groupName = $(el);
        var groupHeights = [];
        groupName.css('min-height', 'auto');
        groupName.each(function() {
            groupHeights.push($(this).outerHeight());
        });    
        var maxHeight = Math.max.apply(null, groupHeights);
        groupName.css('min-height', maxHeight);
    };
    init();
}

// $(document).ready(function() {
//     var item = $('.{{block_id}} [mh-ttl]');
//     matchHeight(item);
// });












