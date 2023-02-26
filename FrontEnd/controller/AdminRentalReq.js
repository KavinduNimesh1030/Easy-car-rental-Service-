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
                $("#tblCustomerReq").append("<tr style='height: 71px;column-gap: 10px;gap: 10px;box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);border-radius: 10px;'><td>"+r.rentId+"</td><td>"+r.cusId+"</td><td>"+r.pickUpDate+"</td><td>"+r.returnDate+"</td><td>"+r.pickUpVenue+"</td><td>"+r.returnVenue+"</td><td>"+r.statusOfReq+"</td><td id='viewMore'>"+ "view More"+"</td></tr>");
            }

        }


    });
}

function loadTheLastUploadedImage() {
    $("#table").empty();
    $.ajax({
        url: baseUrl + "api/v1/upload",
        method: 'get',
        dataType: 'json',
        success: function (resp) {
            let url = resp[resp.length - 1];

            console.log( "url"+url);
            console.log(resp.length-1);

            $("#display").css({
                "background": `url(${baseUrl + url})`,
                "background-size": "cover",
                "height": "300px"
            });

            for (let i in resp) {
                let row = `<tr><td><img src="${baseUrl + resp[i]}" width="100px"></td></tr>`;
                $("#table").append(row);
            }

        },
        error: function (err) {
            console.log(err);
        }
    });
}