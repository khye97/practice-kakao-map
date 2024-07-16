//const API_KEY = `X94piR1qJlHsemzEXygSp9Lm4f9SLTS2B7o8vQEpAtPjiER%2B%2BJ9DlnMNEw2K72CDSyve3P8NOlPQgmwTUp3vlQ%3D%3D`;
const travelAPI_KEY = config.apikey;
const weatherAPI_KEY = config2.apikey;


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
  const url = `https://apis.data.go.kr/1360000/TourStnInfoService1/getTourStnVilageFcst1?ServiceKey=${travelAPI_KEY}&pageNo=1&numOfRows=10&dataType=JSON&CURRENT_DATE=20240714&HOUR=12&COURSE_ID=306`
  const response = await fetch(url);
  const data = await response.json();
  console.log("동네예보조회", data);
}

getWeatherData2();



// 부산 맛집 정보
async function getRestaurantDate (){
  const url = `http://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${travelAPI_KEY}&resultType=JSON&numOfRows=10&pageNo=1`
  const response = await fetch(url);
  const data = await response.json();
  console.log("부산 맛집 정보", data);
}

getRestaurantDate();



//const weatherAPI_KEY = `9536d22b2686e8fd7fe6505b7df9f1e2`;

async function getWeather (){
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.4562557&lon=126.7052062&appid=${weatherAPI_KEY}&lang=kr`;
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${weatherAPI_KEY}`
  const response = await fetch(url);
  const data = await response.json();
  console.log("날씨 정보", data);
  const incheon = data.weather[0].description;
  console.log(incheon);
}

getWeather();