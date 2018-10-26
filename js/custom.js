$(function(){
  //Slick
  $('.slick-slider').slick({
    fade: true,
    //arrows:false,
    responsive:true,
    //asNavFor: '#firstNav'//サムネイル部分の要素を記述
    prevArrow: '<div class="slideThumb prev"><img src="images/prev.png"></div>',
    nextArrow: '<div class="slideThumb next"><img src="images/next.png"></div>'
  　});
  //$('#firstNav').slick({//サムネイル画像
  //   dots: false,
  //   arrows:false,
  //   slidesToShow: 6,
  //   focusOnSelect: true,
  //   asNavFor: '.slick-slider',//スライダー部分の要素を記述
  // });

  //scroll #
  var offsetY = 0;
  // スクロールにかかる時間
  var time = 500;
  $('a[href^=#]').click(function() {
    var target = $(this.hash);
    if (!target.length) return ;
    var targetY = target.offset().top+offsetY;
    $('html,body').animate({scrollTop: targetY}, time, 'swing');
    window.history.pushState(null, null, this.hash);
    return false;
  });
  
});
