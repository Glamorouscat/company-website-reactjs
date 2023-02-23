import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Customization" img="card1.png" text="Create a one-of-a-kind piece that perfectly fits your space and style. " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Care and maintenance" img="card2.png" text="Keep your furniture looking beautiful with our expert care and maintenance services. " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Eco-friendly practices" img="card3.png" text="Choose Wood Bliss for sustainable, eco-friendly products that protect the planet. " />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
