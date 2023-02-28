let baseUrl = "http://localhost:8080/BackEnd_war/";
$("#btnSaveDriver").click(function (){
    var formData = $("#driverRegForm").serialize();
    console.log(formData);

    $.ajax({
        url: baseUrl+"Driver",
        method :"post",
        data : formData,
        success: function (resp) {
            console.log(resp);
            alert(resp.message);

        },
        error: function(error) {
            let prase = JSON.parse(error.responseText);
            alert(prase.message);

        }
    });
});
