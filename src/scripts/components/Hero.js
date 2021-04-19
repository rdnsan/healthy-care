class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hc-hero_text" data-aos="fade-up" data-aos-duration="1000">
        <h2>
          Stay Home. <span>Stay Safe.</span>
        </h2>
        <p>
          Mari kita semua bekerja sama untuk mengakhiri pandemi ini. <br>
          Bantu hentikan penyebaran.
        </p>
        <a class="btn" href="#about">Lebih Lanjut</a>
      </div>
      <div class="hc-hero_image" data-aos="fade-down" data-aos-duration="2000">
        <img src="./bg.png" alt="Pakai Masker" />
      </div>
    `;
  }
}

customElements.define('hc-hero', Hero);
