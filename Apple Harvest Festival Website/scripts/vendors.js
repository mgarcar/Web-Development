/*
when #Bapples is clicked:
    add .hidden to #wines
    remove .hidden from #apples
    add .hidden to #food
    add .hidden to #crafts

  when #Bwines is clicked:
    add .hidden to #apples
    remove .hidden from #wines
    add .hidden to #food
    add .hidden to #crafts

  when #Bfood is clicked:
    add .hidden to #wines
    remove .hidden from #food
    add .hidden to #apples
    add .hidden to #crafts

  when #Bcrafts is clicked:
    add .hidden to #wines
    remove .hidden from #crafts
    add .hidden to #food
    add .hidden to #apples
    */


$("#bapple").click(function() {
    $("#wines").addClass("hidden");
    $("#food").addClass("hidden");
    $("#crafters").addClass("hidden");
    $("#apples").removeClass("hidden");
    });

$("#bwine").click(function() {
    $("#apples").addClass("hidden");
    $("#food").addClass("hidden");
    $("#crafters").addClass("hidden");
    $("#wines").removeClass("hidden");
    });

$("#bfood").click(function() {
    $("#apples").addClass("hidden");
    $("#wines").addClass("hidden");
    $("#crafters").addClass("hidden");
    $("#food").removeClass("hidden");
    });

$("#bcrafters").click(function() {
    $("#apples").addClass("hidden");
    $("#food").addClass("hidden");
    $("#wines").addClass("hidden");
    $("#crafters").removeClass("hidden");
    });
