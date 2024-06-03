export default function Stats(props){
    return (
        <div className="container-fixed container-res gap-4">
        <div className="wrapper-full">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-inner">
                  <div className="card-items">
                    <span className="card-item">{props.happyClients}+</span>
                    <span className="card-subtitle">Happy clients</span>
                  </div>
                  <div className="card-items">
                    <span className="card-item">{props.projectsCompleted}+</span>
                    <span className="card-subtitle">Projects completed</span>
                  </div>
                  <div className="card-items">
                    <span className="card-item">{props.ftSpecialties}+</span>
                    <span className="card-subtitle">Full time specialists</span>
                  </div>
                  <div className="card-items">
                    <span className="card-item">{props.awardsWon}+</span>
                    <span className="card-subtitle">Awards won</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}