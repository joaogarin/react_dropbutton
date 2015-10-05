<?php

function theme_links__react_dropbutton($vars) {
  // Check to see if the number of links is greater than 1;
  // otherwise just treat this like a button.
  if (!empty($vars['links'])) {

    $is_drop_button = (count($vars['links']) > 1);

    // Add needed files
    if ($is_drop_button) {
      //Add out js files
      drupal_add_js(drupal_get_path("module","react_dropbutton") . '/dist/dropbutton.js');
    }

    // Provide a unique identifier for every button on the page.
    static $id = 0;
    $id++;

    // Wrapping div
    $class = "";
    $is_drop_button ? $class .= 'react_dropbutton' : $class .= 'react_dropbutton--single';

    if (!empty($vars['class'])) {
      $class .= ($vars['class']) ? (' ' . implode(' ', $vars['class'])) : '';
    }

    $output = '';

    $output .= '<div class="' . $class . '" id="recruiter-dropbutton--button-' . $id . '">';

    // The button content
    $output .= '<div class="react-dropbutton__content">';

    // Check for attributes. theme_links expects an array().
    $vars['attributes'] = (!empty($vars['attributes'])) ? $vars['attributes'] : array();

    // Remove the inline and links classes from links if they exist.
    // These classes are added and styled by Drupal core and mess up the default
    // styling of any link list.
    if (!empty($vars['attributes']['class'])) {
      $classes = $vars['attributes']['class'];
      foreach ($classes as $key => $class) {
        if ($class === 'inline' || $class === 'links') {
          unset($vars['attributes']['class'][$key]);
        }
      }
    }

    // Call theme_links to render the list of links.
    $output .= theme_links(array('links' => $vars['links'], 'attributes' => $vars['attributes'], 'heading' => ''));
    $output .= '</div>'; // react-dropbutton__content
    $output .= '</div>'; // react-dropbutton
    return $output;
  }
  else {
    return '';
  }
}