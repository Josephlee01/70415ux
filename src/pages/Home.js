import qr from "../img/qr.png"

const Home = () => {
  return (
    <div className="home">
      <h2>WIC COFFEE</h2>
      <p>World best coffee</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        veritatis voluptate nemo quo possimus cum dolor quisquam obcaecati,
        cupiditate a voluptas magni rem similique amet eos earum, vel
        praesentium magnam temporibus minus quod incidunt sequi soluta. Aliquam
        modi, illum, optio ipsam est, deleniti suscipit dolorem impedit dolorum
        laudantium ullam laborum.
      </p>
      <p>
        <img src={qr} width={200} height={200} alt="qr code" />
      </p>
      <p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc_1DjIR8hgx3qQOQzTkgpL6h2ZYrR2vrKpXfabHsQON_P03g/viewform?usp=sf_link"
          target="_blank"
        >
          Leave your feedback
        </a>
      </p>
    </div>
  );
};

export default Home;
