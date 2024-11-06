import { useState } from 'react'

// const mokAut = {
//   login: 'root',
//   passwword: 'zxc28',
// }

const useHasAuth = () => {
  const [hasAuth, setHasAuth] = useState<boolean>(true)

  return {
    hasAuth,
    setHasAuth,
  }
}

export default useHasAuth
