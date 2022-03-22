import React, { Component } from "react";

import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

const Home = () => {
  // console.log("renderuje");
  return <h1>Strona startowa</h1>;
};
const News = () => <h1>Aktualnosci</h1>;
const Contact = () => <h1>Kontakt do nas </h1>;
const ErrorPage = () => <h1>Strona Nie Istnieje</h1>;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink to="/" className="home_selected">
                    Start
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/news" className="news_selected">
                    Aktualnosci
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="contact_selected">
                    Kontakt
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <section>
            {/* Potrzebny jest nadrzedny element Routes oraz w przekazaniu obiektu trzeba uzyć znacznikow komponentu z zamknieciem */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              {/* Jeśli strona nie istnieje i chcemy przekazac uzytkowanikowi taka informacje zamieszczamy na koncu element Error ze sciezka wybierajaca iż jeżeli nie wybrano zadnego z elementów wskazanych w ścieżkach to jest to nie prawidłowy addres URL */}
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
