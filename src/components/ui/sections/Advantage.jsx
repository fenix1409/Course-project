import React from 'react'
import { Filter, Information, Video } from '../../../assets/Icons'

const Advantage = () => {
    const cards = [
        { id: 1, name: "Большой выбор онлайн-курсов", icon: <Video />, text: "Мы аккумулируем большое количество онлайн-курсов по различным направлениям, позволяя сравнивать их, и выбирать то, что вам нравится" },
        { id: 2, name: "Актуальная информация", icon: <Information />, text: "Мы регулярно обновляем наши базы данных,  чтобы предоставлять вам только самую свежую информацию о новых курсах, старте обучения,  скидках и предложениях от онлайн-школ" },
        { id: 3, name: "Скорость поиска", icon: <Filter />, text: "Агрегатор курсов создан для экономии вашего времени.  Вы можете с легкостью найти подходящий курс в нашем каталоге по различным фильтрам" },
    ]
    return (
        <section className='bg-white max-sm:flex-col max-sm:gap-[0px] px-[122px] max-lg:px-[20px] max-sm:px-[15px] py-[52px] max-sm:py-[39px]'>
            <h2 className='text-[30px] leading-[100%] font-black mb-[72px] max-lg:mb-[50px] max-ms:mb-[31px] text-center'>Наши преимущества</h2>
            <div className="flex items-center gap-[70px] flex-wrap max-lg:gap-[45px] max-sm:gap-[30px]">
                {cards.map(item => (
                    <div className='w-[381px] max-lg:w-[339px] max-sm:w-full' key={item.id}>
                        <div className="flex items-center gap-[25px] max-lg:gap-[20px] max-sm:gap-[15px] mb-[25x] max-lg:mb-[18px] max-sm:mb-[15px]">
                            <div>{item.icon}</div>
                            <h3 className='text-[20px] leading-[27px] font-bold max-lg:text-[18px] max-lg:leading-[24px]'>{item.name}</h3>
                        </div>
                        <p className='text-[14px] leading-[24px] text-[#7E7E7E]'>{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Advantage