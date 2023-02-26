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
                $("#tblCustomerReq").append("<tr style='height: 71px;column-gap: 10px;gap: 10px;box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);border-radius: 10px;'><td>"+r.rentId+"</td><td>"+r.cusId+"</td><td>"+r.pickUpDate+"</td><td>"+r.returnDate+"</td><td>"+r.pickUpVenue+"</td><td>"+r.returnVenue+"</td><td>"+r.statusOfReq+"</td><td>"+r.total+"</td><td><button class=\"editbtn\" name="+r.cusId+" id="+r.slipImgPath+">edit</button></td></td></tr>");

            }


        }


    });
}


$('body').on('click', '.editbtn', function() {
    // code here
    loadTheLastUploadedImage(this.id);
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
                }
            }

        }

    });

}



$('body').on('click', '.tblTr', function() {
    // code here
   alert("aa");
});





function loadTheLastUploadedImage(path) {
    $(".slipImg").css({
        "background": `url(${"assets/img/fileSave/uploads/"+path})`,
        "background-size": "cover",
        "background-position":"center",

    });

/*    $.ajax({
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