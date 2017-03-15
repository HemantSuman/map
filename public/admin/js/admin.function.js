$(document).ready(function () {
    
});

$(document).on("submit", "#formSubmit", function (e) {
    e.preventDefault();
    var thisObj = $(this);
    var form = $(thisObj)[0];
    var formData = new FormData(form);
    $('.error_mgs_lable').html('');

    $.ajax({
        url: $(thisObj).attr('action'),
        data: formData,
        contentType: false,
        processData: false,
        method: "POST",
        cache: false,
        success: function (response) {
            if(response.status){
                window.location.href = response.url;
            } else {
                bootstrapNotify.showMessage(response.message);
            }
        }, error: function (resData) {
            console.log(resData);
            $.each(resData.responseJSON.data, function (key, val) {
                bootstrapNotify.showMessageOnField(val.message, val.path);
            });
        }
    });
});

