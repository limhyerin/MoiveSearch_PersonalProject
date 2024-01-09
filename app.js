// API_KEY = "e13b238a25a53f6fd653cc0954db94cd";
const url = "https://api.themoviedb.org/3/movie/popular?api_key=e13b238a25a53f6fd653cc0954db94cd&language=ko-KR";
let movies = [];

// 영화 API 값을 가지고 와서 카드를 전부 추가
for(let i = 0; i < 20; i++) {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        movies.push(data["results"][i]["original_title"]);

        let original_title = data["results"][i]["original_title"];

        let overview = data["results"][i]["overview"];

        let poster_path = data["results"][i]["poster_path"];
        let img_url = "https://image.tmdb.org/t/p/original"+poster_path;

        let vote_average = data["results"][i]["vote_average"];
        let id = data["results"][i]["id"];

        let temp_html = `
            <div class="col" onclick="alert('영화 ID : '+${id})">
                <div class="card h-100">
                <img src="${img_url}" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title" id="count">${original_title}</h5>
                    <p class="card-text">${overview}</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">평점 : ${vote_average}</small>
                </div>
                </div>
            </div>`;

        document.querySelector('#card').insertAdjacentHTML('beforeend', temp_html);
    });
}

// 검색어를 사용하여 영화를 필터링하는 함수
function search() {
    let search = document.getElementById("user_input").value; // 사용자가 입력한 값을 받음
    let cards = document.getElementsByClassName("col");
    let tf = 0;

    document.querySelector('#card').innerHTML=''; // 검색 시 조건에 맞는 영화만 출력하기 위해 비우기
    search = search.toUpperCase(); // 대소문자 구분없이 비교
    // search.toUpperCase() === movies[i].toUpperCase()
    // movies[i].indexOf(search) !== -1

    // 영화 검색 기능 구현
    for(let i = 0; i < 20; i++) {
        movies[i] = movies[i].toUpperCase()
        if(movies[i].indexOf(search) !== -1) {
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
                let original_title = data["results"][i]["original_title"];

                let overview = data["results"][i]["overview"];

                let poster_path = data["results"][i]["poster_path"];
                let img_url = "https://image.tmdb.org/t/p/original"+poster_path;

                let vote_average = data["results"][i]["vote_average"];
                let id = data["results"][i]["id"];

                let temp_html = `
                    <div class="col" onclick="alert('영화 ID : '+${id})">
                        <div class="card h-100">
                        <img src="${img_url}" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title" id="count">${original_title}</h5>
                            <p class="card-text">${overview}</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-body-secondary">평점 : ${vote_average}</small>
                        </div>
                        </div>
                    </div>`;

                document.querySelector('#card').insertAdjacentHTML('beforeend', temp_html);
            });
            tf = 1;
        }
    }
    if(tf===0) {
        // 검색 버튼 클릭시 다시 원상태 복구, 검색한 입력값이 없을 경우
        // 영화 API 값을 가지고 와서 카드를 전부 추가
        for(let i = 0; i < 20; i++) {
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
                movies.push(data["results"][i]["original_title"]);

                let original_title = data["results"][i]["original_title"];
                let overview = data["results"][i]["overview"];
                let poster_path = data["results"][i]["poster_path"];
                let img_url = "https://image.tmdb.org/t/p/original"+poster_path;
                let vote_average = data["results"][i]["vote_average"];

                let id = data["results"][i]["id"];

                let temp_html = `
                    <div class="col" onclick="alert('영화 ID : '+${id})">
                        <div class="card h-100">
                        <img src="${img_url}" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title" id="count">${original_title}</h5>
                            <p class="card-text">${overview}</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-body-secondary">평점 : ${vote_average}</small>
                        </div>
                        </div>
                    </div>`;

                document.querySelector('#card').insertAdjacentHTML('beforeend', temp_html);
            });
        }
    }
}