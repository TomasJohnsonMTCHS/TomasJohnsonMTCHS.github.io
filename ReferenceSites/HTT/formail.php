<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>How-to-Tech </title>
    <link rel="stylesheet" type="text/css" href="styleblue.css">
    <!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<?php
$to ="duane.erickson@mtchs.org";
$subject = "Information has been filled!";
$from =$_REQUEST['EmailAddress'];
$message ="Name: ".$_REQUEST['fullName']. "\nEmail: ".$_REQUEST['EmailAddress']. "\nComments/Questions: ".$_REQUEST['Comment'];
$spam=$_REQUEST['Address'];

if($spam)
	die("Its a Spam :)");
else{
mail($to , $subject , $message, $from);
}

?>
        }
        <meta charset="UTF-8">
        <script language="javascript">
            function toggle1() {
                var ele = document.getElementById("toggleText1");
                var text = document.getElementById("displayText1");
                if (ele.style.display == "block") {
                    ele.style.display = "none";
                } else {
                    ele.style.display = "block";
                }
            }

            function toggle() {
                var ele = document.getElementById("toggleText");
                var text = document.getElementById("displayText");
                if (ele.style.display == "block") {
                    ele.style.display = "none";
                } else {
                    ele.style.display = "block";
                }
            }
        </script>
</head>

<body>
    <header>
        <h1 id="headingtxt">How To Tech</h1>
        <div class="divnav">
            <a id="displayText1" href="javascript:toggle1();"><img src="img/How-To-Tech%20Logo%20-%20Final.png" alt="logo" width=50 height=50 /></a>
            <nav id="toggleText1" style="display:none">
                <ul>
                    <li><a href="How-To-Tech.html" class="a">Home</a></li>
                    <li><a href="NewReleases.html" class="a">New Releases</a></li>
                    <li><a id="displayText" href="javascript:toggle();" class="a">Tutorials</a>
                        <ul id="toggleText" style="display: none">
                            <li><a href="Blender.html">Blender</a></li>
                            <li><a href="HTML.html">HTML/CSS</a></li>
                            <li><a href="Illustrator.html">Illustrator</a></li>
                            <li><a href="JavaScript.html">Java Script</a></li>
                            <li><a href="Photoshop.html">Photoshop</a></li>
                            <li><a href="Programming.html">Programming</a></li>
                            <li><a href="Music.html">Music Creation</a></li>
                            <li><a href="Minecraft.html">Minecraft</a></li>
                            <li><a href="video.html">Video Editing</a></li>
                            <li><a href="other.html">Other</a></li>
                        </ul>
                    </li>
                    <li><a href="Contact.html" class="a">Contact</a></li>
                </ul>
            </nav>
        </div>

    </header>
    <section>
        <article>
            <h2>Request Sent</h2>
            <h3> Thank you for sending </h3>
            <p class="end">Please feel free to continue browsing our videos to meet your tech needs.</p>
        </article>
    </section>

    <footer>
        Copyright How to Tech
    </footer>
</body>

</html>