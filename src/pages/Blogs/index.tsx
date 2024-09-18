import { SearchIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import axios from '~/api/axios'
import LoadingPage from '~/components/LoadingPage'
import Panigation from '~/components/Panigation'
import BlogItem from './BlogItem'

type Blogs = TBlog[]

const Blogs = () => {
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
