import "./footer.css";

const template = () => `
<p>© My Pinterest 2024 - Made with ❤️ by JLeon</p>
`;

const Footer = () => {
  document.querySelector("footer").innerHTML = template();
};

export default Footer;
