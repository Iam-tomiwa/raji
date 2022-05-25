import Layout from "components/Layout";
import Projects from "components/Projects";
import Image from "next/image";
import {ProjectType} from "pages";

function ProjectsPage({projects}: {projects: ProjectType[]}) {
  return (
    <Layout>
      <Projects projects={projects} />
      <footer className="text-center pt-16 pb-4">
        <p>
          Design Inspired By <a href="https://jacekjeznach.com/">Jack</a> ,
          &copy; {new Date().getFullYear()}{" "}
        </p>
      </footer>
    </Layout>
  );
}

export default ProjectsPage;

export const getStaticProps = async () => {
  let res = require("projects.json");
  let {projects} = res;

  return {
    props: {
      projects,
    },
  };
};
