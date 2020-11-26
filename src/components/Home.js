import React from 'react';

const Home = props => {
  console.log(props)
  return (
    <div>
      <h1>{props.title}</h1>
      <h4>{props.text}</h4>
    </div>
  )
}


export default Home;
