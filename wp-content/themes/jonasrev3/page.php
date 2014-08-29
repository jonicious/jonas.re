<?php get_header(); ?>

<div class="content">

	<?php if (have_posts()) : ?>
	<?php while (have_posts()) : the_post(); ?>
	
	<?php $url = wp_get_attachment_url( get_post_thumbnail_id($post->ID, 'thumbnail') ); ?>
	
	<article>
		<h2 class="post-headline"><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h2>
		<?php the_content(); ?>
	</article>	
	
	<div style="width: 150px; margin: 0 auto 20px auto; display: block;">
		
	<a href="https://twitter.com/jonicious" class="twitter-follow-button" style="width: 150px; margin: 0 auto !important; display: block !important;" data-show-count="false" data-size="large" data-dnt="true">Follow @jonicious</a>
	<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
	
	</div>
		
	<?php endwhile; ?>
	
	<?php else : ?>
	
	    <h2>Es wurden noch keine Beiträge veröffentlicht.</h2>
	
	<?php endif; ?>
	
</div>

<?php get_footer(); ?>