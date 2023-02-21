/** @format */

import React from 'react';


const Modal = (props) => {
  const { open, close } = props;

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? <>{props.children}</> : null}
    </div>
  );
};

export default Modal;
