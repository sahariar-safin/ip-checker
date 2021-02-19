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
    details.className = 'details-container'
    details.innerHTML = `
    <h1 class="m-2">Your Ip Address: ${data.ip}</h1>
                <h3 class="m-1">Your Ip version: ${data.version}</h3>
                <h3 class="m-1">City: ${data.city}</h3>
                <h3 class="m-1">Region: ${data.region}</h3>
                <h3 class="m-1">Region COde: ${data.region_code}</h3>
                <h3 class="m-1">Country: ${data.country_name}</h3>
                <h3 class="m-1">COuntry Code: ${data.country_code}</h3>
                <h3 class="m-1">Postal Code: ${data.postal}</h3>
                <h3 class="m-1">Latitude: ${data.latitude}</h3>
                <h3 class="m-1">Longitude: ${data.longitude}</h3>
                <h3 class="m-1">Timezone: ${data.timezone}</h3>
                <h3 class="m-1">Currency: ${data.currency}</h3>
                <h3 class="m-1">Country area: ${data.country_area}</h3>
                <h3 class="m-1">Country Population: ${data.country_population}</h3>
    `;
    detailsContainer.appendChild(details);
}