import { useState } from 'react';

import Header from './components/Header/Header'
import CoreConcept from './components/CoreConcept/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx';

import { CORE_CONCEPTS, EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState('');
  
  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
  }

  // variable set before JSX code is returned
  let tabContent = 'Please select a topic';

  if (selectedTopic !== '') {
    tabContent = <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
  }

  return (
    <>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>  
            {CORE_CONCEPTS.map(coreConcept => 
              <CoreConcept key={coreConcept.title} {...coreConcept} />)}
          </ul>
        </section>
        <section id="examples" >
          <h2>Examples</h2>
          <menu>
              <TabButton 
                isSelected={'components' === selectedTopic} 
                onSelect={() => handleSelect('components')}>
                  Components
              </TabButton>
              <TabButton 
                isSelected={'jsx' === selectedTopic} 
                onSelect={() => handleSelect('jsx')}>
                  JSX
              </TabButton>
              <TabButton 
                isSelected={'props' === selectedTopic}
                onSelect={() => handleSelect('props')}>
                  Props
              </TabButton>
              <TabButton 
                isSelected={'state' === selectedTopic}
                onSelect={() => handleSelect('state')}>
                  State
              </TabButton>
          </menu>
            {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
