<form method="get" id="search" action="<?php echo $_SERVER['PHP_SELF']; ?>">
	<input type="text" title="Suchen" placeholder="Suchen" value="<?php echo wp_specialchars($s, 1); ?>" name="s" id="searchinput" />
</form>
<span class="x">&#x2715;</span>