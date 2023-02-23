import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Customization" img="card1.png" text="At Wood Bliss, we understand that every home is unique, and we believe that your furniture should be too. That's why we offer a customization service, where you can work with our skilled craftsmen to design and create a piece that perfectly fits your space and style. Whether it's a one-of-a-kind coffee table or a custom bookshelf, we're committed to bringing your vision to life. " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Care and maintenance" img="card2.png" text="We're not just passionate about creating beautiful solid wood products; we're also committed to ensuring that they last a lifetime. That's why we offer care and maintenance services, including regular cleaning and conditioning, to help preserve the natural beauty of your furniture for years to come. We're always available to answer any questions you may have about how to care for your Wood Bliss pieces. " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Eco-friendly practices" img="card3.png" text="Sustainability is at the heart of everything we do at Wood Bliss. We believe that it's our responsibility to protect the environment and ensure that future generations can enjoy the natural beauty of wood just as we do today. Thatwork's why we With responsible suppliers who use sustainable forestry practices, and we use eco-friendly finishes and materials whenever possible. When you choose Wood Bliss, you can feel good knowing that you're supporting a company that cares about the planet. " />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
