class Banner extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="banner">
        <div class="banner-text" data-aos="fade-right" data-aos-duration="1000">
          <h2>Data Global COVID-19</h2>
          <div class="confirmed"></div>
          <div class="recovered"></div>
          <div class="deaths"></div>
          <div class="last-update"></div>
        </div>
        <div class="banner-img" data-aos="fade-up" data-aos-duration="1000">
          <img src="./icon/report.svg" alt="Report" />
        </div>
      </div>
    `;
  }
}

customElements.define('hc-banner', Banner);
