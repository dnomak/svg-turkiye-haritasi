/*! SVG Türkiye Haritası | jQuery | MIT Lisans | dnomak.com */

function turkiyeharitasi() {
  $("#turkiye-haritasi path").hover(function() {
    if ($(this).parent().attr("id") == "guney-kibris") return false;
    $(".iladi").html("<div>" + $(this).parent().data("iladi") + "</div>");
    $(this).on("mousemove", function(event) {
      $(".iladi").css("top", (event.pageY + 15));
      $(".iladi").css("left", event.pageX);
    });
  },function(){
    $(".iladi").html("");
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
