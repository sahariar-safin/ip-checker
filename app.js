fetch('https://api.ipify.org?format=json')
    .then(res => res.json())
    .then(data => ipdetail(data.ip));

const ipdetail = (getIp) => {
    const ip = getIp + "";
    console.log(ip);
    fetch(`https://ipapi.co/${ ip }/json/`)
        .then(res => res.json())
        .then(data => handleDetails(data));
}

const handleDetails = (data) => {
    console.log(data);
    const detailsContainer = document.getElementById('details');
    const details = document.createElement('div');
    details.innerHTML = `
    <h1>Your Ip Address: ${data.ip}</h1>
                <h3>Your Ip version: ${data.version}</h3>
                <h3>City: ${data.city}</h3>
                <h3>Region: ${data.region}</h3>
                <h3>Region COde: ${data.region_code}</h3>
                <h3>Country: ${data.country_name}</h3>
                <h3>COuntry Code: ${data.country_code}</h3>
                <h3>Postal Code: ${data.postal}</h3>
                <h3>Latitude: ${data.latitude}</h3>
                <h3>Longitude: ${data.longitude}</h3>
                <h3>Timezone: ${data.timezone}</h3>
                <h3>Currency: ${data.currency}</h3>
                <h3>Country area: ${data.country_area}</h3>
                <h3>Country Population: ${data.country_population}</h3>
    `;
    detailsContainer.appendChild(details);
}