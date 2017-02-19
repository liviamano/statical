$(function () {

    var dissabledCurrentlySchooled = $('#dissabled-currently-schooled');

    dissabledCurrentlySchooled.click(function () {
        $.ajax({
            url: '../data/get_dissabled_currently_schooled.php',
            type: 'POST',
            success: function (response) {
                var data = $.parseJSON(response);
                $("#chart").kendoChart({
                    title: {
                        text: "Popullsia me aftesi te kufizuara sipas grupmoshes"
                    },
                    dataSource: {
                        data: data
                    },
                    seriesDefaults: {
                        type: "line"
                    },
                    series: [{
                        name: 'Kane ndjekur',
                        field: "attended"
                    }, {
                        name: 'Nuk kane ndjekur',
                        field: "never_attended"
                    }],
                    //xAxis: {
                    //    title: "Title",
                    //    axisCrossingValues: [0, 10000],
                    //    labels: {
                    //        format: "N0"
                    //    }
                    //},
                    //yAxes: [{
                    //    title: {
                    //        text: "Kane ndjekur"
                    //    }
                    //}, {
                    //    name: "Nuk kane ndjekur",
                    //    title: {
                    //        text: "Nuk kane ndjekur"
                    //    }
                    //}],
                    categoryAxis: {
                        field: "groupage"
                    }
                });
            }
        });
    });

});
