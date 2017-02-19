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
                        type: "area"
                    },
                    series: [
                        {
                            name: 'Total',
                            field: "total"
                        }, {
                            name: 'Kane ndjekur',
                            field: "attended"
                        }, {
                            name: 'Nuk kane ndjekur',
                            field: "never_attended"
                        }],
                    categoryAxis: {
                        field: "groupage"
                    }
                });
            }
        });
        $.ajax({
            url: '../data/get_gender_based_dissabled_schooled.php',
            type: 'POST',
            success: function (response) {
                var data = $.parseJSON(response);
                $('#pie-chart').kendoChart({
                    title: {
                        text: "Raporti Femer-Mashkull i popullsise me aftesi te kufizuara qe nuk jane shkolluar kurre"
                    },
                    legend: {
                        position: "top"
                    },
                    dataSource: {
                        data: data
                    },
                    seriesDefaults: {
                        labels: {
                            visible: true,
                            format: "{0}%"
                        }
                    },
                    series: [{
                        type: "pie",
                        data: [{
                            category: "femer",
                            value: 61
                        }, {
                            category: "mashkull",
                            value: 39
                        }]
                    }]
                })
            }
        })
    });

});
