<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>

    <link rel="stylesheet" href="static/css/kendo.common.min.css">
    <link rel="stylesheet" href="static/css/kendo.black.min.css">
    <link rel="stylesheet" href="static/css/kendo.common.core.min.css">
    <link rel="stylesheet" href="static/css/kendo.bootstrap.min.css">

    <script type="text/javascript" src="static/js/jquery.min.js"></script>
    <script type="text/javascript" src="static/js/kendo.all.min.js"></script>
    <script type="text/javascript" src="static/js/kendo.dataviz.min.js"></script>

</head>
<body>
<div id="chart" style="width: 400px; height: 600px"></div>

<script>

    $("#chart").kendoChart({
        title :{text: 'My chart'},
        series: [
            { name: "Example Series", data: [200, 450, 300, 125] }
        ],
        categoryAxis:{
            categories: [ 2000, 2001, 2002, 2003 ]
        }
    });

</script>
</body>
</html>