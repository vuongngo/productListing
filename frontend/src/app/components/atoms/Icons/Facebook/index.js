import React from 'react';

function FacebookIcon(props) {
  return (
    <div className={props.className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="32"
        height="32"
        style={props.style}
        viewBox="0 0 32 32"
      >
        <title>facebook</title>
        <path xmlns="http://www.w3.org/2000/svg" d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z" />
      </svg>
    </div>
  );
}

FacebookIcon.propTypes = {
  className: React.PropTypes.string,
  style: React.PropTypes.object,
};

export default FacebookIcon;
