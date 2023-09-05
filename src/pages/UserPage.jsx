import { useState } from 'react';
import { useDispatch } from 'react-redux';

const UserPage = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [phone, setPhone] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: 'CHANGE_NAME', name: name, age: age, phone: phone})
    
    setName('')
    setAge('')
    setPhone('')
  }


  return (
    <div className='grid grid-cols-5 gap-5 lg:gap-[20px] max-w-[960px] [&>*]:justify-self-center'>
      <span className='text-2xl col-span-full'>Страница пользователя</span>
      <form 
        className="w-full col-span-full md:max-w-xs xl:max-w-md lg:col-start-1 lg:col-end-3 flex flex-col justify-center gap-3 [&>*]:px-2 [&>*]:py-1 [&>input]:rounded-sm [&>button]:rounded-md [&>button]:bg-slate-300">
        <input 
          type="text" 
          placeholder='Имя пользователя'
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="text" 
          placeholder='Возраст пользователя'
          onChange={(e) => setAge(e.target.value)}
        />
        <input 
          type="text" 
          placeholder='Телефон пользователя'
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={handleSubmit}>Сохранить</button>
      </form>
    </div>
  )
}

export default UserPage 
