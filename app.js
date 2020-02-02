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


$(window).on('load', function(){
  var text_wrap = '.fadein_text'; //pタグのクラス
  var delay_speed = 90; //文字が出るスピード(ミリ秒)
  var fade_speed = 700; //文字がフェードするスピード(ミリ秒)
  var str;
  $(text_wrap).css('opacity','1');
  var firsttxt = $(text_wrap).html();
  str = firsttxt.replace(/<br>/g,'\n');
  $(text_wrap).html('');
  for (var i = 0; i < str.length; i++) {
      $(text_wrap).append('<span class="text_span">'+str.substr(i, 1).replace(/\n/, "<br>")+'</span>');
      $(text_wrap).children('span:last-child').delay(delay_speed * i).animate({opacity:'1'}, fade_speed);
  }
  setTimeout(function(){$(text_wrap).html(firsttxt)},str.length*delay_speed+fade_speed);
});