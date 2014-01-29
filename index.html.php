<!DOCTYPE html>
<html lang="en">
<head>
	<title>Nick Long - Examples of work</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width">
	<link rel="stylesheet" href="/css/normalize.min.css">
	<link rel="stylesheet" href="/css/font-awesome.min.css">
	<link rel="stylesheet" href="/css/main.css">
	<script src="/js/vendor/jquery-1.10.2.min.js"></script>
	<script src="/js/vendor/waypoints.min.js"></script>
	<script src="/js/site.js"></script>
</head>
<body>
	<nav>
		<ul>
			<li id="NL"><a href="#aboutme"><i class="fa fa-long-arrow-up"></i> <span>Nick Long</span></a></li>
			<li id="navList"><a href="#"><i class="fa fa-bars"></i> Examples of work</a>
				<ul>
					<li><a href="#peanuts">Peanuts</a></li>
					<li><a href="#results">Online Results</a></li>
					<li><a href="#nicklosh">nicklósh</a></li>
					<li><a href="#ameb">ameb connect</a></li>
					<li><a href="#syllabus">NSW Syllabus</a></li>
					<li><a href="#builder">Program Builder</a></li>
				</ul>
			</li>
			<li id="contact"><a href="/contact.html"><i class="fa fa-envelope"></i> <span>Contact me</span></a></li>
		</ul>
	</nav>
	<header>
		<div class="screen" id="aboutme">
			<div class="content">
				<h1>Nick Long</h1>
				<p>I'm a  front end developer with a passion for user interaction and an eye for visual design.</p>
				<p>I build responsive user-friendly interfaces for websites and applications.</p>
				<ul class="contactList">
					<li><a href="/contact.html"><i class="fa fa-envelope"></i> Contact me</a></li>
					<li><a href="http://www.linkedin.com/pub/nick-long/55/12b/417"><i class="fa fa-linkedin-square"></i> LinkedIn</a></li>
					<li><a href="https://github.com/nicklosh"><i class="fa fa-github-square"></i> GitHub</a></li>
				</ul>
			</div>
			<div id="examples">
				<h2><a href="#peanuts"><i class="fa fa-angle-down"></i> Examples of work</a></h2>
			</div>
		</div>
	</header>

	<div class="screen" id="peanuts">
		<div class="content">
			<div class="text">
				<h2>Peanuts</h2>
				<p>A proof of concept for a new kind of web comic.</p>
				<p>As a collaboration with traditional artists and writers, it aims to push the boundaries of an established format. By introducing dynamic and responsive design to the traditional comic structure, the development and coding will be as integral to the narrative structure as the writing and artwork.
				</p>
				<p>Peanuts is a proof of concept and a taste of what's possible.</p>
				<p class="externalLink"><a href="/peanuts/" title=""><i class="fa fa-globe"></i> Site</a></p>
				<p class="externalLink"><a href="https://github.com/nicklosh/peanuts" title="Peanuts code on Github"><i class="fa fa-github-square"></i> Code</a></p>
			</div>
			<div id="peanutsComic">
				<div class="imageSwitcher"><div class="image active" style="opacity:1;"><span id="peanutsImg"><span></span></span></div></div>
			</div>
		</div>
	</div>
	
	<div class="screen" id="results">
		<div class="content">
			<div class="text">
				<h2>Online Results</h2>
				<p>Interning for Learnosity gave me the opportunity to implement a new design.</p>
				<p>In this section I built the layout using the twitter bootstraps framework. The donut chart was produced  with canvas and javascript. JQuery and CSS3 was implemented for the interactive elements.</p>
			</div>
			<div class="imageSwitcher">
				<div class="image active"><span id="resultsImg1"><span></span></span></div>
				<div class="image"><span id="resultsImg2"><span></span></span></div>
				<div class="image"><span id="resultsImg3"><span></span></span></div>
				<div class="controls">
					<div class="prev"><i class="fa fa-angle-left"><!-- previous --></i></div>
					<div class="next"><i class="fa fa-angle-right"><!-- next --></i></div>
					<div class="switchDisplay">
						<i class="fa fa-circle"></i>
						<i class="fa fa-circle-o"></i>
						<i class="fa fa-circle-o"></i>
					</div>
				</div>
			</div>
		</div>
		<br>
	</div>

	<div class="screen" id="nicklosh">
		<div class="content">
			<div class="text">
				<h2>nicklósh</h2>
				<p>I am also a music and video producer in my spare time. I designed and built this website to promote that work.</p>
				<p>The site was developed using the Compass and jquery libraries. It’s a streamlined single page site in order to reduce load times and ajax is used for the video sections.</p>
				<!-- <p>This site is currently being redesigned, so watch this space.</p> -->
				<p class="externalLink"><a href="http://nicklosh.com/" title="Visit the nicklósh website"><i class="fa fa-globe"></i> Site</a></p>
				<p class="externalLink"><a href="https://github.com/nicklosh/nicklosh" title="nicklósh code on Github"><i class="fa fa-github-square"></i> Code</a></p>
			</div>
			<div class="imageSwitcher">
				<div class="image active"><span id="nickloshImg1"><span></span></span></div>
				<div class="image"><span id="nickloshImg2"><span></span></span></div>
				<div class="image"><span id="nickloshImg3"><span></span></span></div>
				<div class="controls">
					<div class="prev"><i class="fa fa-angle-left"><!-- previous --></i></div>
					<div class="next"><i class="fa fa-angle-right"><!-- next --></i></div>
					<div class="switchDisplay">
						<i class="fa fa-circle"></i>
						<i class="fa fa-circle-o"></i>
						<i class="fa fa-circle-o"></i>
					</div>
				</div>
			</div>
			<br/>
		</div>
	</div>

	<div class="screen" id="ameb">
		<div class="content">
			<div class="text">
				<h2>AMEB Connect</h2>
				<p>A web application for online enrolments for the Australian Music Education Board NSW.</p>
				<p>My role was to improve and implement the visual design of the existing layout. </p>
				<p>The enrolment process was stressful for users mostly due to them being, typically, older and less computer literate.</p>
				<p>By employing a calming colour palette and making interaction easier by clearly defining the controls and results the user's process became a lot less daunting and a lot more accessible.
