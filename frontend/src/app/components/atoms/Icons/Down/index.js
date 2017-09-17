import React from 'react';

function DownIcon(props) {
  return (
    <div className={props.className} onClick={props.onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="32"
        height="32"
        style={props.style}
        viewBox="0 0 1792 1792"
      >
        <title>down</title>
        <path d="M1395 864q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23zm0-384q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" />
      </svg>
    </div>
  );
}

DownIcon.propTypes = {
  className: React.PropTypes.string,
  style: React.PropTypes.object,
  onClick: React.PropTypes.func
};

export default DownIcon;
