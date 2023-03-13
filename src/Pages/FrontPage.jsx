import ReactFullpage from '@fullpage/react-fullpage'
import { BlogArea } from '.././Components/Area/BlogArea'
import { Header } from '.././Components/Header/Header';
import { useCallback, useState } from 'react';
import { ContactArea } from '.././Components/Area/ContactArea';

export const FrontPage = () => {
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
                <ContactArea />
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      />
    </>
  );
}