With the inclusion of AMEB branding and responsive design the look and feel was dramatically improved.</p>
			</div>
			<div class="imageSwitcher">
				<div class="image active"><span id="amebImg1"><span></span></span></div>
				<div class="image"><span id="amebImg2"><span></span></span></div>
				<div class="image"><span id="amebImg3"><span></span></span></div>
				<div class="controls">
					<div class="prev"><i class="fa fa-angle-left"><!-- previous --></i></div>
					<div class="next"><i class="fa fa-angle-right"><!-- next --></i></div>
					<div class="switchDisplay">
						<i class="fa fa-circle"></i>
						<i class="fa fa-circle-o"></i>
						<i class="fa fa-circle-o"></i>
					</div>
				</div>
			</div>
			<br>
		</div>
	</div>

	<div class="screen" id="syllabus">
		<div class="content">
			<div class="text">
				<h2>NSW Syllabus</h2>
				<p>For this project I was selected to be part of team dedicated to producing this new web site for the Australian Curriculum.</p>
				<p>My role was to implement the new design. I also contributed to that design and the development of the search, filter and download sections.	</p>
				<p class="externalLink"><a href="http://syllabus.bos.nsw.edu.au/" title="Visit the syllabus website"><i class="fa fa-globe"></i> Site</a></p>
			</div>
			<div class="imageSwitcher">
				<div class="image active"><span id="syllabusImg1"><span></span></span></div>
				<div class="image"><span id="syllabusImg2"><span></span></span></div>
				<div class="image"><span id="syllabusImg3"><span></span></span></div>
				<div class="controls">
					<div class="prev"><i class="fa fa-angle-left"><!-- previous --></i></div>
					<div class="next"><i class="fa fa-angle-right"><!-- next --></i></div>
					<div class="switchDisplay">
						<i class="fa fa-circle"></i>
						<i class="fa fa-circle-o"></i>
						<i class="fa fa-circle-o"></i>
					</div>
				</div>
			</div>
			<br>
		</div>
	</div>

	<div class="screen" id="builder">
		<div class="content">
			<div class="text">
				<h2>Program Builder</h2>
				<p>A web application for the Board of Studies NSW.</p>
				<p>This is the sister app to the NSW Syllabus. With this app registered users can build their own teaching programs that draw directly from the syllabuses published on the NSW Syllabus site.</p>
				<p>The site was developed using twitter bootstraps and I provided additional design and development to improve the usability within the app.</p>
				<p class="externalLink"><a href="https://pb.bos.nsw.edu.au/" title="Programe builder website"><i class="fa fa-globe"></i> Site</a></p>
			</div>
			
			<div class="imageSwitcher">
				<div class="image active"><span id="builderImg1"><span></span></span></div>
				<div class="image"><span id="builderImg2"><span></span></span></div>
				<div class="image"><span id="builderImg3"><span></span></span></div>
				<div class="controls">
					<div class="prev"><i class="fa fa-angle-left"><!-- previous --></i></div>
					<div class="next"><i class="fa fa-angle-right"><!-- next --></i></div>
					<div class="switchDisplay">
						<i class="fa fa-circle"></i>
						<i class="fa fa-circle-o"></i>
						<i class="fa fa-circle-o"></i>
					</div>
				</div>
			</div>
			<br>
		</div>
	</div>

	<footer>
		<div>
			<p>Designed and built by <a href="http://www.linkedin.com/pub/nick-long/55/12b/417"> Nick Long <i class="fa fa-linkedin-square"></i></a></p>
			<p>Code on <a href="https://github.com/nicklosh">GitHub <i class="fa fa-github-square"></i></a></p>
			<p><a href="/contact.html">Contact me <i class="fa fa-envelope"></i></a></p>
		</div>
	</footer>

</body>
</html>