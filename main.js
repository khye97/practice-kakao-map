const travelAPI_KEY = config.apikey;
const weatherAPI_KEY = config2.apikey;

let locationBtn = document.querySelectorAll('.btn');
//console.log(locationBtn);

let data = ``;




async function 새관광정보(){
  //const url = `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?MobileOS=ETC&MobileApp=tour&_type=json&keyword=%EC%84%9C%EC%9A%B8&serviceKey=${travelAPI_KEY}`
  //const url = `http://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=${travelAPI_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json&areaCode=1`
  const url = `http://apis.data.go.kr/B551011/KorService1/categoryCode1?serviceKey=${travelAPI_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json&contentTypeId=12`;
  const response = await fetch(url);
  const data = await response.json();
  const dataItem = data.response.body.items.item;
  console.log("새 관광정보", data);
  console.log("관광정보 아이템만", dataItem);
}

새관광정보();



// 시군구별 관광기후지수 조회
async function getWeatherData(){
  //const url = `https://apis.data.go.kr/1360000/TourStnInfoService1/getTourStnVilageFcst1?ServiceKey=${API_KEY}&pageNo=1&numOfRows=10&dataType=JSON&CURRENT_DATE=20240401&HOUR=24&COURSE_ID=177`;
  const url = `https://apis.data.go.kr/1360000/TourStnInfoService1/getCityTourClmIdx1?ServiceKey=${travelAPI_KEY}&pageNo=1&numOfRows=10&dataType=JSON&CURRENT_DATE=20240501&DAY=3&CITY_AREA_ID=2635000000`
  const response = await fetch(url);
  const data = await response.json();
  console.log("시군구별 관광기후지수", data);
}

getWeatherData();



// 동네 예보 조회
async function getWeatherData2 (){
  //const url = `https://apis.data.go.kr/1360000/TourStnInfoService1/getTourStnVilageFcst1?ServiceKey=${travelAPI_KEY}&pageNo=1&numOfRows=10&dataType=JSON&CURRENT_DATE=20240714&HOUR=12&COURSE_ID=306`
  const url = `https://apis.data.go.kr/1360000/TourStnInfoService1/getTourStnVilageFcst1?ServiceKey=${travelAPI_KEY}&pageNo=1&numOfRows=10&dataType=JSON&CURRENT_DATE=20240714&HOUR=24&COURSE_ID=295`
  const response = await fetch(url);
  const data = await response.json();
  const dataItem = data.response.body.items.item;
  console.log("동네예보조회", data);
  console.log("동네 예보 조회 아이템만", dataItem);
  render2(dataItem);
}

//getWeatherData2();



// 부산 맛집 정보
async function getRestaurantDate (){
  const url = `http://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${travelAPI_KEY}&resultType=JSON&numOfRows=10&pageNo=1`
  const response = await fetch(url);
  const data = await response.json();
  console.log("부산 맛집 정보", data);
}

getRestaurantDate();



// 날씨 데이터 가져오기
// 날씨 전용 api 사용
async function getWeather (event){
  const location = event.target.id;
  //console.log(location);
  //const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.4562557&lon=126.7052062&appid=${weatherAPI_KEY}&lang=kr`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherAPI_KEY}&lang=kr`
  const response = await fetch(url);
  data = await response.json();
  console.log("날씨 정보(날씨 전용)", data);
  //const incheon = data.weather[0].description;
  //console.log(incheon);
  render(data);
}



locationBtn.forEach(location => location.addEventListener('click', (event) => {
  getWeather(event);
  getWeatherData2(event);
}))

const render = (data) => {
  let resultHTML = ``;

  resultHTML += `
  <div>장소 : ${data.name}</div>
  <div>날씨 : ${data.weather[0].main}</div>
    <div>날씨 설명 : ${data.weather[0].description}</div>
    <div>날씨 아이콘 : ${data.weather[0].icon}</div>
    <br>
    <div>풍속 : ${data.wind.speed}</div>
    <div>풍향 : ${data.wind.deg}</div>
    <br>
    
    <br>
  `

  document.getElementById('board').innerHTML = resultHTML;
}

//<div>강수량 ${data.rain['1h']}</div>

const render2 = (data) => {
  let resultHTML = ``;

  resultHTML = `
  <div>동네 예보 조회</div>
  <div>지역 : ${data[0].courseAreaName} ${data[0].spotAreaName}</div>
  <div>코스네임 : ${data[0].courseName}</div>
  <div>테마 : ${data[0].thema}</div>
  <div>관광지명 : ${data[0].spotName}</div>
  `;

  document.getElementById('board2').innerHTML = resultHTML;
}

