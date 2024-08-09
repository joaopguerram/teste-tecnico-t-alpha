import { forwardRef } from "react";
import PropTypes from "prop-types";

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div>
      <label>{label} :</label>
      <input ref={ref} {...rest} />
      {error ? <p>{error.message}</p> : null}
    </div>
  );
});

Input.displayName = "Input";

Input.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};
