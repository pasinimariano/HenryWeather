import React, { useState } from 'react';
import NavBar from './components/navigationBar/navBar/NavBar.jsx';
import Cards from './components/cards/Cards.jsx';
import styles from './style/AppStyle.module.css'


export default function App() {

    const apiKey = '826d29f67d1c4b968ca174440213006';
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [id, setId] = useState({ count: 1 })

    function onSearch(city) {
        if (city.length === 0) {
            alert('Por favor ingresa el nombre de una ciudad')
        }
        else if ((cities.find(obj => obj.name.toUpperCase() === city.toUpperCase())) === undefined) {
            setLoading(true)
            fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
                .then(response => response.json())
                .then(data => {
                    setLoading(false);
                    let newCity = {
                        id: id.count,
                        name: data.location.name,
                        country: data.location.country,
                        time: data.location.localtime,
                        temp: data.current.temp_c,
                        icon: data.current.condition.icon,
                        text: data.current.condition.text,
                        hum: data.humidity
                    };
                    setCities(montedCities => [...montedCities, newCity])
                    setId({ count: id.count + 1 })
                })
                .catch(() => {
                    setLoading(false);
                    setError(`${city}, no fue encontrada. Por favor chequea y vuelve a intentarlo`)
                });

        }
        else {
            alert(`${city}, ya se encuentra montada en la página`)
        }
    };

    function onClose(id) {
        setCities(montedCities => montedCities.filter(city => city.id !== id))
    };

    if (loading) {
        alert('Loading....')
    };

    if (error !== '') {
        alert(error)
    };

    return (
        <div className={styles.App}>
            <NavBar onSearch={onSearch} />
            <hr />
            <Cards cities={cities} onClose={onClose} />
        </div>
    );
}
