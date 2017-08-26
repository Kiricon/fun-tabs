/**
 * The template that is used for the shadow root for every copy of your element,
 * which houses the styles and layout for the element.
 */
const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            display: table;
            border: solid 1px #aaa;
        }

        ::slotted(fun-tab) {
            opacity: 0.6;
            transition: opacity ease 0.3s;
            cursor: pointer;
            padding: 10px;
            display: inline-block;
        }

       ::slotted(fun-tab:hover) {
            opacity: 1;
        }

        div {
            height: 2px;
            background-color: var(--fun-tabs-color, var(--secondary-color, #673AB7));
            transition: all ease 0.3s;
        }
    </style>
    <slot></slot>
    <div></div>
`;

/**
 * This is the class that controls each instance of your custom element.
 */
class FunTabs extends HTMLElement {
    /**
     * Part of the custom element spec. Returns an array of strings that are 
     * the names of attributes that this element observes/listens to.
     * 
     * @returns {Array} an array of strings, each of which representing an 
     *  attribute.
     */
    static get observedAttributes() {
        return ['selected'];
    };

    constructor() {
        super();

        // create shadow root for any children context
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // add any initial variables here

        this.tabWidth = 0;
    }

    /**
     * Part of the custom element spec. Called after your element is attached to
     * the DOM. Do anything related to the element or its children here in most
     * cases.
     */
    connectedCallback() {
        let tabs = this.querySelectorAll('fun-tab');
        let self = this;
        for(let i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener('click', () => {
                self.changeSelectedTab(i);
            });
        }
        
        this.tabWidth = this.offsetWidth / tabs.length;
        this.div = this.shadowRoot.querySelector('div');
        this.div.style.width = `${this.tabWidth}px`;
    }

    /**
     * Part of the custom element spec. Called after your element is remove from
     * the DOM. Disconnect any listeners or anything else here.
     */
    disconnectedCallback() {

    }

    /**
     * Part of the custom element spec. Called when one of the observed
     * attributes changes, either via setAttribute() or with the attribute being
     * manually set in the HTML.
     * 
     * @param {String} name the name of the attribute that changed
     * @param {Mixed} oldValue the previous value of the attribute
     * @param {Mixed} newValue the new value of the attribute
     */
    attributeChangedCallback(name, oldValue, newValue) {
        // respond to a changed attribute here
        console.log(name+" "+newValue);
    }

    changeSelectedTab(i) {
        this.setAttribute('selected', i);
        this.div.style.marginLeft = `${this.tabWidth*i}px`;
    }
}

customElements.define("fun-tabs", FunTabs);
