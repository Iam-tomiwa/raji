import PersonImg from "public/images/person.png";
import Image from "next/image";
import {Fade} from "pages";

function About() {
  return (
    <section id="about">
      <div className="fake-big">About</div>
      <Fade cascade bottom>
        <h2 className="heading text-primary line-heading">About Me!</h2>
      </Fade>
      <Fade cascade bottom>
        <div className="flex justify-between items-center w-full flex-wrap mt-10 lg:mt-20 gap-5">
          <div className="max-w-lg">
            <p>
              I am Raji Mustapha, a front-end web developer with excellent eyes
              for details. skilled with 21st century technical as well as the
              soft skills required to meet job demands. I am an astute learner,
              team player and client-satisfaction oriented individual.
            </p>
            <br />
            <p>
              Also a first class 300 level student of Civil Engineering at the
              University of Lagos.
            </p>
            <br />
            <div className="flex justify-start flex-wrap items-end font-semibold mb-3 space-y-3">
              <h3 className="text-primary mr-4">Skills:</h3>
              {"HTML, CSS3, SCSS, JavaScript, TypeScript, Redux, ReactJS"
                .split(", ")
                .map(el => (
                  <p className="mr-4" key={el}>
                    {el}
                  </p>
                ))}
            </div>
            <button className="btn">
              <span>Download Resume</span>
            </button>
          </div>
          <div className="m-auto w-full flex justify-end md:w-1/2 mt-5 lg:mt-0">
            <Image src={PersonImg} placeholder="blur" alt="Raji Mustapha" />
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default About;
