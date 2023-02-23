import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Customization" img="card1.png" text="Work with our craftsmen to create a unique piece that fits your space and style perfectly. " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Care and maintenance" img="card2.png" text="Keep your furniture beautiful for years with our expert cleaning and conditioning services. " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Eco-friendly practices" img="card3.png" text="Choose Wood Bliss for sustainable, planet-friendly products crafted with responsible materials and finishes. " />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
