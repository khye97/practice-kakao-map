const API_KEY = `X94piR1qJlHsemzEXygSp9Lm4f9SLTS2B7o8vQEpAtPjiER%2B%2BJ9DlnMNEw2K72CDSyve3P8NOlPQgmwTUp3vlQ%3D%3D`;


// 시군구별 관광기후지수 조회
async function getWeatherData(){
  //const url = `https://apis.data.go.kr/1360000/TourStnInfoService1/getTourStnVilageFcst1?ServiceKey=${API_KEY}&pageNo=1&numOfRows=10&dataType=JSON&CURRENT_DATE=20240401&HOUR=24&COURSE_ID=177`;
  const url = `https://apis.data.go.kr/1360000/TourStnInfoService1/getCityTourClmIdx1?ServiceKey=${API_KEY}&pageNo=1&numOfRows=10&dataType=JSON&CURRENT_DATE=20240501&DAY=3&CITY_AREA_ID=2635000000`
  const response = await fetch(url);
  const data = await response.json();
  console.log("시군구별 관광기후지수", data);
}

getWeatherData();

// 동네 예보 조회
async function getWeatherData2 (){
  const url = `https://apis.data.go.kr/1360000/TourStnInfoService1/getTourStnVilageFcst1?ServiceKey=${API_KEY}&pageNo=1&numOfRows=10&dataType=JSON&CURRENT_DATE=20240714&HOUR=12&COURSE_ID=306`
  const response = await fetch(url);
  const data = await response.json();
  console.log("동네예보조회", data);
}

getWeatherData2();


// 부산 맛집 정보
async function getRestaurantDate (){
  const url = `http://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${API_KEY}&resultType=JSON&numOfRows=10&pageNo=1`
  const response = await fetch(url);
  const data = await response.json();
  console.log("부산 맛집 정보", data);
}

getRestaurantDate();