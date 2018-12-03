import React from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";

const NewPlayerForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit} style={{ width: "30%", padding: "10px" }}>
      <div className="form-group">
        <label>Player Name</label>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="Player Name"
            className="form-control"
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label>Avatar URL</label>
        <div>
          <Field
            name="avatar"
            component="input"
            type="text"
            placeholder="Avatar URL"
            className="form-control"
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label>Winnings</label>
        <div>
          <Field
            name="winnings"
            component="input"
            type="number"
            placeholder="Winnings"
            className="form-control"
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label>Flag URL</label>
        <div>
          <Field
            name="flag"
            component="input"
            type="text"
            placeholder="Flag URL"
            className="form-control"
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label>NativeOf</label>
        <div>
          <Field
            name="nativeOf"
            component="input"
            type="text"
            placeholder="NativeOf"
            className="form-control"
            required
          />
        </div>
      </div>
      <div className="form-group" style={{ display: "flex", justifyContent: "space-between"}}>
        <button type="submit" disabled={pristine || submitting} className="btn btn-info" >
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-outline-dark" >
          Clear Values
        </button>
      </div>
    </form>
  );
};

NewPlayerForm.propTypes = {
  handleSubmit: PropTypes.any.isRequired,
  pristine: PropTypes.any.isRequired,
  reset: PropTypes.any.isRequired,
  submitting: PropTypes.any.isRequired
};

export default reduxForm({
  form: "NewPlayer" // a unique identifier for this form
})(NewPlayerForm)