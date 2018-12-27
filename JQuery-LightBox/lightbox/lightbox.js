$(".aImg img").click(function () {
  var i = $(this).index();              //获得元素相对于选择器的 index 位置
  $(".divModal").show();                //遮罩层显示，加载模态窗组件
  $(".divModal-content img").hide();    //将所有图片隐藏
  $('.divModal-content img').eq(i).show();  //显示点击的图片
});

$(".divModal,.btnClose").click(function () {  //遮罩层和 x 按钮点击
  $('.divModal').hide();            //关闭模态窗
});

$(".divModal-content img,.prev,.next").click(function () {  //点击图片、上下图片切换按钮事件
  return false;                     //事件否定（点击图片、上下图片切换按钮不关闭模态窗）
});

$(".next").click(function () {      //下一张图片点击事件
  var i = $('.divModal-content img[style="display: block;"]').index();  //当图片以模态窗放大出来display属性为block
  var imgLength = $('.divModal-content img').length;  //得到所有照片数目
  if (i < imgLength - 1) {          //如果小于总长度                
    $('.divModal-content img').eq(i).hide();
    $('.divModal-content img').eq(i + 1).show();
  }
  else {                            //如果超过了总长度，从第0个图片开始    
    $('.divModal-content img').eq(i).hide();
    $('.divModal-content img').eq(0).show();
  }
});

$(".prev").click(function () {      //上一张图片点击事件
  var i = $('.divModal-content img[style="display: block;"]').index();
  $('.divModal-content img').eq(i).hide();
  $('.divModal-content img').eq(i - 1).show();  //-1默认会到最大的那个图片
});
