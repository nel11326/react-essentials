import { useState } from "react";

import CoreConcept from "../coreConcept/coreConcept.component.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "../../data.js";
import TabButton from "../TabButton/tabButton.component.jsx";
import "./main.component.css";

function Main() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
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
            onSelect={() => handleSelect("components")}
            children="Components"
          />
          <TabButton onSelect={() => handleSelect("jsx")} children="JSX" />
          <TabButton onSelect={() => handleSelect("props")} children="Props" />
          <TabButton onSelect={() => handleSelect("state")} children="State" />
        </menu>
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title[0]}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      </section>
    </main>
  );
}

export default Main;
