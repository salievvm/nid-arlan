import React from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';

function PhoneFormatCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['+','7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      placeholder={'+7 (123) 456 7890'}
      keepCharPositions={true}
      showMask
      guide={false}
    />
  );
}

PhoneFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

export default PhoneFormatCustom;