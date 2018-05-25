import React from 'react';

const CheeseList = (props) => {
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

export default CheeseList;
