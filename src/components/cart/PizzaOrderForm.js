import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import TextInput from "../common/TextInput";

function PizzaOrderForm(props) {
  function isSaveDisabled() {
    let fullName = props.order.full_name;
    let address = props.order.address;
    return fullName.length === 0 || address.length === 0;
  }

  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="full_name"
        label="Full name"
        onChange={props.onChange}
        name="full_name"
        value={props.order.full_name}
      />

      <TextInput
        id="address"
        label="Address"
        onChange={props.onChange}
        name="address"
        value={props.order.address}
      />

      <div className="form-group">
        <label htmlFor="payment">Payment</label>
        <div className="field">
          <select
            id="payment"
            name="payment"
            onChange={props.onChange}
            value={props.order.payment || ""}
            className="form-control"
          >
            <option value="" />
            <option value="1">On phone</option>
            <option value="2">On delivery</option>
          </select>
        </div>
      </div>

      <input
        type="submit"
        value="Order"
        className="btn btn-lg btn-success"
        disabled={isSaveDisabled()}
      />

      <Button
        variant="danger btn-lg"
        style={{ margin: "10px" }}
        onClick={props.onReset}
      >
        Reset
      </Button>
    </form>
  );
}

PizzaOrderForm.propTypes = {
  order: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default PizzaOrderForm;
