
$("#btnLogin").click(function (){
    let email= $("#txtLoginEmail").val();
    let password = $("#txtCusLoginPassword").val();
    console.log("email"+email)
    $.ajax({
        url: baseUrl+"Customer?email="+email,
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