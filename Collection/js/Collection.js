//管理键的js效果
function run() {
  let n = 0;
  $("#run").on("click", function () {
    n++;
    if (n % 2 === 1) {
      $(this).text("完成");
      $(".block").css({ opacity: 1 });
      $(".delete").css({ display: "block" });
    } else {
      $(this).text("管理");
      $(".block").css({ opacity: 0 });
      $(".delete").css({ display: "none" });
    }
  });
}
run();

//选中键的js效果  注意这里有个巨大的bug，我是不打算改了，就看你了！！！
function select() {
  let n = 0;
  $(".commodity").on("click", function () {
    n++;
    if (n % 2 == 1) {
      $(this).children(".block").attr("src", "./img/Select.png");
      $(this).addClass("del"); //选中的商品加入一个类名,后期删除按钮做铺垫
    } else {
      $(this).children(".block").attr("src", "./img/Unchecked.png");
      $(this).removeClass("del");
    }
  });
}
select();

//删除键的js效果
function del() {
  $(".eject").css({
    //警告框的样式
    width: $(".boss").width(),
    height: "100vh",
  });
  $(".delete").on("click", function () {
    $(".eject").css({ display: "block" }); //警告框弹出
  });

  //警告框取消按钮
  $(".option_left").on("click", function () {
    $(".eject").css({ display: "none" });
    $(".block").attr("src", "./img/Unchecked.png");
  });

  //警告框删除按钮
  $(".option_right").on("click", function () {
    $(".del").remove(); //删除选中的div
    $(".eject").css({ display: "none" });
    total(); //商品数量的函数
    if ($(".commodity").length <= 0) {
      //没有商品时的效果
      $(".delete").css({ display: "none" });
      $(".boss").append(`
      <div class='hollow'>
      <h3>您还没有任何收藏</h3>
      <p>快去看看有没有喜欢的吧~</p>
      </div>
      `);
    }
  });
}
del();

//商品数量
function total() {
  let index = $(".commodity").length;
  $(".total").text(`共 ${index} 件商品`);
}
total();
