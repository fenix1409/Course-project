import React, { useState } from 'react';

const CoursesFilter = () => {
    const categories = [
        { id: 1, name: 'Программирование' },
        { id: 2, name: 'Маркетинг' },
        { id: 3, name: 'Дизайн' },
        { id: 4, name: 'Аналитика' },
        { id: 5, name: 'Финансы' },
        { id: 6, name: 'Управление' },
        { id: 7, name: 'Контент-маркетинг' }
    ]

    const allCourses = [
        { id: 1, name: 'Android-разработка', category: 'Программирование' },
        { id: 2, name: 'Разработка игр на Unreal Engine', category: 'Программирование' },
        { id: 3, name: 'Python-разработка', category: 'Программирование' },
        { id: 4, name: 'Управление разработкой и IT', category: 'Управление' },
        { id: 5, name: 'Разработка на Kotlin', category: 'Программирование' },
        { id: 6, name: 'Web-разработка', category: 'Программирование' },
        { id: 7, name: 'Frontend-разработка', category: 'Программирование' },
        { id: 8, name: 'Информационная безопасность', category: 'Программирование' },
        { id: 9, name: 'Мобильная разработка', category: 'Программирование' },
        { id: 10, name: 'Разработка игр на Unity', category: 'Программирование' },
        { id: 11, name: 'Golang-разработка', category: 'Программирование' },
        { id: 12, name: 'JavaScript-разработка', category: 'Программирование' },
        { id: 13, name: 'Разработка на C#', category: 'Программирование' },
        { id: 14, name: 'Разработка на Swift', category: 'Программирование' },
        { id: 15, name: 'Java-разработка', category: 'Программирование' },
        { id: 16, name: 'PHP-разработка', category: 'Программирование' },
        { id: 17, name: '1C-разработка', category: 'Программирование' },
        { id: 18, name: 'Разработка игр', category: 'Программирование' },
        { id: 19, name: 'DevOps', category: 'Программирование' },
        { id: 20, name: 'VR/AR разработка', category: 'Программирование' },
        { id: 21, name: 'Создание сайтов', category: 'Программирование' },
        { id: 22, name: 'IOS-разработка', category: 'Программирование' },
        { id: 23, name: 'Фреймворк Laravel', category: 'Программирование' },
        { id: 24, name: 'Системное администрирование', category: 'Программирование' },
        { id: 25, name: 'Верстка на HTML/CSS', category: 'Программирование' },
        { id: 26, name: 'QA-тестирование', category: 'Программирование' },
        { id: 27, name: 'Разработка на C++', category: 'Программирование' }
    ]

    const [selectedCategory, setSelectedCategory] = useState(null)

    const filteredCourses = allCourses.filter(course => {
        const matchesCategory = !selectedCategory || course.category === selectedCategory
        return matchesCategory
    })

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="w-full md:w-1/4">
                    <h3 className="text-lg font-semibold mb-3">Категории</h3>
                    <div className="space-y-2">
                        <button onClick={() => setSelectedCategory(null)} className={`block w-full text-left px-4 py-2 rounded ${!selectedCategory ? 'bg-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
                            Все категории
                        </button>
                        {categories.map(category => (
                            <button
                                key={category.id} onClick={() => setSelectedCategory(category.name)} className={`block w-full text-left px-4 py-2 rounded ${selectedCategory === category.name ? 'bg-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-3/4">
                    <div>
                        <h3 className="text-lg font-semibold mb-3">
                            {selectedCategory || 'Все курсы'} ({filteredCourses.length})
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredCourses.map(course => (
                                <div key={course.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                                    <h4 className="font-medium">{course.name}</h4>
                                    <p className="text-sm text-gray-500 mt-1">{course.category}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursesFilter