import React, { Component } from 'react'
import PropTypes from 'prop-types'
import wrapDisplayName from 'recompose/wrapDisplayName'

const withMetricsServiceClient = ({
  transform = (metricsServiceClient) => ({ metricsServiceClient }),
} = {}) => (BaseComponent) => class extends Component { // eslint-disable-line
  static displayName = wrapDisplayName(BaseComponent, 'withMetricsServiceClient')

  static contextTypes = {
    metricsServiceClient: PropTypes.object,
  }

  render() {
    return (
      <BaseComponent
        {...transform(this.context.metricsServiceClient)}
        {...this.props}
      />
    )
  }
}

export { withMetricsServiceClient }
export default withMetricsServiceClient
