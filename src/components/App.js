import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Typography from 'typography'

import Home from './Home'
import PageNotFound from './PageNotFound'
import Posts from './Posts'
import Post from './Post'

import altonTheme from 'typography-theme-alton'
const typography = new Typography(altonTheme)
//   {
//   baseFontSize: '20px',
//   baseLineHeight: 2,
//   headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
//   bodyFontFamily: ['Georgia', 'serif']
// })

typography.injectStyles()

export default function App () {
  return (
    <div>
      <h1>
        <Link to='/'>skbogner</Link>
      </h1>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/posts' component={Posts} />
        <Route path='/posts' component={Post} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  )
}
