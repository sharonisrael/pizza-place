import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";

// Presentation component with presentation concern
// map is a function which returns new array
// iterating an array need key to keep track - set key to id to the table list
function CartList(props) {
  return (
    <>
      <h3>List of pizzas</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Pizza</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.pizzas.map((pizza) => {
            return (
              <tr key={pizza.id}>
                <th>{pizza.name}</th>
                <th>{pizza.price}</th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

CartList.propTypes = {
  pizzas: PropTypes.array.isRequired,
};

export default CartList;
