// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {itemDetails} = props
  const {title, description, publishedDate} = itemDetails

  return (
    <li>
      <div className="list-item">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
