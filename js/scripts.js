$(document).ready(function () {
    /* Email Validation */
    $("#form").validate({
        rules: {
            email: {
                email: true,
                required: true
            },
        },

        /* Highlights */
        highlight: function (element) {
            $(element).closest(".form-group").removeClass("has-success").addClass("has-error").parents('form.animate-form').addClass("animated shake");
        },
        unhighlight: function (element) {
            $(element).closest(".form-group").removeClass("has-error").addClass("has-success");
        }
    });

    /* Animations */
    $('.submit input').click(function () {
        $('#form.animated').removeClass('animated shake');
        if ($("#form").valid()) {
            $("#form").addClass("success");
        } else {
            $("#form").removeClass("success").addClass("invalid");
            $(this).addClass("disabled");
        }

        $("#form.invalid input").on("keyup blur", function () {
            if ($("#form").valid()) {
                $(".submit input").removeClass("disabled");
                $("#form").removeClass("invalid");
            } else {
                $(".submit input").addClass("disabled");
            }
        });
    });
});

/* Attachment */
$(document).on('change', ':file', function () {
    var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
});
$(document).ready(function () {
    $(':file').on('fileselect', function (event, numFiles, label) {
        console.log(numFiles);
        console.log(label);
    });
});
