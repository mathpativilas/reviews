import React from "react";
import Reviews from "./components/Reviews";

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <Reviews />
      </section>
    </main>
  );
}

export default App;
