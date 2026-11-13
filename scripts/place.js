const temperature = 5; // Celsuis
const windSpeed = 10; // km/h

function calculateWindChill(temp, speed) 
    {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
    }

const windChillElement = document.getElementById("windchill");

// Remember metric not imperial...
if (temperature <= 10 && windSpeed > 4.8) 
    {
        windChillElement.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`; // Metric
    } 
    else 
        {
            windChillElement.textContent = "N/A";
        }