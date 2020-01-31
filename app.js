// イメージアニメーション
$(function(){
  var $setElm = $('.viewer'),
  fadeSpeed = 5000,
  switchDelay = 8000;

  $setElm.each(function(){
      var targetObj = $(this);
      var findUl = targetObj.find('ul');
      var findLi = targetObj.find('li');
      var findLiFirst = targetObj.find('li:first');

      findLi.css({display:'block',opacity:'0',zIndex:'99'});
      findLiFirst.css({zIndex:'100'}).stop().animate({opacity:'1'},fadeSpeed);

      setInterval(function(){
          findUl.find('li:first-child').animate({opacity:'0'},fadeSpeed).next('li').css({zIndex:'100'}).animate({opacity:'1'},fadeSpeed).end().appendTo(findUl).css({zIndex:'99'});
      },switchDelay);
  });
});

//scroll up
$('.icon').on('mouseover', function () {
  $('body, html').animate({ scrollTop: 0 }, 500);
});

// header rightのアニメーション
$('.box').on('mouseover', function() {
  $(this).css('opacity', 0.5);
});
$('.box').on('mouseleave', function() {
  $(this).css('opacity', 1);
});

// header leftのアニメーション
$('.left_header').on('mouseover', function() {
  $(this).css('opacity', 0.5);
});
$('.left_header').on('mouseleave', function() {
  $(this).css('opacity', 1);
});


// modal window
$(function() {
  //モーダルを開く
  $('.modalBtn').click(function() {
    $('.overlay, .modal').fadeIn();
  })
  //モーダルの外側か閉じるをクリックでモーダルを閉じる
  $('.overlay, .close').click(function() {
    $('.overlay, .modal').fadeOut();
  })
});


