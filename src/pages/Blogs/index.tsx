import { SearchIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from '~/api/axios'
import LoadingPage from '~/components/LoadingPage'
import Panigation from '~/components/Panigation'
import BlogItem from './BlogItem'
import Search from '~/components/Search'

type Blogs = TBlog[]

const Blogs = () => {
  const [data, setData] = useState<Blogs>([])
  const [loading, setLoading] = useState(false)
  const [searchParams] = useSearchParams()
  const [totalPages, setTotalPages] = useState(1)

  const q = searchParams.get('q')
  const category = searchParams.get('category')
  const page = searchParams.get('page')

  useEffect(() => {
    const getBlogs = async () => {
      try {
        setLoading(true)
        const res = await axios.get('/api/blogs/read/all', {
          params: {
            q,
            category,
            page
          }
        })
        setData(res.data.blogs)
        setTotalPages(res.data.totalPages)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    getBlogs()
  }, [category, page, q])

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <section className='blogs'>
          <div className='container'>
            <div className='heading'>
              <Search />
            </div>
            <div className='list'>
              {data.length > 0 &&
                data.map((item) => <BlogItem key={item._id} blog={item} />)}
            </div>
            <Panigation totalPages={totalPages} />
          </div>
        </section>
      )}
    </>
  )
}

export default Blogs
