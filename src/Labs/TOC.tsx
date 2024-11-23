import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

export default function TOC() {
  const { pathname } = useLocation();

  return (
    <div>
      <ul>
        <li><Link to="/Labs">Labs</Link></li>
        <li><Link to="/Labs/Lab1">Lab 1</Link></li>
        <li><Link to="/Labs/Lab2">Lab 2</Link></li>
        <li><Link to="/Labs/Lab3">Lab 3</Link></li>
        <li><Link to="/Kanbas">Kanbas</Link></li>
        <li>
          <a 
            id="wd-github" 
            href="https://github.com/grayson6/kanbas-react-web-app" 
            target="_blank" 
            rel="noreferrer"
          >
            GitHub Repository
          </a>
        </li>
      </ul>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <a id="wd-a" href="#/Labs" className="nav-link">
            Labs
          </a>
        </li>
        <li className="nav-item">
          <a id="wd-a1" href="#/Labs/Lab1"
            className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>
            Lab 1
          </a>
        </li>
        <li className="nav-item">
          <a id="wd-a2" href="#/Labs/Lab2"
            className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>
            Lab 2
          </a>
        </li>
        <li className="nav-item">
          <a id="wd-a3" href="#/Labs/Lab3"
            className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>
            Lab 3
          </a>
        </li>
        <li className="nav-item">
          <a id="wd-a4" href="#/Labs/Lab4"
            className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}>
            Lab 4
          </a>
        </li>
        <li className="nav-item">
          <a id="wd-a5" href="#/Labs/Lab5"
            className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}>
            Lab 5
          </a>
        </li>
        <li className="nav-item">
          <a id="wd-k" href="#/Kanbas" className="nav-link">
            Kanbas
          </a>
        </li>
        <li className="nav-item">
          <a id="wd-k" href="https://github.com/jannunzi" className="nav-link">
            My GitHub
          </a>
        </li>
      </ul>
  

      <div id="wd-css-navigating-with-cards">
  <h2>
    Cards
  </h2>
  <div className="card"
       style={{ width: "18rem" }}>
    <img src="images/stacked.jpg"
         className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">
          Stacking Starship
      </h5>
      <p className="card-text">
        Stacking the most powerful rocket in history. Mars or bust!
      </p>
      <a href="#" className="btn btn-primary">
        Boldly Go
      </a>
    </div>
  </div>
</div>
</div>

  );
}