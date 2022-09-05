# 🎉 원티드 프리온보딩 프론트엔드 코스 2차 과제
## 과제 소개
- 목표 : 기존 운영 서비스의 신규 페이지 제작
- 작업기간 : 2022.09.02 ~ 2022.09.05
<br/>

## 배포 링크
<https://hotsix-fruitte.netlify.app/>   
<br/>

## 팀원들을 소개합니다.

|멤버|담당|포부|
|:--|:--|:--|
|[김승모(팀장)](https://github.com/endmoseung)|프론트엔드|프리온보딩 코스 수료후 관련기업 취업성공!|
|[손우영](https://github.com/dndud2906)|프론트엔드|프리온보딩 기반으로 하루빨리 이직|
|[이종호](https://github.com/devfrank9)|프론트엔드|원피스 완결 전에 오픈소스 컨트리뷰터 달기|
|[민유경](https://github.com/MINYUKYUNG)|프론트엔드|10월 안에 취직!|
|[강다현](https://github.com/KKangdaa)|프론트엔드|실무를 아는 신입개발자 되기|
|[임성훈](https://github.com/sasumpi123)|프론트엔드| |
<br/>

## Commit & Merge Convention

```
1. dev (개발) 브랜치를 생성한다.
2. 각자 주어진 작업에 대한 issue를 생성한다.
3. 생성된 issue 번호로 개별 branch 이름을 갖는다
4. 개별 branch에서 작업후 Git 컨벤션에 따라 커밋 및 PR을 한다.
5. 이때, PR은 dev(개발)로 한다.
6. 모든 issue close 및 작업사항 없을시 main으로 dev(개발) 브랜치를 PR한다.
7. 이후 작업 발생시 1~6을 반복한다.
```
<br />

## Commit & Merge Convention
https://pre-hotsix.notion.site/92063fa659904b4584fd59c75bcfaea2
<br />

## 실행 방법

레포지토리를 `clone` 합니다
```markdown
$ git clone https://github.com/Pre-HotSix/wanted-pre-onboarding-fruitte.git
```
dependencies를 설치합니다
```markdown
$ npm install
```
프로젝트를 실행합니다
```markdown
$ npm start
```
<br/>

## 폴더 구조

```
root
├── .vscode
├── .prettierrc
├── .eslintrc
├── package-lock.json
├── package.json
├── jsconfig.json
├── public
|   ├── favicon.ico
|   ├── index.html
|   ├── data
|   └── images
└── src
    ├── components
    ├── constants
    ├── hooks
    ├── libs
    ├── pages
    ├── recoil
    ├── routes
    ├── styles
    ├── theme
    ├── utils
    ├── App.jsx
    └── index.js
```

|폴더|구분|
|:--|:--|
|components|코드 재사용을 위한 컴포넌트 관리형 폴더|
|pages|url주소에 따른 페이지 구성 폴더|
|libs|전역함수 및 변수 관리 폴더|
|routes|라우팅 관련 처리 폴더|
|styles|전역으로 사용하는 style 관리 폴더|
|theme|재사용을 위한 CSS 관리 폴더|
|utils|유틸 함수 관리 폴더|
|constants|더미 및 이미지 등 로컬 파일|
<br/>

## 디자인 시안 by 강다현

https://www.figma.com/file/IuCmKCuMWls9jUntm69z1N/farm?node-id=3%3A548

<img width="490" alt="image" src="https://user-images.githubusercontent.com/90244663/188319070-5e428000-e4a3-4e58-bf24-df3b34274c53.png">
<br />

## 더미 데이터 목업 by 민유경
```public/data/productData.json```

```
data =
  {
    "id": number,
    "title": string,
    "imgUrl": {url:string}[],
    "price": {
      "regular": number,
      "sale": number
    },
    "desc": string,
    "origin": string,
    "shipping": {
      "method": string,
      "fee": string,
      "info": string
    },
    "tag": {element:number}[],
    "required": []
  }[]
```
<br />

## 구현기능
1. 사용자 페이지
    - 스토어 상품목록 조회(30개 이상의 상품목록, 10개 단위의 페이지네이션, 인피니트 스크롤 X)
    - 스토어 상품 상세조회(이미지, 상품 옵션, 수량, 가격 등)
    - 스토어 상품 주문(상품 선택, 수량, 배송주소, 연락처 등)
    - 스토어 상품 주문 내역확인 (주문 번호, 상품명, 주문 수량, 주문 옵션)
2. 관리자 페이지
    - 스토어 상품목록 등록 페이지(이미지, 상품 옵션, 수량, 가격 등)
    - 스토어 상품목록 관리 페이지(상품 삭제 기능, 상품 노출 여부 조정 기능)
<br />

## 기술 스택
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![Recoil](https://img.shields.io/badge/Recoil-007af4.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FscXVlXzEiIGRhdGEtbmFtZT0iQ2FscXVlIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI1NS4yMSA2MjMuOTEiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDp3aGl0ZX08L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im03NC42MiAyNzcuNDYgMS4yNC0uMTMgMzQuNzgtMy4yOC01My40Ny01OC42NkE5Ni40NyA5Ni40NyAwIDAgMSAzMiAxNTAuM0gzYTEyNS4zIDEyNS4zIDAgMCAwIDMyLjggODQuNTdaTTE3Ny4xMyAzNDdsLTM2IDMuNCA1My4zMiA1OC41MUE5Ni40MSA5Ni40MSAwIDAgMSAyMTkuNjMgNDc0aDI4LjkyYTEyNS4yOCAxMjUuMjggMCAwIDAtMzIuNzYtODQuNTdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjUzLjY5IDIzMS42OGMtNi4zMy0zMS4zLTMwLjg5LTU0LjA5LTYyLjU3LTU4LjA3bC02LjM1LS43OWE0OS42MSA0OS42MSAwIDAgMS00My4zNS00OS4xM3YtMjBhNTIuNzUgNTIuNzUgMCAxIDAtMjguOTEtLjM2djIwLjM4YTc4LjU2IDc4LjU2IDAgMCAwIDY4LjY1IDc3LjgybDYuMzYuOGMyMy4yNCAyLjkyIDM0Ljc4IDIwIDM3LjgzIDM1LjFzLS45MyAzNS4zMi0yMS4yMiA0N2E3My44MSA3My44MSAwIDAgMS0zMC4wNiA5LjYybC05NS42NiA5YTEwMi40NSAxMDIuNDUgMCAwIDAtNDEuOCAxMy4zOEM5IDMzMi40NS00LjgxIDM2MyAxLjUyIDM5NC4yOXMzMC44OSA1NC4wOCA2Mi41NyA1OC4wNmw2LjM1LjhhNDkuNiA0OS42IDAgMCAxIDQzLjM1IDQ5LjEydjE4YTUyLjc1IDUyLjc1IDAgMSAwIDI4LjkxLjI2di0xOC4yNmE3OC41NSA3OC41NSAwIDAgMC02OC42NS03Ny44MWwtNi4zNi0uOGMtMjMuMjQtMi45Mi0zNC43OC0yMC4wNS0zNy44My0zNS4xMXMuOTMtMzUuMzIgMjEuMjItNDdhNzMuNjggNzMuNjggMCAwIDEgMzAuMDYtOS42M2w5NS42Ni05YTEwMi40NSAxMDIuNDUgMCAwIDAgNDEuOC0xMy4zOGMyNy42NS0xNi4wMiA0MS40LTQ2LjU0IDM1LjA5LTc3Ljg2WiIvPjwvc3ZnPg==&logoColor=white)   
- Recoil
💡 이유: React에 최적화 되어 있으며 Boiler Plate 초기 세팅의 구성이 간단하며 또한 내부 접근성이 용이하고 Hooks 기반으로 매우 심플하고 러닝커브가 낮다는 장점이 있습니다. 데이터 흐름이 직관적이며 비동기 요청을 자체적으로 지원하기에 Recoil을 선택하여 사용하였습니다.
<br />

## Best Practice

1. 컴포넌트에서 JSX 파일과 styled-component 파일을 분리했습니다.  
💡 이유 : styled-componet 파일이 길어지면서 한 파일 내에서 JSX 코드와 CSS 코드를 동시에 보기가 어려워져, 가독성을 위해 분리하였습니다. 
        추가적으로 style 컴포넌트에는 앞에 S.을 포함해 네이밍을 하여, 일반 컴포넌트와 구분하였습니다.
2. 공통적으로 쓰는 컴포넌트를 Router 안에서 사용했습니다 (Navigation, Footer 등).  
💡 이유 : 최대한 코드 양을 줄이기 위해서 이며, 코드가 많아지면 빌드 속도 및 렌더링 속도가 저하되기 때문입니다. 또한, import의 빈도도 줄일수 있습니다.
3. 많은 컴포넌트, 코드를 export 해서 관리해야 하는 경우 index.js 파일을 만들어 import 경로를 줄였습니다.  
💡 이유 : import 경로가 길어지면 가독성이 떨어지고, 파일 추적이 불편하다는 단점이 있기때문입니다. 이를 줄이기 위해 각 root 폴더에 index.js 파일을 만들어 export default 핸들링을 했습니다.
4. Pagination 컴포넌트, usePagination 훅 분리로 재사용 가능하도록 추상화 하였습니다.  
💡 이유 : 페이지 번호 상태를 훅으로 보내고, 컴포넌트에는 단순히 최대갯수 정보를 넘겨주면 어디서든 사용이 가능하도록 구성하였습니다.

