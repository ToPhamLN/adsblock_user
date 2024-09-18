import React from 'react'

const Blogs = React.lazy(() => import('../pages/Blogs'))
const BlogInfo = React.lazy(() => import('../pages/BlogInfo'))

export const pathRouter = {
  blogs: '/',
  blogInfo: '/blogs/:_id'
}

export const routes: {
  path: string
  component: React.ComponentType
}[] = [
  {
    path: pathRouter.blogs,
    component: Blogs
  },
  {
    path: pathRouter.blogInfo,
    component: BlogInfo
  }
]
