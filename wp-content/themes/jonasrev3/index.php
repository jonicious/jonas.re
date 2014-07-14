<?php get_header(); ?>

<div class="content">

	<?php if (have_posts()) : ?>
	<?php while (have_posts()) : the_post(); ?>
	
		<article>
			<h2 class="post-headline"><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h2>
			<h3 class="date"><a href="<?php the_permalink();?>"><?php the_date(); ?></a></h3>
			<p><?php the_excerpt(); ?></p>
		</article>
	
	<?php endwhile; ?>
	
	<?php else : ?>
		<h2 class="post-headline">Leider nichts gefunden.</h2>
		<img alt="obama404" src="/wp-content/themes/jonasrev3/assets/obama404.gif">
	<?php endif; ?>
</div>

<?php get_footer(); ?>