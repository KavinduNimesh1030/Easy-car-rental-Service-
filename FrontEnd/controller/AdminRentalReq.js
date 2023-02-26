let baseUrl = "http://localhost:8080/BackEnd_war/";
getAllRentalDetails();
let path = "car.png";
function getAllRentalDetails(){
    $.ajax({
        url: baseUrl+"Rent",
        method :"get",
        dataType:"json",
        success: function (resp) {
            for (const r of resp.data) {
                console.log(r.rentId);
                path=r.slipImgPath;
                $("#tblCustomerReq").append("<tr style='height: 71px;column-gap: 10px;gap: 10px;box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);border-radius: 10px;'><td>"+r.rentId+"</td><td>"+r.cusId+"</td><td>"+r.pickUpDate+"</td><td>"+r.returnDate+"</td><td>"+r.pickUpVenue+"</td><td>"+r.returnVenue+"</td><td>"+r.statusOfReq+"</td><td><button class=\"editbtn\" id='v'>edit</button></td></td></tr>");

            }


        }


    });
}

$('body').on('click', '.editbtn', function() {
    // code here
    loadTheLastUploadedImage();
});

$('body').on('click', '.tblTr', function() {
    // code here
   alert("aa");
});





function loadTheLastUploadedImage() {
    $(".slipImg").css({
        "background": `url(${"assets/img/fileSave/uploads/"+path})`,
        "background-size": "cover",
        "height": "300px"
    });

   /* $.ajax({
        url: baseUrl + "api/v1/upload",
        method: 'get',
        dataType: 'json',
        success: function (resp) {
            let url = resp[resp.length - 1];

            console.log( "url"+url);
            console.log(resp.length-1);

         /!*   $(".slipImg").css({
                "background": `url(${baseUrl + "uploads/"+path})`,
                "background-size": "cover",
                "height": "300px"
            });*!/


            for (let i in resp) {
                let row = `<tr><td><img src="${baseUrl + resp[i]}" width="100px"></td></tr>`;
                $("#tblCustomerReq").append(row);
            }

        },
        error: function (err) {
            console.log(err);
        }
    });*/
}