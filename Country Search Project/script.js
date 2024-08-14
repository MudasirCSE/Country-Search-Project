// "https://api.countrystatecity.in/v1/countries"
console.log("Now it's time for JavaScript");
let countryFlag = document.querySelector("img");
let CountryName = document.querySelector(".countryName");
let countryLocation = document.querySelector(".location");
let countryInput = document.querySelector(".search_area");
let searcButton = document.querySelector(".search_btn");
let languages = document.querySelector(".languages");
let capital = document.querySelector(".capital");
let searchResult = document.querySelector(".searchResult");

let form = document.querySelector('form');


form.addEventListener('submit', searchforCountry);

let target = 'Pakistan';

async function getData(targetlocation) {
    let url = (`https://restcountries.com/v3.1/name/${targetlocation}?fullText=true`);
    try {
        let res = await fetch(url);
        let data = await res.json();

        console.log(data)
        if (data.length > 0) {
            let CN = data[0].name.common;
            let CF = data[0].flags.png;
            let LOC = data[0].name.official;
            let LANG = data[0].languages;
            let OBJ = Object.values(LANG)
            let CAPITAL = data[0].capital;
            let cot = data[0].maps.googleMaps;
            console.log(cot)
            searchResult.innerText = "Country Found";
            // Update the UI with the fetched data
            dataUpdate(CN, CF, LOC, OBJ,CAPITAL);
        } else {
            searchResult.innerText = "Country Not Found";
            // console.log("Country not found");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }



}

function dataUpdate(CN, CF, LOC, OBJ,CAPITAL,) {
    if(countryInput.value == ""){
        CountryName.innerText = "Null"
        countryLocation.innerText = "Null"        
        languages.innerText = "Null"        
        capital.innerText = "Null"        
    }else{
        CountryName.innerText = CN
        countryFlag.src = CF;
        countryLocation.innerText = LOC;
        languages.innerText = OBJ;
        capital.innerText = CAPITAL;
    }
}


getData(target)


function searchforCountry(e) {
    e.preventDefault();
    target = countryInput.value;
    getData(target);
}