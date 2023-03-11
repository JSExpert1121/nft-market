import clsx from 'clsx';
import { PropsWithChildren, ReactNode } from 'react';

export type ModalProps = PropsWithChildren & {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  open: boolean;
  onClose: () => void;
}
export const Modal = ({ open, onClose, children, size = 'sm' }: ModalProps) => {
  return open ? (
    <div className='modal-wrapper' onClick={onClose}>
      <div className={clsx(['modal-root', `modal-${size}`])} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  ) : null;
}