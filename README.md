# 🎉 원티드 프리온보딩 프론트엔드 코스 2차 과제
## 과제 소개
- 목표 : 기존 운영 서비스의 신규 페이지 제작
- 작업기간 : 2022.09.02 ~ 2022.09.05
<br/>

## 배포 링크
[https://hotsix-fruitte.netlify.app/](https://hotsix-fruitte.netlify.app/)   
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
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)   
`Recoil` `React-icons`   
<br />

## Best Practice

