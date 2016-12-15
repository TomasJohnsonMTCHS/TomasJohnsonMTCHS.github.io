<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>ContactForm</title>
    <!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
    <?php
$to ="duane.erickson@mtchs.org;
$subject = "Peurto Rico Condo Room request";
$from =$_REQUEST['EmailAddress'];
$message ="Name: ".$_REQUEST['fullName']."\nPhone: ".$_REQUEST['PhoneNumber']."\nAdults: ".$_REQUEST['Adults']."\nChildren: ".$_REQUEST['Children']."\nComments and Questions: ".$_REQUEST['Comment'];
$spam=$_REQUEST['Address'];

if($spam)
	die("Rekt");
else{
mail($to , $subject , $message, $from);
}

?>
    	<meta charset="UTF-8">
        <script language="javascript">
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

    <script>
        function startTime() {
            var today = new Date();
            var q = today.getHours();
            var h = today.getHours();

            if (h > 12) {
                h = h - 12
            }
            var m = today.getMinutes();
            if (m < 10) {
                m = "0" + m;
            }
            var s = today.getSeconds();
            if (s < 10) {
                s = "0" + s;
            }

            var d = new Date();
            var month = new Array();
            month[0] = "Jan";
            month[1] = "Feb";
            month[2] = "Mar";
            month[3] = "Apr";
            month[4] = "May";
            month[5] = "Jun";
            month[6] = "Jul";
            month[7] = "Aug";
            month[8] = "Sep";
            month[9] = "Oct";
            month[10] = "Nov";
            month[11] = "Dec";
            var DM = month[d.getMonth()];

            var DD = today.getDate();
            var DY = today.getFullYear();

            if (q < 13) {
                q = h + ":" + m + ":" + s + " am";
            } else {
                q = h + ":" + m + ":" + s + " pm";
            }
            document.getElementById('clock').innerHTML = DM + "/" + DD + "/" + DY + " " + q;
            var t = setTimeout(startTime, 100);

        }
    </script>
        <link rel="stylesheet" type="text/css" href="stylecondo.css">
</head>

<body onLoad="startTime()">
    <div id="main">
    </div>
    <main>
        <header>
            <h1>Peurto Rico Condos</h1><img src="Imgs/logo.jpg"  alt="Beach Veiw 1" width="150" height="100" />;
            <h1>&nbsp;</h1>
        </header>
            <nav>
                <ul>
                    <li><a href="Home.html">Home</a></li>
                    <li><a href="#">Rooms</a>
                        <ul>
                            <li><a href="Rooms.html">Living Room</a></li>
                            <li><a href="BedRoom.html">Bed Room</a></li>
                        </ul>
                    </li>
                    <li><a href="About.html">About</a></li>
                    <li><a href="Location.html"> Location </a></li>
                    <li><a id="displayText" href="javascript:toggle();">contact</a></li>
                </ul>
            </nav>
        <section>
        <article class="ArticleSlide">
        Thank you for reserving a room at Peurto Rico Condos!
        </article>
		</section>
        <aside id="toggleText" style="display: none">
            <div id="clock"></div>
            <div>1 - 7876678415</div>
        </aside>

        <footer>
           © copyright 2015 Peurto-Rico-Condo.com
        </footer>
    </main>
</body>

</html>