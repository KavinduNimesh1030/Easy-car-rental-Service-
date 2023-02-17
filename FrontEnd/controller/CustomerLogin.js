let baseUrl = "http://localhost:8080/BackEnd_war/";

let email= $("txtCusLoginEmail").val();
let password = $("txtCusLoginPassword").val();

$("#btnCusLogin").click(function (){
    $.ajax({
        url: baseUrl+"Customer?email=?password=?"+email,password,
        method :"get",
        success: function (resp) {
            alert(resp.message);

        },
        error: function(error) {
            let prase = JSON.parse(error.responseText);
            alert(prase.message);

        }

    });
});