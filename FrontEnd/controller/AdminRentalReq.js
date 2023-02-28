let baseUrl = "http://localhost:8080/BackEnd_war/";
getAllRentalDetails();
function getAllRentalDetails(){
    $.ajax({
        url: baseUrl+"Rent",
        method :"get",
        dataType:"json",
        success: function (resp) {
            for (const r of resp.data) {
                console.log(r.rentId);
                console.log(r.cusId);
                for (const rd of r.rentDetail) {
                    console.log("v"+rd.vid)
                    console.log("dr"+rd.driverId)
                    $(".adminDriver").append("<h2 style='font-size: 16px;transform: translateX(32px);'>"+rd.vid+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+rd.driverId+"</h2>")

                }
                $("#tblCustomerReq").append("<tr style='height: 71px;column-gap: 10px;gap: 10px;box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);border-radius: 10px;'><td>"+r.rentId+"</td><td>"+r.cusId+"</td><td>"+r.pickUpDate+"</td><td>"+r.returnDate+"</td><td>"+r.pickUpVenue+"</td><td>"+r.returnVenue+"</td><td>"+r.statusOfReq+"</td><td>"+r.total+"</td><td><button class=\"editbtn\" name="+r.cusId+" id="+r.slipImgPath+">edit</button></td></td></tr>");

            }


        }


    });
}


$('body').on('click', '.editbtn', function() {
    // code here
    loadSlipImg(this.id);
    alert(this.id);
    alert(this.name);
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