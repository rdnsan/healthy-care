class About extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="about" id="about">
        <div class="about-text" data-aos="fade-up" data-aos-duration="1000">
          <h2>
            Mengapa itu penting <br> 
            <span>Untuk Tetap Dirumah</span>
          </h2>
          <img src="./doctor-woman.svg" alt="Female Doctor Illustration">
        </div>
        <div class="about-list" data-aos="fade-left" data-aos-duration="1000">
          <ol>
            <li>
              <span>01</span>
              <p>
                Covid-19, yang sekarang menjadi pandemi global yang berkembang pesat. Jumlah kasus yang 
                dikonfirmasi di seluruh dunia telah melebihi 135.000.000 karena penyebaran virus yang cepat.
              </p>
            </li>
            <li>
              <span>02</span>
              <p>
                Covid-19, menyebar dengan sangat mudah, jauh lebih mudah daripada banyak penyakit 
                biasa lainnya yang kita tangani secara teratur. Itulah yang membuatnya sangat berbahaya.
              </p>
            </li>
            <li>
              <span>03</span>
              <p>
                Tindakan terbaik adalah tinggal di rumah mencegah penyebaran penyakit serta rumah sakit 
                kewalahan dengan pasien yang seharusnya tidak berada di sana.
              </p>
            </li>
            <li>
              <span>04</span>
              <p>
                Saat ini, sudah ada vaksin yang disetujui untuk Covid-19
              </p>
            </li>
          </ol>
        </div>
      </div>
    `;
  }
}

customElements.define('hc-about', About);
