import { useState, useEffect } from 'react'
import LoadingPage from '~/components/LoadingPage'
import { ShowAdButton } from '~/components/ShowAdButton'
import axios from '~/api/axios'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '~/api/axios'
import { formatDate } from '~/utils/helper'
import { ViewIcon } from '@chakra-ui/icons'
type Blog = TBlog

const BlogInfo = () => {
  const [data, setData] = useState<Partial<Blog>>({})
  const [loading, setLoading] = useState(false)
  const { _id } = useParams()

  useEffect(() => {
    const getBlog = async () => {
      try {
        setLoading(true)
        const res = await axios.get(`/api/blogs/read/${_id}`)
        setData(res.data.blog)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    getBlog()
  }, [_id])
  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <section className='blog_info'>
          <div className='container'>
            <div className='image'>
              <img src={`${BASE_URL}/${data?.mainImage?.path}`} alt='' />
            </div>
            <div className='heading'>
              <h4>{data.title}</h4>
            </div>
            <div className='desc'>
              <span>{formatDate(data?.createdAt ?? '')}</span>
              <div className='views'>
                <span>{data.views}</span>
                <ViewIcon className='views_icon' />
              </div>
            </div>
            <div
              className='info'
              dangerouslySetInnerHTML={{
                __html: data.content ?? ''
              }}
            ></div>
            <ShowAdButton />
          </div>
        </section>
      )}
    </>
  )
}

export default BlogInfo
