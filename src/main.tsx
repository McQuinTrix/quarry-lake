import React from "react";
import ReactDOM from "react-dom/client";
import { Binoculars, MapPin, Route, Waves } from "lucide-react";
import "./styles.css";

const notes = [
  {
    icon: Route,
    title: "Laptop-first",
    body: "A wide map canvas before worrying about small screens.",
  },
  {
    icon: MapPin,
    title: "Personal layer",
    body: "Markers and labels can become favorite spots, loops, and memories.",
  },
  {
    icon: Waves,
    title: "Quarry focused",
    body: "Keep the site centered on the lakes instead of the whole city.",
  },
];

function App() {
  return (
    <main className="shell">
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="/">
          <span className="brand-mark">QL</span>
          <span>Quarry Lakes</span>
        </a>
        <div className="nav-links">
          <a href="#map">Map</a>
          <a href="#notes">Notes</a>
          <a href="#plan">Plan</a>
        </div>
      </nav>

      <section className="hero" id="map" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Fremont, CA</p>
          <h1 id="hero-title">A personal map of Quarry Lakes.</h1>
          <p>
            First pass for a laptop-only site: one strong map view, a few personal
            notes, and room to figure out the design direction.
          </p>
        </div>

        <figure className="map-stage">
          <img
            src="/assets/quarry-lakes-exact-funky.svg"
            alt="Styled map of Quarry Lakes and surrounding trails"
          />
          <figcaption>
            Styled base map placeholder. The next step is replacing generic notes
            with your actual spots.
          </figcaption>
        </figure>
      </section>

      <section className="note-grid" id="notes" aria-label="Project notes">
        {notes.map((note) => {
          const Icon = note.icon;
          return (
            <article className="note-card" key={note.title}>
              <Icon aria-hidden="true" size={24} strokeWidth={2.2} />
              <h2>{note.title}</h2>
              <p>{note.body}</p>
            </article>
          );
        })}
      </section>

      <section className="plan" id="plan" aria-labelledby="plan-title">
        <Binoculars aria-hidden="true" size={28} strokeWidth={2.2} />
        <div>
          <h2 id="plan-title">Next design pass</h2>
          <p>
            Decide the exact mood, then add 5-8 real markers: where you enter,
            where you walk, where the view is best, and what makes the place yours.
          </p>
        </div>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
