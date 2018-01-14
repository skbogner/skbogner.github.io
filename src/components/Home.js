import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button
} from 'semantic-ui-react'

export default function Home () {
  return (
    <div>
      <p>
        This is an example single page app built
        with React and React&nbsp;Router using {' '}
        BrowserRouter. Navigate with the links below and
        refresh the page or copy/paste the url to test out the redirect
        functionality deployed to overcome GitHub&nbsp;Pages incompatibility
        with single page apps (like this one).
      </p>
      <p>
        Please see the for instructions on how to
        use this boilerplate to deploy your own single page app using GitHub Pages.
      </p>
      <Link to='/example'>
        <Button>Example page</Button>
      </Link>
      <div>
        <Link to='/example/two-deep?field1=foo&field2=bar#boom!'>
          Example two deep with query and hash
        </Link>
      </div>
    </div>
  )
}
