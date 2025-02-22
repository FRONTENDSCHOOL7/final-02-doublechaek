/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { BsPencilSquare } from '@react-icons/all-files/bs/BsPencilSquare';
import { Link } from 'react-router-dom';
import { BiLike } from '@react-icons/all-files/bi/BiLike';
import { CgSoftwareDownload } from '@react-icons/all-files/cg/CgSoftwareDownload';
import styled, { css } from 'styled-components';
import userInfoState from 'Recoil/UserInfo';
import { useRecoilValue } from 'recoil';
import { addBook, getBookDetails, recommendBook } from '../../firebase/firebaseService';

const BookButtons = ({ detailInfo }) => {
  const [liked, setLiked] = useState(false);
  const [recommendationCount, setRecommendationCount] = useState(0);
  const bookId = detailInfo.isbn;
  const userInfo = useRecoilValue(userInfoState);
  const userId = userInfo ? userInfo.id : null;

  useEffect(() => {
    const fetchBookDetail = async () => {
      try {
        const bookDetails = await getBookDetails(bookId);
        if (bookDetails && bookDetails.recommendedCount !== undefined) {
          setRecommendationCount(bookDetails.recommendedCount);
        } else {
          // 도서를 찾을 수 없는 경우
          console.error('도서를 찾을 수 없습니다.');
        }
      } catch (error) {
        console.error('도서 정보를 가져오는 중 오류: ', error);
      }
    };
    fetchBookDetail();
  }, [bookId]);

  const handleLikeButtonClick = async () => {
    try {
      setLiked(!liked);

      const bookData = {
        title: detailInfo.title,
        author: detailInfo.author,
        imageURL: detailInfo.image || detailInfo.cover,
      };

      if (userId) {
        // 추천 수 업데이트
        await recommendBook(userId, bookId, bookData);

        // 도서 정보를 다시 가져와서 추천 수 상태 업데이트
        const bookDetails = await getBookDetails(bookId);
        setRecommendationCount(bookDetails.recommendedCount || 0);
      } else {
        console.error('로그인한 사용자 정보를 찾을 수 없습니다.');
      }
    } catch (error) {
      console.error('추천 버튼 처리 중 오류:', error);
    }
  };

  // 책장 담기
  const handleBookDownButtonClick = async () => {
    try {
      const bookData = {
        title: detailInfo.title,
        author: detailInfo.author,
        imageURL: detailInfo.image || detailInfo.cover,
      };
      const isbn = detailInfo.isbn;
      const bookId = await addBook(userId, isbn, bookData);
      console.log(`책이 성공적으로 추가되었습니다. isbn: ${bookId}`);
    } catch (error) {
      console.error('책 추가 중 오류:', error);
    }
  };

  return (
    <SLinkbox>
      <li>
        <SButton onClick={handleLikeButtonClick}>
          {liked ? <BiLike fill='var(--dark-purple)' /> : <BiLike />}
          <p>{recommendationCount}</p>
        </SButton>
      </li>
      <li>
        <SLink to='/post/upload' state={detailInfo}>
          <BsPencilSquare />
          <p>피드 쓰기</p>
        </SLink>
      </li>
      <li>
        <SButton onClick={handleBookDownButtonClick}>
          <CgSoftwareDownload />
          <p>책장에 담기</p>
        </SButton>
      </li>
    </SLinkbox>
  );
};

export default BookButtons;

const SLinkbox = styled.ul`
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 40px 0px;

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
  }

  li::after {
    content: '';
    position: absolute;
    top: 15px;
    right: 0px;
    height: 70%;
    width: 1px;
    background-color: var(--gray-300);
  }

  li:last-child::after {
    display: none;
  }
`;
const buttonStyles = css`
  width: 60px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 25px;
    color: var(--gray-500);
  }

  /* &:hover svg {
    color: var(--dark-purple);
  } */
`;
const SLink = styled(Link)`
  ${buttonStyles}
`;
const SButton = styled.button`
  ${buttonStyles}
`;
