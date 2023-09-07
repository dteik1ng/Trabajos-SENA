<link rel="stylesheet" href="/src/App.css" />;
function AboutPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2">
          <div className="card">
            <div className="card-header">
              <h3>About</h3>
            </div>
            <div className="card-body">
              <img className="aboutimg" src="/img/carrr.jpg" alt="" />
              <h4>Crear y anidar componentes</h4>
              <p>
                Las aplicaciones de React están hechas a partir de componentes.
                Un componente es una pieza de UI (siglas en inglés de interfaz
                de usuario) que tiene su propia lógica y apariencia.
              </p>
            </div>
            <hr />
            <div className="card-body">
              <img className="aboutimg" src="/img/imga.jpg" alt="" />
              <h4>Escribir marcado con JSX</h4>
              <p>
                La sintaxis de marcado que viste arriba se llama JSX. Es
                totalmente opcional, pero la mayoría de los proyectos de React
                usan JSX por la comodidad que ofrece.
              </p>
            </div>
            <hr />
            <div className="card-body">
              <img className="aboutimg" src="/img/imggg.jpg" alt="" />
              <h4>Renderizado condicional </h4>
              <p>
                En React, no hay una sintaxis especial para escribir
                condicionales. En cambio, usarás las mismas técnicas que usas al
                escribir código regular de JavaScript.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
