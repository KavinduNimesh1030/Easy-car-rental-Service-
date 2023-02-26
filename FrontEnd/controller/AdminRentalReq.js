let baseUrl = "http://localhost:8080/BackEnd_war/";

function getAllRentalDetails(){
    $.ajax({
        url: baseUrl+"Rent",
        method :"get",
        dataType:"json",
        success: function (resp) {
            for (const r of resp.data) {
                alert(r.rentId);
                console.log(r.rentId);
            }

     /* $("#tblCustomerReq").append("<tr style='height: 71px;column-gap: 10px;gap: 10px;box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);border-radius: 10px;'><td>"+resp.data.rentId+"</td><td>"+resp.data.cusId+"</td><td>"+resp.data.pickUpDate+"</td><td>"+resp.data.returnDate+"</td><td>"+resp.data.pickUpVenue+"</td><td>"+resp.data.returnValue+"</td><td>"+resp.data.statusOfReq+"</td><td>"+resp.data.statusOfReq+"</td></tr>");*/
        }


    });
}