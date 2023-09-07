<link rel="stylesheet" href="/src/App.css" />;
function HomePage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2">
          <div className="card">
            <div className="card-header">
              <h3>React</h3>
            </div>
            <div className="card-body">
              <img className="homeimg" src="/img/logo192.png" alt="" />
              <p className="textt">
                React es una librería Javascript de código abierto diseñada para
                crear interfaces de usuario con el objetivo de facilitar el
                desarrollo de aplicaciones en una sola página.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
