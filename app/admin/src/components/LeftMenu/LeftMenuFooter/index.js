import React from 'react';

import Wrapper from './Wrapper';

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <span>Mantido por </span>
        <a
         key="website"
          href="https://pcinfo.backupmanager.info"
           target="_blank" 
           rel="noopener noreferrer"
           >
          React Avançado
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
