/*let baseUrl = "http://localhost:8080/BackEnd_war/";*/
let pendingReq =0;
getAllRentalDetails();
let request;
let rentalId;
let cusId;
let tempTblDriverD;
function getAllRentalDetails(){
    $("#tblCustomerReq").empty();
    $("#tblDriver").empty();
    $.ajax({
        url: baseUrl+"Rent",
        method :"get",
        dataType:"json",
        success: function (resp) {
            for (const r of resp.data) {
                console.log(r.rentId);
                console.log(r.cusId);
                if(r.statusOfReq === "Pending"){
                    pendingReq++;
                }

                tempTblDriverD = r.rentDetail;
                for (const rd of r.rentDetail) {
                    console.log("v"+rd.vid)
                    console.log("dr"+rd.driverId)


                    //append driverId and vehicle id
                   /* $(".adminDriver").append("<h2 style='font-size: 16px;transform: translateX(32px);margin-bottom: 18px;'>"+rd.vid+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+rd.driverId+"</h2>")*/
                    $("#tblDriver").append("<tr><td>"+r.rentId+"</td><td>"+rd.vid+"</td><td>"+rd.driverId+"</td><td><button class=\"Drivereditbtn\" id="+rd.driverId+" style='    border: 0;\n" +
                        "    border-radius: 5px;\n" +
                        "    font-size: 13px;\n" +
                        "    width: 53px;\n" +
                        "    background-color: #5d00ff;\n" +
                        "    color: white;'>edit</button></td></tr>");
                }
                $("#tblCustomerReq").append("<tr style='height: 71px;column-gap: 10px;gap: 10px;box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);border-radius: 10px;'><td>"+r.rentId+"</td><td>"+r.cusId+"</td><td>"+r.pickUpDate+"</td><td>"+r.returnDate+"</td><td>"+r.pickUpVenue+"</td><td>"+r.returnVenue+"</td><td>"+r.statusOfReq+"</td><td>"+r.total+"</td><td><button class=\"editbtn\" style='    border: 0;\n" +
                    "    border-radius: 5px;\n" +
                    "    font-size: 13px;\n" +
                    "    width: 53px;\n" +
                    "    background-color: #5d00ff;\n" +
                    "    color: white;' name="+r.cusId+" id="+r.slipImgPath+" value="+r.rentId+">view</button></td></td></tr>");

            }
            pendingReqCount(pendingReq);


        }


    });
}
function pendingReqCount (count) {
    $("#lblPendingReq").text(count);
}


$('body').on('click', '.editbtn', function() {
    // code here
    loadSlipImg(this.id);
   /* alert(this.id);
    alert(this.name);*/
    rentalId = this.value;
    cusId = this.name;
    getCustomerImgName(this.name)
});

function getCustomerImgName(cusId){
    $.ajax({
        url: baseUrl+"Customer",
        dataType:"Json",
        method: "get",
        success: function (resp) {
            console.log(resp)
            for (const r of resp.data) {
                if(r.id == cusId){
                    alert("matching"+r.imgPath);
                    loadCustomerImg(r.imgPath);
                }
            }

        }

    });

}



$('body').on('click', '.tblTr', function() {
    // code here
   alert("aa");
});
function loadCustomerImg(cusPath){
    $(".nicImg").css({
        "background": `url(${"assets/img/fileSave/uploads/"+cusPath})`,
        "background-size": "cover",
        "background-position":"center",

    });
}



function loadSlipImg(path) {
    $(".slipImg").css({
        "background": `url(${"assets/img/fileSave/uploads/"+path})`,
        "background-size": "cover",
        "background-position":"center",

    });

}
$("#btnRequestAccept").click(function (){
    request = "Accept";
    rentalUpdate(request);
});
$("#btnRequestReject").click(function (){
    request = "Reject";
    rentalUpdate(request);
});

let rentDetailDup;

