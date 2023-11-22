<div align="center">
<img src="https://github.com/FRONTENDSCHOOL7/final-02-doublechaek/assets/138556026/78103eeb-9cff-42d3-a97a-4b4877322983">

  <h2>같이 읽고, 생각을 나눠봐요. 책과 함께한 순간을 공유합니다. </h2> 
  <br/>

<br/>
<br/>

 </div>

#### 배포 및 테스트 계정

> 🏷 <b> [DOUBLE CHECK 바로가기](https://web-doublechaek-02-1igmo82clonz4u17.sel5.cloudtype.app/)</b>

```
ID: developer@test.com
PW: 123123
```

<br/>

## 📃 목차

1.  [프로젝트 소개](#1-프로젝트-소개)
2.  [개발 일정 및 진행방식](#2-개발-일정-및-진행방식)
3.  [팀 컨벤션](#3-팀-컨벤션)
4.  [기술 및 개발 환경](#4-기술-및-개발-환경)
5.  [구현 기능](#5-구현-기능)
6.  [주요 기능](#6-주요-기능)
7.  [사용자 경험 향상을 위한 전략](#7-사용자-경험-향상을-위한-전략)
8.  [핵심 코드](#8-핵심-코드)
9.  [트러블 슈팅](#9-트러블-슈팅)
10. [피드백 관리](#10-피드백)
11. [팀원 소개](#11-팀원-소개)

<br>
<br>

## 📘 1. 프로젝트 소개

### 더블 체크

📚 **더블 체크**의 과정을 통해 독서가 갖는 의미와 가치를 재확인하다.
<br/>

✔️ **더블 체크**는 독서 커뮤니티 플랫폼으로, 책에 대한 정보 제공과 사용자 간의 리뷰 공유를 넘어서 **더블 체크**라는 개념에 중점을 두고 있습니다. 이 플랫폼은 사용자들이 책을 읽고, 그들의 이해와 감상을 리뷰하거나 인상적인 문구를 공유함으로써, 한 번 더 생각하는 기회를 제공합니다.

✔️ 네이버와 알라딘의 **도서 API** 를 활용하여 추천 도서를 제공하며, 이를 통해 사용자들이 자신의 해석을 **더블 체크**하고, 다른 독자들과 의견을 교환하며 독서 경험을 풍부하게 할 수 있도록 돕습니다.

<br>
<br>

## 📘 2. 개발 일정 및 진행방식

📄 [기능 명세서](https://www.notion.so/1d0d3520d9b84228afcd9cbd43cdafd8) <br/>
⚙️ [TC](https://www.notion.so/TC-99bed4f09e414882aef4ee7427ed7a96)

### 📅 개발 일정

- **1차**

  - 프로젝트 기획 2023.10.16 ~ 2023.10.22 <br/>
  - 프로젝트 개발: 2023.10.23 ~ 2023.11.08

- **2차**

  - 프로젝트 기획 2023.11.20 ~ <br/>
  - 프로젝트 개발: 2023.11

### 📌 스크럼

- 매일 오전 10시 디스코드에서 데일리 스크럼 진행
- 17시 진행상황 및 이슈 공유
- 필요시 오프라인 미팅 진행

 <br/>

### 🎯 초기 개발 진행방식 👉 [자세히 보러가기](https://www.figma.com/file/So490bR7Nu7sX0SByGKrtZ/%EB%8D%94%EB%B8%94-%EC%B1%85-%EC%B4%88%EA%B8%B0-%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?type=design&mode=design&t=lodtv3lLpUwKPluN-0)

 <details><summary> 피그마 디자인 시스템 사용 - 피그마 툴을 사용해 의 디자인과 흐름도를 작성했습니다.

</summary>

 <br/>

<h align="center">[<img src="https://github.com/FRONTENDSCHOOL7/final-02-doublechaek/assets/95855640/4a8df7cd-8ac2-41f7-b332-2ae02e079eb5">](https://www.figma.com/file/So490bR7Nu7sX0SByGKrtZ/%EB%8D%94%EB%B8%94-%EC%B1%85-%EC%B4%88%EA%B8%B0-%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?type=design&node-id=0-1&mode=design&t=46CeABdWldpDBsnt-0)</h>
<br/>

</details>

<details>
  <summary> 아토믹 디자인 시스템 도입  - 저희 팀은 초기 개발 단계에서 프로젝트의 이해를 높이기 위해 팀원들과 Atomic Design에 대한 이해를 공유하고, 토론을 통해 각 컴포넌트가 어떤 단계로 간주되어야 하는지,어떤 것이 분자로 적합한지 등에 대해 의논하며 공통된 컴포넌트를 분리해내는 작업을 진행했습니다.
</summary>
  
  <br/>

<h align="center">[<img src="https://github.com/FRONTENDSCHOOL7/final-02-doublechaek/assets/95855640/d965191e-1f1f-488d-aeb3-eed33986a0c6">](https://www.figma.com/file/So490bR7Nu7sX0SByGKrtZ/%EB%8D%94%EB%B8%94-%EC%B1%85-%EC%B4%88%EA%B8%B0-%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?type=design&node-id=0-1&mode=design&t=46CeABdWldpDBsnt-0)</h>

<br/>

</details>

<details><summary>  참고한 자료
</summary>

[아토믹 디자인 참고자료](https://fe-developers.kakaoent.com/2022/220505-how-page-part-use-atomic-design-system/)  
<br/>
<img src="https://github.com/FRONTENDSCHOOL7/final-02-doublechaek/assets/95855640/06a8978b-3163-477f-8acf-1710bc2a9bbd">

</details>

<br>
<br>

## 📘 3. 팀 컨벤션

### Git 컨벤션

<details>
  <summary>커밋 컨벤션</summary>
  
```
 feat: 기능 추가, 삭제, 변경
 fix: 버그, 오류 수정
 docs: readme.md, json 파일 등 수정, 라이브러리 설치 (문서 관련, 코드 수정 없음)
 style: CSS 등 사용자 UI 디자인 변경 (제품 코드 수정 발생, 코드 형식, 정렬 등의 변경)
 refactor: 코드 리팩토링
 test: 테스트 코드 추가, 삭제, 변경 등 (코드 수정 없음, 테스트 코드에 관련된 모든 변경에 해당)
 config: npm 모듈 설치 등
 chore: 패키지 매니저 설정할 경우, etc 등 (ex. gitignore)
 comment : 필요한 주석 추가 및 변경
 rename: 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우
 remove: 파일을 삭제하는 작업만 수행한 경우
 bug: 오류, 버그
 ```
</details>

### 코드 컨벤션

<details>
  <summary>코드 컨벤션</summary>
  
 #### **eslint**

```json
{
  "extends": [
    "prettier",
    "eslint:recommended",
    "react-app",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended" // JSX 접근성에 대한 권장 설정을 적용
  ],
  "plugins": ["prettier"],
  "rules": {
    // 들여쓰기를 2로 설정하며, SwitchCase에 대한 들여쓰기를 1로 설정
    "indent": ["error", 2, { "SwitchCase": 1 }],
    // var 키워드 사용을 금지
    "no-var": "error",
    // async 함수에서는 반드시 await 키워드를 사용
    "require-await": "error",
    // 일치 연산자(=== 및 !==)를 사용
    "eqeqeq": "warn",
    // React prop-types를 사용하지 않도록 설정
    "react/prop-types": 0,
    // 사용하지 않는 변수에 대한 경고를 비활성화
    "no-unused-vars": "off",
    "prettier/prettier": ["error", { "endOfLine": "auto" }]
  }
}
```

#### **prettier**

```json
{
  "bracketSpacing": true, // 객체 리터럴에서 괄호에 공백 삽입
  "jsxBracketSameLine": false, // JSX의 마지막 `>`를 다음 줄로 내릴지 여부
  "jsxSingleQuote": true, // JSX에 홑따옴표 사용 여부
  "singleQuote": true, // 홑따옴표 사용 여부
  "proseWrap": "preserve", // markdown 텍스트의 줄바꿈 방식 (v1.8.2)
  "semi": true, // 세미콜론 사용 여부
  "printWidth": 100, // 줄 바꿈 할 폭 길이
  "endOfLine": "auto", // EoF 방식, OS별로 처리 방식이 다름
  "useTabs": false, // 탭 사용 여부
  "tabWidth": 2, // 탭의 너비를 2로 설정
  "trailingComma": "all", // 여러 줄을 사용할 때, 후행 콤마 사용 방식
  "arrowParens": "always" // 화살표 함수 괄호 사용 여부
}
```

</details>

<br>
<br>

## 📘 4. 기술 및 개발 환경

<div align="center">

|                                                                                                                                                                                                                                                                       FrontEnd                                                                                                                                                                                                                                                                        |                                                                                                             BackEnd                                                                                                              |                                               Design                                               |                                                                                                                                                                                                      협업방식                                                                                                                                                                                                       |                                                                                                        컨벤션                                                                                                         |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/styledcomponents-CC6699?style=flat-square&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/Recoil-3578E5.svg?style=flat-square&logo=Recoil&logoColor=white"> <img src="https://img.shields.io/badge/axios-7F2B7B?style=flat-square&logo=axios&logoColor=white"/> <img src="https://img.shields.io/badge/reactquery-FF4154?style=flat-square&logo=reactquery&logoColor=white"> | <img src="https://img.shields.io/badge/Node.Js-339933?style=flat-square&logo=Node.js&logoColor=white"/> <img src="https://img.shields.io/badge/express-000000?style=flat-square&logo=express&logoColor=white"/> </br> 제공된 API | <img src="https://img.shields.io/badge/figma-FBCEB1?style=flat-square&logo=figma&logoColor=white"> | <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white"> <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"> <img src="https://img.shields.io/badge/Notion-000000.svg?style=flat-square&logo=Notion&logoColor=white"> <img src="https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=Discord&logoColor=white"> | <img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat-square&logo=Prettier&logoColor=black"> <img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat-square&logo=ESLint&logoColor=white"> |

</div>
<br />

## 💡 기술스택 적용 이유

<br />

### 💥 Recoil 상태관리 활용

 <br />
 
 🔗 [리코일 사용 바로보기](https://github.com/FRONTENDSCHOOL7/final-02-doublechaek/tree/develop/src/Recoil)
 
 * 저희 팀이 다른 상태 관리 라이브러리 대신 Recoil을 선택한 이유는 팀 내에서 리액트를 갓 배운 멤버들이 많았고 Recoil은 다른 라이브러리보단 학습 곡선이 낮고 프로젝트의 복잡도가 비교적 작은 편이었기 때문에 Recoil을 사용함으로써 효과적으로 전역 상태를 관리할 수 있는 좋은 선택이라고 생각했기 때문에 Recoil을 선택하여 프로젝트를 진행하게 되었습니다.
<br />

---

### 💥 axios , react query 라이브러리로 서버통신 관리

  <br />
  
   🔗 [인스턴스 활용 바로보기](https://github.com/FRONTENDSCHOOL7/final-02-doublechaek/blob/develop/src/API/Instance.js)
   
 * Axios의 주요 특징 중  ```기본 인스턴스를 커스텀하게 설정 가능```  하다는 점 입니다. <br/>
   API 요청 중 토큰이 필요한 요청과 필요없는 요청을 관리하기위해  ```unauthInstance```와 ```authInstance```라는 두 개의 인스턴스를 생성했습니다.  <br/>
```unauthInstance는 인증이 필요 없는 기본 인스턴스```로, 헤더에 Content-type: application/json을 설정하여 JSON 형식의 데이터를 기본으로 보내고,   <br/>
``` authInstance는 사용자의 토큰을 확인```하여 헤더에 Authorization: Bearer Token와 함께 Content-Type: application/json 을 설정하여, 인증이 필요한 요청에 대한 커스텀 설정을 적용했습니다.   <br/>
  또한, ```인터셉터를 활용```하여 요청이 전송되기 전에  getToken 함수를 사용하여 로컬 스토리지에서 토큰을 가져와서 해당 토큰을 요청 헤더의 Authorization 속성으로 자동으로 추가 할 수 있게 해주었습니다. <br/>
  이를 통해 ```인증이 필요한 요청에 대한 토큰을 자동으로 관리```할 수 있기 때문에 axios를 사용했습니다.

  <br/> 
  
  --------
  
 ### 💥  express 프레임워크를 사용한 이유
 
 <br/>
 
🔗 [express 사용 바로보기](https://github.com/cocorig/node-express/blob/main/app.js)

- CORS 이슈로 클라이언트에서 직접 알라딘 API를 호출하는 데 제약이 발생하여 이 문제를 해결하기 위해 Express 서버를 도입해 CORS 미들웨어를 사용하여 문제를 해결했습니다.

<br/>

## 📘 5. 구현 기능

- ### Splash, 회원가입, 로그인 & 로그아웃

|                                                                 Splash                                                                 |                                                               회원가입                                                                |                                                                로그인                                                                 |                                                               로그아웃                                                                |
| :------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: |
| <img src= "https://github.com/FRONTENDSCHOOL7/Double-Check/assets/95855640/3e5fa4bc-cdc2-4dd5-80a7-d9bdb1ae2136" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL7/Double-Check/assets/95855640/460af237-5307-497d-8459-ed709d2b6e50" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL7/Double-Check/assets/95855640/5662f5ca-bc56-49ab-b962-9aa1f06265aa" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL7/Double-Check/assets/95855640/a647b319-2d4a-41d5-bf87-1bfdfc96f6ff" height=462 width=220> |

- ### 홈 화면, 피드 등록 , 검색

|                                                                홈 화면                                                                 |                                                             책 후기 등록                                                              |                                                            검색(책 & 유저)                                                            |
| :------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: |
| <img src= "https://github.com/FRONTENDSCHOOL7/Double-Check/assets/95855640/2fa37ba9-c0fb-4c42-b60f-9965aef0b8d0" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL7/Double-Check/assets/95855640/0ebc9ca2-74db-4020-913e-cb31d1d33350" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL7/Double-Check/assets/95855640/2d6ea759-ff7b-4efa-8d4e-0b13c3f18c8c" height=462 width=220> |

|                                                                피드 목록                                                                |                                                       피드상세 - 수정/삭제/신고                                                        |                                                         피드상세 - 좋아요/댓글                                                         |                                                            피드상세 - 신고                                                             |
| :-------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: |
| <img src= "https://github.com/FRONTENDSCHOOL7/Double-Check/assets/138556026/f7f94fa7-e10b-4f52-9284-973fffc39814" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL7/Double-Check/assets/138556026/02cca39a-8e9d-4a94-a795-8352d8fb46a7" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL7/Double-Check/assets/138556026/1695ba0b-6fca-490a-b656-666536b825f9" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL7/Double-Check/assets/138556026/bb059368-5adb-45ec-a6ea-8cbe2b95dd75" height=462 width=220> |

### 글귀

|                                                                글귀 목록                                                                |                                                               글귀 등록                                                                |                                                               글귀 수정                                                                |                                                               글귀 삭제                                                                |
| :-------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: |
| <img src= "https://github.com/FRONTENDSCHOOL7/Double-Check/assets/138556026/fb25d174-8335-453f-969f-dd406a7b454b" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL7/Double-Check/assets/138556026/b1c36c8c-c5f4-4014-bcd3-f3e96451c0d4" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL7/Double-Check/assets/138556026/f9aec557-bd35-4e55-aa10-6387f21cc9cc" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL7/Double-Check/assets/138556026/d992f864-999f-4072-b2b2-a722f7160ab0" height=462 width=220> |

### 프로필

|                                                               프로필설정                                                                |                                                              계정별 피드                                                               |                                                              팔로우 목록                                                               |
| :-------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: |
| <img src= "https://github.com/FRONTENDSCHOOL7/Double-Check/assets/138556026/d6eba80d-6083-47e6-bef9-793ddf71a1dd" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL7/Double-Check/assets/138556026/98b542a6-ea26-441b-9318-0b3c4ae7b9c3" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL7/Double-Check/assets/138556026/6ffae63e-3c77-4307-a25d-de82f2f8d914" height=462 width=220> |

<table>
  <tbody>
       <tr>
        <td>
          <img style="width:237px; height:513px;" src="https://github.com/FRONTENDSCHOOL7/final-02-doublechaek/assets/95855640/3583aa44-8fe6-4f2b-973f-d97208d70188" />
        </td>
        <td>
         <img style="width:237px; height:513px;" src="https://github.com/FRONTENDSCHOOL7/final-02-doublechaek/assets/95855640/62f66fdf-6412-4ddf-8d12-b5a5c7844b86" />
        </td>
      </tr>
       <tr>
        <td>
          <img style="width:237px; height:513px;" src="https://github.com/FRONTENDSCHOOL7/final-02-doublechaek/assets/138556026/23a5fc60-640c-4e4a-b5a0-0d7b869f7917" />
        </td>
        <td>
         <img style="width:237px; height:513px;" src="https://github.com/FRONTENDSCHOOL7/final-02-doublechaek/assets/95855640/8f5a73ae-c9fd-4a95-aa5c-baa26c10ffbe" />
        </td>
        <td>
         <img style="width:237px; height:513px;" src="https://github.com/FRONTENDSCHOOL7/final-02-doublechaek/assets/95855640/ce85ed7b-d0d1-4903-98d3-69a3517e54df" />
        </td>
      </tr>
      <tr>
          <td>
              <img style="width:237px; height:513px;" src="https://github.com/FRONTENDSCHOOL7/final-02-doublechaek/assets/95855640/cdd68c1c-1305-41d4-b82a-35b9cb79dc09" />
          </td>
          <td>
              <img style="width:237px; height:513px;" src="https://github.com/FRONTENDSCHOOL7/final-02-doublechaek/assets/95855640/c23ffdc8-121e-46ba-97bb-26c9f2ca5c19" />
          </td>
           <td>
              <img style="width:237px; height:513px;" src="https://github.com/FRONTENDSCHOOL7/final-02-doublechaek/assets/95855640/ff9685cf-d3ad-4a5e-9e5e-dd546c030373" />
          </td>
          <td>
            <img style="width:237px; height:513px;" src="https://github.com/FRONTENDSCHOOL7/final-02-doublechaek/assets/138556026/5b9c2d14-a0e3-4b71-8e7e-05a51b24d931"/>
          </td>
      </tr>
      <tr>
        <td>
            <img style="width:237px; height:513px;" src="https://github.com/FRONTENDSCHOOL7/final-02-doublechaek/assets/138556026/77034f17-6a11-4772-8733-dff265ff08e1" />
        </td>
        <td>
            <img style="width:237px; height:513px;" src="https://github.com/FRONTENDSCHOOL7/final-02-doublechaek/assets/138556026/c7c6b16b-8cb5-4cba-9ae7-181f3afbd6cf">
        </td>
        <td>
            <img style="width:237px; height:513px;" src="https://github.com/FRONTENDSCHOOL7/final-02-doublechaek/assets/138556026/8c6907ec-3720-414e-a821-30f997076027">
        </td>
    </tr>
    <tr>
        <td>
            <img style="width:237px; height:513px;" src="https://github.com/FRONTENDSCHOOL7/final-02-doublechaek/assets/138556026/7b4a5195-6713-4c93-9b28-b171dd255305">
        </td>
        <td>
            <img style="width:237px; height:513px;" src="https://github.com/FRONTENDSCHOOL7/final-02-doublechaek/assets/138556026/18fa1f1d-54d0-420f-82ed-39722555ad96">
        </td>
        <td>
            <img style="width:237px; height:513px;" src="https://github.com/FRONTENDSCHOOL7/final-02-doublechaek/assets/138556026/4c746189-29fa-45a7-ad9e-c10185476fc7">
        </td>
        <td>
            <img style="width:237px; height:513px;" src="https://github.com/FRONTENDSCHOOL7/final-02-doublechaek/assets/138556026/744a2c2d-3c3b-402e-ba32-3ab680b92247">
        </td>
    </tr>
    <tr>
         <td>
            <img style="width:237px; height:513px;" src="https://github.com/FRONTENDSCHOOL7/final-02-doublechaek/assets/95855640/51c3a0ea-cdd4-442f-a4e9-32a088947f28">
        </td>
        <td>
            <img style="width:237px; height:513px;" src="https://github.com/FRONTENDSCHOOL7/final-02-doublechaek/assets/138556026/124c8b31-838c-4098-a596-e5de847e47d4">
        </td>
        <td>
            <img style="width:237px; height:513px;" src="https://github.com/FRONTENDSCHOOL7/final-02-doublechaek/assets/138556026/d0dec26a-40c8-4e42-8280-8f250ce24eb5">
        </td>
    </tr>
  </tbody>
</table>

<br/>
<br/>
<br/>

## 📘 6. 주요 기능

<br/>

### 🍏 도서 추천 및 정보 제공

- 네이버와 알라딘 API를 활용하여 사용자에게 최신 베스트셀러 및 신간 도서 정보를 제공합니다. 이를 통해 사용자는 독서에 대한 다양한 옵션을 쉽게 찾아볼 수 있습니다.

### 🎄 도서 검색 기능

- 사용자가 원하는 책을 빠르게 찾을 수 있는 검색 기능을 구현합니다. 이를 통해 사용자는 키워드를 활용하여 특정 도서를 쉽게 찾아볼 수 있습니다.

### 🐸 리뷰 작성

- 책 상세 페이지에서 사용자가 손쉽게 리뷰를 작성할 수 있는 기능을 제공합니다. 이를 통해 사용자는 자신의 의견을 공유하고 독서 경험을 다른 이용자들과 공유할 수 있습니다.

### 🧩 글귀 저장

- 사용자가 도서 내용 중에서 마음에 드는 글귀를 간편하게 저장하고 관리할 수 있는 기능을 제공합니다. 이를 통해 사용자는 독서 중에 감명깊은 구절을 쉽게 찾아볼 수 있습니다.

### 💚 관심 카테고리 설정

- 사용자가 자신의 관심사에 맞는 도서 카테고리를 프로필에서 설정할 수 있는 기능을 제공합니다. 이를 통해 사용자는 선호하는 도서 장르나 주제에 따라 개인화된 추천을 받을 수 있습니다.

<br/>
<br/>
<br/>

## 📘 7. 사용자 경험 향상을 위한 전략

#### 시각적 피드백 제공

- 사용자의 편의를 위해 토스트 알림, 모달, 스켈레톤 UI 등 다양한 UI 요소를 적절히 활용하여 명확한 피드백을 제공합니다. 특히, 스켈레톤 UI는 데이터 로딩 시 시각적 피드백을 통해 사용자가 대기하는 동안에도 사용성을 유지하도록 했습니다.

#### 최신 시간 표시

- 게시물과 댓글을 볼 때 '방금 전', '1분 전' 등의 표현을 사용하여 최신 정보임을 명확히 표시합니다. 이를 통해 사용자는 컨텐츠의 신선도를 직관적으로 파악할 수 있게 됩니다.

<br/>
<br/>
<br/>

## 📘 8. 핵심 코드

<br />
<br />
<br />

## 📘 9. 트러블 슈팅

<br/>

### 🌐 CORS 이슈

<br/>

- **문제 발생**

알라딘 API를 활용하여 정보를 가져오는 중, CORS(Cross-Origin Resource Sharing) 정책으로 인해 브라우저에서의 직접적인 API 호출이 차단되어 정보를 가져올 수 없었습니다. <br/>
CORS 이슈란, 브라우저의 보안 정책에 따라, 다른 도메인에서의 자원 요청은 차단합니다. <br/>
이로 인해 클라이언트에서 직접 알라딘 API를 호출하는 경우, CORS 문제가 발생하여 데이터를 가져올 수 없는 상황이었습니다. <br/>

 <br/>

- **해결 방법**

이 문제를 해결하기 위해 Express 서버를 도입하여 클라이언트가 Express 서버를 통해 알라딘 API의 정보를 받기위해 간단한 서버구축과 CORS 미들웨어를 활용하여 모든 도메인에서의 요청을 허용하도록 설정했습니다.

또한, Cloudtype의 배포 플랫폼을 활용하여 서버를 배포했습니다.
Cloudtype는 무료로 서버를 배포할 수 있는 플랫폼으로, Heroku를 고려했지만 유료화 정책 때문에 Cloudtype을 선택했습니다. <br/>
이를 통해 클라이언트는 Express 서버를 통해 Cloudtype에 배포된 서버로 요청을 보내고, Cloudtype 서버는 이 요청을 처리하여 알라딘 API로부터 데이터를 받아 클라이언트에 전달합니다. <br/>
이러한 방식으로 CORS 문제를 해결할 수 있었습니다.

<br/>

### 🍁 비동기 데이터 로딩 문제

- #### 문제상황
  사용자의 프로필 탭에서 해당 사용자의 피드를 요청했을 때, 데이터가 초기 렌더링 시 제대로 로드되지 않는 문제가 발생했습니다. 이는 데이터가 로드되기 전에 프로필에 필요한 계정 이름이 설정되지 않아 발생한 문제였습니다.
- #### 문제점
  데이터 로드와 렌더링의 시간 차이로 인해 초기 렌더링 시 사용자 계정 이름이 데이터로 설정되지 않았습니다. 이로 인해 프로필에 필요한 정보가 누락되었습니다.
- #### 해결방법
  useEffect 훅을 사용하여 데이터 로딩 상태를 관리하고, 데이터가 로드된 후에만 프로필에 필요한 정보를 설정하도록 수정했습니다. 이로써 데이터가 로드된 후에만 프로필에 필요한 정보가 설정되어, 데이터 로딩 문제를 해결할 수 있었습니다.

<br/>

### 🌂 잘못된 훅 사용

- #### 문제상황
  useTimeSince 훅이 시간 포맷을 올바르게 적용하지 못하는 문제가 발생했습니다.
- #### 문제 이유
  훅이 컴포넌트의 최상위 레벨에서만 호출되어야 하는 규칙을 위반하여, 반복문, 조건문 또는 중첩된 함수 내에서 호출되었습니다. 이 규칙을 준수하지 않으면 리액트가 훅의 상태를 올바르게 관리할 수 없어 발생한 문제입니다.
- #### 해결 방법
  각각의 댓글에 대해 useTimeSince를 호출하는 대신, 각 댓글의 시간을 변환하는 로직을 별도의 컴포넌트로 분리하여 사용할 수 있도록 변경했습니다. 훅이 각 댓글 컴포넌트 내에서 호출되도록 구조를 수정해야 했기 때문에
  Comments 컴포넌트에서 렌더링되던 댓글 아이템을 CommentItem 컴포넌트로 분리하고 map 함수를 사용하여 각 CommentItem 컴포넌트를 렌더링했습니다. useTimeSince 훅은 각 CommentItem 컴포넌트의 최상위에서 호출되도록 구현하여 훅이 각 댓글의 생성 시간에 대해 정상적으로 적용되는 동시에 컴포넌트를 작은 단위로 분리하여 관리할 수 있게 되었습니다.

<br/>

### 🪐 알라딘 API의 한계

- #### 문제상황
  알라딘 도서 API를 사용 시 표지 이미지의 화질이 낮고 책의 상세 소개가 누락되는 문제 발생했습니다.
- #### 문제점
  API가 제공하는 데이터의 한계로 인해 사용자의 경험 저하되었습니다.
- #### 해결 방법
  네이버 도서 API를 추가하여 알라딘 API와의 결합을 통해 표지 이미지와 책 정보의 품질 개선하였고 시스템에 네이버 API 통합 구현하여 두 API의 정보를 사용자에게 제공하는 방법으로 문제를 해결했습니다. 결과적으로 네이버 API 도입 후 책 정보의 상세한 정보와 표지 이미지의 화질이 향상되었으며, 두 API의 정보를 결합하는 방법으로 사용자의 경험을 개선할 수 있었습니다.

<br />
<br />
<br />

## 📘 10. 피드백

### 🚀 프로젝트 방향성 설정

> 현재 프로젝트는 다른 책 콘텐츠와의 차별성을 만들 필요가 있고, 커뮤니티 특성에 맞는 핵심 기능을 정확하게 설정을 하고, 어떤 형태로 유저들에게 어필이 되는 컨셉인지 정확히 고민을 해봐야 한다는 피드백을 제시받았습니다.

- 이러한 피드백을 바탕으로 프로젝트의 주제를 더 명확히 정할 필요가 있다고 생각했습니다. 글귀를 중심으로 한 사용자 경험을 강화할 건지, 사용자 키워드를 활용한 맞춤형 추천 기능 등을 도입할 건지, 어떤 형태로 유저들에게 어필이 되는 컨셉인지 정확히 판단하기로 했습니다.

<br />
<br />
<br />

## 📘 11. 팀원 소개

### 안녕하세요👋🏻 저희는 멋쟁이사자처럼 프론트엔드 스쿨 7기 2조 **코딩 크루세이더스** 조 입니다.

<div align="center">

|                                              김창영                                               |                                              박은진                                               |                                              박현석                                               |                                                 이하연                                                 |                                                        팀 사진                                                         |
| :-----------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: |
| <img width="180" alt="프로필_김창영" src="https://avatars.githubusercontent.com/u/138555880?v=4"> | <img width="180" alt="프로필_박은진" src="https://avatars.githubusercontent.com/u/138556026?v=4"> | <img width="180" alt="프로필_박현석" src="https://avatars.githubusercontent.com/u/124562930?v=4"> | <img width="180" alt="프로필_이하연" src="https://avatars.githubusercontent.com/u/95855640?v=4?s=100"> | <img src="https://github.com/cocorig/node-express/assets/95855640/cb511b3a-7eda-4347-9de2-59c157eff9d3" width="200" /> |
|                           [changyoungg](https://github.com/changyoungg)                           |                           [eunjingrove](https://github.com/eunjingrove)                           |                            [hspark9781](https://github.com/hspark9781)                            |                                 [cocorig](https://github.com/cocorig)                                  |                      [Coding Crusaders](https://github.com/FRONTENDSCHOOL7/final-02-doublechaek)                       |

</div>
