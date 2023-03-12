import ReactFullpage from '@fullpage/react-fullpage'
import { BlogArea } from './Components/Area/BlogArea'
import { BrowserRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './Components/Header/Header';
import { useCallback, useState } from 'react';

function App() {
  const anchors = ['top','about', 'works', 'blog','contact']
  const [activeSection, setActiveSection] = useState('top');
  
  const onLeave = (origin, destination, direction) => {
    setActiveSection(destination.anchor);
  }

  const memoizedHeader = useCallback(() => {
    return <Header state={activeSection} />
  }, [activeSection]);

  return (
    <>
      {memoizedHeader()}
      <ReactFullpage
        scrollingSpeed={800} 
        navigation
        navigationPosition={'left'}
        anchors={anchors}
        onLeave={onLeave}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <ReactFullpage.Wrapper>
                <div className="section">
                  Top
                </div>
                <div className="section">
                  about
                </div>
                <div className="section">
                  works
                </div>
                <BlogArea />
                <div className="section">
                  contact
                </div>
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      />
    </>
  );
}

export default App;
const SLinkArea = styled.div`
  position: fixed;
  top: 10%;
  z-index: 10000;
`