function rentalUpdate(request){
    console.log(rentalId);
    console.log(request);

    //Rent detail Updated
    $.ajax({
        url: baseUrl + "Rent?rentId="+rentalId,
        dataType:"Json",
        method: "get",
        success: function (resp) {
            alert(resp.message);
            alert(resp.data);
            rentDetailDup = resp.data.rentDetail;
            changeDriver();
                let rent ={
                    rentId : resp.data.rentId,
                    pickUpDate : resp.data.pickUpDate,
                    returnDate : resp.data.returnDate,
                    pickUpVenue :resp.data.pickUpDate,
                    returnVenue :resp.data.returnVenue,
                    pickUpTime : resp.data.pickUpTime,
                    statusOfReq : request,
                    total : resp.data.total,
                    lossDamageWaiver : resp.data.lossDamageWaiver,
                    duration : resp.data.duration,
                    slipImgPath : resp.data.slipImgPath,
                    cusId : cusId,
                    rentDetail:resp.data.rentDetail

                }

                $.ajax({
                    url: baseUrl + "Rent",
                    method: "put",
                    data: JSON.stringify(rent),
                    contentType: "application/json",
                    success: function (resp) {
                        alert(resp.message);
                        getAllRentalDetails();

                    },
                    error: function (error) {
                        let prase = JSON.parse(error.responseText);
                        alert(prase.message);

                    }

                });


                //get Driver Id nd Update Driver-----------------------------------
            for (const re of resp.data.rentDetail) {
                alert("dr" + re.driverId)
                updateDriverAvailability(re.driverId,"unAvailable")
            }

          /*  for (const re of resp.data.rentDetail) {

                alert("dr"+re.driverId)

                $.ajax({
                    url: baseUrl + "Driver?driverId="+re.driverId,
                    dataType:"Json",
                    method: "get",
                    success: function (resp) {
                      /!*  alert(resp.message);
                        alert(resp.data);*!/

                        console.log("did"+resp.data.driverId);
                        let Driver = {
                            driverId: resp.data.driverId,
                            driverName:resp.data.driverName,
                            driverContactNo:resp.data.driverContactNo,
                            availability: "unAvailable"

                        }
                        $.ajax({
                            url: baseUrl + "Driver",
                            method: "put",
                            data: JSON.stringify(Driver),
                            contentType: "application/json",
                            success: function (resp) {

                                alert("Susses..!");

                            },
                            error: function (error) {
                                let prase = JSON.parse(error.responseText);
                                alert(prase.message);

                            }

                        });

                    },
                    error: function (error) {
                        let prase = JSON.parse(error.responseText);
                        alert(prase.message);

                    }

                });
*/
            //}



        },
        error: function (error) {
            let prase = JSON.parse(error.responseText);
            alert(prase.message);

        }

    });

}
getAllDriversAdmin();
function getAllDriversAdmin(){
    $.ajax({
        url: baseUrl+"Driver",
        method :"get",
        dataType:"json",
        success: function (resp) {
            for (const r of resp.data) {
                if(r.availability == "Available") {
                    console.log("av"+r.driverId);
                    $("#driverSelect").append("<option>" + r.driverId + "</option>");
                }
            }


        }


    });
}
let driverIdDup ;
let btnId;
$("#driverSelect").prop('disabled', true);
$('body').on('click', '.Drivereditbtn', function() {
    $("#driverSelect").prop('disabled', false);

    //get clicking row driver id;
    alert("id"+this.id);
    driverIdDup = this.id;
    btnId = this.id;

});
$("#driverSelect").change(function (){
    let newDriverId = $("#driverSelect").val();
    $("#tblDriver").empty();
    for (let r of tempTblDriverD) {
        if (driverIdDup == r.driverId) {

            $("#tblDriver").append("<tr><td>"+r.rentId+"</td><td>"+r.vid+"</td><td>"+newDriverId+"</td><td><button class=\"Drivereditbtn\" id="+r.driverId+" style='    border: 0;\n" +
                "    border-radius: 5px;\n" +
                "    font-size: 13px;\n" +
                "    width: 53px;\n" +
                "    background-color: #5d00ff;\n" +
                "    color: white;'>edit</button></td></tr>");


        }else {
            $("#tblDriver").append("<tr><td>"+r.rentId+"</td><td>"+r.vid+"</td><td>"+r.driverId+"</td><td><button class=\"Drivereditbtn\" id="+r.driverId+" style='    border: 0;\n" +
                "    border-radius: 5px;\n" +
                "    font-size: 13px;\n" +
                "    width: 53px;\n" +
                "    background-color: #5d00ff;\n" +
                "    color: white;'>edit</button></td></tr>");


        }
    }
});

function changeDriver(){
    for (let r of rentDetailDup) {
        //change clicking row driver id
        if(driverIdDup == r.driverId){
            updateDriverAvailability(r.driverId,"Available")//update release diver availability
            console.log("old driver detail driver id"+r.driverId)

            //assign new selected diver id to rent detail driver id
           let newDriverId = $("#driverSelect").val();
            r.driverId = newDriverId;
            console.log("new diver detail driver id "+r.driverId)
        }

    }
}

function updateDriverAvailability(id,ava) {
        $.ajax({
            url: baseUrl + "Driver?driverId=" + id,
            dataType: "Json",
            method: "get",
            success: function (resp) {
                /*  alert(resp.message);
                  alert(resp.data);*/

                console.log("did" + resp.data.driverId);
                let Driver = {
                    driverId: resp.data.driverId,
                    driverName: resp.data.driverName,
                    driverContactNo: resp.data.driverContactNo,
                    availability: ava

                }
                $.ajax({
                    url: baseUrl + "Driver",
                    method: "put",
                    data: JSON.stringify(Driver),
                    contentType: "application/json",
                    success: function (resp) {

                        alert("Susses..!");

                    },
                    error: function (error) {
                        let prase = JSON.parse(error.responseText);
                        alert(prase.message);

                    }

                });

            },
            error: function (error) {
                let prase = JSON.parse(error.responseText);
                alert(prase.message);

            }

        });


}


