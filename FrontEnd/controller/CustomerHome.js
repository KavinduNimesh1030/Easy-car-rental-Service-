$("#userNameNav").click(function (){
    navigationBefore();
    let navEmail= $("#lblNavEmail").text();

    console.log("email"+navEmail)
    $.ajax({
        url: baseUrl+"Customer?email="+navEmail,
        method :"get",
        dataType:"json",
        success: function (resp) {
            console.log(resp);

            $("#submitCusRegDetail").html("update");
            $("#txtCusRegId").val(resp.data.id);
            $("#txtCusEmail").val(resp.data.email);
            $("#txtPassword").val(resp.data.password);
            $("#txtName").val(resp.data.name);
            $("#txtAddress").val(resp.data.address);
            $("#txtContactNo").val(resp.data.contactNo);
            $("#txtNicNo").val(resp.data.nic);
            $("#txtDrivingLNo").val(resp.data.dln);
            $("#file").val(resp.data.imgPath);


        },
        error: function(error) {
            let prase = JSON.parse(error.responseText);
            console.log(prase.message);

        }

    });

});
function navigationBefore(){
    navSetting();
    $("#userNameNav").show();
    $("#loginPage").hide();
    $("#CustomerReg").show();
    $("#cusDetail").hide();
    $("#HomePage").hide();

}
/*function navigationAfter(){
    $("#loginPage").hide();
    $("#CustomerReg").hide();
    $("#cusDetail").hide();
    $("#HomePage").show();
}*/
