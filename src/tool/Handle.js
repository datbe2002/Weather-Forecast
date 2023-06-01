export const convertDate = (timestamp, typeDaysofWeek) => {
    const date = new Date(timestamp * 1000);
    const formattedDate = date.toLocaleDateString('en-US', {
        weekday: typeDaysofWeek,
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    return formattedDate
}


export const groudUp = (numb) => {
    const bing = Math.ceil(numb);
    return bing
}

import pic1 from '../assets/iconWeather/01d@2x.png'
import pic2 from '../assets/iconWeather/01n@2x.png'
import pic3 from '../assets/iconWeather/02d@2x.png'
import pic4 from '../assets/iconWeather/02n@2x.png'
import pic5 from '../assets/iconWeather/03d@2x.png'
import pic6 from '../assets/iconWeather/03n@2x.png'
import pic7 from '../assets/iconWeather/04d@2x.png'
import pic8 from '../assets/iconWeather/04n@2x.png'
import pic9 from '../assets/iconWeather/09d@2x.png'
import pic10 from '../assets/iconWeather/09n@2x.png'
import pic11 from '../assets/iconWeather/10d@2x.png'
import pic12 from '../assets/iconWeather/10n@2x.png'
import pic13 from '../assets/iconWeather/11d@2x.png'
import pic14 from '../assets/iconWeather/11n@2x.png'
import pic15 from '../assets/iconWeather/13d@2x.png'
import pic16 from '../assets/iconWeather/13n@2x.png'
import pic17 from '../assets/iconWeather/50d@2x.png'
import pic18 from '../assets/iconWeather/50n@2x.png'

export const weatherIcon = (iconCode) => {
    switch (iconCode) {
        case '01d':
            return pic1
        case '01n':
            return pic2
        case '02d':
            return pic3
        case '02n':
            return pic4
        case '03d':
            return pic5
        case '03n':
            return pic6
        case '04d':
            return pic7
        case '04n':
            return pic8
        case '09d':
            return pic9
        case '09n':
            return pic10
        case '10d':
            return pic11
        case '10n':
            return pic12
        case '11d':
            return pic13
        case '11n':
            return pic14
        case '13d':
            return pic15
        case '13n':
            return pic16
        case '50d':
            return pic17
        case '50n':
            return pic18
        default:
            return 'unknown weather'
    }
}

import clouds from '../assets/backgroudWeather/Clouds.jpg'
import rain from '../assets/backgroudWeather/Rain.jpg'
import thunderstorm from '../assets/backgroudWeather/Thunderstorm.jpg'
import clear from '../assets/backgroudWeather/Clear.jpg'

export const weatherBackgroud = (main) => {
    switch (main) {
        case 'Clouds':
            return clouds
        case 'Rain':
            return rain
        case 'Thunderstorm':
            return thunderstorm
        case 'Clear':
            return clear
        default:
            return clear

    }
}

export const capitalizeFirstLetters = (word) => {
    return word
        .split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
}