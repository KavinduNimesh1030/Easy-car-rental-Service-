let baseUrl = "http://localhost:8080/BackEnd_war/";

$("#submitCusRegDetail").click(function (){
    var formData = $("#cusRegForm").serialize();


    let id = $("#txtCusRegId").val();
    let name =   $("#txtName").val();
    let email = $("#txtCusEmail").val();
    let password = $("#txtPassword").val();
    let address = $("#txtAddress").val();
    let contactNo = $("#txtContactNo").val();
    let nic = $("#txtNicNo").val();
    let dln = $("#txtDrivingLNo").val();

    let nicImgPath = $("#file")[0].files[0].name;

    console.log(nicImgPath);

    var Customer = {
        id : id,
        name : name,
        email : email,
        password : password,
        address : address,
        contactNo : contactNo,
        dln : dln,
        imgPath : nicImgPath,

    }
    
    console.log(formData);

    $.ajax({
        url: baseUrl+"Customer",
        method :"post",
        data : JSON.stringify(Customer),
        contentType:"application/json",
        success: function (resp) {
            console.log(resp);
            alert(resp.message);

            sendImagePath();
            console.log("email"+email)
            setUserNameAndEmail(name,email);

            boxShadowRemove();
           /* clearRegData();*/
            $("#loginPage").hide();
            $("#CustomerReg").hide();
            $("#cusDetail").hide();
            $("#HomePage").show();rentId

        },
        error: function(error) {
            let prase = JSON.parse(error.responseText);
            alert(prase.message);

        }
    });




});
function clearRegData(){
    $("#txtCusRegId").val("");
    $("#txtCusEmail").val("");
    $("#txtPassword").val("");
    $("#txtName").val("");
    $("#txtAddress").val("");
    $("#txtContactNo").val("");
    $("#txtNicNo").val("");
    $("#txtDrivingLNo").val("");
}
function setUserNameAndEmail(name,email) {
    console.log("name"+name);
    $("#lblNavUserName").text(name);
    $("#lblNavEmail").text(email);
}

function sendImagePath() {
    var data = new FormData();
    let file = $("#file")[0].files[0];
    let fileName = $("#file")[0].files[0].name;
    data.append("myFile", file, fileName);
    console.log("file name "+ fileName);

    $.ajax({
        url: baseUrl + "api/v1/upload",
        method: 'post',
        async: true,
        contentType: false,
        processData: false,
        data: data,
        success: function (resp) {
            /*alert(resp);
            alert("Successfully Uploaded");*/
           /* loadTheLastUploadedImage();*/
        },
        error: function (err) {
            console.log(err);
        }
    });
}

function viewCustomerRental(){
    $("#tblRentDetail").empty();
    let navEmail= $("#lblNavEmail").text();
    console.log("navE"+navEmail)
    $.ajax({
        url: baseUrl+"Customer?email="+navEmail,
        method :"get",
        dataType:"json",
        success: function (resp) {
            console.log(resp);
           console.log("name "+resp.data.id);
           let cusId = resp.data.id;
               $.ajax({
                   url: baseUrl+"Rent?CusId="+resp.data.id,
                   method :"get",
                   dataType:"json",
                   success: function (resp) {
                       console.log(resp.data);
                       for (let r of resp.data) {
                           console.log("customerId "+r.cusId);
                           if(r.cusId ===cusId ){
                               $("#tblRentDetail").append("<tr style='height: 71px;column-gap: 10px;gap: 10px;box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);border-radius: 10px;'><td>"+r.rentId+"</td><td>"+r.pickUpDate+"</td><td>"+r.returnDate+"</td><td>"+r.pickUpVenue+"</td><td>"+r.returnVenue+"</td><td>"+r.pickUpTime+"</td><td>"+r.statusOfReq+"</td></tr>");
                           }

                       }


                   },
                   error: function(error) {
                       let prase = JSON.parse(error.responseText);
                       console.log(prase.message);

                   }

               });




        },
        error: function(error) {
            let prase = JSON.parse(error.responseText);
            console.log(prase.message);

        }

    });
}



