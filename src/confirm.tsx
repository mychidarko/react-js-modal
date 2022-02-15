import React, { useState } from "react";
import Modal, { modal } from ".";
import { ConfirmOptions } from "./@types/modal";

const useConfirm = ({
  name = "confirm-modal",
  title = "Confirm",
  description = "Are you sure you want to continue?",
  confirmBtnText = "Confirm",
  cancelBtnText = "Cancel",
  hasCancel = true,
  ...props
}: ConfirmOptions) => {
  const [options, setOptions] = useState<ConfirmOptions>({
    name,
    title,
    description,
    confirmBtnText,
    cancelBtnText,
    hasCancel,
    ...props,
    onConfirm: e => {
      if (props.onConfirm) {
        props.onConfirm(e);
      }
    },
    onCancel: e => {
      if (props.onCancel) {
        props.onCancel(e);
      } else {
        modal.hide(name);
      }
    }
  });

  return {
    options,
    setOptions,
    Confirm: () => {
      return (
        <Modal
          name={options.name}
          className={options.className + " confirm-modal"}
          pageScroll={false}
          closeButton={false}
          size={options.size || "md"}
        >
          <div>
            <h1>{options.title}</h1>
            {options.subTitle && <small>{options.subTitle}</small>}
            {options.description && <p>{options.description}</p>}
            {options.actions ?? (
              <div className="actions">
                <button
                  className={options.confirmBtnClass}
                  style={options.confirmBtnStyle}
                >
                  {options.confirmBtnText}
                </button>
                {options.hasCancel && (
                  <button
                    className={options.cancelBtnClass}
                    style={options.cancelBtnStyle}
                  >
                    {options.cancelBtnText}
                  </button>
                )}
              </div>
            )}
          </div>
        </Modal>
      );
    }
  };
};

export default useConfirm;
