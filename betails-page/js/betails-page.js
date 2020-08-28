//元素出现和消失的函数封装
function display(obj,change){
  obj.css({ display: change});
}

//加入购物车
function shopping() {
  $(".shopping").on("click", () => {
    display($(".mask"),'block') //遮罩层
    display( $(".mask .shoppingCart"),'block') //购物车的div
    $("html,body").addClass("ovfHiden"); //禁止滚动条滚动

    $("#close").on("click", () => {
      //X按钮
      display($(".mask"),'none')//遮罩层消失
      $("html,body").removeClass("ovfHiden"); //允许滚动条滚动
    });

    $(".shoppingNorms").on("click", " div", function () {
      //商品规格按钮
      $(this).attr("class", "one").siblings("div").attr("class", "two");
    });

    //商品数量按钮
    $(".plus").on("click", function () {
      let n = $(".number input").val();
      n++;
      $(".number input").val(n);
    });
    $(".reduce").on("click", function () {
      let n = $(".number input").val();
      n--;
      if (n >= 1) {
        $(".number input").val(n);
      }
    });

    //确认按钮
    $(".fix").on("click", function () {
      if ($(".shoppingNorms div").hasClass("one") == true) {
        //判断商品是否被选中
        display( $(".mask"),'none')
        $("html,body").removeClass("ovfHiden");
      } else {
        display($(".fix span"),'block')
        setTimeout(function () {
          display($(".fix span"),'none')
        }, 2000);
      }
    });

    //更改商品的价格
    $(".shoppingNorms div")
      .eq(1)
      .on("click", function () {
        $(".main_left h4").text("¥ 68.9");
        $(".main_left p").text("库存1299件");
        $(".delivery e").text("4g/m");
      })
      .siblings()
      .on("click", function () {
        $(".main_left h4").text("¥ 98.9");
        $(".main_left p").text("库存1908件");
        $(".delivery e").text("8g/m");
      });
  });
}
shopping()

//分享按钮
function share(){
    $('#share').on('click',function(){
        display($(".mask"),'block')//遮罩层
        display($('.shoppingCart'),'none')//购物车消失
         $("html,body").addClass("ovfHiden"); //禁止滚动条滚动
        display( $('.shareButton'),'block')  //分享框显示
    })
     

    function fit(){
      display($(".mask"),'none'); 
      display($(".shareButton"),'none'); 
      $("html,body").removeClass("ovfHiden"); //允许滚动条滚动
     }
    //取消按钮
    $('.shareButton h4').on('click',()=>{
     fit()
    })

    //复制链接按钮
    $('#copy').on('click',function(){
     fit()
     display( $('.copySuccess'),'block')
      setTimeout(()=>{
        display( $('.copySuccess'),'none')
      },2000)
    })
}
share()

//倒计时函数
let showtime = function () {
  let nowtime = new Date(), //获取当前时间
    endtime = new Date("2020/8/30"); //定义结束时间
    let lefttime = endtime.getTime() - nowtime.getTime(), //距离结束时间的毫秒数
    leftd = Math.floor(lefttime / (1000 * 60 * 60 * 24)), //计算天数
    lefth = Math.floor((lefttime / (1000 * 60 * 60)) % 24), //计算小时数
    leftm = Math.floor((lefttime / (1000 * 60)) % 60), //计算分钟数
    lefts = Math.floor((lefttime / 1000) % 60); //计算秒数
    let arr = [lefth,leftm,lefts]
    arr.forEach((val,i)=>{
      val < 10? val = '0' + val:'' //小于10时前面加个0
     $('.price_right .time').eq(i).html(val)
    });
};
showtime();
setInterval(function () {
  showtime();
},1000); //反复执行函数本身

