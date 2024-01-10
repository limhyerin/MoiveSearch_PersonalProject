
### 🏆구현 화면🏆
![](https://velog.velcdn.com/images/hrnn00/post/e0457e75-41df-49db-99c3-d4721c3b4e38/image.png)

#### ✔️ 상단부 : 타이틀
- 로고 : 이미지 그려서 삽입
```
<div class="top">
    <img src="movie_green.png" class="img_movie">
</div>
```
- 로고 이미지 클릭시 새로고침
#### ✔️ 중단부 : 검색창
- 영화 검색 텍스트, input, 부트스트랩 button 삽입
```
<div class="search">
    영화 검색 : <input id="user_input" onkeypress="if( event.keyCode == 13 ){search();}">
    <button id="myBtn" type="button" onclick="search()" class="btn btn-outline-light">검색</button>
</div>
```
- 검색 시 조건에 맞는 영화만 출력하기 위해 비우기 기능
- input 입력 후 button 클릭시 조건에 맞는 영화 검색 기능
- input 입력 후 엔터키 클릭시 버튼을 눌렀을때와 동일하게 조건에 맞는 영화 검색 기능
- 입력이 없는 상태로 버튼 혹은 엔터키를 눌렀을때 처음 화면으로 돌아가는 기능
- 대소문자 구분 없이 알맞는 결과 출력
#### ✔️ 하단부 : 영화 목록
- TMDB API 연동
- 부트스트랩 cards 이용해서 TMDB에서 받아온 영화 api 정보를 담을 card 생성
```
<div class="mycards">
    <div id="card" class="row row-cols-1 row-cols-md-4 g-4">
    </div>
</div>
```
- 카드 클릭시 alert 창 띄우기(영화 id값 출력)
- 마우스를 가져다대면 애니메이션 효과 추가
