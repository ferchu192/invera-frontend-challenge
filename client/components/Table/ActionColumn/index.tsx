import { useState } from 'react';

import Modal from '../../Modal';

export interface ActionProps {
  id: number;
  name: string;
  onDelete: (id: number | string) => Promise<void>;
}

const ActionColumn = ({id, name, onDelete}: ActionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleConfirm = async () => {
    try {
      setIsDeleting(true);
      await onDelete(id);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error deleting user:', error);
    } finally {
      setIsDeleting(false);
    }
  }
  return (
    <div className="flex items-center gap-[8px]">
      <img src="public/table/edit.svg" alt="edit" className="w-[12px] h-[12px]" />
      <img src="public/table/delete.svg" alt="delete" className="w-[12px] h-[12px] pointer" onClick={() => setIsModalOpen(true)}/>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        title="Eliminar Usuario"
        confirmText={isDeleting ? "Eliminando..." : "Eliminar"}
        cancelText="Cancelar"
      >
        ¿Estás seguro que deseas eliminar el usuario <strong>{name}</strong>?
      </Modal>
    </div>
  )
}

export default ActionColumn;