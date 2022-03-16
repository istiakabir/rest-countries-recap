const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayData(data))
};

const displayData = countries => {
    
    const countryHtml = countries.map(country => getCountryHtml(country));
    const showCountries = document.getElementById('country')
    showCountries.innerHTML =countryHtml.join(' ');

}

const getCountryHtml = country =>{
    console.log(country);
    return`
        <div>
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}" >
        </div>
    `
}

loadCountries();