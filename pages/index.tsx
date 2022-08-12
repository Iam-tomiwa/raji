import Head from "next/head";
import Layout from "components/Layout";
import About from "components/About";
import Contact from "components/Contact";
import Projects from "components/Projects";
export const Fade = require("react-reveal/Fade");

export type ProjectType = {
  title: string;
  imgUrl: string;
  stack: string[];
  description: string;
  link: string;
};

export default function Home({projects}: {projects: ProjectType[]}) {
  return (
    <Layout>
      <Head>
        <title>Raji Mustapha</title>
        <meta name="description" content="Raji Mustapha portfolio" />
        <meta name="keywords" content="Raji, mustapha, frontend developer, " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        className="flex items-center"
        style={{minHeight: "calc(100vh - 90px)"}}
      >
        <div>
          <Fade bottom>
            <div className="mb-4">
              <h1 className="heading big-heading">Hi,</h1>
              <h1 className="heading big-heading">
                I&lsquo;m <span className="text-primary letter-shadow">R</span>
                aji,
              </h1>
              <h1 className="heading big-heading">web developer</h1>
            </div>
            <p className="text-lg max-w-xl pb-2">
              I am a front-end developer with a knack for building amazing and
              interactive user experiences.
            </p>
            <a href="#contact" className="btn">
              <span className="content">Contact me</span>
            </a>
          </Fade>
        </div>
      </section>
      <About />
      <Projects showViewAllBtn projects={projects.slice(0, 5)} />
      <Contact />

      <footer className="text-center pt-16 pb-4">
        <p>
          Design Inspired By <a href="https://jacekjeznach.com/">Jack</a> ,
          &copy; {new Date().getFullYear()}{" "}
        </p>
      </footer>
    </Layout>
  );
}

export const getStaticProps = async () => {
  let res = require("projects.json");
  let {projects} = res;

  return {
    props: {
      projects,
    },
  };
};
