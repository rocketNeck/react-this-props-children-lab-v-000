import React from 'react';

class ThemedDecorations extends React.Component {
  render() {
    const childrenProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });

    return (
      <div>
        {childrenProp}
      </div>
    );
  }
}
export default ThemedDecorations
