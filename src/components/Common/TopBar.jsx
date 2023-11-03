import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import { VscChevronLeft } from 'react-icons/vsc';
import { CiMenuKebab } from 'react-icons/ci';
import Star from './Button/StarButton';
import { ReactComponent as Doblechaek } from '../../assets/images/logo/doblechaek.svg';
import { BsPencilSquare } from 'react-icons/bs';
import TopBarBtn from './TopBarBtn';
import Button from 'components/Common/Button/Button';
import HamSideNoLogin from './HamSideBar/HamSideNoLogin';

// 왼쪽 요소 : 미입력시 기본 값 < 뒤로가기
const LeftEl = ({ leftEl }) => {
  // 뒤로가기 기능
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  if (leftEl === 'navbar') {
    // 햄버거 바 일때
    return <TopBarBtn icon={HamSideNoLogin} />;
  } else {
    return <TopBarBtn icon={VscChevronLeft} onClick={handleClick} />;
  }
};

// 가운데 요소 : 기본값 로고
const CenterEl = ({ centerEl }) => {
  if (centerEl === 'search') {
    return <Sh1>검색하기</Sh1>;
  } else if (centerEl === 'profile') {
    return <Sh1>내 프로필</Sh1>;
  } else if (centerEl === 'writelist') {
    return <Sh1>내 글귀 목록</Sh1>;
  } else if (centerEl === 'write') {
    return <Sh1> &nbsp;&nbsp; 글귀 </Sh1>;
  } else if (centerEl === 'feed') {
    return <Sh1>피드</Sh1>;
  } else if (centerEl === 'home') {
    return (
      <h1>
        <SLink home to='/'>
          <SDoblechaek />
        </SLink>
      </h1>
    );
  } else {
    return <Sh1>{centerEl}</Sh1>;
  }
};
{
  /* <SPostLink to={'/post'} state={book}>
  <BsPencilSquare />
</SPostLink>; */
}
// 오른쪽 요소
const RightEl = ({ rightEl, onButtonClick, handleSaveBook, book }) => {
  // 뒤로가기 기능
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/search');
  };

  if (rightEl === 'searchicon') {
    //검색아이콘
    return <TopBarBtn icon={BiSearchAlt} onClick={handleClick} />;
  } else if (rightEl === 'writelist') {
    return <TopBarBtn icon={CiMenuKebab} />;
  } else if (rightEl === 'star') {
    return <TopBarBtn icon={Star} onClick={handleSaveBook} />;
  } else if (rightEl === 'review') {
    return (
      <SLink to='/post/upload' state={book}>
        <BsPencilSquare />
      </SLink>
    );
  } else if (rightEl === 'write') {
    return (
      <Button category='basic' shape='primary' type='button' onClick={onButtonClick}>
        등록
      </Button>
    );
  }
  {
    return <TopBarBtn />;
  }
};

export default function Topbar({
  leftEl,
  centerEl,
  rightEl,
  onButtonClick,
  customStyle,
  handleSaveBook,
  book,
}) {
  return (
    <SHeader customStyle={customStyle}>
      <LeftEl leftEl={leftEl} />
      <CenterEl centerEl={centerEl} />
      <RightEl
        rightEl={rightEl}
        onButtonClick={onButtonClick}
        handleSaveBook={handleSaveBook}
        book={book}
      />

      {/* <SButton>
        <GiHamburgerMenu />
      </SButton>
      <Sh1>
        <SLink home to='/'>
          <SDoblechaek />
        </SLink>
      </Sh1>
      <SLink to='/search'>
        <BiSearchAlt />
      </SLink> */}
    </SHeader>
  );
}

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 390px;
  height: 70px;
  padding: 0 16px;
  border-bottom: ${(props) => (props.customStyle ? 'none' : 'solid 1px #e4e4e4')};

  box-sizing: border-box;
  position: fixed;
  top: 0;
  background-color: ${(props) => (props.customStyle ? 'var(--light-blue)' : '#fff')};
  z-index: 100;
`;

const Sh1 = styled.h1`
  text-align: center;
  font-size: large;
  font-weight: 600;
`;

const SLink = styled(Link)`
  text-decoration: none;
  border-radius: 50%;
  background-color: #e5daff;
  cursor: pointer;
  display: block;
  width: ${(props) => (props.home ? '200px' : '50px')};
  height: ${(props) => (props.home ? '' : '50px')};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  svg {
    font-size: 28px;
  }
`;
const SDoblechaek = styled(Doblechaek)`
  width: 100%;
  vertical-align: bottom;
`;
// const SImg = styled.img`
//   width: 170px;
// `;
