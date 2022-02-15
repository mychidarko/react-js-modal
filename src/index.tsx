import React, { useCallback, useEffect } from "react";
import { ModalProps } from "./@types/modal";

const Modal: React.FC<ModalProps> = ({
  name,
  className,
  close,
  closeButton = true,
  children,
  show,
  size,
  pageScroll = true,
  overlayClose = true,
  modalClassName,
  ...rest
}) => {
  let modalClose;

  modalClose = (e: any) => {
    if (!close) {
      modal.hide(name);
    } else {
      close(e);
    }

    if (isSSR) {
      return;
    }

    document.body.style.overflowY = "auto";
  };

  const checkModalStatus = useCallback(() => {
    if (isSSR) {
      return;
    }

    if (!pageScroll && modal.isOpen(name)) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [name, pageScroll]);

  useEffect(() => {
    checkModalStatus();
  });

  return (
    <div
      className={`rjsm__container ${className} ${
        show ? "-modal-show" : "-modal-hide"
      }`}
      id={`${name}-rjsm-modal`}
    >
      <div
        className="rjsm__overlay"
        onClick={overlayClose ? modalClose : () => {}}
      ></div>
      <div className={`rjsm__modal -size-${size || "md"} ${modalClassName}`} {...rest}>
        {closeButton && (
          <button onClick={modalClose} className="material-icons rjsm__modal__close">
            close
          </button>
        )}
        <div className="rjsm__modal__content">{children}</div>
      </div>
    </div>
  );
};

export class modal {
  /**
   * Show a defined modal
   *
   * @param {string} name The modal name
   */
  public static show(name: string) {
    const modal = this.find(name);

    if (modal === null) {
      console.warn(`\n"${name}" modal not found in DOM.`);
      return;
    }

    modal.classList.remove("-modal-hide");
    modal.classList.add("-modal-show");
  }

  /**
   * Hide a displayed modal
   *
   * @param {string} name The modal name
   */
  public static hide(name: string, callback: Function | null = null) {
    const modal = this.find(name);

    if (modal === null) {
      console.warn(`\n"${name}" modal not found in DOM.`);
      return;
    }

    modal.classList.add("-modal-hide");

    setTimeout(() => {
      modal.classList.remove("-modal-show");

      if (callback) {
        callback();
      }
    }, 500);
  }

  /**
   * Find a modal in the DOM
   *
   * @param {string} name The modal name
   */
  public static find(name: string): HTMLElement | null {
    if (isSSR) {
      return null;
    }

    return document.getElementById(`${name}-rjsm-modal`);
  }

  /**
   * Check if a modal exists in the DOM
   *
   * @param {string} name The modal name
   */
  public static exists(name: string): boolean {
    return !!this.find(name);
  }

  /**
   * Check if a modal is open
   *
   * @param {string} name The modal name
   */
  public static isOpen(name: string): boolean {
    const modal = this.find(name);

    if (modal === null) {
      return false;
    }

    return modal.classList.contains("-modal-show");
  }
}

const isSSR = typeof window === 'undefined';

export { default as useConfirm } from './confirm';

export default Modal;
