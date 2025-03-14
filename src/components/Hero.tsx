import React from 'react'

const Hero = () => {
    return (
        <div className='bg-[url(https://www.floraly.com.au/cdn/shop/articles/gladiolus_blog_hero.png?v=1661409274&width=1500)] bg-center  w-full h-64 bg-cover flex items-center pl-10 '>
            <div className='text-xl font-bold text-white'>
                <table>
                    <tbody>

                        <tr>
                            <td>Nama</td>
                            <td className='px-2'>:</td>
                            <td>Abdul Aziz Muslim</td>
                        </tr>
                        <tr>
                            <td>Kelas</td>
                            <td className='px-2'>:</td>
                            <td>Desain Web [2AV205] </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Hero