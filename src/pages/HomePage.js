import React from 'react';
import BasicInformation from '../components/BasicInformation';
import Work from '../components/Work';
import Skills from '../components/Skills';
import Resources from '../components/Resources';
import DeveloperSetup from '../components/DeveloperSetup';

const HomePage = () => (
  <div>
    <BasicInformation />
    <Work />
    <Skills />
    <Resources />
    <DeveloperSetup />
  </div>
);

export default HomePage;
