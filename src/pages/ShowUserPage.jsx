import React from 'react'
import { useSelector } from 'react-redux'


const ShowUserPage = () => {
  const name = useSelector(state => state.name)
  const age = useSelector(state => state.age)
  const phone = useSelector(state => state.phone)

  return (
    <div className='w-full col-span-full md:max-lg:max-w-xs lg:col-start-3 lg:col-end-6 flex flex-col gap-3 items-stretch text-md text-left [&>span]:truncate [&>span]:border-2 [&>span]:border-rose-400 [&>span]:border-dashed [&>*]:p-1'>
      <span>Имя: {name}</span>
      <span>Возраст: {age}</span>
      <span>Телефон: {phone}</span>
    </div>
  )
}

export default ShowUserPage