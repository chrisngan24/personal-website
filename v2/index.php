<!DOCTYPE HTML>
<html>
  <head>
    <title>Christopher Ngan</title>
    <!-- <link rel="stylesheet" type="text/css" href="css/main.css"> -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="libs/bootstrap/css/bootstrap.min.css">
    <link href="libs/bootstrap/css/bootstrap-responsive.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <script type="text/javascript" src="libs/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-39484588-3', 'chrisngan.com');
    ga('send', 'pageview');

    </script>
  </head>
  <body>
    <div class="container">
      <div class="title-panel">
        <?php include('includes/nav.php'); ?>
      </div>
    </div>
    <div class="container well">
      <?php include('includes/home.php'); ?>    
      <?php include('includes/portfolio.php'); ?>    
    </div>
    <?php include('includes/footer.php'); ?>    
  </body>

</html>
