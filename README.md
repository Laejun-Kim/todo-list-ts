# [내일배움캠프][개인 프로젝트] - ToDo List using TypeScript

![logo](https://velog.velcdn.com/images/laejunkim/post/49c85905-07db-4735-8302-8c9a3c398a42/image.png)

## 프로젝트 확인하기

https://todo-list-ts-delta.vercel.app/

(현재 배포 사이트는 main 브랜치를 기반으로 하고 있으며, main 브랜치는 level5-optimistic-update 브랜치의 내용과 동일합니다)

## 프로젝트 소개

[이전 프로젝트](https://github.com/Laejun-Kim/react-mytodo-list)를 TypeScript로 다시 개발한 프로젝트.

TypeScript의 도입 뿐만 지금까지 배운 tanstack query, axios, json-server, sweetalert2 등 지난 todo-list 프로젝트 이후 새롭게 배운 모든 것을 전부 적용함.

디자인은 이전 프로젝트와 거의 동일하지만 내부 코드나 작동 로직등은 완전히 리메이크 되었습니다!!

특히 일부 동작에 낙관적 업데이트를 적용하여 서버 통신에 걸리는 지연시간을 사용자가 느끼지 못하도록 처리하였습니다.

## 개발 기간

- 23.12.13 - 23.12.17

## 사용 기술 스택

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"><br/>
<img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=React_Query&logoColor=white"><img src="	https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">

## 사용 라이브러리

- sweetalert2
- nanoid
- styled-components
- json-server

## 주요 기능

- todo CRUD

## 새로 추가된 기능

- todo 완료 정도를 보여주는 progress bar 추가

- todo 의 isDone 토글시 발생하는 지연을 느끼지 못하도록 낙관적 업데이트
- 화면에 표시할 todo가 하나도 없을시 대체 컴포넌트 표시

## 특이사항

- todo 와 관련된 모든 입/출력은 json-server 와의 통신으로 직접 이루어지기 때문에 인터넷 환경에 따라 화면 반응이 약간 느린 경우가 있을 수 있습니다.

- 신규 todo 추가와 기존 todo 삭제시에는 모달때문에 서버 지연이 크게 느껴지지 않아 낙관적 업데이트를 적용하지 않았습니다.

  반면에 isDone 토글은 모달을 사용하지 않기 때문에 300ms 정도의 지연시간이 반드시 느껴지는 상황입니다. 이를 해결하기 위해 isDone 토글에만 낙관적 업데이트를 적용, 실제 서버와의 통신이 이루어지는 것과 별개로, 사용자는 즉시 isDone 토글이 이루어지는 것처럼 느껴지도록 처리했습니다.

- redux나 기타 전역상태 관리 툴은 이용하지 않았으며 이는 의도된 부분입니다. 전부 tanstack query 로 처리합니다.
