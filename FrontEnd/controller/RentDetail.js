function getRentDetail(rentId) {
    let array =[];
    let vid = "V001";
    let pickUpDate = $("#DatPickDate").val();
    let pickUpTime = $("#DatPickTime").val();
    let returnDate = $("#DatReturnDate").val();
    let driverOption = $("#driverOpSelector").val();

    array.push({rentId:rentId,vid:vid,pickUpDate:pickUpDate,pickUpTime:pickUpTime,returnDate:returnDate,driverOption:driverOption})

    return array;
}

$("#btnRentSubmit").click(function (){
    let rentId = "R001"
    let lossDamageWaiver = 30000.00;
    let duration = "100km"
    let pickUpDate = $("#DatPickDate").val();
    let pickUpTime = $("#DatPickTime").val();
    let returnDate = $("#DatReturnDate").val();
    let slipImgPath = $("#formLossDamage")[0].files[0].name;
    let statusOfReq = "Pending";
    let total = 50000.00;
    let cusId = "200120303030";
    let rentDetail = getRentDetail(rentId);

});