
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sonu Kumar </span>
            from <span className="purple"> Jharkhand, India.</span>
            <br />
            I am currently a Fourth Year Student At Lovely Professional University.
            <br />
            I have completed my 12th from Inter Science College , Hazaribagh.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            &quot;Strive to build things that make a difference!&quot;{" "}
          </p>
          <footer className="blockquote-footer">Sonu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
