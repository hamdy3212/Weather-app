/* Global Variables */
const url = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const zip = document.getElementById('zip');
const key = '&appid=1fd37d6ed1c96152b606908afb3bed9d&units=metric';
const generateButton = document.getElementById('generate');
const feelings = document.getElementById('feelings');

// GET DATA FROM WEATHER API
const getWeather = async (zip) => {
  const response = await fetch( url + zip + key)
  try{
    const data = await response.json();
    return data;
  }
  catch(error){
    document.getElementById('temp').textContent = "BADADAD";
  }
}

// POST DATA TO SERVER
async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors',
    cache: 'no-cache', 
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });
  return response.json();
}

// UPDATE UI
const updateUI = async ( ) => {
  // GET DATA FROM SERVER
  const request = await fetch('/data');
  try{
    const allData = await request.json();
    document.getElementById('date').textContent = 'Date: ' + allData.date;
    document.getElementById('temp').textContent = 'Temp: ' + allData.temp + '°C';
    document.getElementById('content').textContent = 'Your Feeling: ' + allData.userRes;
  }catch(error){
    document.getElementById('temp').textContent = "BADADAD";
  }
}

// ADD EVENT LISTNER ON GENERATE BUTTON
generateButton.addEventListener('click', ()=>{
    getWeather(zip.value)
    .then( data =>{
      const temp = data.main.temp;
      const userRes = feelings.value;
      postData('/', {temp, newDate, userRes});
      updateUI();
    })
});







// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
