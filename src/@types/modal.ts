export interface ModalProps {
  name: string;
  className?: string;
  close?: React.MouseEventHandler<any>;
  closeButton?: boolean;
  children: any;
  show?: boolean;
  size?: string;
  pageScroll?: boolean;
  overlayClose?: boolean;
};

export interface ConfirmOptions {
  name: ModalProps["name"];
  className?: ModalProps["className"];
  title: string;
  subTitle?: string;
  description?: string;
  actions?: any;
  confirmBtn?: any;
  confirmBtnText?: string;
  confirmBtnStyle?: React.CSSProperties;
  confirmBtnClass?: string;
  onConfirm?: React.MouseEventHandler<any>;
  hasCancel?: boolean;
  cancelBtn?: any;
  cancelBtnText?: string;
  cancelBtnStyle?: React.CSSProperties;
  cancelBtnClass?: string;
  onCancel?: React.MouseEventHandler<any>;
  size?: ModalProps["size"];
};
