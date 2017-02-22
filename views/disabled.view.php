<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>

    <link rel="stylesheet" href="../static/css/kendo/kendo.common.min.css">
    <link rel="stylesheet" href="../static/css/kendo/kendo.black.min.css">
    <link rel="stylesheet" href="../static/css/kendo/kendo.common.core.min.css">
    <link rel="stylesheet" href="../static/css/kendo/kendo.bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="../static/css/w3.css">

    <script type="text/javascript" src="../static/js/kendo/jquery.min.js"></script>
    <script type="text/javascript" src="../static/js/kendo/kendo.all.min.js"></script>
    <script type="text/javascript" src="../static/js/kendo/kendo.dataviz.min.js"></script>
    <script type="text/javascript" src="../static/js/kendo/kendo.web.min.js"></script>
    <script type="text/javascript" src="../static/js/disabled.js"></script>
</head>
<body>
<nav class="w3-sidenav w3-teal" style="width: 21%">
    <ul class="w3-ul w3-hoverable">
        <li class="w3-hover-blue">

            <a id="home" href="../index.view.php"> <i class="material-icons">home</i></a>
        </li>
        <li class="w3-hover-blue">
            <a href="education.view.php">Arsimi</a>
        </li>
        <li class="w3-hover-blue">
            <a href="disabled.view.php">Njerezit me aftesi te kufizuar</a>
        </li>
        <li class="w3-hover-blue">
            <a href="movement.view.php">Shperndarja e popullsise</a>
        </li>
    </ul>
    <br>
    <br>

    <div class="w3-center" id="about-statical">
        <h3>Rreth Statical:</h3>

        <p>
            Statical eshte nje gjenerues grafik i statistikave te CENSUSIT te mbledhura nga INSTAT
            pergjate viteve <i>2001-2011</i>
        </p>
    </div>
    <div id="about-us">
        <h3 class="w3-center">Rreth nesh:</h3>
    </div>
    <div class="w3-row">
        <ul class="w3-ul w3-teal w3-center" style="border-bottom:none">
            <li style="border-bottom:none">
                <span>Livia Mano</span>
                <span><i>livia.mano@fshnstudent.info</i></span>
            </li>
            <li style="border-bottom:none">
                <span>Madrit Kacabumi</span>
                <span><i>madrit.kacabumi@fshnstudent.info</i></span>
            </li>
            <li style="border-bottom:none">
                <span>Margarit Zisaj</span>
                <span>margarit.zisaj@fshnstudent.info</span>
            </li>
        </ul>
    </div>
</nav>
<div style="margin-left: 21%">
    <div class="w3-row-padding w3-blue">
        <div class="w3-col m4 w3-right">
            <button id="dissabled-currently-schooled" class="w3-btn w3-blue">Popullsia me aftesi te kufizuara dhe arsimimi
            </button>
        </div>
    </div>
    <div class="w3-container">
        <div id="chart"></div>
        <div id="pie-chart"></div>
    </div>
</div>
</body>
</html>