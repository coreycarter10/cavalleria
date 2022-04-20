import React from "react";
import Nobleman from "./services/Nobleman";
import TheCavalleria from "./services/TheCavalleria";
import KnightinShiningArmor from "./services/KnightinShiningArmor";
import JrCavalleria from "./services/JrCavalleria";

const Home = () => {
  return (
    <div>
      <header>
        <h1>Cavalleria Fine Men's Grooming</h1>
        <button>Book Now</button>
      </header>
      <main>
        <h2>Experience the experience</h2>
        <div>
          <h2>Services</h2>
          <Nobleman />
          <TheCavalleria />
          <KnightinShiningArmor />
          <JrCavalleria />
        </div>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sapien
          quis mi pharetra pretium. Cras hendrerit ipsum nec lorem ultricies
          vestibulum. Cras vitae eros a odio tempus mollis et eu sem.
          Pellentesque sodales magna vitae turpis laoreet, id accumsan velit
          cursus. Morbi ex dui, eleifend eget enim nec, mattis vestibulum est.
          Nam rhoncus metus sit amet sem condimentum tincidunt. Maecenas
          pharetra a felis vel pellentesque. Phasellus elit lorem, fringilla
          quis dui at, suscipit blandit tellus. Suspendisse molestie tortor non
          eros hendrerit, ac iaculis diam tincidunt. In sit amet consectetur
          dui. Quisque molestie hendrerit congue. Duis hendrerit massa nec
          posuere fringilla. Nunc lobortis quam lectus, vel facilisis massa
          dignissim vel. Sed imperdiet, massa in porttitor elementum, ex elit
          dictum turpis, quis dignissim ante orci sed nisl. Suspendisse et augue
          faucibus lorem interdum vulputate vel ac erat.
        </p>
      </main>
      <footer>
        Located inside Salon Spa Studios -{" "}
        <a
          href="https://www.google.com/maps/place/6318+S+Higley+Rd,+Gilbert,+AZ+85298/@33.235759,-111.7247382,17z/data=!3m1!4b1!4m5!3m4!1s0x872a532382dedb7b:0x4fd499d5bbcfc6d5!8m2!3d33.2357545!4d-111.7225495"
          target="_blank"
        >
          6318 S Higley Road, Suite 102 Rm 10 Gilbert, Arizona 85298
        </a>
        <p>cavalleriagrooming@gmail.com</p>
        <p>(832) 948 - 5359</p>
      </footer>
    </div>
  );
};

export default Home;
