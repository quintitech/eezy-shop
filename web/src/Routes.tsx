// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.tsx'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.tsx' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="forbidden" role={['author', 'editor']}>
        <Route path="/admin" page={AdminPage} name="admin" />
      </Private>

      <Route path="/" page={HomePage} name="home" prerender />
      <Route
        path="/forbidden"
        page={ForbiddenPage}
        name="forbidden"
        prerender
      />
      <Route notfound page={NotFoundPage} prerender />
    </Router>
  )
}

export default Routes
