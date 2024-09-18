type TFileImage = {
  filename: string
  path: string
}

type TCategory = {
  _id: string
  name: string
  image: TFileImage
}

type TBlog = {
  _id: string
  title: string
  mainImage: TFileImage
  category: TCategory
  content: string
  views: number
  createdAt: string
  updatedAt: string
}
