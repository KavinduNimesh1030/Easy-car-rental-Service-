loadAllCustomerAdmin();
function loadAllCustomerAdmin(){
    $("#tblViewAllCus").empty();
    $.ajax({
        url: baseUrl+"Customer",
        method :"get",
        dataType:"json",
        success: function (resp) {
            for (const r of resp.data) {
                console.log(r.cusId);
                $("#tblViewAllCus").append("<tr style='height: 71px;column-gap: 10px;gap: 10px;box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);border-radius: 10px;'><td>"+r.id+"</td><td>"+r.name+"</td><td>"+r.address+"</td><td>"+r.contactNo+"</td><td>"+r.email+"</td>><td><button class=\"viewbtn\" style='border: 0;\n" +
                    "    border-radius: 5px;\n" +
                    "    font-size: 13px;\n" +
                    "    width: 53px;\n" +
                    "    background-color: #5d00ff;\n" +
                    "    color: white;' name="+r.cusId+" id="+r.imgPath+">view</button></td></td></tr>");

            }


        }


    });
}
$('body').on('click', '.viewbtn', function() {
   alert(this.id);
   setCustomerNicImgAdmin(this.id);

});
function setCustomerNicImgAdmin(path){
    $("#cusNicImgOut").css({
        "background": `url(${"assets/img/fileSave/uploads/"+path})`,
        "background-size": "cover",
        "background-position":"center",

    });
}
