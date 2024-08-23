const apikey = '';

async function fetchExchangeData() {
    try {
        const response = await fetch('https://rest.coinapi.io/v1/exchanges', {
            headers: {
                'X-CoinAPI-Key': apikey
            }
        });
        const data = await response.json();

        const exchangeList = document.getElementById('exchange-list');

        data.slice(0, 16).forEach(exchange => {
            const listItem = document.createElement('li');
            listItem.textContent = `${exchange.name} - Cotización por hora: ${exchange.volume_1hrs_usd} - Cotización del día: ${exchange.volume_1day_usd}`;
            exchangeList.appendChild(listItem);
        });

    } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
    }
}

fetchExchangeData();
