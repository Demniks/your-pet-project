import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  ModalWindow,
  ModalContent,
  ExitButton,
} from '../../modal/Modal.styled';

import CrossIcon from '../../../images/icons/CrossIcon.svg';

const modalRoot = document.body;

const ModalNotice = ({ closeModal, isOpenedModal, children }) => {
  const toggleModal = useCallback(
    e => {
      if (e.code !== 'Escape') return;
      closeModal();
    },
    [closeModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', toggleModal);

    return () => {
      window.removeEventListener('keydown', toggleModal);
    };
  }, [isOpenedModal, toggleModal]);

  useEffect(() => {
    const handleKeyDown = e => toggleModal(e);

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  const onClickOverlay = e => {
    if (e.target === e.currentTarget) closeModal();
  };

  return createPortal(
    <ModalWindow onClick={onClickOverlay}>
      <ModalContent>
        <ExitButton onClick={() => closeModal()}>
          <img src={CrossIcon} alt="Cross" width={24} height={24} />
        </ExitButton>
        {children}
      </ModalContent>
    </ModalWindow>,
    modalRoot
  );
};

export default ModalNotice;
