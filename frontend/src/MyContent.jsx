import {React, useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './MyContent.css'; // Import the CSS file

function MyContent({ variables }) {
  // Access the variable from the URL parameters
  //const { variable, variable2 } = useParams();
  const [variable, setVariable] = useState('');
  const [variable2, setVariable2] = useState('');
  useEffect(() => {
    // Retrieve the variables from localStorage
    const storedVariable = localStorage.getItem('variable');
    const storedVariable2 = localStorage.getItem('variable2');
        // Set the variables in state
    setVariable(storedVariable);
    setVariable2(storedVariable2);
        // Now you have access to variable and variable2
    console.log(storedVariable, storedVariable2);
}, []);

  console.log()

  return (
      
    <div className="container">
      <h4 className="title">Title: {variable2}</h4>
      <p className="content" style={{ maxHeight: '800px', overflowY: 'scroll' }}><pre>{variable}</pre></p>
    </div>
  );
}

export default MyContent;