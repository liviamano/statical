$(function () {
    var totalReturned = $('#total-returned');
    var populationByCity = $('#population-by-city');
    var primaryLow = $('#primary-low');
    var uni = $('#uni');

    totalReturned.click(function () {
        $.ajax({
            url: '../data/get_total_returned.php',
            type: 'POST',
            success: function (response) {
                var data = $.parseJSON(response);
                $('#chart').kendoChart({
                    title: {
                        text: "Popullsia mosha 0-30 vjec e kthyer nga emigracioni"
                    },
                    dataSource: {
                        data: data
                    },
                    seriesDefaults: {
                        type: "line"
                    },
                    series: [{
                        name: 'Kthyer',
                        field: "total"
                    }],
                    categoryAxis: {
                        field: "year"
                    }
                })
            }
        })
    });

    populationByCity.click(function () {
        $.ajax({
            url: '../data/get_population_by_city.php',
            type: 'POST',
            success: function (response) {
                var data = $.parseJSON(response);
                $('#chart').kendoChart({
                    title: {
                        text: "Shperndarja e popullsise sipas rajoneve"
                    },
                    dataSource: {
                        data: data
                    },
                    series: [{
                        name: 'Numri i popullsise',
                        field: "population"
                    }],
                    categoryAxis: {
                        field: "region"
                    }
                })
            }
        })
    });

    primaryLow.click(function () {
        $.ajax({
            url: '../data/get_primary_low_public_private.php',
            type: 'POST',
            success: function (response) {
                var data = $.parseJSON(response);
                $('#chart').kendoChart({
                    title: {
                        text: "Numri i shkollave fillore dhe te mesme te ulet"
                    },
                    dataSource: {
                        data: data
                    },
                    seriesDefaults: {
                        type: "line"
                    },
                    series: [{
                        name: 'Publike',
                        field: "public"
                    },
                        {
                            name: 'Private',
                            field: "private"
                        }],
                    categoryAxis: {
                        field: "year"
                    }
                })
            }
        })
    });

    uni.click(function () {
        $.ajax({
            url: '../data/get_uni_public_private.php',
            type: 'POST',
            success: function (response) {
                var data = $.parseJSON(response);
                $('#chart').kendoChart({
                    title: {
                        text: "Numri i shkollave te larta"
                    },
                    dataSource: {
                        data: data
                    },
                    seriesDefaults: {
                        type: "line"
                    },
                    series: [{
                        name: 'Publike',
                        field: "public"
                    },
                        {
                            name: 'Private',
                            field: "private"
                        }],
                    categoryAxis: {
                        field: "year"
                    }
                })
            }
        })
    })
});
