export interface ModalProps {
    name: string;
    className?: string;
    close?: React.MouseEventHandler<any>;
    closeButton?: boolean;
    children: any;
    show?: boolean;
    size?: string;
    pageScroll?: boolean;
};
