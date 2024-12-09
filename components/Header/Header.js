import "./header.css";

const template = () => `
<h1>My Pinterest</h1>
<input type="text" id="searchInput" placeholder="Cats, Buildings, Landscapes..." />
<button id="searchBtn">Search</button>
`;

const Header = () => {
  document.querySelector("header").innerHTML = template();
};

export default Header;
