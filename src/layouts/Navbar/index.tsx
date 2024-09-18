import React, { useState, useEffect, useRef } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import axios from '~/api/axios'
import { motion } from 'framer-motion'

type Props = {}
type Categories = TCategory[]

const Navbar = (props: Props) => {
  const [categories, setCategories] = useState<Categories>([])
  const [searchParams, setSearchParams] = useSearchParams()
  const category = searchParams.get('category')
  const navigate = useNavigate()
  const [widthInner, setWithInner] = useState<number>(0)
  const casrouselRef: React.MutableRefObject<HTMLDivElement | null> =
    useRef(null)

  const updateWidthInner = () => {
    const casrousel = casrouselRef.current
    if (casrousel) {
      setWithInner(casrousel.scrollWidth - casrousel.offsetWidth)
    }
  }
  useEffect(() => {
    updateWidthInner()
    const handleResize = () => {
      updateWidthInner()
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [categories])

  const categoryHandler = (value: string) => {
    navigate({
      pathname: '/',
      search: `?category=${value}`
    })
  }

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/categories/read/all')
        setCategories(response.data.categories)
      } catch (error) {
        console.log(error)
        setCategories([])
      }
    }
    fetchCategories()
  }, [])
  return (
    <nav>
      <div className='container'>
        <motion.div className='nav_list' ref={casrouselRef}>
          <motion.ul drag='x' dragConstraints={{ right: 0, left: -widthInner }}>
            <li
              className={category === '' ? 'current' : ''}
              onClick={() => categoryHandler('')}
            >
              All
            </li>
            {categories.map((categoryItem) => (
              <li
                key={categoryItem._id}
                className={category === categoryItem._id ? 'current' : ''}
                onClick={() => categoryHandler(categoryItem._id)}
              >
                {categoryItem.name}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar
