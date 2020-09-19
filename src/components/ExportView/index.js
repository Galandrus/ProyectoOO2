import React, { useState } from 'react';
import { Link } from 'route-lite';
import VersionListView from '../VersionListView';
import './styles.css';

const ComponentView = () => {
  return 'Componente de react'
};

const CssView = () => {
  return(
    <div>
      {window.refactoringManager.getCurrentVersion().getRefactorings().map(refactoring => {
        console.log(refactoring);
        let styles = refactoring.style.targetElement;
        return (
          <div>
            {Object.keys(styles).map(key => <p>{`${key}: ${styles[key]}`}</p>)}
          </div>
        )
      })}

    </div>
  );
};

const ExportView = () => {
  const [visible, setVisible] = useState(true);

  return(
    <div>
      <div className="optionsContainer">
        <button className={'btn btn-primary'} onClick={e => {e.preventDefault(); setVisible(true)}}>Component</button>
        <button className={'btn btn-primary'} onClick={e => {e.preventDefault(); setVisible(false)}}>Styles</button>
      </div>
      <div className="divider" />
      <div className="contentContainer">
        {visible && <ComponentView />}
        {!visible && <CssView />}
      </div>

      <Link className={'btn btn-secondary'} component={VersionListView}><i className="fas fa-arrow-circle-left"></i> Back</Link>
    </div>
  );
};

export default ExportView;