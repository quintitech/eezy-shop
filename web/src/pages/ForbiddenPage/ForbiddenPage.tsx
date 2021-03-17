import { Link, routes } from '@redwoodjs/router'

const ForbiddenPage = () => {
  return (
    <>
      <h1>ForbiddenPage</h1>
      <p>
        Find me in <code>./web/src/pages/ForbiddenPage/ForbiddenPage.tsx</code>
      </p>
      <p>
        My default route is named <code>forbidden</code>, link to me with `
        <Link to={routes.forbidden()}>Forbidden</Link>`
      </p>
    </>
  )
}

export default ForbiddenPage
