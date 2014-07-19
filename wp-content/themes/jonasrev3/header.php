<!DOCTYPE html>

<html lang="de">

<head>
	<title><?php wp_title(' - ', true, 'right'); ?> <?php bloginfo('name'); ?></title>
	<meta charset="UTF-8">
	<meta name="description" content="Jonas Reitmann" />
	<meta name="viewport" content="width=device-width">
	<link rel="stylesheet" href="../wp-content/themes/jonasrev3/style.css" type="text/css" media="screen" />
	<script type="text/javascript">
	  (function(d) {
	    var config = {
	      kitId: 'ucj6yws',
	      scriptTimeout: 3000
	    },
	    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='//use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
	  })(document);
	</script>
	<link rel="icon" type="image/png" href="../wp-content/themes/jonasrev3/assets/profile.png" />
	
	<!-- Facebook -->
	 
	<meta property="og:title" content="<?php the_title(); ?>">
	<meta property="og:type" content="website">
	<meta property="og:url" content="<?php the_permalink(); ?>">
	<meta property="og:site_name" content="Jonas Reitmann">
	<meta property="og:description" content="<?php the_excerpt(); ?>">
	    
	<!-- Twitter cards -->
	    
	<meta name="twitter:card" content="summary">
	<meta name="twitter:site" content="@jonicious">
	<meta name="twitter:creator" content="@jonicious">
	<meta name="twitter:title" content="<?php the_title(); ?>">
	<meta name="twitter:description" content="<?php the_excerpt(); ?>">
	<?php wp_head(); ?>
</head>

<body>

<header>
	<div class="header-container">
		<a class="animated bounceInDown profile-pic" href="/"></a>
		<h2 class="name"><a href="/">Jonas Reitmann</a></h2>
		
		<nav class="header-nav">
			<?php wp_nav_menu(); ?>

			<span class="icon-search"></span>
			<div class="search">
				<?php get_search_form(); ?>
			</div>
		</nav>
	</div>
</header>