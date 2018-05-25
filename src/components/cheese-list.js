import React from 'react';
import { connect } from 'react-redux';

const CheeseList = (props) => {
  console.log(props.cheeses);
  const listOfCheeses = props.cheeses.map((cheese, ind) => (
    <li key={ind}>{cheese}</li>
    )
  );

  return (
    <ul className="list-of-cheeses">
      {listOfCheeses}
    </ul>
  )
};

export default connect()(CheeseList);
