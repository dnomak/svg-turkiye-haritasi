/*! SVG Türkiye Haritası | jQuery | MIT Lisans | dnomak.com */

function turkiyeharitasi() {
  $("#turkiye-haritasi path").hover(function() {
    if ($(this).parent().attr("id") == "guney-kibris") return false;
    $(".il-tooltip").html("<div>" + $(this).parent().data("iladi") + "</div>");
    $(this).on("mousemove", function(event) {
      $(".il-tooltip").css("top", (event.pageY + 25));
      $(".il-tooltip").css("left", event.pageX);
    });
  },function(){
    $(".il-tooltip").html("");
  });
  $("#turkiye-haritasi path").on("click", function(event) {
    if ($(this).parent().attr("id") == "guney-kibris") return false;
    var ilid = $(this).parent().attr("id");
    var iladi = $(this).parent().data("iladi");
    var plakakodu = $(this).parent().data("plakakodu");
    var alankodu = $(this).parent().data("alankodu");
    window.location = "http://dnomak.com/" + ilid + "-" + plakakodu + ".html";
  });
}
