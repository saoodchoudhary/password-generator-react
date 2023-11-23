import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [isNumber, setIsNumber] = useState(false)
  const [isChar, setIsChar] = useState(false)
  const [possword, setPassword] = useState("")

  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = "qwertyuiopasdfghjklzxcvbnmWERTYUIOPSSDFGHJKLZXCVBNM";
    if (isNumber) str += "2134567890";
    if (isChar) str += "@#$%^&*(){}[]?|";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      console.log(char)
      pass += str.charAt(char)


    }

    setPassword(pass)

  }, [length, isNumber, isChar])

  const passWordCopy = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(possword)
  }

  useEffect(() => {
    passwordGenerator()
  }, [length, isNumber, isChar])
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4  text-orange-500 bg-gray-700 py-2'>
      <h1 className='text-white text-center my-2'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text' value={possword}
          className='outline-none w-full py-1 px-3'
          ref={passwordRef}
          readOnly
          placeholder='password' />
        <button 
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={() => { passWordCopy() }}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div  className='flex gap-1'>
          <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>Length : {length}</label>
        </div>

        <div  className='flex gap-1'>
          <input
            className='cursor-pointer'
            type='checkbox'
            defaultChecked={isNumber}
            onChange={() => { setIsNumber((prev) => !prev) }}
          />
          <label>Number </label>
        </div>

        <div className='flex gap-1'>
          <input
            className='cursor-pointer'
            type='checkbox'
            defaultChecked={isChar}
            onChange={() => { setIsChar((prev) => !prev) }}
          />
          <label>Character</label>
        </div>

      </div>
    </div>
  )
}

export default App
