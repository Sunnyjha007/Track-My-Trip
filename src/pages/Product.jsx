import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About TrackMyTrip.</h2>
          <p>
            At TrackMyTrip we are passionate about helping people to explore the
            world. Our aim is to keep track of your visited parts of the world.
          </p>
          <p>
            Our company was founded by two friends who shared a love of travel.
            In college, we decided to follow our passion and start this page. We
            wanted to create a smooth experience for travelers.
          </p>
        </div>
      </section>
    </main>
  );
}
