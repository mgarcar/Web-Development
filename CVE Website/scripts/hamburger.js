/* #hamburger is clicked:*/
$("#hamburger").click(function(){
    if ($("#navbar").hasClass("inactive")) {
        $("#navbar").removeClass("inactive");
        $("#navbar").addClass("active");
        
    }else{
        $("#navbar").addClass("inactive");
        $("#navbar").removeClass("active");
      }
});
