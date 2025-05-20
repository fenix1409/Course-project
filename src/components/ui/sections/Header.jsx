import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Arrow, Lupa } from '../../../assets/Icons'

const Header = () => {
  const list = [
    { id: 1, title: "Курсы", path: "/courses" },
    { id: 2, title: "Школы", path: "/schools" },
    { id: 3, title: "Отзывы о школах", path: "/reviews" },
    { id: 4, title: "Акции школ", path: "/discounts" },
    { id: 5, title: "Блог", path: "/blog" }
  ]

  return (
    <header className='w-full px-[122px] max-lg:px-[20px] max-sm:px-[15px] !py-[20px] bg-white flex items-center justify-between max-lg:gap-[37px]'>
      <div className='flex items-center gap-[71px] max-lg:gap-[20px]'>
        <NavLink className='text-[24px] leading-[100%] font-black' to={'/'}>Logo</NavLink>
        <nav className='flex items-center gap-[40px] max-sm:hidden'>
          {list.map(item => (
            <NavLink key={item.id} to={item.path}
              className={({ isActive }) =>
                `text-[14px] leading-[100%] font-bold transition-colors duration-200 hover:text-[#01E45C] ${isActive ? 'text-[#01E45C] font-bold underline underline-offset-8 decoration-2' : 'text-gray-700'
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-[44px] max-lg:gap-[27px]">
        <Link to={+1}><Arrow /></Link>
        <label className='flex items-center'>
          <Lupa />
          <input type="text" className='w-[300px] max-lg:w-[120px] pl-[15px] outline-none' placeholder='Искать курсы' />
        </label>
      </div>
    </header>
  )
}

export default Header