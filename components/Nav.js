import Link from 'next/link'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Light from '../public/icons/light.svg'
import Dark from '../public/icons/dark.svg'
import { useEffect, useState } from 'react'

export default function Nav() {
    const [ mounted, setMounted ] = useState()
    const { theme, setTheme, resolvedTheme } = useTheme()


    useEffect(() => setMounted(true), [])

    if (!mounted) { return null }

  return (
    <div className="w-screen z-50 fixed top-0 bg-white dark:bg-neutral-800 shadow-sm">
        <div className="grid grid-cols-3 justify-between px-4 sm:px-8 py-1.5 sm:py-3 border-b border-b-neutral-300 dark:border-b-neutral-600">
            <div>
                <Link href={""} passHref={true}>
                    <a target="_blank" className='flex items-center'>
                        {/* <Logo className="h-6 w-6 sm:h-8 sm:w-8 sm:mr-3"/> */}
                        <Image 
                                src="/images/learning.png" // Replace with your image path
                                alt="LearnBuddy" 
                                className="h-6 w-6 sm:h-8 sm:w-8 sm:mr-3 mr-10"
                                width={60} // Adjust as needed
                                height={60} // Adjust as needed
                            />
                        <h1 className='self-center hidden sm:block sm:text-xl font-black whitespace-nowrap text-teal-800 ml-6'>LearnBuddy</h1>
                    </a>
                </Link>
            </div>
            <div className='flex items-center place-self-center'>
                <h1 className='font-bold text-base sm:text-lg whitespace-nowrap'>AI-Powered English Learning for Bright Young Minds!</h1>
            </div>
            <div className='place-self-end'>
                <label className='group'>  
                    <input className='hidden' type="checkbox" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}/> 
                    <Light className={`${resolvedTheme === 'light' ? 'hidden' : 'visible'} fill-current w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-neutral-900 text-neutral-400 p-1 group-hover:text-teal-800`}/>
                    <Dark className={`${resolvedTheme === 'dark' ? 'hidden' : 'visible'} fill-current w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-100 text-gray-600 p-1 group-hover:text-teal-800 group-hover:bg-gray-200`}/>
                </label>
            </div>
        </div>
    </div>
  )
}
