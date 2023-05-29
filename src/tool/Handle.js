export const convertDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const dayName = date.toLocaleString('en-US', { weekday: 'short' });
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding leading zero if needed
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    const formattedDate = `${dayName} ${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;


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