import {LitElement, html} from '/js/lit-element.js?module';

export default class SideMenu extends LitElement{
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
#side-menu{
  background: #323759;
  height: 100vh;
  padding: 50px 25px;

}
.logo{
  text-align: center;
}
.logo img{
  width: 50px;
}
.title{
  font-weight: 700;
  color: #ccced7;
  margin: 1rem 0;
}
#side-menu nav a{
  color: #ccced7;
  text-decoration: none;
  text-transform: Capitalize;
  display: block;
  padding: 10px 10px 10px 0;
}
#side-menu nav a span.icon{
  padding: 10px 10px 10px 0;
}

</style>
  <section id="side-menu">
    <div class="logo">
      <img src="http://diylogodesigns.com/blog/wp-content/uploads/2016/04/google-logo-icon-PNG-Transparent-Background.png">
    </div>
    <div class="menu">
      <div class="title">Contacts</div>
      <nav>
        <a href="#"><span class="icon"> + </span> Add Contact</a>
        <a href="#"><span class="icon"> + </span> Add Contact</a>
        <a href="#"><span class="icon"> + </span> Add Contact</a>
        <a href="#"><span class="icon"> + </span> Add Contact</a>
      </nav>
    </div>
  </section>
    `
  }
}

customElements.define('side-menu', SideMenu)
