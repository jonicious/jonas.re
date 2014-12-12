<?php get_header(); ?>

<div class="content">

	<?php if (have_posts()) : ?>
	<?php while (have_posts()) : the_post(); ?>
	
	<article>
		<h2 class="post-headline"><?php the_title(); ?></h2>
		<h4 class="date"><?php the_date(); ?></h4>
		<?php the_content(); ?>
		<a href="/" class="back-btn">Zurück</a>
	</article>
		
	<?php endwhile; ?>
	
	<?php else : ?>
	
	    <h2>Es wurden noch keine Beiträge veröffentlicht.</h2>
	
	<?php endif; ?>
	
</div>

<?php get_footer(); ?>