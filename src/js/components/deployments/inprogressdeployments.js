import React from 'react';
import { Redirect } from 'react-router-dom';

import { getOnboardingComponentFor, getOnboardingStepCompleted } from '../../utils/onboardingmanager';

import DeploymentsList from './deploymentslist';

const columnHeaders = [
  { title: 'Release', class: '' },
  { title: 'Device group', class: '' },
  { title: 'Start time', class: '' },
  { title: 'Total # devices', class: 'align-right' },
  { title: 'Overall progress', class: '' },
  { title: '', class: '' },
  { title: '', class: '' }
];

export class Progress extends React.PureComponent {
  render() {
    const self = this;

    let onboardingComponent = null;
    if (!self.props.onboardingComplete && this.inprogressRef) {
      const anchor = { left: 200, top: this.inprogressRef.offsetTop + this.inprogressRef.offsetHeight };
      onboardingComponent = getOnboardingComponentFor('deployments-inprogress', { anchor });
      if (
        self.props.pastDeploymentsCount &&
        getOnboardingStepCompleted('scheduling-release-to-devices') &&
        !getOnboardingStepCompleted('upload-new-artifact-tip')
      ) {
        return <Redirect to="/deployments/finished" />;
      }
    }

    return (
      <div>
        {!!self.props.items.length && (
          <div ref={ref => (this.inprogressRef = ref)}>
            <DeploymentsList headers={columnHeaders} {...self.props} />
          </div>
        )}
        {!!onboardingComponent && onboardingComponent}
      </div>
    );
  }
}

export default Progress;
