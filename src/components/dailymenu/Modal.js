import React from "react";
import EditFood from "./FoodModal";

const Modal = (props) => {
  const { open, close } = props;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <button className="close" onClick={close}>
            X
          </button>

          <main>
            <EditFood />
            {props.children}
          </main>
          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
