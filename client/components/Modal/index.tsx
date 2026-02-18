import React from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  children: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
  confirmText = 'OK',
  cancelText = 'Cancel',
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop con blur */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-[#1a1a1a] rounded-2xl shadow-2xl w-full max-w-md mx-4 border border-[#5F5F5F]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#5F5F5F]">
          <h2 className="text-lg font-semibold text-[#FCFCFC]">{title}</h2>
        </div>

        {/* Body */}
        <div className="px-6 py-6 text-[#BABABA]">
          {children}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#5F5F5F] flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#5F5F5F] text-[#FCFCFC] hover:bg-[#707070] transition-colors font-medium"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-[#7B99FF] text-white hover:bg-[#6A88EE] transition-colors font-medium"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
