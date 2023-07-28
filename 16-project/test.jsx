import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Label } from './components/Label'

const initStateForm = {
  name:'',
  lastName:'',
  password:'',
  email:''
} 




function App() {

  const [formState, setFormulario] = useState(initStateForm)
  const { name, lastName, email } = formState

  const [ErrorState, setErrorState] = useState('')


const handlerForm = useCallback(
  (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormulario(steA => ({...steA, [e.target.name]:e.target.value,
        name:'perrito'
    }))
  },
  [],
)



const resetForm = () => setFormulario(initStateForm)

const sendForm = async () => {
  try {
      const response = await  axios.post('url', formState)
      console.log(response, 'formulario enviado')
      alert('formulario enviado')
  } catch (error) {
    console.error(error)
  }
}

const ValidatorForm = useCallback(
  () => {
      if (lastName === 'culo') {
       return setErrorState('no mames usa otro nombre')
      }
      setErrorState('')
  },
  [lastName],
)

useEffect(() => {
  ValidatorForm()
}, [ValidatorForm, lastName])



  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
        <ul>
          <li><Label txt='name' handlerForm={handlerForm} />  {name}</li>
          <li>last name : {lastName}</li>
          <li>email : {email}</li>
        </ul>
      <div className="card">
        <input
         type="email"
          name="email"
           id="email"
           onChange={ handlerForm }
           value={formState.email}
           />
           <button type="button" onClick={resetForm}>resetForm</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {
        ErrorState && <p>{ErrorState}</p>
      }
    </>
  )
}

export default App