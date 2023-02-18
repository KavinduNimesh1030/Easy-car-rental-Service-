
let email= $("#txtCusLoginEmail").val();
let password = $("#txtCusLoginPassword").val();

$("#btnLogin").click(function (){
    $.ajax({
        url: baseUrl+"Customer?email="+email,
        method :"get",
        success: function (resp) {
          
            for (const r in resp.data) {
                if(r.password == password){
                    alert(resp.message);
                    alert(r.password)
                }
            }


        },
        error: function(error) {
            let prase = JSON.parse(error.responseText);
            alert(prase.message);

        }

    });
});