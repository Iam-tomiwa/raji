import Image from "next/image";
import Link from "next/link";
import {Fade, ProjectType} from "pages";

function Projects({
  projects,
  showViewAllBtn,
}: {
  projects: ProjectType[];
  showViewAllBtn?: boolean;
}) {
  return (
    <section id="works">
      <>
        <Fade bottom>
          <h2 className="heading text-primary line-heading">My Portfolio</h2>
          <div style={{top: "-3%"}} className="fake-big left">
            Portfolio
          </div>
          <div className="flex justify-between items-center">
            <p className="max-w-lg">
              I curated a list of recent projects I&lsquo;ve worked on.
              I&lsquo;ve done them all together with amazing people.
            </p>
            {showViewAllBtn && (
              <Link href={"/projects"}>
                <a className="btn">
                  <span>View All</span>
                </a>
              </Link>
            )}
          </div>
        </Fade>
        <div>
          {projects.map((item, i) => (
            <div
              key={"project_" + i}
              className="flex flex-col-reverse lg:flex-row items-center justify-between w-full lg:space-x-10 py-6 h-max"
            >
              <div className="w-full pt-8 lg:pt-0 lg:w-[35%]">
                <Fade bottom>
                  <h3 className="text-3xl font-semibold">{item.title}</h3>
                  <div className="flex justify-start flex-wrap items-end font-semibold mb-3 space-y-3">
                    {item.stack.map(el => (
                      <span className="mr-4 text-primary" key={el}>
                        {el}
                      </span>
                    ))}
                  </div>
                  <p className="py-4">{item.description}</p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.link}
                    className="btn"
                  >
                    <span>View Project</span>
                  </a>
                </Fade>
              </div>
              <Fade bottom>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="img-wrapper w-fit h-fit bg-[#111111] flex items-center justify-center"
                >
                  <Image
                    src={item.imgUrl}
                    width={"600px"}
                    height={"500px"}
                    alt="portfolio"
                    className="max-w-[60%] object-contain"
                  />
                </a>
              </Fade>
            </div>
          ))}
        </div>
      </>
    </section>
  );
}

export default Projects;
