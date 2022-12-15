$("#bgeneral").click(function() {
    $("#public").addClass("hidden");
    $("#analyst").addClass("hidden");
    $("#general").removeClass("hidden");
    $("#bpublic").removeClass("selected");
    $("#banalyst").removeClass("selected");
    $("#bgeneral").addClass("selected");
    });

$("#bpublic").click(function() {
    $("#general").addClass("hidden");
    $("#analyst").addClass("hidden");
    $("#public").removeClass("hidden");
    $("#bpublic").addClass("selected");
    $("#banalyst").removeClass("selected");
    $("#bgeneral").removeClass("selected");
    });

$("#banalyst").click(function() {
    $("#general").addClass("hidden");
    $("#public").addClass("hidden");
    $("#analyst").removeClass("hidden");
    $("#bpublic").removeClass("selected");
    $("#banalyst").addClass("selected");
    $("#bgeneral").removeClass("selected");
    });
