import { Banner } from 'blockchain-info-components'
import { FormattedMessage } from 'react-intl'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 15px;
`

class ImportInternalBtcAddress extends React.PureComponent {
  render () {
    return (
      <Wrapper>
        <Banner type='warning'>
          <FormattedMessage
            id='modals.importbtcaddress.importinternalbitcoinaddress.warning'
            defaultMessage='Addresses generated by this wallet should not be imported.'
          />
        </Banner>
      </Wrapper>
    )
  }
}

export default ImportInternalBtcAddress