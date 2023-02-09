import { v4 as uuidv4 } from "uuid";
import Card from "./Cards";
import Carousel from "./Caroussel";
import Projects from "./projects.json";

import portolfio from '../../assets/img/portfolio.webp'
import vuelearn from '../../assets/img/vuelearn.webp'
import todoList from '../../assets/img/todoList.webp'
import raredream from '../../assets/img/raredream.webp'
import toolbox from '../../assets/img/toolbox.webp'


export default function ProjectPage() {
  
  let projectList = [];
  let project = Projects.projects

  project.forEach(function(project) {
    projectList.push(
      {
        key: uuidv4(),
        content: (
          < Card
            image={project.src}
            alt={project.alt}
            name={project.name}
            description={project.description}
            link={project.link}
          />
        )
      }
    )
    return projectList;
  })



  return (
    <div className="section projectPageSection">
      <Carousel
        cards={projectList}
        height="80vh"
        width="50vw"
        margin="0 auto"
        offset={2}
        showArrows={true}
      />
    </div>
  );
}
