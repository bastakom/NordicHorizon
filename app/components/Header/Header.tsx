import { fetchConfig, fetchAllResor } from '@/app/lib/apireq'

import Nav from './Nav/Nav'

const Header = async () => {
  const config = await fetchConfig()
  const res = await fetchAllResor()

  return <Nav res={res} config={config} />
}

export default Header
