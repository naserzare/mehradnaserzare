function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Made by Alireza Naserzare


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT"))), /*#__PURE__*/




    React.createElement(SocialLinks, null))));



};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" }, "Mehrad", /*#__PURE__*/

    React.createElement("strong", null, "Naserzare")), /*#__PURE__*/

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, /*#__PURE__*/

    React.createElement("span", null))))));





};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, "Musician and Composer"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, "with a Fresh Approach"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, /*#__PURE__*/
    React.createElement("span", { className: "color" }, ""), "to Sound.")), /*#__PURE__*/


    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "#projects" }, "my portfolio"), /*#__PURE__*/
    React.createElement("a", { href: "#contact", className: "cta" }, "get in touch")))));






};


/***********************
  About Component
 ***********************/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Who am I?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    // React.createElement("h4", { className: "subtitle" }, "My name is Mehrad."), /*#__PURE__*/
    React.createElement("p", null, "I’m Mehrad, a musician and composer for whom music is more than just a profession—it’s a language."), /*#__PURE__*/



    React.createElement("p", null, "Since childhood, I’ve been drawn to the world of sounds, with the piano guiding me on this journey. Along the way, I’ve developed a deep connection with other instruments like tar, tonbak, setar, and violin. Each of these instruments offers a unique world of its own, sharing different stories and emotions.")), /*#__PURE__*/






    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "What do I do?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    // React.createElement("h4", { className: "subtitle" }, "I'm a programmer."), /*#__PURE__*/
    React.createElement("p", null, "I create music and use every moment to express my feelings. My work is a reflection of who I am, and each note conveys a different emotion. I compose original music and also reinterpret pieces that inspire me."), /*#__PURE__*/




    React.createElement("p", null, "goal is to connect with you, sharing the sounds that live in my mind and heart, and hoping they resonate with yours.")), /*#__PURE__*/




))));








};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return /*#__PURE__*/(
    React.createElement("div", { className: "project" }, /*#__PURE__*/
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" }, /*#__PURE__*/
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })), /*#__PURE__*/

    React.createElement("div", { className: "project-details" }, /*#__PURE__*/
    React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) => /*#__PURE__*/
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children, /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "Download - Comingsoon", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-headphones" })), /*#__PURE__*/

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Play on SoundCloud", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));





};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
    React.createElement("div", { className: "projects-container" }, /*#__PURE__*/

    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "My Music Portfolio"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Here, you can explore the music I’ve created, as well as my personal takes on some of my favorite pieces. This is where I share my journey through sound—each composition is a reflection of my creativity and passion for music. Feel free to listen, enjoy, and connect with the stories behind the notes.")), /*#__PURE__*/


    React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/
    React.createElement(Project, {
      title: "YEARNING.",
      img: './img/yearning.jpg',
      tech: "icon",
      link: "https://soundcloud.com/mehrdad-naserzare/yearning",
      repo: "#" }, /*#__PURE__*/

    React.createElement("p", null, "“Yearning” is a dreamy solo piano composition that captures the essence of longing and introspection. With gentle melodies and emotional depth, this piece invites listeners into a reflective space where time slows and emotions surface. Perfect for moments of solitude, study, or late-night thinking."),),) /*#__PURE__*/

)));};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "contact" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("p", { className: "title" }, "Want to ", /*#__PURE__*/
    React.createElement("br", null), "contact me?"), /*#__PURE__*/


    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Please, use the form below or send an email to ",
    '', /*#__PURE__*/
    React.createElement("span", { className: "mail" }, "art", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-at at" }), "mehradnaserzare", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-circle dot" }), "ir"), ":")), /*#__PURE__*/





    React.createElement(SocialLinks, null)), /*#__PURE__*/

    React.createElement("form", { id: "contact-form", action: "#" }, /*#__PURE__*/
    React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }), /*#__PURE__*/
    React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }), /*#__PURE__*/
    React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }), /*#__PURE__*/
    React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" })))));




};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("h3", null, "THANKS FOR VISITING"), /*#__PURE__*/
    React.createElement("p", null,"Mahrad Naserzare. All rights reserved. ", "\xA9 ", new Date().getFullYear(), "This site is licensed under CC BY 4.0 International License."), /*#__PURE__*/
    React.createElement(SocialLinks, null))));



    

};




/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "social" }, /*#__PURE__*/
    React.createElement("a", {
      href: "https://twitter.com/#",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Twitter profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-twitter" })), /*#__PURE__*/

    React.createElement("a", {
      id: "profile-link",
      href: "https://soundcloud.com/mehrad-naserzare",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's SoundCloud Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-soundcloud" })), /*#__PURE__*/

    React.createElement("a", {
      href: "#",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's youtube Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-youtube" }))));



};



/***********************
  Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));