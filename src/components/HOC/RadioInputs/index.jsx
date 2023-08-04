import PropTypes from 'prop-types';
import RadioInput from './RadioInput';

const withRadioHOC = (WrappedComponet) => {
    const EnhancedRadio = ({ onChange, ...rest }) => {
        const handleChange = (e) => {
            onChange(e)
        }
        return <WrappedComponet onChange={handleChange} {...rest} />
    };
    EnhancedRadio.PropTypes = {
        onChange: PropTypes.func,
    }

    return EnhancedRadio;
}

const EnhancedRadio = withRadioHOC(RadioInput);
export default EnhancedRadio;