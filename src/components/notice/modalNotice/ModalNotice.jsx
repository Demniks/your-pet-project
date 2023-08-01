import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import spriteImage from '../../../images/sprite.svg';

import { ModalWindow } from '../../modal/Modal.styled';

import CrossIcon from '../../../images/icons/CrossIcon.svg';
import {
  Data,
  DataWrapper,
  ExitButton,
  Img,
  ImgWrapper,
  InformationWrapper,
  ModalContent,
  TitleWrapper,
  Title,
  DescriptionWrapper,
  Details,
  ContactBtn,
  FavoriteBtn,
  MainDataWrapper,
  Wrapper,
  ButtonsWrapper,
} from './ModalNotice.styled';
import {
  Icon,
  Status,
  StatusText,
} from '../noticeCategoryItem/NoticeCategoryItem.styled';
import axios from 'axios';
import { CircleLoader } from 'react-spinners';

const BaseUrlImg = 'https://res.cloudinary.com/dfvviqdic/image/upload/';

const modalRoot = document.body;

const ModalNotice = ({ onClose, isOpenedModal, id, children }) => {
  // const { photoUrl, category, title, sex, location, cardId } = inf;
  const [data, setData] = useState(null)
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://project-savepets05-be.onrender.com/api/notices/${id}`);
        const notice = response.data;
        console.log(notice);
        setData(notice);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const toggleModal = useCallback(
    e => {
      if (e.code !== 'Escape') return;
      onClose();
    },
    [onClose]
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
    if (e.target === e.currentTarget) onClose();
  };

  if (!data) {
    return <CircleLoader/>;
  }

  return createPortal(
    <ModalWindow onClick={onClickOverlay}>
      <ModalContent>
        <ExitButton onClick={() => onClose()}>
          <img src={CrossIcon} alt="Cross" width={24} height={24} />
        </ExitButton>
        <MainDataWrapper>
          <Wrapper>
            <ImgWrapper>
              <Img src={BaseUrlImg + data.photoUrl} alt="pet" loading="lazy" />
              <Status>
                <StatusText>{data.category}</StatusText>
              </Status>
            </ImgWrapper>
            <TitleWrapper>
              <Title>{data.title}</Title>
              <InformationWrapper>
                <DataWrapper>
                  <Data>Name:</Data>
                  <Details>{data.name}</Details>
                </DataWrapper>
                <DataWrapper>
                  <Data>Birthday:</Data>
                  <Details>{data.birthday}</Details>
                </DataWrapper>
                <DataWrapper>
                  <Data>Type:</Data>
                  <Details>{data.type}</Details>
                </DataWrapper>
                <DataWrapper>
                  <Data>Place:</Data>
                  <Details>{data.location}</Details>
                </DataWrapper>
                <DataWrapper>
                  <Data>The sex:</Data>
                  <Details>{data.sex}</Details>
                </DataWrapper>
                <DataWrapper>
                  <Data>Email:</Data>
                  <Details>{data.email}</Details>
                </DataWrapper>
                <DataWrapper>
                  <Data>Phone:</Data>
                  <Details>{data.phone}</Details>
                </DataWrapper>
              </InformationWrapper>
            </TitleWrapper>
          </Wrapper>
          <DescriptionWrapper>
            <span>Comments:</span>
            {data.comments}
          </DescriptionWrapper>
        </MainDataWrapper>
        <ButtonsWrapper>
          <ContactBtn>Contact</ContactBtn>
          <FavoriteBtn type="button">
            <span>Add to</span>
            <Icon width={24} height={24}>
              <use href={spriteImage + '#icon-heart'}></use>
            </Icon>
          </FavoriteBtn>
        </ButtonsWrapper>
      </ModalContent>
    </ModalWindow>,
    modalRoot
  );
};

export default ModalNotice;
