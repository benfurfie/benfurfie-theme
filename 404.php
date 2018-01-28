<?php
/**
 * The template for displaying 404 pages (Not Found)
 *
 * @package  WordPress
 * @subpackage  BenFurfie
 * @since 0.1.0
 */

/**
 * Grab the context and assign it to the variable $context
 * 
 * @since 0.1.0
 */
$context = Timber::get_context();

/**
 * Assign the view to be used.
 * 
 * @since 0.1.0
 */
$templates = array( '404.twig' );

/**
 * Pass in the context and the template and render the page.
 * 
 * @since 0.1.0
 */
Timber::render( $templates, $context );
