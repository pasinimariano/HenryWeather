import React, { useState } from 'react';
import SearchForm from '../components/navigation/searchBar/SearchBar.jsx';
import Cards from '../components/cards/Cards.jsx';


const Home = () => {

    const APIKEY = '4f1ca4abca8ab37b6d420864a5ca84e6';
    const [cities, setCities] = useState([]);

    const onSearch = (city) => {
        if (city.length === 0) {
            alert('Por favor ingresa el nombre de una ciudad')
        }
        else if ((cities.find(obj => obj.name.toUpperCase() === city.toUpperCase())) === undefined) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`)
                .then(response => response.json())
                .then(data => {
                    let newCity = {
                        id: data.id,
                        name: data.name,
                        timezone: data.timezone,
                        country: data.sys.country,
                        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                        temp: data.main.temp,
                    };
                    setCities(montedCities => [...montedCities, newCity])
                })
        }
        else {
            alert(`${city}, ya se encuentra montada en la página`)
        }
    };

    const onClose = (id) => {
        setCities(montedCities => montedCities.filter(city => city.id !== id))
    };

    return (
        <div>
            <SearchForm onSearch={onSearch} />
            <Cards cities={cities} onClose={onClose} />
        </div>
    );
}

export default Home;