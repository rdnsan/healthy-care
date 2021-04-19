class Info extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="info-header" data-aos="fade-up" data-aos-duration="1000">
        <h2>
          Hal-hal yang bisa anda lakukan selama <br>
          <span>Karantina Virus Corona.</span>
        </h2>
      </div>
      <div class="info-cards">
        <div class="card one" data-aos="fade-up" data-aos-duration="1000">
          <img src="./movie.svg" class="card-one-img" alt="Girls with Movie Ticket" data-aos="fade-up" data-aos-duration="1100">
          <div class="card-bg-one">
            <div class="card-content">
              <h3>Menonton Film</h3>
              <p>Tonton semua Acara TV atau Film favorit Anda selama Karantina ini!</p>
            </div>
          </div>
        </div>
    
        <div class="card two" data-aos="fade-up" data-aos-duration="1300">
          <img src="./learn.svg" class="card-two-img" alt="Learn Illustration" data-aos="fade-up" data-aos-duration="1200">
          <div class="card-bg-two">
            <div class="card-content">
              <h3>Pelajari Keterampilan Baru</h3>
              <p>Coba resep baru, Menulis blog atau Pelajari bahasa baru selama Karantina ini!</p>
            </div>
          </div>
        </div>
    
        <div class="card three" data-aos="fade-up" data-aos-duration="1600">
          <img src="./video-call.svg" class="card-three-img" alt="Video Call" data-aos="fade-up" data-aos-duration="1300">
          <div class="card-bg-one">
            <div class="card-content">
              <h3>Video Call</h3>
              <p>Bersenang-senang di video call dengan teman atau keluarga Anda selama Karantina ini!</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('hc-info', Info);
