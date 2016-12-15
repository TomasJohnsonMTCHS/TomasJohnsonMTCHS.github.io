<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="Styles2.css">
<title>AOneStepAway</title>
<!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<?php
$to ="duane.erickson@mtchs.org";
$subject = "Information has been filled!";
$from =$_REQUEST['EmailAddress'];
$message ="Name: ".$_REQUEST['fullName']. "\nEmail: ".$_REQUEST['EmailAddress']. "\nPhone: ".$_REQUEST['PhoneNumber']. "\nComments/Questions: ".$_REQUEST['Comment'];
$spam=$_REQUEST['Address'];

if($spam)
	die("Its a Spam :)");
else{
mail($to , $subject , $message, $from);
}

?>
</head>
<body>
<div id="main">
</div>
<main>
	<header>
	  <h1>A One Step Away<img src="img/Logo.png" width="176" height="72" alt=""/></h1>
	</header><!-- #BeginLibraryItem "/Library/Untitled.lbi" -->	<nav>
     <ul>
    	<li class="Border"> <a href="AOneStepHome.html">Home</a></li><li class="Border">
        <a href="History.html">History</a></li><li class="Border"> 
    	<a href="Rooms and Accomidations .html">Accommidations</a></li><li class="Border"> 
        <a href="SpecialPrices.html">Special Sale Items</a></li><li> 
        <a href="ContactUs.html">Contact Us</a></li>
     </ul>
    </nav><!-- #EndLibraryItem --><section class="title">
  <p class="LineSpace">Thank You For Contacting Us</p>
 </section>
 
 <article> 
 Your information has been emailed to a local host, we will reveiw your infomration in 1-2 buisness days.
</article>
<section Id="info">
<p class="LineSpace"> (208)-392-4938 </p>
<p class="LineSpace"> 112 Cottonwood Street </p>
<p> Idaho City, Idaho, 83631</p>
</section>
 <footer>
*Advance reservations guaranteed to all credit cards. Full payment is required for each night stay. Minimum 4 weeks cancellation notice required.
 You may reschedule your reservation or resell your reservation for a refund to be made.
 *Check in time is 3 pm-8 pm unless previously arranged. Checkout time is 11 am. Sorry no smoking or pets.
</footer>
</main>
</body>
</html>