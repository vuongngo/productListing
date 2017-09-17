import React from 'react';

function PrevIcon(props) {
  return (
    <div className={props.className} onClick={props.onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="32"
        height="32"
        style={props.style}
        viewBox="0 0 32 32"
      >
        <title>circle-left</title>
        <path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z" />
        <path d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z" />
      </svg>
    </div>
  );
}

PrevIcon.propTypes = {
  className: React.PropTypes.string,
  style: React.PropTypes.object,
  onClick: React.PropTypes.func
};

export default PrevIcon;
