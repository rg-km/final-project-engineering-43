import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const Forminput = ({ id, label, type, onChange }) => {
  return (
    <FormControl id={id}>
      <FormLabel>{label}</FormLabel>
      <Input type={type} onChange={onChange} />
    </FormControl>
  );
};

Forminput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Forminput;
