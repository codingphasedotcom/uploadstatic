import {LitElement, html} from '@polymer/lit-element';

class CounterComp extends LitElement{
  constructor(){
    super()
    this.total = {
      number: 0
    }
    this.clickMethod = this.clickMethod.bind(this)
  }

  static get properties(){
    return {
      total: Object,
      color: String,
      background: String,
      fontWeight: String
    }
  }

  clickMethod(event){
    console.log(event)
    console.log("I just clicked a button ")
  }

  _firstRendered(){
    const addBtn = this._root.getElementById('add-btn')
    addBtn.addEventListener('click', e => {
      console.log(`current state: ${this.total.number}`)
      this.total.number += 1
      console.log(`New state: ${this.total.number}`)
      this._requestRender()
                                          })

    const subBtn = this._root.getElementById('sub-btn')
    subBtn.addEventListener('click', e => {
      console.log(`current state: ${this.total.number}`)
      this.total.number -= 1
      console.log(`New state: ${this.total.number}`)
      this._requestRender()
    })
  }





  _render({color, background, fontWeight}) {
    return html`
<style>
#add-btn{
background: blue;
padding: 15px 25px;
display: inline-block;
color: white;
}
#sub-btn{
background: black;
padding: 15px 25px;
display: inline-block;
color: white;
}
</style>
<div class="total">${this.total.number}</div>
<div id="add-btn">+</div>
<div id="sub-btn">-</div>
    `
  }
}

customElements.define('counter-comp', CounterComp)
