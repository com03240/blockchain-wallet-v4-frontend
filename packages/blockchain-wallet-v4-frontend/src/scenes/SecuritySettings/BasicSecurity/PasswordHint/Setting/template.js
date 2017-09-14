import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { Field, reduxForm } from 'redux-form'

import { Button, ButtonGroup, Text } from 'blockchain-info-components'
import { TextBox } from 'components/Form'
import { SettingForm } from 'components/Setting'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media(min-width: 992px) {
    align-items: flex-end;
  }

  & > * { padding: 10px 0; }
`
const Setting = (props) => {
  const { updateToggled, handleToggle, handleClick, submitting, invalid, currentHint } = props
  return (
    <Wrapper>
      {currentHint &&
        <Text>{currentHint}</Text>
      }
      <Button nature='secondary' onClick={handleToggle}>
        <FormattedMessage id='scenes.security.passwordHint.updateform.setpasswordHint' defaultMessage='Change' />
      </Button>
      {updateToggled &&
        <SettingForm>
          <Text size='14px' weight={300}>
            <FormattedMessage id='scenes.security.passwordHint.label' defaultMessage='Password Hint' />
          </Text>
          <Field name='passwordHint' component={TextBox} />
          <ButtonGroup>
            <Button nature='empty' capitalize onClick={handleToggle}>
              <FormattedMessage id='scenes.security.passwordHint.updateform.cancel' defaultMessage='Cancel' />
            </Button>
            <Button nature='secondary' capitalize disabled={submitting || invalid} onClick={handleClick}>
              <FormattedMessage id='scenes.security.passwordHint.updateform.save' defaultMessage='Change' />
            </Button>
          </ButtonGroup>
        </SettingForm>
      }
    </Wrapper>
  )
}

Setting.propTypes = {
  updateToggled: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default reduxForm({ form: 'settingPasswordHint' })(Setting)
