import CoreConcept from "../coreConcept/coreConcept.component.jsx";
import { CORE_CONCEPTS } from "../../data.js";
import TabButton from "../TabButton/tabButton.component.jsx";
import "./main.component.css";

function Main() {
  let tabContent = "Please Click a Button";
  function handleSelect(selectedButton) {
    tabContent = selectedButton;
  }

  return (
    <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton
            onSelect={() => handleSelect("Components")}
            children="Components"
          />
          <TabButton onSelect={() => handleSelect("JSX")} children="JSX" />
          <TabButton onSelect={() => handleSelect("Props")} children="Props" />
          <TabButton onSelect={() => handleSelect("State")} children="State" />
        </menu>
        {tabContent}
      </section>
    </main>
  );
}

export default Main;
