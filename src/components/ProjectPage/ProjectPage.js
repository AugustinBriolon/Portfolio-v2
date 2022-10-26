import { v4 as uuidv4 } from "uuid";
import Card from "./Cards";
import Carousel from "./Caroussel";
import Projects from "./projects.json";

let project = Projects.projects
let zLawyer = project.zLawyer
let semicolon  = project.Semicolon
let raredream = project.raredream


function App() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card 
          image={zLawyer.src}
          alt="zLawyer Image"
          name={zLawyer.name}
          description={zLawyer.description}
          link={zLawyer.link}
          />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
          image={semicolon.src}
          alt="semicolon Image"
          name={semicolon.name}
          description={semicolon.description}
          link={semicolon.link}
          />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
          image={raredream.src}
          alt="raredream Image"
          name={raredream.name}
          description={raredream.description}
          link={raredream.link}
          />
      )
    }
  ];
  return (
    <div className="section projectPageSection">
      <Carousel
        cards={cards}
        height="80vh"
        width="80vw"
        margin="0 auto"
        offset={2}
        showArrows={true}
      />
    </div>
  );
}

export default App;
