import React from 'react'
import Image from '../../../assets/images/hero-img.png'

const Hero = () => {
    return (
        <section className='flex items-center gap-[58px] max-sm:flex-col max-sm:gap-[0px] pl-[122px] max-lg:pl-[20px] max-sm:px-[15px]'>
            <div className="w-[515px] max-sm:w-full">
                <h1 className='text-[36px] max-sm:text-[26px] leading-[100%] max-lg:leading-[44xp] max-lg:mb-[12px] max-sm:leading-[40px] font-black'>Агрегатор онлайн-курсов</h1>
                <p className='text-[18px] leading-[30px] max-lg:text-[16px] max-lg:leading-[28px] max-sm:text-[14px] max-sm:leading-[24px]'>Сравниваем онлайн-курсы по digitalpx и IT. Мы — кат алог-отзовик курсов. Выбирайте курсы по отзывам, цене, пр одолжительности и другим критериям!</p>
            </div>
            <img src={Image} alt="image" width={730} height={510} className='max-lg:hidden'/>
            <img src={Image} alt="image" width={380} height={310} className='max-lg:block xl:hidden'/>
        </section>
    )
}

export default Hero