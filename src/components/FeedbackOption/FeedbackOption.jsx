import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const btn = options.map((element, index) => {
    return (
      <button
        key={index}
        name={element.toLowerCase()}
        type="button"
        onClick={onLeaveFeedback}
      >
        {element}
      </button>
    );
  });

  return <>{btn}</>;
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
