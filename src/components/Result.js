import React from 'react';

const Result = props => {

    const { date, city, sunrise, day, sunset, temp, pressure, wind, err } = props.weather;
    let content = null;
    if (!err && city) {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

        content = (
            <div>
                <h3>Wyszukiwanie dla miasta {city}</h3>
                <h4>Dzien i godzina {day} {date}</h4>
                <h4>Temperatura: {temp}</h4>
                <h4>Wschód {sunriseTime}</h4>
                <h4>Zachod {sunsetTime}</h4>
                <h4>Cisnienie {pressure}</h4>
                <h4>wiatr {wind}</h4>
            </div>
        )
    }
    return (
        <div className="result">
            {err ? "Takie miasto nie istnieje" : content}
        </div>

    );
}

export default Result;