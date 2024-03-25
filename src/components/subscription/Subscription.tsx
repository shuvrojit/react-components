import NikeShoe from "./assets/shoe-nike.jpg";
import "./Subscription.css";

const Subscription = () => {
  return (
    <div className="subscription">
      <img id="nike-shoe" src={NikeShoe} alt="Nike Shoe" />
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
