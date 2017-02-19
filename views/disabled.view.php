<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>

    <link rel="stylesheet" href="../static/css/kendo/kendo.common.min.css">
    <link rel="stylesheet" href="../static/css/kendo/kendo.black.min.css">
    <link rel="stylesheet" href="../static/css/kendo/kendo.common.core.min.css">
    <link rel="stylesheet" href="../static/css/kendo/kendo.bootstrap.min.css">
    <link rel="stylesheet" href="../static/css/w3.css">

    <script type="text/javascript" src="../static/js/kendo/jquery.min.js"></script>
    <script type="text/javascript" src="../static/js/kendo/kendo.all.min.js"></script>
    <script type="text/javascript" src="../static/js/kendo/kendo.dataviz.min.js"></script>
    <script type="text/javascript" src="../static/js/kendo/kendo.web.min.js"></script>
    <script type="text/javascript" src="../static/js/disabled.js"></script>
</head>
<body>
<nav class="w3-sidenav w3-green" style="width: 20%">
    <a id="home" href="../index.view.php" class="w3-btn w3-green">Home</a>
    <a href="../views/education.view.php" class="w3-btn w3-green">Arsimi</a>
    <a href="../views/disabled.view.php" class="w3-btn w3-green">Njerezit me aftesi te kufizuar</a>
    <a href="../views/movement.view.php" class="w3-btn w3-green">Shperndarja e popullsise</a>
</nav>
<div style="margin-left: 20%">
    <div class="w3-row-padding w3-blue">
        <div class="w3-col m4 w3-right">
            <button id="dissabled-currently-schooled" class="w3-btn w3-blue">Dissabled Currently Schooled
            </button>
        </div>
    </div>
    <div class="w3-container">
        <div id="chart"></div>
    </div>
</div>
</body>
</html>