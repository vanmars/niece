$("document").ready(function(){
  $("button#light").click(function () {
    $("body").removeClass();
    $("body").addClass("light-background");
  });
  $("button#dark").click(function () {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });
  $("button#original").click(function () {
    $("body").removeClass();
    $("body").addClass("original-background");
  });

});