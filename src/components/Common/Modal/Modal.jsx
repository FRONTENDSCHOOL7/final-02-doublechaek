/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { modalIsOpenAtom } from 'Recoil/modal';
import {
  ModalBackDrop,
  ModalLayout,
  ModalContent,
  ModalCautionTxt,
  ModalButton,
} from './ModalStyle';

const Modal = ({ content, caution, btnTxt, isVisible, onConfirm, onCancel }) => {
  // const [modalIsOpen, setModalIsOpen] = useRecoilState(modalIsOpenAtom);

  // useEffect(() => {
  //   setModalIsOpen(isVisible);
  // }, [isVisible]);

  return (
    <>
      {isVisible && (
        <>
          <ModalBackDrop onClick={onCancel} role='presentation' />
          <ModalLayout>
            <ModalContent>
              {content}
              <ModalCautionTxt>{caution}</ModalCautionTxt>
            </ModalContent>
            <ModalButton onClick={onCancel}>취소</ModalButton>
            <ModalButton onClick={onConfirm}>{btnTxt}</ModalButton>
          </ModalLayout>
        </>
      )}
    </>
  );
};

export default Modal;
