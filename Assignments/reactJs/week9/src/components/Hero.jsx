export default function Hero(props){

    return (
        <div className="container-fixed container-res gap-4">
        <div className="row hero gap-3">
          <div className="wrapper-lg">
            <div className="col-2">
              <div className="hero-content">
                <h1>{props.title}</h1>
                <span>{props.subtitle}</span>
                <div className="send-btn">
                  <form>
                    <input type="text" placeholder="&#128231 Enter your email" />
                    <button className="normal-btn btn-primary button-primary">Book a call</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col img-fixed">
            <img src="assets/images/header-img.png" className="img-xxl" />
          </div>
        </div>
      </div>

    );
}