import React from 'react';
import ReactDropButton from '../components/ReactDropButton';

(function ($) {
  Drupal.behaviors.reactDropbutton = {
    attach: function() {

      $('.react_dropbutton').once('dropbutton--processed', function() {
        var data = {};

        var id = $(this).attr('id');

        data[id] = {
          'links': []
        };

        $(this).find('li').each(function(index){

          var link = {
            'title' : $(this).find('a').attr('title'),
            'href' : $(this).find('a').attr('href'),
            'text' : $(this).find('a').text(),
            'active' : index > 0 ? 0 : 1
          };

          data[id].links.push(link);
        });

        React.render(<ReactDropButton items={data} id={id} active={0}/>, this);

      });

    }
  }
})(jQuery);