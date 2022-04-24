import React from 'react';
import Project from './Project';
import projectData from '../projectData';

export default function Portfolio() {
  return (<div className="paddsection">
    <div className="container">
      <h2>Portfolio</h2>
      <div className="row">

        <Project projects={projectData} />
      </div>
    </div></div>
  );
}
