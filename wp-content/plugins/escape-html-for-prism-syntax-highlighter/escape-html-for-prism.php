<?php
/*
Plugin Name: Escape HTML For Prism Syntax Highlighter
Plugin URI: http://www.satya-weblog.com/2013/10/a-lightweight-javascript-syntax-highlighter-prism.html
Description: Written for Prism Syntax Highlighter. Support &lt;pre&gt;&lt;code class="language-xxxx"&gt;. Change markup so that Prism does not strip it off.
Version: 0.5
Author: Satya Prakash
Author URI: http://www.satya-weblog.com/
License: Copyright 2010  Satya Prakash  (email : ws@satya-weblog.com)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as 
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

function escapeHTML($arr) {
	
	// last params (double_encode) was added in 5.2.3
	if (version_compare(PHP_VERSION, '5.2.3') >= 0) {
	
		$output = htmlspecialchars($arr[2], ENT_NOQUOTES, get_bloginfo('charset'), false); 
	}
	else {
		$specialChars = array(
            '&' => '&amp;',
            '<' => '&lt;',
            '>' => '&gt;'
		);
		
		// decode already converted data
		$data = htmlspecialchars_decode($arr[2]);

		// escapse all data inside <pre>
		$output = strtr($data, $specialChars);
	}

	if (! empty($output)) {
		return  $arr[1] . $output . $arr[3];
	}
	else
	{
		return  $arr[1] . $arr[2] . $arr[3];
	}
	
}


function filterCode($data) {

    $modifiedData = '';
	$modifiedData = preg_replace_callback('@(<code.*>)(.*)(<\/code>)@isU', 'escapeHTML', $data);
 
	return $modifiedData;
}


add_filter( 'content_save_pre', 'filterCode', 9 );
add_filter( 'excerpt_save_pre', 'filterCode', 9 );


?>