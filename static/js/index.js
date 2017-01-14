$(function () {
    $.ajax({
        url: 'get_data.php',
        type: 'POST',
        success: function (response) {
            var data = $.parseJSON(response);
            //alert(data_array[0]);
            $("#chart").kendoChart({
                dataSource: {
                    data: data
                },
                series: [{
                    field: "age",
                    name: "name"
                }],
                categoryAxis: {
                    field: "name"
                }
            });
        }
    })
});

