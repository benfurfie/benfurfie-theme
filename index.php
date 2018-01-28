<?php
/**
 * This is the main template file.
 * 
 * @package WordPress
 * @subpackage BenFurfie
 * @since 0.1.0
 */

/**
 * Grab the context and assign it to the variable $context
 * 
 * @since 0.1.0
 */
$context = Timber::get_context();

/**
 * Get all the posts and add them to the context object.
 * 
 * @since 0.1.0
 */
$context['posts'] = new Timber\PostQuery();

/**
 * Assign the view to be used.
 * 
 * @since 0.1.0
 */
$templates = array( 'index.twig' );

/**
 * Pass in the context and the template and render the page.
 * 
 * @since 0.1.0
 */
Timber::render( $templates, $context );
