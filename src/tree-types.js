import { LitElement, html, css } from 'lit';
import "./business-card2.js";

export class TreeTypes extends LitElement{
    static get tag(){
        return 'tree-types';
    }

        static get propeties(){
        return {
            types: {type: Array},
            treeName: {type: String},
            
        }
    }
    constructor() {
        super();
        this.types = [];
        this.treeName = 'Spruce';
        this.updateType();
    }
    async updateType() { 
        const adress = new URL('../api/type', import.meta.url).href;
        fetch(adress).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return[];
        })
        .then((data) => {
            this.types = data;

        });
        console.log(data);
        }
        
        // Vercel Dev no wor
    static get styles() {
        return css`
        :host {
            display: block;
        }
        .wrapper {
            
            border: 2px solid black;
            display: flex;
        }
        .item {
            display: inline-flex;
        }
        `;
    }
    render() {
        return html`
        <h2>${this.treeName}</h2>
        <div class = "wrapper">
            ${this.types.map(type => html`
            <div class = "item" >
                <business-card2 image="${type.image}" name="${type.name}" descript="${type.descript}" detailsLabel="${type.detailsLabel}"></business-card2>
    </div>
    `)}
    </div>
    `;
        
        }

    }
customElements.define(TreeTypes.tag, TreeTypes);