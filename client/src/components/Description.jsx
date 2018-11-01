import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ restaurantDescription, expanded, toggleExpand }) => {
  return (
    <div id="description">
      <div id="description-text" className={expanded ? 'expanded-p' : 'collapsed-p'}>
        {restaurantDescription}
      </div>
      <div className="expand-collapse-link">
        <div role="presentation" className="expand-description" onClick={toggleExpand}>
        + Read
          {expanded ? ' less' : ' more'}
        </div>
      </div>
    </div>
  );
};

export default Description;
