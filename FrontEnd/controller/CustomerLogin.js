function setUserNameAndEmail(name) {
    console.log("name"+name);
    $("#lblNavUserName").text(name);
    $("#lblNavEmail").text($("#txtLoginEmail").val());
}

$("#btnLogin").click(function (){
    let email= $("#txtLoginEmail").val();
    let password = $("#txtCusLoginPassword").val();
    console.log("email"+email)
    $.ajax({
        url: baseUrl+"Customer?email="+email,
        method :"get",
        dataType:"json",
        success: function (resp) {
            console.log(resp);
                if(resp.data.password == password) {
                    console.log(resp.data);
                    alert(resp.message);
                    setUserNameAndEmail(resp.data.name);

                    $("#loginPage").hide();
                    $("#CustomerReg").hide();
                    $("#cusDetail").hide();
                    $("#HomePage").show();

                }else {
                    alert("invalid email or password")
                }
        },
        error: function(error) {
            let prase = JSON.parse(error.responseText);
            alert("invalid email or password");

        }

    });
});