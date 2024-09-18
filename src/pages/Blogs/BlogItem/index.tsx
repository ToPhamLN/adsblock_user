import React from 'react'
import { BASE_URL } from '~/api/axios'
import { Link } from 'react-router-dom'
import { ViewIcon } from '@chakra-ui/icons'
import { formatDate } from '~/utils/helper'

type Blog = TBlog
type Props = {
  blog: Blog
}

const BlogItem = ({ blog }: Props) => {
  return (
    <Link to={`/blogs/${blog._id}`}>
      <article className='card'>
        <div className='title'>
          <h4>{blog.title}</h4>
        </div>
        <div className='image'>
          <img
            src={`${BASE_URL}/${blog.mainImage.path}`}
            alt={blog.mainImage.filename}
          />
        </div>
        <div
          className='info'
          dangerouslySetInnerHTML={{
            __html: blog.content
          }}
        ></div>
        <div className='desc'>
          <span>{formatDate(blog?.createdAt ?? '')}</span>
          <div className='views'>
            <span>{blog.views}</span>
            <ViewIcon className='views_icon' />
          </div>
        </div>
      </article>
    </Link>
  )
}

export default BlogItem
