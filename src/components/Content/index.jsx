import React from 'react';

import IMAGE01 from '../../static/claude-bernard-university-01.jpg';
import IMAGE02 from '../../static/claude-bernard-university-02.jpg';
import IMAGE03 from '../../static/claude-bernard-university-03.jpg';

const Index = () => {
  return (
    <div className="d-flex flex-row">
      <img src={IMAGE01} alt="Université de Claude Bernard Lyon 01" />
      <img src={IMAGE02} alt="Université de Claude Bernard Lyon 01" />
      <img src={IMAGE03} alt="Université de Claude Bernard Lyon 01" />
    </div>
  )
}

export default Index;