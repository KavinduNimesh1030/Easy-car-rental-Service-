let customerId = null;
var driverId = "D005";
var Driver ={};
var driverIds= [];

getAllAvailableDriver();

function getRentDetail(rentId) {
    let rows = $("#tblAddToCart").children().length;

    let array =[];
   /* let vid = "V001";*/
    let pickUpDate = $("#DatPickDate").val();
    let pickUpTime = $("#DatPickUpTime").val();
    let returnDate = $("#DatReturnDate").val();
    let driverOption = $("#driverOpSelector").val();
    console.log(driverOption);
    if(driverOption == "With Driver"){
        for (let i = 0; i < rows; i++) {
            let vid = $("#tblAddToCart").children().eq(i).children(":eq(0)").text();
            array.push({rentId:rentId,vid:vid,pickDate:pickUpDate,pickTime:pickUpTime,returnDate:returnDate,driverId:driverIds[i]});

        }

    }else {
        driverId= "with out Driver";
        for (let i = 0; i < rows; i++) {
            let vid = $("#tblAddToCart").children().eq(i).children(":eq(0)").text();
            array.push({rentId:rentId,vid:vid,pickDate:pickUpDate,pickTime:pickUpTime,returnDate:returnDate,driverId:driverId});

        }
    }


    return array;
}


$("#btnRentSubmit").click(function (){
    let rentId = "R003"
    let lossDamageWaiver = 30000.00;
    let duration = $("#txtDuration").val();
    let pickUpDate = $("#DatPickDate").val();
    let pickUpTime = $("#DatPickUpTime").val();
    let returnDate = $("#DatReturnDate").val();
    let pickUpVenue = $("#txtPickUpLocation").val();
    let returnVenue = $("#txtReturnLocation").val()
    let slipImgPath = $("#formLossDamage")[0].files[0].name;
    let statusOfReq = "Pending";
    let total = 50000.00;
    let cusId = "199029383838";
    let rentDetail = getRentDetail(rentId);
    console.log("date "+$("#DatPickDate").val())

    let rent ={
        rentId : rentId,
        pickUpDate : pickUpDate,
        returnDate : returnDate,
        pickUpVenue :pickUpVenue,
        returnVenue :returnVenue,
        pickUpTime : pickUpTime,
        statusOfReq : statusOfReq,
        total : total,
        lossDamageWaiver : lossDamageWaiver,
        duration : duration,
        slipImgPath : slipImgPath,
        cusId : cusId,
        rentDetail:rentDetail

    }

    $.ajax({
        url: baseUrl + "Rent",
        method:"post",
        dataType: "json",
        data:JSON.stringify(rent),
        contentType:"application/json",
        success: function (resp) {
            sendRentImagePath();
            a();
            alert(resp.message);
        },
        error:function (error){
            alert(JSON.parse(error.responseText).message);
        }
    });

});

function getCustomerId(id){
    customerId = id;
    console.log("b"+customerId);
}
function sendRentImagePath() {
    var data = new FormData();
    let file = $("#formLossDamage")[0].files[0];
    let fileName = $("#formLossDamage")[0].files[0].name;
    data.append("myFile", file, fileName);
    console.log("file name " + fileName);

    $.ajax({
        url: baseUrl + "api/v1/upload",
        method: 'post',
        async: true,
        contentType: false,
        processData: false,
        data: data,
        success: function (resp) {
            alert(resp);
            alert("Successfully Uploaded");
            /* loadTheLastUploadedImage();*/
        },
        error: function (err) {
            console.log(err);
        }
    });
}
function a(){
    $.ajax({
        url: baseUrl + "Driver",
        method: "put",
        data: JSON.stringify(Driver),
        contentType: "application/json",
        success: function (resp) {

            alert(resp.message);

        },
        error: function (error) {
            let prase = JSON.parse(error.responseText);
            alert(prase.message);

        }

    });


}

function updateDriver(driverId, name, contactNo, unAvailable) {





}

function getAllAvailableDriver(){
        $.ajax({
            url: baseUrl+"Driver?availability="+"Available",
            dataType:"Json",
            method: "get",
            success: function (resp) {
                console.log(resp)
                for (const r of resp.data) {
                    console.log(r.driverId);
                    alert(r.driverId);
                    alert(r.driverName);
                    driverId = r.driverId;
                    driverIds.push(r.driverId);


                    Driver = {
                        driverId: r.driverId,
                        driverName: r.driverName,
                        driverContactNo: r.driverContactNo,
                        availability: "unAvailable"
                    }
                    /*updateDriver(r.driverId,r.name,r.contactNo,"UnAvailable");*/

                }

            }

        });



}