import React from 'react'

import { Link } from 'react-router-dom'

export default function Posts (props) {
  const files = require.context(
    '../posts',
    true,
    /\.md$/
  ).keys()

  const posts = files.map(f => {
    let stripped = f.slice(2, -3)
    let linkTo = '/posts/' + stripped
    return <Link to={linkTo}><li>{f.slice(2, -3)}</li></Link>
  })

  return (
    <div>
      {posts}
    </div>
  )
}
