import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";
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
      },
      detailsLabel:{
        type: String,
      },
      accentColor:{
        type: String,
        reflect: true,
        attribute: "accent-color"
      },
      opened:{
        type: Boolean,
        reflect: true
      }
    }
   
  };

  static get styles(){
    return css`
    :host([accent-color="blue"]) .wrapper{
      background-color: var(--business-card-accent-color, blue);
      color: white;
    }
    :host([accent-color="yellow"]) .wrapper{
      background-color:  var(--business-card-accent-color, yellow);
      color: white;
    }
    :host([accent-color="pink"]) .wrapper{
      background-color:  var(--business-card-accent-color, pink);
      color: white;
    }
    :host([accent-color="orange"]) .wrapper{
      background-color:  var(--business-card-accent-color, orange);
      color: white;
    }
    :host([accent-color="red"]) .wrapper{
      background-color:  var(--business-card-accent-color, red);
      color: white;
    }
    :host([accent-color="green"]) .wrapper{
      background-color:  var(--business-card-accent-color, green);
      color: white;
    }
    .wrapper {
  width: 375px;
  height: auto;
  border: 5px outset lightgreen;
  display: inline-flex;
  background-color: green; 
}

.img {
width: 400px;
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
  color: darkgreen;
  font-family: "Copperplate", fantasy;
  -webkit-text-stroke: 0.5px lightgreen;
  font-size: 30px;
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
  padding-top: 5px;
  padding-bottom: 12px;
  color: white;
}
.details summary {
  font-size: 20spx;
  font-weight: bold;
}


@media only screen and (max-width: 1200px){
  .wrapper {
    background-color: darkslategray;
  }
}
@media only screen and (max-width: 600px){
  .wrapper {
    background-color: pink;
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
    this.detailsLabel = 'What we do:';
    this.accentColor = null;
    this.opened = false;
  }

  toggleEvent(e){
    const state = this.shadowRoot.querySelector('details').getAttribute('open') === '' ? true : false;
    this.opened = state;
    console.log(this.opened);
  }
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName)=> {
        if (propName === 'opened'){
          this.dispatchEvent(new CustomEvent('opened-changed', 
          { 
            composed: true,
            bubbles: true,
            cancelable: false,
            detail: 
            { value: this[propName] } 
          }));
          console.log(`${propName} changed. oldValue: ${oldValue}`);
        }
        
    });
  }

  render() {
    return html`
 

<div class="wrapper">
<div class="container">
<!-- //  <img class="img" src="${tree}"> -->
<meme-maker image-url="https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg" top-text="Super cool tree" bottom-text="We love trees!">
</meme-maker>
  <div class="header">
    <h3>${this.name}</h3>
    <h4>${this.descript}</h4>
  </div>
  <details class=${this.detailsLabel} .open="${this.opened}" @toggle="${this.toggleEvent}">
    <summary>What we do:</summary>
    <slot> </slot>
    </details>
    </div>
</div>

    `;
  }
}

customElements.define('business-card2', BusinessCard2);
