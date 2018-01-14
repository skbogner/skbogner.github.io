import React from 'react'
import _ from 'lodash'

import { Redirect } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'

// import posts from '../posts'

export default function Post (props) {
  const file = './' + props.location.pathname.slice(7) + '.md'

  const r = require.context(
    '../posts',
    true,
    /\.md$/
  )

  // TODO: Handle this better
  if (!_.includes(r.keys(), file)) return <Redirect to='/' />

  return <ReactMarkdown source={r(file)} />
}
