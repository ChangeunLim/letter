$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });
});

$(document).ready(function() {
  $(".valentines").click(function() {
      // 특정 페이지로 이동
      window.location.href = "login.html";
  });
});
