// get last update
const renderLastUpdates = (lastUpdate) => {
  const lastUpdatesElement = document.querySelector('.update');
  const lastUpdateIndo = (date) => {
    const d = new Date(date);
    const monthIndo = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    return `${d.getDate()} ${monthIndo[d.getMonth()]} ${d.getFullYear()} pukul ${d.getHours()}:${d.getMinutes()} WIB`;
  };

  lastUpdatesElement.innerHTML = `
    <span>Terakhir Diperbarui: ${lastUpdateIndo(lastUpdate)}</span>
  `;
};

const showResponseMessage = (message = 'Check your internet connection') => {
  // eslint-disable-next-line no-alert
  alert(message);
};

const lastUpdates = () => {
  fetch('https://covid19.mathdro.id/api')
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderLastUpdates(responseJson.lastUpdate);
      }
    })
    .catch((error) => {
      showResponseMessage(error);
    });
};

lastUpdates();
