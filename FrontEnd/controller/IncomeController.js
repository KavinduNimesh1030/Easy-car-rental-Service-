let monthly = "100"
$.ajax({
    url: baseUrl+"Income?monthly="+monthly,
    dataType:"Json",
    method: "get",
    success: function (resp) {
       alert(resp.data);
    }

});