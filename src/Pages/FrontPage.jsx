import ReactFullpage from '@fullpage/react-fullpage'
import { BlogArea } from '.././Components/Area/BlogArea'
import { Header } from '.././Components/Header/Header';
import { useCallback, useState } from 'react';
import { ContactArea } from '.././Components/Area/ContactArea';
import { AboutMeArea } from '../Components/Area/AboutMeArea';
import { WorksArea } from '../Components/Area/WorksArea';
import { TopArea } from '../Components/Area/TopArea';

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
                <TopArea />
                <AboutMeArea />
                <WorksArea />
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