import React, { useState } from 'react';
import Data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions,setQuestions] = useState(Data)
  return <main>
    <div className='container'>
  <h3>Questions And Answers About Login</h3>
  <section className='info'>{
   questions.map((question) => {
     return <SingleQuestion key={question.id} {...question}></SingleQuestion>
   }

   )
  }</section>
  </div>
  </main>;
}

export default App;