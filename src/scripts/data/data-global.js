function dataGlobal() {
  const baseUrl = 'https://covid19.mathdro.id/api';

  const digitSeparate = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // get confirmed data
  const renderGlobalConfirmed = (confirmed) => {
    const globalConfirmedElement = document.querySelector('.confirmed');
    globalConfirmedElement.innerHTML = `
      <img src="./icon/confirmed.svg" alt="Covid Illustration">
      <h3>Terkonfirmasi : <span>${digitSeparate(confirmed.value)}</span></h3>
    `;
  };

  // get recovered data
  const renderGlobalRecovered = (recovered) => {
    const globalRecoveredElement = document.querySelector('.recovered');
    globalRecoveredElement.innerHTML = `
      <img src="./icon/recovered.svg" alt="Covid Illustration">
      <h3>Sembuh : <span>${digitSeparate(recovered.value)}</span></h3>
    `;
  };

  // get deaths data
  const renderGlobalDeaths = (deaths) => {
    const globalDeathsElement = document.querySelector('.deaths');
    globalDeathsElement.innerHTML = `
      <img src="./icon/deaths.svg" alt="Covid Illustration">
      <h3>Meninggal : <span>${digitSeparate(deaths.value)}</span></h3>
    `;
  };

  // get last update
  const renderLastUpdate = (lastUpdate) => {
    const lastUpdateElement = document.querySelector('.last-update');
    const lastUpdateIndo = (date) => {
      const d = new Date(date);
      const monthIndo = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

      return `${d.getDate()} ${monthIndo[d.getMonth()]} ${d.getFullYear()} pukul ${d.getHours()}:${d.getMinutes()} WIB`;
    };

    lastUpdateElement.innerHTML = `
      <span>Terakhir Diperbarui: ${lastUpdateIndo(lastUpdate)}</span>
    `;
  };

  const showResponseMessage = (message = 'Check your internet connection') => {
    // eslint-disable-next-line no-alert
    alert(message);
  };

  const confirmedGlobal = () => {
    fetch(`${baseUrl}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderGlobalConfirmed(responseJson.confirmed);
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  const recoveredGlobal = () => {
    fetch(`${baseUrl}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderGlobalRecovered(responseJson.recovered);
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  const deathsGlobal = () => {
    fetch(`${baseUrl}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderGlobalDeaths(responseJson.deaths);
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  const lastUpdateGlobal = () => {
    fetch(`${baseUrl}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderLastUpdate(responseJson.lastUpdate);
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  confirmedGlobal();
  recoveredGlobal();
  deathsGlobal();
  lastUpdateGlobal();
}

export default dataGlobal;
