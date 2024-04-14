// import NikeShoe from "./assets/shoe-nike.jpg";
// decided to get imageurl from cloud
import "./Subscription.css";

const Subscription = () => {
  return (
    <div className="subscription">
      <img
        id="nike-shoe"
        src="https://i.ibb.co/0QD3Ncm/shoe-nike.jpg"
        alt="Nike Shoe"
      />
      <div className="subscription__container">
        <h1>
          Subscribe and
          <br /> get 15% off
        </h1>
        <p>
          Join today to get a special welcome offer and more offers in your
          inbox.
        </p>
        <div className="subscription__form">
          <input type="email" placeholder="ENTER YOUR EMAIL" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
