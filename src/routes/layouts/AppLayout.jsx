import WithNavbarAndFooter from '../../layout/WithNavbarAndFooter'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
     <WithNavbarAndFooter>
        {/* Outlet envuelve Rutas */}
        <Outlet/>
     </WithNavbarAndFooter>

    </>
  )
}

export default AppLayout