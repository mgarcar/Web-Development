/* when #bg2 is clicked:
    add .hidden to #gallery1
    remove .hidden from #gallery2
    add .hidden to #gallery3
    add .hidden to #gallery4
    add .hidden to #gallery5
    add .hidden to #gallery6

  when #bg3 is clicked:
    add .hidden to #gallery1
    add .hidden to #gallery2
    remove .hidden from #gallery3
    add .hidden to #gallery4
    add .hidden to #gallery5
    add .hidden to #gallery6

  when #bg4 is clicked:
    add .hidden to #gallery1
    add .hidden to #gallery2
    remove .hidden from #gallery4
    add .hidden to #gallery3
    add .hidden to #gallery5
    add .hidden to #gallery6

  when #bg5 is clicked:
    add .hidden to #gallery1
    add .hidden to #gallery2
    remove .hidden from #gallery5
    add .hidden to #gallery4
    add .hidden to #gallery3
    add .hidden to #gallery6

  when #bg6 is clicked:
    add .hidden to #gallery1
    add .hidden to #gallery2
    add .hidden to #gallery3
    add .hidden to #gallery4
    add .hidden to #gallery5
    remove .hidden from #gallery6

  when #bg1 is clicked:
    add .hidden to #gallery2
    remove .hidden from #gallery1
    add .hidden to #gallery3
    add .hidden to #gallery4
    add .hidden to #gallery5
    add .hidden to #gallery6*/


$("#bg2").click(function() {
    $("#gallery1").addClass("hidden");
    $("#gallery3").addClass("hidden");
    $("#gallery4").addClass("hidden");
    $("#gallery5").addClass("hidden");
    $("#gallery6").addClass("hidden");
    $("#gallery2").removeClass("hidden");
  });

$("#bg3").click(function() {
    $("#gallery1").addClass("hidden");
    $("#gallery2").addClass("hidden");
    $("#gallery4").addClass("hidden");
    $("#gallery5").addClass("hidden");
    $("#gallery6").addClass("hidden");
    $("#gallery3").removeClass("hidden");
  });

$("#bg4").click(function() {
    $("#gallery1").addClass("hidden");
    $("#gallery2").addClass("hidden");
    $("#gallery3").addClass("hidden");
    $("#gallery5").addClass("hidden");
    $("#gallery6").addClass("hidden");
    $("#gallery4").removeClass("hidden");
  });

$("#bg5").click(function() {
    $("#gallery1").addClass("hidden");
    $("#gallery2").addClass("hidden");
    $("#gallery4").addClass("hidden");
    $("#gallery3").addClass("hidden");
    $("#gallery6").addClass("hidden");
    $("#gallery5").removeClass("hidden");
  });

$("#bg6").click(function() {
    $("#gallery1").addClass("hidden");
    $("#gallery2").addClass("hidden");
    $("#gallery4").addClass("hidden");
    $("#gallery3").addClass("hidden");
    $("#gallery5").addClass("hidden");
    $("#gallery6").removeClass("hidden");
  });
