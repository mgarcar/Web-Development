/*
when #buttonSat is clicked:
    if #planSat has Class .hidden {
        remove .hidden from #planSat
    } else {
        add .hidden to #planSat
    }

  when #buttonSun is clicked:
    if #planSun has Class .hidden {
        remove .hidden from #planSun
    } else {
        add .hidden to #planSun
    }
 */

$("#buttonSat").click(function() {

    if ($("#planSat").hasClass("hidden")) {
        console.log("lets show it")
        $("#planSat").removeClass("hidden");
    } else {
        console.log("no")
        $("#planSat").addClass("hidden");
    }
});

$("#buttonSun").click(function() {

        if ($("#planSun").hasClass("hidden")) {
            $("#planSun").removeClass("hidden");
        } else {
            $("#planSun").addClass("hidden");
        }
    });
