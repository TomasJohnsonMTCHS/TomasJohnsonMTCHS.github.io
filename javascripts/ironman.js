			var c = document.getElementById("myCanvas");
			var ctx = c.getContext("2d");
			<!-- Background -->
			var grd = ctx.createLinearGradient(0, 0, 0, 493);
			grd.addColorStop(0, "black");
			grd.addColorStop(0.5, "#222");
			grd.addColorStop(1, "black");
			ctx.fillStyle = grd;
			ctx.fillRect(0, 0, 324, 493);
			
			<!-- Body/Shoulders -->
			ctx.beginPath;
			ctx.lineWidth =3;
			ctx.strokeStyle="#aa0000";
			ctx.moveTo(0,378);
			ctx.lineTo(42,363);
			
			ctx.moveTo(324,378);
			ctx.lineTo(280,363);
			
			ctx.moveTo(0,448);
			ctx.lineTo(32,442);
			ctx.lineTo(32,382);
			ctx.lineTo(40,378);
			
			ctx.moveTo(324,448);
			ctx.lineTo(290,442);
			ctx.lineTo(290,382);
			ctx.lineTo(280,378);
			
			ctx.moveTo(48,445);
			ctx.lineTo(37,434);
			ctx.lineTo(37,422);
			ctx.lineTo(40,419);
			ctx.lineTo(40,395);
			ctx.lineTo(43,390);
			
			ctx.moveTo(274,445);
			ctx.lineTo(285,434);
			ctx.lineTo(285,422);
			ctx.lineTo(281,419);
			ctx.lineTo(282,395);
			ctx.lineTo(280,390);
			ctx.stroke();
			ctx.closePath();
			
			<!-- NeckBezierCurve -->
			ctx.beginPath();
			ctx.lineWidth =3;
			ctx.strokeStyle="#222";
			
			ctx.moveTo(94,453);
			ctx.bezierCurveTo(60,393,45,420,45,333);
			
			ctx.moveTo(225,453);
			ctx.bezierCurveTo(270,393,275,410,276,333);
			
			ctx.moveTo(120,427);
			ctx.lineTo(134,445);
			ctx.quadraticCurveTo(160,450,186,445);
			ctx.lineTo(200,427);
			ctx.stroke();
			ctx.closePath();
			
			ctx.beginPath();
			ctx.arc(140,435,3,0,2*Math.PI);
			ctx.stroke();
			ctx.beginPath();
			ctx.arc(180,435,3,0,2*Math.PI);
			ctx.stroke();
			
						<!-- LeftEar -->
			ctx.lineJoin = "round";
			ctx.lineWidth =3;
			ctx.strokeStyle="#aa0000";
			ctx.beginPath();
			ctx.moveTo(36,284);
			ctx.lineTo(30,274);
			ctx.lineTo(26,194);
			ctx.lineTo(34,190);
			ctx.stroke();
			ctx.closePath();
			<!-- RightEar -->
			ctx.beginPath();
			ctx.moveTo(285,284);
			ctx.lineTo(290,274);
			ctx.lineTo(296,194);
			ctx.lineTo(288,190);
			ctx.stroke();
			ctx.closePath();
			<!-- Head Base -->
			ctx.beginPath();
			ctx.moveTo(60,387);
			ctx.lineTo(108,428);
			ctx.bezierCurveTo(107,428,150,422,215,428);
			ctx.lineTo(260,387);
			ctx.bezierCurveTo(260,360,310,310,276,70);
			ctx.bezierCurveTo(245,8,76,8,46,72);
			ctx.bezierCurveTo(10,310,60,360,60,388);
			ctx.lineWidth =3;
			ctx.strokeStyle="#aa0000";
			ctx.stroke();
			ctx.closePath();

			ctx.beginPath();
			ctx.moveTo(43,87);
			ctx.lineTo(41,200);
			ctx.lineCap = "round";
			ctx.stroke();
			ctx.closePath();
			
			ctx.beginPath();
			ctx.moveTo(279,87);
			ctx.lineTo(280,200);
			ctx.lineCap = "round";
			ctx.stroke();
			ctx.closePath();
			
			<!-- Lower Mouth -->
			ctx.beginPath();
			ctx.lineWidth =3;
			ctx.strokeStyle="#FFD688";
			ctx.moveTo(78,383);
			ctx.lineTo(99,403);
			ctx.lineTo(121,385);
			ctx.lineTo(144,384);
			ctx.lineTo(146,378);
			ctx.lineTo(174,378);
			ctx.lineTo(176,384);
			ctx.lineTo(199,385);
			ctx.lineTo(222,404);
			ctx.lineTo(243,383);
			ctx.lineTo(236,356);
			ctx.quadraticCurveTo(236,354,232,355);
			ctx.lineTo(217,371);
			ctx.lineTo(201,353);
			ctx.lineTo(121,353);
			ctx.lineTo(105,371);
			ctx.lineTo(90,356);
			ctx.quadraticCurveTo(90,354,85,355);
			ctx.lineTo(78,383);
			ctx.stroke();
			ctx.closePath();
			
			<!-- Face -->
			ctx.beginPath();
			ctx.lineWidth =3;
			ctx.strokeStyle="#FFD688";
			ctx.moveTo(118,345);
			ctx.lineTo(161,344);
			ctx.lineTo(204,345);
			ctx.lineTo(213,360);
			ctx.quadraticCurveTo(216,364,220,360);
			ctx.lineTo(233,346);
			ctx.bezierCurveTo(251,280,263,310,281,245);
			ctx.quadraticCurveTo(282,214,279,206);
			ctx.lineTo(279,188);
			ctx.quadraticCurveTo(272,184,274,180);
			ctx.quadraticCurveTo(283,115,274,67);
			ctx.quadraticCurveTo(260,50,251,46);
			ctx.quadraticCurveTo(245,48,242,42);
			ctx.quadraticCurveTo(212,32,206,36);
			ctx.bezierCurveTo(195,70,200,100,192,110);
			ctx.lineTo(130,110);
			ctx.bezierCurveTo(113,70,130,100,114,36);
			ctx.quadraticCurveTo(90,34,80,42);
			ctx.quadraticCurveTo(78,48,70,46);
			ctx.quadraticCurveTo(50,60,46,75);
			ctx.quadraticCurveTo(40,160,45,170);
			ctx.quadraticCurveTo(50,182,42,190);
			ctx.lineTo(42,206);
			ctx.quadraticCurveTo(38,214,38,245);
			ctx.bezierCurveTo(46,280,85,310,88,346);
			ctx.lineTo(100,360);
			ctx.quadraticCurveTo(105,364,108,360);
			ctx.lineTo(118,345);
			ctx.stroke();
			ctx.closePath();
			
			<!-- EyesOutline -->
			ctx.beginPath();
			ctx.moveTo(279,206);
			ctx.lineTo(268,211);
			ctx.quadraticCurveTo(260,223,243,223);
			ctx.lineTo(196,222);
			ctx.lineTo(192,209);
			ctx.moveTo(268,211);
			ctx.lineTo(266,196);
			ctx.quadraticCurveTo(160,225,55,196);
			ctx.lineTo(53,211);
			ctx.lineTo(42,206);
			ctx.moveTo(53,211);
			ctx.quadraticCurveTo(55,219,76,223);
			ctx.lineTo(125,222);
			ctx.lineTo(128,211);
			ctx.stroke();
			ctx.closePath();
			
			<!-- foreground shadding -->
			var grV = ctx.createLinearGradient(0, 0, 0, 100);
			grV.addColorStop(0, 'rgba(0,0,0,0.6)');
			grV.addColorStop(1,  'rgba(0,0,0,0.0)');
			ctx.fillStyle = grV;
			ctx.fillRect(0, 0, 324, 453);
			
			var grV = ctx.createLinearGradient(0, 0, 0, 500);
			grV.addColorStop(0, 'rgba(0,0,0,0.0)');
			grV.addColorStop(1,  'rgba(0,0,0,0.6)');
			ctx.fillStyle = grV;
			ctx.fillRect(0, 0, 324, 453);

			<!-- Eyes -->
			
			ctx.beginPath();
			ctx.lineWidth =3;
			ctx.strokeStyle="#666670";
			ctx.moveTo(66,200);
			ctx.lineTo(63,208);
			ctx.quadraticCurveTo(55,218,120,218);
			ctx.lineTo(123,208);
			
			ctx.moveTo(256,200);
			ctx.lineTo(261,208);
			ctx.quadraticCurveTo(265,218,202,218);
			ctx.lineTo(198,208);
			<!-- Shadow/Glow Eyes -->
			ctx.fillStyle = "#ffffff";
			ctx.shadowColor = '#999';
			ctx.shadowBlur = 40;
			ctx.shadowOffsetX = 0;
			ctx.shadowOffsetY = 2;
			ctx.fill();
			ctx.stroke();
			ctx.closePath();
			
			ctx.beginPath();
			ctx.lineWidth =3;
			ctx.strokeStyle="#FFD688";
			ctx.moveTo(268,196);
			ctx.quadraticCurveTo(160,225,55,196);
			ctx.stroke();
			ctx.closePath;
			
			<!-- Text -->
			ctx.font = "italic bold 30px Courier New";
			ctx.fillText('Stark Industries', 15,483);
