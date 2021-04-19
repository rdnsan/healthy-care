function select() {
// get list country
  const renderAllCountry = (countries) => {
    const listCountryElement = document.querySelector('.select-box');
    listCountryElement.innerHTML = `
      <option value="">Silahkan pilih negara</option>
    `;

    countries.forEach((country) => {
      listCountryElement.innerHTML += `
        <option value="${country.iso3}">${country.name}</option>
      `;
    });
  };

  const showResponseMessage = (message = 'Check your internet connection') => {
    // eslint-disable-next-line no-alert
    alert(message);
  };

  const countryList = () => {
    const xhr = new XMLHttpRequest();

    // eslint-disable-next-line func-names
    xhr.onload = function () {
      const responseJson = JSON.parse(this.responseText);
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderAllCountry(responseJson.countries);
      }
    };

    // eslint-disable-next-line func-names
    xhr.onerror = function () {
      showResponseMessage();
    };

    xhr.open('GET', 'https://covid19.mathdro.id/api/countries');
    xhr.send();
  };

  // call list country
  countryList();
}

export default select;
