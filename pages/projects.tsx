import Layout from "components/Layout";
import Projects from "components/Projects";
import Image from "next/image";
import { ProjectType } from "pages";

function ProjectsPage({ projects }: { projects: ProjectType[] }) {
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
  let { projects } = res;

  return {
    props: {
      projects,
    },
  };
};

// {
//   "title": "Fudi",
//   "stack": ["ReactJs", "SCSS", "Material UI"],
//   "description": "Fudi is a food/grocery delivery business. This is a website showcasing what Fudi does.",
//   "link": "https://www.fudi.ng",
//   "imgUrl": "/images/fudi.jpg"
// },
