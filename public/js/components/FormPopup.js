import {LitElement, html} from '/js/lit-element.js?module';
import ContactsList from '/js/components/ContactsList.js';
import FavoritesList from '/js/components/FavoritesList.js';

export default class FormPopup extends LitElement{
  constructor(){
    super()
    this.total = {
      number: 0
    }
  }

  static get properties(){
    return {
      total: Object
    }
  }


  _firstRendered(){

  }

  _render({color, background, fontWeight}) {
    return html`
<style>
  @import '/css/global.css';
  .form-popup{
    background: #2b304c;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  form{
    width: 400px;
    background: white;
    padding: 20px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }
  h2{
    font-size: 1.4rem;
    font-weight: 500;
    grid-column: 1/5;
  }
  .form-group{
    padding: 0;
    position: relative;
  }
  label{
    font-size: .7rem;
    background: white;
    position: absolute;
    top: -5px;
    display: inline-block;
  }
  input[type="text"]{
    padding: 10px;
    display: block;
    width: 100%;
  }
  .first-name{
    grid-column: 1/3
  }
  .last-name{
    grid-column: 3/5
  }
  .address-1{
    grid-column: 1/5
  }
  .address-2{
    grid-column: 1/5
  }
  .city{
    grid-column: 1/3;
  }
  .button{
    justify-self: end;
    grid-column: 4/5;
  }
  .button button{
    cursor: pointer;
    padding: 10px 25px;
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 5px;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 1);
    color: white;
    background: rgb(59,103,158); /* Old browsers */
    background: -moz-linear-gradient(top, rgba(59,103,158,1) 0%, rgba(43,136,217,1) 50%, rgba(32,124,202,1) 51%, rgba(125,185,232,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(59,103,158,1) 0%,rgba(43,136,217,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(59,103,158,1) 0%,rgba(43,136,217,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  }
</style>
<section class="form-popup">
  <form>
    <h2>Add a new contact</h2>
    <div class="form-group first-name">
      <label for="first_name">First Name</label>
      <input type="text" name="first_name">
    </div>

    <div class="form-group last-name">
      <label for="first_name">Last Name</label>
      <input type="text" name="last_name">
    </div>

    <div class="form-group address-1">
      <label for="first_name">Address #1</label>
      <input type="text" name="address_1">
    </div>

    <div class="form-group address-2">
      <label for="first_name">Address #2</label>
      <input type="text" name="address_2">
    </div>

    <div class="form-group city">
      <label for="first_name">City</label>
      <input type="text" name="city">
    </div>

    <div class="form-group state">
      <label for="first_name">State</label>
      <input type="text" name="state">
    </div>

    <div class="form-group zipcode">
      <label for="first_name">Zipcode</label>
      <input type="text" name="zipcode">
    </div>

    <div class="form-group button">
      <button type="submit">Add</button>
    </div>

  </form>
</section>
    `
  }
}

customElements.define('form-popup', FormPopup)
