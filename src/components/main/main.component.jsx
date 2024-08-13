import { useState } from "react";

import CoreConcept from "../coreConcept/coreConcept.component.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "../../data.js";
import TabButton from "../TabButton/tabButton.component.jsx";
import "./main.component.css";

function Main() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem} />
          ))}
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton
            isSelected={selectedTopic === "components"}
            onSelect={() => handleSelect("components")}
            children="Components"
          />
          <TabButton
            isSelected={selectedTopic === "jsx"}
            onSelect={() => handleSelect("jsx")}
            children="JSX"
          />
          <TabButton
            isSelected={selectedTopic === "props"}
            onSelect={() => handleSelect("props")}
            children="Props"
          />
          <TabButton
            isSelected={selectedTopic === "state"}
            onSelect={() => handleSelect("state")}
            children="State"
          />
        </menu>
        {tabContent}
      </section>
    </main>
  );
}

export default Main;
