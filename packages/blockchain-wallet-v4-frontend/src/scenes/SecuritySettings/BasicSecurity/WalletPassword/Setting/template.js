import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { Field, reduxForm } from 'redux-form'

import { Button, ButtonGroup, Text } from 'blockchain-info-components'
import { PasswordBox } from 'components/Form'
import { SettingForm } from 'components/Setting'
import { validStrongPassword } from 'services/FormHelper'

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
const Settings = (props) => {
  const { updateToggled, handleToggle, handleClick, submitting, invalid, currentWalletPassword } = props
  return (
    <Wrapper>
      <Button nature='secondary' onClick={handleToggle}>
        <FormattedMessage id='scenes.security.walletPassword.updateform.setwalletpassword' defaultMessage='Change' />
      </Button>
      {updateToggled &&
        <SettingForm>
          <Text size='14px' weight={300}>
            <FormattedMessage id='scenes.security.walletPassword.label' defaultMessage='Current Password' />
          </Text>
          <Field name='currentPassword' component={PasswordBox} validate={(value) => (value === currentWalletPassword ? undefined : 'Incorrect password')} />
          <Text size='14px' weight={300}>
            <FormattedMessage id='scenes.security.walletPassword.label' defaultMessage='New Password' />
          </Text>
          <Field name='newPassword' component={PasswordBox} validate={[validStrongPassword]} score />
          <Text size='14px' weight={300}>
            <FormattedMessage id='scenes.security.walletPasswordConfirmation.label' defaultMessage='Confirm Password' />
          </Text>
          <Field name='walletPasswordConfirmation' validate={(value, allValues) => (value === allValues['newPassword']) ? undefined : 'Passwords do not match'} component={PasswordBox} />
          <ButtonGroup>
            <Button nature='empty' capitalize onClick={handleToggle}>
              <FormattedMessage id='scenes.security.walletPassword.updateform.cancel' defaultMessage='Cancel' />
            </Button>
            <Button nature='secondary' capitalize disabled={submitting || invalid} onClick={handleClick}>
              <FormattedMessage id='scenes.security.walletPassword.updateform.save' defaultMessage='Save' />
            </Button>
          </ButtonGroup>
        </SettingForm>
      }
    </Wrapper>
  )
}

Settings.propTypes = {
  updateToggled: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default reduxForm({ form: 'settingWalletPassword' })(Settings)
