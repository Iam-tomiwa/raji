import Image from "next/image";
import flyo from "@public/images/flyo.png";
import {Fade} from "pages";

function Projects() {
  return (
    <section id="works">
      <>
        <Fade bottom cascade>
          <h2 className="heading text-primary line-heading">My Portfolio</h2>
          <div style={{top: "-3%"}} className="fake-big left">
            Portfolio
          </div>
          <p className="max-w-lg">
            I curated a list of recent projects I&lsquo;ve worked on. I&lsquo;ve
            done them all together with amazing people.
          </p>
        </Fade>
        <div>
          {Array(4)
            .fill("")
            .map((el, i) => (
              <div
                key={"project_" + i}
                className="flex flex-col-reverse lg:flex-row items-center justify-between w-full lg:space-x-10 py-6 h-max"
              >
                <div className="w-full pt-8 lg:pt-0 lg:w-[35%]">
                  <Fade bottom>
                    <h3 className="text-3xl font-semibold">Title</h3>
                    <div className="flex justify-start flex-wrap items-end font-semibold mb-3 space-y-3">
                      {"HTML, CSS3, SCSS".split(", ").map(el => (
                        <span className="mr-4 text-primary" key={el}>
                          {el}
                        </span>
                      ))}
                    </div>
                    <p className="py-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      At quasi pariatur voluptas odit libero aperiam sed eveniet
                      sint, facere blanditiis officia consequatur explicabo
                      veritatis quibusdam! Repellat dolorum sint explicabo illo
                      unde, laudantium excepturi sunt non, in minima alias quia
                      fugit!
                    </p>
                    <a href="#" className="btn">
                      <span>View Project</span>
                    </a>
                  </Fade>
                </div>
                <Fade bottom>
                  <div className="img-wrapper">
                    <Image
                      src={"/images/ules.png"}
                      // height="100%"
                      width={"600px"}
                      height={"500px"}
                      alt="portfolio"
                      className="max-w-[60%]"
                    />
                  </div>
                </Fade>
              </div>
            ))}
        </div>
      </>
    </section>
  );
}

export default Projects;
