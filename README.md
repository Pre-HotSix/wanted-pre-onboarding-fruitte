# π μν°λ νλ¦¬μ¨λ³΄λ© νλ‘ νΈμλ μ½μ€ 2μ°¨ κ³Όμ 
## κ³Όμ  μκ°
- λͺ©ν : κΈ°μ‘΄ μ΄μ μλΉμ€μ μ κ· νμ΄μ§ μ μ
- μμκΈ°κ° : 2022.09.02 ~ 2022.09.05
<br/>

## λ°°ν¬ λ§ν¬

https://hotsix-fruitte.netlify.app/

<br/>

## νμλ€μ μκ°ν©λλ€.

|λ©€λ²|λ΄λΉ|ν¬λΆ|
|:--|:--|:--|
|[κΉμΉλͺ¨(νμ₯)](https://github.com/endmoseung)|νλ‘ νΈμλ|νλ¦¬μ¨λ³΄λ© μ½μ€ μλ£ν κ΄λ ¨κΈ°μ μ·¨μμ±κ³΅!|
|[μμ°μ](https://github.com/dndud2906)|νλ‘ νΈμλ|νλ¦¬μ¨λ³΄λ© κΈ°λ°μΌλ‘ νλ£¨λΉ¨λ¦¬ μ΄μ§|
|[μ΄μ’νΈ](https://github.com/devfrank9)|νλ‘ νΈμλ|μνΌμ€ μκ²° μ μ μ€νμμ€ μ»¨νΈλ¦¬λ·°ν° λ¬κΈ°|
|[λ―Όμ κ²½](https://github.com/MINYUKYUNG)|νλ‘ νΈμλ|10μ μμ μ·¨μ§!|
|[κ°λ€ν](https://github.com/KKangdaa)|νλ‘ νΈμλ|μ€λ¬΄λ₯Ό μλ μ μκ°λ°μ λκΈ°|
|[μμ±ν](https://github.com/sasumpi123)|νλ‘ νΈμλ|μ’μνμ¬λ‘ μ΄μ§ μ±κ³΅νκΈ°|
<br/>

## Commit & Merge Convention

```
1. dev (κ°λ°) λΈλμΉλ₯Ό μμ±νλ€.
2. κ°μ μ£Όμ΄μ§ μμμ λν issueλ₯Ό μμ±νλ€.
3. μμ±λ issue λ²νΈλ‘ κ°λ³ branch μ΄λ¦μ κ°λλ€
4. κ°λ³ branchμμ μμν Git μ»¨λ²€μμ λ°λΌ μ»€λ° λ° PRμ νλ€.
5. μ΄λ, PRμ dev(κ°λ°)λ‘ νλ€.
6. λͺ¨λ  issue close λ° μμμ¬ν­ μμμ mainμΌλ‘ dev(κ°λ°) λΈλμΉλ₯Ό PRνλ€.
7. μ΄ν μμ λ°μμ 1~6μ λ°λ³΅νλ€.
```
<br />

## μ€ν λ°©λ²

λ ν¬μ§ν λ¦¬λ₯Ό `clone` ν©λλ€
```markdown
$ git clone https://github.com/Pre-HotSix/wanted-pre-onboarding-fruitte.git
```
dependenciesλ₯Ό μ€μΉν©λλ€
```markdown
$ npm install
```
νλ‘μ νΈλ₯Ό μ€νν©λλ€
```markdown
$ npm start
```
<br/>

## ν΄λ κ΅¬μ‘°

```
root
βββ .vscode
βββ .prettierrc
βββ .eslintrc
βββ package-lock.json
βββ package.json
βββ jsconfig.json
βββ public
|   βββ favicon.ico
|   βββ index.html
|   βββ data
|   βββ images
βββ src
    βββ components
    βββ constants
    βββ hooks
    βββ libs
    βββ pages
    βββ recoil
    βββ routes
    βββ styles
    βββ theme
    βββ utils
    βββ App.jsx
    βββ index.js
```

|ν΄λ|κ΅¬λΆ|
|:--|:--|
|components|μ½λ μ¬μ¬μ©μ μν μ»΄ν¬λνΈ κ΄λ¦¬ν ν΄λ|
|pages|urlμ£Όμμ λ°λ₯Έ νμ΄μ§ κ΅¬μ± ν΄λ|
|libs|μ μ­ν¨μ λ° λ³μ κ΄λ¦¬ ν΄λ|
|routes|λΌμ°ν κ΄λ ¨ μ²λ¦¬ ν΄λ|
|styles|μ μ­μΌλ‘ μ¬μ©νλ style κ΄λ¦¬ ν΄λ|
|theme|μ¬μ¬μ©μ μν CSS κ΄λ¦¬ ν΄λ|
|utils|μ νΈ ν¨μ κ΄λ¦¬ ν΄λ|
|constants|λλ―Έ λ° μ΄λ―Έμ§ λ± λ‘μ»¬ νμΌ|
<br/>

## λμμΈ μμ by κ°λ€ν

[νΌκ·Έλ§ λ°λ‘κ°κΈ°](https://www.figma.com/file/IuCmKCuMWls9jUntm69z1N/farm?node-id=3%3A548)

<img width="490" alt="image" src="https://user-images.githubusercontent.com/90244663/188319070-5e428000-e4a3-4e58-bf24-df3b34274c53.png">
<br />

## λλ―Έ λ°μ΄ν° λͺ©μ by λ―Όμ κ²½
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

## κ΅¬νκΈ°λ₯
1. μ¬μ©μ νμ΄μ§
    - μ€ν μ΄ μνλͺ©λ‘ μ‘°ν(30κ° μ΄μμ μνλͺ©λ‘, 10κ° λ¨μμ νμ΄μ§λ€μ΄μ, μΈνΌλνΈ μ€ν¬λ‘€ X)
    - μ€ν μ΄ μν μμΈμ‘°ν(μ΄λ―Έμ§, μν μ΅μ, μλ, κ°κ²© λ±)
    - μ€ν μ΄ μν μ£Όλ¬Έ(μν μ ν, μλ, λ°°μ‘μ£Όμ, μ°λ½μ² λ±)
    - μ€ν μ΄ μν μ£Όλ¬Έ λ΄μ­νμΈ (μ£Όλ¬Έ λ²νΈ, μνλͺ, μ£Όλ¬Έ μλ, μ£Όλ¬Έ μ΅μ)
2. κ΄λ¦¬μ νμ΄μ§
    - μ€ν μ΄ μνλͺ©λ‘ λ±λ‘ νμ΄μ§(μ΄λ―Έμ§, μν μ΅μ, μλ, κ°κ²© λ±)
    - μ€ν μ΄ μνλͺ©λ‘ κ΄λ¦¬ νμ΄μ§(μν μ­μ  κΈ°λ₯, μν λΈμΆ μ¬λΆ μ‘°μ  κΈ°λ₯)
<br />

## κΈ°μ  μ€ν

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![Recoil](https://img.shields.io/badge/Recoil-007af4.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FscXVlXzEiIGRhdGEtbmFtZT0iQ2FscXVlIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI1NS4yMSA2MjMuOTEiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDp3aGl0ZX08L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im03NC42MiAyNzcuNDYgMS4yNC0uMTMgMzQuNzgtMy4yOC01My40Ny01OC42NkE5Ni40NyA5Ni40NyAwIDAgMSAzMiAxNTAuM0gzYTEyNS4zIDEyNS4zIDAgMCAwIDMyLjggODQuNTdaTTE3Ny4xMyAzNDdsLTM2IDMuNCA1My4zMiA1OC41MUE5Ni40MSA5Ni40MSAwIDAgMSAyMTkuNjMgNDc0aDI4LjkyYTEyNS4yOCAxMjUuMjggMCAwIDAtMzIuNzYtODQuNTdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjUzLjY5IDIzMS42OGMtNi4zMy0zMS4zLTMwLjg5LTU0LjA5LTYyLjU3LTU4LjA3bC02LjM1LS43OWE0OS42MSA0OS42MSAwIDAgMS00My4zNS00OS4xM3YtMjBhNTIuNzUgNTIuNzUgMCAxIDAtMjguOTEtLjM2djIwLjM4YTc4LjU2IDc4LjU2IDAgMCAwIDY4LjY1IDc3LjgybDYuMzYuOGMyMy4yNCAyLjkyIDM0Ljc4IDIwIDM3LjgzIDM1LjFzLS45MyAzNS4zMi0yMS4yMiA0N2E3My44MSA3My44MSAwIDAgMS0zMC4wNiA5LjYybC05NS42NiA5YTEwMi40NSAxMDIuNDUgMCAwIDAtNDEuOCAxMy4zOEM5IDMzMi40NS00LjgxIDM2MyAxLjUyIDM5NC4yOXMzMC44OSA1NC4wOCA2Mi41NyA1OC4wNmw2LjM1LjhhNDkuNiA0OS42IDAgMCAxIDQzLjM1IDQ5LjEydjE4YTUyLjc1IDUyLjc1IDAgMSAwIDI4LjkxLjI2di0xOC4yNmE3OC41NSA3OC41NSAwIDAgMC02OC42NS03Ny44MWwtNi4zNi0uOGMtMjMuMjQtMi45Mi0zNC43OC0yMC4wNS0zNy44My0zNS4xMXMuOTMtMzUuMzIgMjEuMjItNDdhNzMuNjggNzMuNjggMCAwIDEgMzAuMDYtOS42M2w5NS42Ni05YTEwMi40NSAxMDIuNDUgMCAwIDAgNDEuOC0xMy4zOGMyNy42NS0xNi4wMiA0MS40LTQ2LjU0IDM1LjA5LTc3Ljg2WiIvPjwvc3ZnPg==&logoColor=white)   

<br />

## Best Practice
### 1. μ»΄ν¬λνΈμμ JSX νμΌκ³Ό styled-component νμΌμ λΆλ¦¬νμ΅λλ€.  
π‘ μ΄μ  : styled-componet νμΌμ΄ κΈΈμ΄μ§λ©΄μ ν νμΌ λ΄μμ JSX μ½λμ CSS μ½λλ₯Ό λμμ λ³΄κΈ°κ° μ΄λ €μμ Έ, κ°λμ±μ μν΄ λΆλ¦¬νμμ΅λλ€. μΆκ°μ μΌλ‘ style μ»΄ν¬λνΈμλ μμ S.μ ν¬ν¨ν΄ λ€μ΄λ°μ νμ¬, μΌλ° μ»΄ν¬λνΈμ κ΅¬λΆνμμ΅λλ€.

### 2. κ³΅ν΅μ μΌλ‘ μ°λ μ»΄ν¬λνΈλ₯Ό Router μμμ μ¬μ©νμ΅λλ€ (Navigation, Footer λ±).  
π‘ μ΄μ  : μ΅λν μ½λ μμ μ€μ΄κΈ° μν΄μ μ΄λ©°, μ½λκ° λ§μμ§λ©΄ λΉλ μλ λ° λ λλ§ μλκ° μ νλκΈ° λλ¬Έμλλ€. λν, importμ λΉλλ μ€μΌμ μμ΅λλ€.

### 3. λ§μ μ»΄ν¬λνΈ, μ½λλ₯Ό export ν΄μ κ΄λ¦¬ν΄μΌ νλ κ²½μ° index.js νμΌμ λ§λ€μ΄ import κ²½λ‘λ₯Ό μ€μμ΅λλ€.  
π‘ μ΄μ  : import κ²½λ‘κ° κΈΈμ΄μ§λ©΄ κ°λμ±μ΄ λ¨μ΄μ§κ³ , νμΌ μΆμ μ΄ λΆνΈνλ€λ λ¨μ μ΄ μκΈ°λλ¬Έμλλ€. μ΄λ₯Ό μ€μ΄κΈ° μν΄ κ° root ν΄λμ index.js νμΌμ λ§λ€μ΄ export default νΈλ€λ§μ νμ΅λλ€.

### 4. Pagination μ»΄ν¬λνΈ, usePagination ν λΆλ¦¬λ‘ μ¬μ¬μ© κ°λ₯νλλ‘ μΆμν νμμ΅λλ€.  
π‘ μ΄μ  : νμ΄μ§ λ²νΈ μνλ₯Ό νμΌλ‘ λ³΄λ΄κ³ , μ»΄ν¬λνΈμλ λ¨μν μ΅λκ°―μ μ λ³΄λ₯Ό λκ²¨μ£Όλ©΄ μ΄λμλ  μ¬μ©μ΄ κ°λ₯νλλ‘ κ΅¬μ±νμμ΅λλ€.

### 5. Recoil μ μ¬μ©νμ¬ μν μ£Όλ¬Έ μλ£ μ λ³΄λ₯Ό κ΄λ¦¬νμμ΅λλ€.  
π‘ μ΄μ  : React μ΅μ ν λμ΄ μμΌλ©° Boiler Plate μ΄κΈ° μΈνμ κ΅¬μ±μ΄ κ°λ¨ν©λλ€. λν, λ΄λΆ μ κ·Όμ±μ΄ μ©μ΄νκ³  Hooks κΈ°λ°μΌλ‘ λ§€μ° μ¬ννκ³  λ¬λμ»€λΈκ° λ?λ€λ μ₯μ μ΄ μμ΅λλ€. λ°μ΄ν° νλ¦μ΄ μ§κ΄μ μ΄λ©° λΉλκΈ° μμ²­μ΄λ μΊμ±μ μμ²΄μ μΌλ‘ μ§μνκΈ°μ Recoil μ μ ννμ¬ μ¬μ©νμμ΅λλ€.
