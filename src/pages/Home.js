import React from 'react';

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <div className="content is-medium">
                  <h1 className="title">Bienvenido!</h1>
                  <p>Registrate en nuestro sistema para poder cargar tu solicitud de insumos que nosotros nos encargaremos de derivarla a la organización correspondiente.</p>
                </div>
              </div>
            </div>
          </section>
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <figure className="image is-16by9">
                <img src="https://www.camarabaq.org.co/wp-content/uploads/2020/04/3461699-min-1200x650.jpg" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
