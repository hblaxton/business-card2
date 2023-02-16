import { LitElement, html, css } from 'lit';
const tree = new URL('../assets/tree.jpg', import.meta.url).href;
export class BusinessCard2 extends LitElement {
  static get properties() {
    return{
      name: {
        type: String,
        reflect: true
      },
      descript:{
        type: String,
      }
    }
   
  };

  static get styles(){
    return css`
    .wrapper {
  width: 350px;
  height: 750px;
  border: 2px solid black;
  display: inline-flex;
  background-color: green; 
}

.img {
  padding: 20px;
  width: 300px;
text-align:center; 
}

.header {
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
}

.header h3:hover {
  font-style: italic;
  font-size: 1.1em;
}

.header h3,
.header h4 {
  transition: .3s ease-in-out all;
  margin: 10px;
  font-style: normal;
}

.buttons button:focus,
.buttons button:hover {
  background-color: rgba(200,0,50,.5);
}

.buttons button:active {
  background-color: rgba(50,0,200,.5);
}

.buttons {
  display: block;
}

button {
  padding: 12px;
  font-size: 25px;
}

details {
  margin-left: 24px;
  padding: 20px;
}
.details summary {
  font-size: 20px;
  font-weight: bold;
}


@media only screen and (max-width: 1200px){
  .wrapper {
    background-color: pink;
  }
}
@media only screen and (max-width: 600px){
  .wrapper {
    background-color: purple;
  }
}
@media only screen and (max-width: 425px){
  .wrapper {
    font-weight: normal;
  }
  .wrapper .header h3 {
    font-size: 12px;
  }
  .wrapper .header h4 {
    font-size: 10px !important;
  }
  details {
    display: none;
  }
}
`;
  }
  constructor() {
    super();
    this.name = 'Landscaping business';
    this.descript = 'Such an amazing business';
  }

  render() {
    return html`
 

<div class="wrapper">
<div class="container">
  <img class="img" src="${tree}">
  <div class="header">
    <h3>${this.name}</h3>
    <h4>${this.descript}</h4>
  </div>
  <details class="details">
    <summary>What we do:</summary>
    <div>
      <ul>
        <li>Cut grass.</li>
        <li>Make your lawn pretty :)</li>
       </ul>
    </div>
    </details>
    </div>
</div>

    `;
  }
}

customElements.define('business-card2', BusinessCard2);
