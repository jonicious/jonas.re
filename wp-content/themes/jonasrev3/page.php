<?php get_header(); ?>

<div class="content">

	<?php if (have_posts()) : ?>
	<?php while (have_posts()) : the_post(); ?>
	
	<?php $url = wp_get_attachment_url( get_post_thumbnail_id($post->ID, 'thumbnail') ); ?>
	
	<article>
		<h2 class="post-headline"><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h2>
		<?php the_content(); ?>
	</article>
	
	<hr class="seperator">
	
	<div class="sharing">
		<i class="icon-uniF610"><a href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>" target="_blank"></a></i>
		<i class="icon-uniF611"><a title="<?php the_title(); ?>" href="http://twitter.com/home/?status=<?php the_permalink(); ?> via @jonicious" target="_blank" rel="nofollow"></a></i>
		<i class="icon-uniF613"><a href="https://plus.google.com/share?url=<?php the_permalink(); ?>"</a></i>
	</div>
		
	<?php endwhile; ?>
	
	<?php else : ?>
	
	    <h2>Es wurden noch keine Beiträge veröffentlicht.</h2>
	
	<?php endif; ?>
	
</div>

<?php get_footer(); ?>