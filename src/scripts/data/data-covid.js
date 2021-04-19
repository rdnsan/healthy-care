function showdata() {
  const baseUrl = 'https://covid19.mathdro.id/api/countries';
  const targets = document.getElementById('countryCode').value;

  const digitSeparate = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // get confirmed data
  const renderConfirmed = (confirmed) => {
    const confirmedElement = document.querySelector('.conf');

    confirmedElement.innerHTML = `
      <div class="counter-value">${digitSeparate(confirmed.value)}</div>
      <div class="counter-label text-confirmed">Terkonfirmasi</div>
    `;
  };

  // get recovered data
  const renderRecovered = (recovered) => {
    const recoveredElement = document.querySelector('.rec');
    recoveredElement.innerHTML = `
      <div class="counter-value">${digitSeparate(recovered.value)}</div>
      <div class="counter-label text-recovered">Sembuh</div>
    `;
  };

  // get deaths data
  const renderDeaths = (deaths) => {
    const deathsElement = document.querySelector('.dth');
    deathsElement.innerHTML = `
      <div class="counter-value">${digitSeparate(deaths.value)}</div>
      <div class="counter-label text-deaths">Meninggal</div>
    `;
  };

  const showResponseMessage = (message = 'Check your internet connection') => {
    // eslint-disable-next-line no-alert
    alert(message);
  };

  const confirmed = () => {
    fetch(`${baseUrl}/${targets}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderConfirmed(responseJson.confirmed);
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  const recovered = () => {
    fetch(`${baseUrl}/${targets}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderRecovered(responseJson.recovered);
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  const deaths = () => {
    fetch(`${baseUrl}/${targets}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderDeaths(responseJson.deaths);
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  confirmed();
  recovered();
  deaths();
}

export default showdata;
