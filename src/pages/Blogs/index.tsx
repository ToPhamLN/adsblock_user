import React, { useState, useEffect } from 'react'
import BlogItem from './BlogItem'
import Panigation from '~/components/Panigation'
import { SmallAddIcon, SearchIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import axios from '~/api/axios'
import LoadingPage from '~/components/LoadingPage'

type Props = {}
type Blogs = TBlog[]

const Blogs = (props: Props) => {
  const [data, setData] = useState<Blogs>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getBlogs = async () => {
      try {
        setLoading(true)
        const res = await axios.get('/api/blogs/read/all')
        setData(res.data.blogs)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    getBlogs()
  }, [])
  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <section className='blogs'>
          <div className='container'>
            <div className='heading'>
              <div className='search' style={{ marginTop: '15px' }}>
                <input type='text' />
                <button className='close'>
                  <SearchIcon />
                </button>
              </div>
            </div>
            <div className='list'>
              {data.length > 0 &&
                data.map((item) => <BlogItem key={item._id} blog={item} />)}
            </div>
            <Panigation />
          </div>
        </section>
      )}
    </>
  )
}

export default Blogs
