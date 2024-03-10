import qr from "../img/qr.png"

const Contact = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        <img src={qr} width={200} height={200} alt="qr code" />
      </p>
    </div>
  );
};

export default Contact;
