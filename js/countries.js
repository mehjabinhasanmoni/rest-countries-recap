const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then (res => res.json()
    )
    .then (data => displayCountries(data))
}

const displayCountries = (countries) => {
    // console.log(countries);
    const countriesHTML = countries.map(country => getCountryHTML(country));

    // console.log(countriesHTML[0]);
    const container = document.getElementById('countries');

    
    container.innerHTML = countriesHTML.join(' ');
}


const getCountryHTML =  (props) => {

    const {name, flags, area, region}=props

    return `
            <div class="country">
                <h2> ${name.common} </h2>
                <p>Area : ${area}</>
                <p>Continent : ${region}</>
                <img src="${flags.png}">
   
            </div>
    
    `
};

loadCountries();
