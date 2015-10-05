import React from 'react';

var ReactDropButton = React.createClass ({

  getInitialState: function() {
    return {data: {
      'active' : 0
    }};
  },
  handleToggleClick: function(){

    var active_toggled = this.state.data.active ? 0 : 1;

    this.setState({data: {'active': active_toggled}});

  },
  render: function() {
    var items = this.props.items,
      id = this.props.id,
      activeClass = this.state.data.active ? "dropbutton open" : "dropbutton";

    return <div className={activeClass}>
      <a className="dropbutton__trigger" onClick={this.handleToggleClick}><span>{Drupal.t("Select")}</span></a>
      <div className="dropbutton__content">
        <ul>
           {items[id].links.map(function(object, i){
             if(object.active){
               return <li className="dropbutton__item"  key={i}><a title={object.title} href={object.href}> {Drupal.t(object.text)}</a></li>;
             }
             else {
               return <li className="dropbutton__item dropbutton__sub-item"  key={i}><a title={object.title} href={object.href}> {Drupal.t(object.text)}</a></li>;
             }

           })}
         </ul>
      </div>
    </div>;
  }
});

module.exports = ReactDropButton;