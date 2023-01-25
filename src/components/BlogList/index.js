// Write your JS code here
import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <div>
      <ul className="unOrder-list">
        {blogsList.map(eachItem => (
          <BlogItem itemDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
