$(document).ready(function () {

    $(".js-headerButton").on("click", function () {
        $(this).attr("aria-expanded", function (i, attr) {
            return attr == "true" ? "false" : "true";
        });

        const visibility = $(".js-headerNav").attr("data-visible")
        $(".js-headerNav").attr("data-visible" , function (i, attr) {
            return attr == "true" ? "false" : "true";
        });

        console.log({visibility})

    });
    
});
