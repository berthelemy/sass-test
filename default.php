<?php defined('C5_EXECUTE') or die("Access Denied."); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html class="no-js" lang="<?php echo Localization::activeLanguage()?>" xmlns="http://www.w3.org/1999/xhtml">
    <head>
       
        <?php Loader::element('header_required')?>
        
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <!-- Place favicon.ico in the root directory -->

        <link rel="stylesheet" href="<?php echo $view->getThemePath()?>/build/css/styles.min.css">
        <script src="<?php echo $view->getThemePath()?>/bower_components/modernizr/modernizr.js"></script>
    </head>
    <body>
        <div class="<?php echo $c->getPageWrapperClass()?>">
        
          <?php $view->inc('inc/header.php'); ?>
          
  
          <!-- Add your site or application content here -->
          <p>Hello world! This is HTML5 Boilerplate.</p>
          
          
          <?php $view->inc('inc/footer.php'); ?>
          
          <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
          <script>window.jQuery || document.write('<script src="<?php echo $view->getThemePath()?>/bower_components/jquery/dist/jquery.js"><\/script>')</script>
          <link rel="stylesheet" href="<?php echo $view->getThemePath()?>/build/js/scripts.min.js">
  
          <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
          <script>
              (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
              function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
              e=o.createElement(i);r=o.getElementsByTagName(i)[0];
              e.src='https://www.google-analytics.com/analytics.js';
              r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
              ga('create','UA-XXXXX-X','auto');ga('send','pageview');
          </script>
        
        </div><!-- C5 wrapper -->

        <?php Loader::element('footer_required')?>

    </body>
</html>
