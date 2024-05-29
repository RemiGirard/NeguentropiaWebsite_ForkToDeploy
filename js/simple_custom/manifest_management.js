
jQuery(document).ready(function ($) {
    $('#signManifest').submit(function (e) {
        e.preventDefault();
        var formData = {
            name: $("#inputName").val(),
            firstName: $("#inputFirstName").val(),
            expert: $("#inputExpert").val(),
            lab: $("#inputLabo").val(),
            location: $("#inputLocation").val(),
            url: $("#inputURL").val(),
            photo: $("#inputPhoto").val(),
            linkedin: $("#inputLinkedIn").val(),
            email: $("#inputEmail").val(),
        };
        $.ajax({
            url: '/wp-content/themes/blossom-coach/sign_manifest.php',
            type: 'POST',
            data: formData,
            success: function (response) {
                if (response === 1) {
                    $('#emailHelp').text(
                        'Vous êtes enregistré. Pour la postérité !')
                } else if (response === "") {
                    $('#emailHelp').html(
                        'Un ou plusieurs champs ne sont pas remplis.')
                }
            },
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.'
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]'
                } else if (jqXHR.status == 500) {
                    msg = 'Erreur interne du Serveur [500].'
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.'
                } else if (exception === 'timeout') {
                    msg = 'Time out error.'
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.'
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText
                }
                $('#emailHelp').html(msg)
            },
        })
    })
})