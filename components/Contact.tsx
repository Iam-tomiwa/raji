import { Fade } from "pages";
import { Icon } from "ts-react-feather-icons";
import Input, { TextArea } from "./Input";

function Contact() {
  return (
    <section id="contact">
      <Fade bottom cascade>
        <div className="fake-big left">Contact</div>
        <h2 className="heading text-primary line-heading">Contact </h2>
      </Fade>
      <div className="flex justify-between items-stretch flex-wrap">
        <Fade bottom>
          <div className="lg:w-[47%] w-full  pt-4 flex flex-col justify-between">
            <p>
              Reach out to me through these social handles or fill the form and
              I&apos;ll get back to you ASAP.
            </p>
            <div className="my-6">
              <a href="#" className="contact-icon-wrap">
                <Icon name="phone" />
                <p>08154050552</p>
              </a>
              <a href="#" className="contact-icon-wrap">
                <Icon name="mail" />
                <p>rajimustapha30@mail.com</p>
              </a>
              <a href="#" className="contact-icon-wrap">
                <Icon name="map-pin" />
                <p>Lagos, Nigeria</p>
              </a>
            </div>
            <div className="contact-icons">
              <a href="#" className="icon">
                <Icon name="twitter" size={20} />
              </a>
              <a href="#" className="icon">
                <Icon name="instagram" size={20} />
              </a>
              <a href="#" className="icon">
                <Icon name="linkedin" size={20} />
              </a>
              <a href="#" className="icon">
                <Icon name="github" size={20} />
              </a>
            </div>
          </div>
        </Fade>
        <form className="lg:w-1/2 w-full mt-4 lg:mt-0" action="">
          <div className="form-group-wrap">
            <Fade bottom cascade>
              <Input type={"text"} label="First Name" placeholder="John" />
              <Input type={"text"} label="Last Name" placeholder="Doe" />
            </Fade>
          </div>
          <Fade bottom cascade>
            <TextArea placeholder="Enter Summary..." label="Message" />
            <button
              style={{ maxWidth: "unset", marginTop: "1.5rem" }}
              className="btn"
            >
              <span>Submit</span>
            </button>
          </Fade>
        </form>
      </div>
    </section>
  );
}

export default Contact;
