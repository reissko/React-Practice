import Student from './Student.jsx'

function App() {
 
  return (
    <>
      <Student name="Reiss Oliveros" age={19} isStudent={true}/>
      <Student name="Deanan Oliveros" age={21} isStudent={true}/>
      <Student name="Bob" age={50} isStudent={false} />
      <Student name="Richard" age={27} isStudent={true} />
      <Student />
    </>
  )
}

export default App
