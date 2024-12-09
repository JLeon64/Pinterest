import "./Main.css";

const template = () => `
<h2 id="message"></h2>
<div id="showingContainer">
<select id="countInput">
  <option value="10">10</option>
  <option value="15">15</option>
  <option value="20">20</option>
  <option value="25">25</option>
  <option value="30">30</option>
</select>
<button id="showBtn">Show</button>
</div>
<ul id="results"></ul>
<div id="pageNav">
  <button id="pageDown"><img src="./pageDown.png"></button>
  <p id="page"></p>
  <button id="pageUp"><img src="./pageUp.png"></button>
</div>
`;

const Main = () => {
  document.querySelector("main").innerHTML = template();
};

export default Main;
