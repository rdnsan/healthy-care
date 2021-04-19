class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :host {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 0 25px;
          background-color: #2fb3e0;
          box-shadow: 0 19px 38px rgba(0,0,0,0.2);
          z-index: 1000;
        }
      
        h1 {
          font-size: 26px;
          font-weight: bold;
          margin-left: 25px;
          color:#fff;
        }

        @media only screen and (max-width: 500px) {
          :host {
            justify-content: center;
          }
        
          h1 {
            font-size: 7vw;
            margin: 0;
          }
        }
      </style>
      <h1>Healthy Care</h1>
    `;
  }
}

customElements.define('app-bar', AppBar);
