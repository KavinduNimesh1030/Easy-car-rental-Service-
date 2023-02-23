let customerId = null;
function getRentDetail(rentId) {
    let rows = $("#tblAddToCart").children().length;

    let array =[];
   /* let vid = "V001";*/
    let pickUpDate = $("#DatPickDate").val();
    let pickUpTime = $("#DatPickUpTime").val();
    let returnDate = $("#DatReturnDate").val();
    let driverOption = $("#driverOpSelector").val();
    for (let i = 0; i < rows; i++) {
        let vid = $("#tblAddToCart").children().eq(i).children(":eq(0)").text();
        array.push({rentId:rentId,vid:vid,pickDate:pickUpDate,pickTime:pickUpTime,returnDate:returnDate,driverOption:driverOption})

    }



    return array;
}

$("#btnRentSubmit").click(function (){
    let rentId = "uuid"
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
    let cusId = "200120303030";
    let rentDetail = getRentDetail(rentId);

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