import PropTypes from "prop-types";
import Input from "./Input";

const withInputHOC = (WrappedComponent) => {
  const EnhancedInput = ({ onChange, ...rest }) => {
    const handleOnChange = (e) => {
      onChange(e);
    };

    return <WrappedComponent onChange={handleOnChange} {...rest} />;
  };

  EnhancedInput.PropTypes = {
    onChange: PropTypes.func,
  };

  return EnhancedInput;
};

const EnhancedInput = withInputHOC(Input);

export default EnhancedInput;
