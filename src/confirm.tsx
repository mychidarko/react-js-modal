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
  className,
  loading = false,
  subTitle,
  actions,
  confirmBtn,
  confirmBtnStyle,
  confirmBtnClass,
  onConfirm,
  cancelBtn,
  cancelBtnStyle,
  cancelBtnClass,
  onCancel,
  modalClassName,
  size = "md",
}: ConfirmOptions) => {
  const [options, setOptions] = useState<ConfirmOptions>({
    name,
    className,
    title,
    description,
    confirmBtnText,
    cancelBtnText,
    hasCancel,
    subTitle,
    actions,
    confirmBtn,
    confirmBtnStyle,
    confirmBtnClass,
    cancelBtn,
    cancelBtnStyle,
    cancelBtnClass,
    modalClassName,
    size,
    onConfirm: e => {
      if (onConfirm) {
        onConfirm(e);
      }
    },
    onCancel: e => {
      if (onCancel) {
        onCancel(e);
      } else {
        modal.hide(name);
      }
    }
  });

  const [isLoading, setIsLoading] = useState<boolean>(loading);

  return {
    options,
    setOptions,
    setLoading: setIsLoading,
    Confirm: () => {
      return (
        <Modal
          name={options.name}
          className={options.className + " confirm-modal"}
          pageScroll={false}
          closeButton={false}
          size={options.size}
          modalClassName={options.modalClassName}
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
                  onClick={options.onConfirm}
                >
                  {isLoading ? "Loading..." : options.confirmBtnText}
                </button>
                {options.hasCancel && (
                  <button
                    className={options.cancelBtnClass}
                    style={options.cancelBtnStyle}
                    onClick={options.onCancel}
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
