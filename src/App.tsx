import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import DefaultLayout from '~/layouts'
import { routes } from '~/constants/routes'
import LoadingPage from '~/components/LoadingPage'
import NotFoundPage from '~/components/NotFound'

const App = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          {routes.map((r) => {
            const Page = r.component
            return <Route key={r.path} path={r.path} element={<Page />} />
          })}
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
