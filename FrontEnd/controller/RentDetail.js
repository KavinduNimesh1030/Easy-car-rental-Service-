let customerId = null;
var driverId = "D005";
// var Driver ={};
var driverIds= [];
var vehicleIds =[];
let aRentId = "";
getAllAvailableDriver();
getRentId();
function  getRentId(){


    $.ajax({
        url: baseUrl+"Rent/"+"id",
        dataType:"Json",
        method: "get",
        success: function (resp) {
            console.log("43"+resp)
            aRentId = resp.data;
          /* alert(resp.data.rentId);*/
        }

    });

}

function updateVehicleAva(vid) {
    $.ajax({
        url: baseUrl+"Vehicle?vid="+vid,
        dataType:"Json",
        method: "get",
        success: function (resp) {
            let vehicle ={
                vid : vid,
                brand : resp.data.brand,
                color : resp.data.color,
                dailyPrice : resp.data.dailyPrice,
                freeKmForDay : resp.data.freeKmForDay,
                freeKmForMonth : resp.data.freeKmForMonth,
                fuelType : resp.data.fuelType,
                isAvailable : "unAvailable",
                monthlyPrice : resp.data.monthlyPrice,
                noOfPassenger : resp.data.noOfPassenger,
                priceForExtraKm : resp.data.priceForExtraKm,
                transmissionType : resp.data.transmissionType,
                type : resp.data.type,
                frontImgPath : resp.data.frontImgPath,
                backImgPath : resp.data.backImgPath,
                sideImgPath : resp.data.sideImgPath,
                interiorImgPath : resp.data.interiorImgPath,
            }

            $.ajax({
                url: baseUrl+"Vehicle",
                method :"post",
                data : JSON.stringify(vehicle),
                contentType: "application/json",
                success: function (resp) {
                    alert("updated..!");
                    getAllVehicleAdmin();

                },
                error: function(error) {
                    let prase = JSON.parse(error.responseText);
                    alert(prase.message);

                }

            });

        }

    });
}

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
            a(driverIds[i]);
            updateVehicleAva(vid);


        }

    }else {
        driverId= "with out Driver";
        for (let i = 0; i < rows; i++) {
            let vid = $("#tblAddToCart").children().eq(i).children(":eq(0)").text();
            array.push({rentId:rentId,vid:vid,pickDate:pickUpDate,pickTime:pickUpTime,returnDate:returnDate,driverId:driverId});
            updateVehicleAva(vid);
        }
    }


    return array;
}


$("#btnRentSubmit").click(function (){
    let rentId = aRentId;
    alert(rentId);
    let lossDamageWaiver = $("#lblLossDamage").text();
    let duration = $("#txtDuration").val();
    let pickUpDate = $("#DatPickDate").val();
    let pickUpTime = $("#DatPickUpTime").val();
    let returnDate = $("#DatReturnDate").val();
    let pickUpVenue = $("#txtPickUpLocation").val();
    let returnVenue = $("#txtReturnLocation").val()
    let slipImgPath = $("#formLossDamage")[0].files[0].name;
    let statusOfReq = "Pending";
    let total = $("#lblTotal").text();
    let cusId = customerId;
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
//get added driver ids and updated driver availability
function a(id){
    alert(id);
    $.ajax({
        url: baseUrl + "Driver?driverId="+id,
        dataType:"Json",
        method: "get",
        success: function (resp) {
            alert(resp.message);
            alert(resp.data);

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

                    alert(resp.message);

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


function getAllAvailableDriver(){
        $.ajax({
            url: baseUrl+"Driver?availability="+"Available",
            dataType:"Json",
            method: "get",
            success: function (resp) {
                console.log(resp)
                for (const r of resp.data) {
                    console.log(r.driverId);
                   /* alert(r.driverId);
                    alert(r.driverName);*/
                    driverId = r.driverId;
                    driverIds.push(r.driverId);

                    //set all available drivers to array

                }

            }

        });



}