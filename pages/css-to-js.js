import React, {PureComponent} from 'react'
import dynamic from 'next/dynamic'
import plugin from '../utils/css-to-js'
const ConversionPanel = dynamic(import('../components/ConversionPanel'))

const defaultText = `
.abc {
  background-color: green;
}
`

export default class Main extends PureComponent {
  getTransformedValue = (newValue) => {
    return plugin(newValue)
  }

  render() {
    return (
      <ConversionPanel
        url={this.props.url}
        leftMode="css"
        getTransformedValue={this.getTransformedValue}
        name={'css_to_js'}
        defaultText={defaultText}
      />
    )
  }
}
