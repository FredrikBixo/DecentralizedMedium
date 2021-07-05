import Ipfs from 'ipfs'
import { useEffect, useState } from 'react'

let ipfs = null

export default function useIpfsFactory () {
  const [isIpfsReady, setIpfsReady] = useState(Boolean(ipfs))
  const [ipfsInitError, setIpfsInitError] = useState(null)

  useEffect(() => {
    async function startIpfs () {
      if (ipfs) {
      } else if (window.ipfs && window.ipfs.enable) {
        ipfs = await window.ipfs.enable({ commands: ['id'] })
      } else {
        try {
          ipfs = await Ipfs.create()
        } catch (error) {
          ipfs = null
          setIpfsInitError(error)
        }
      }

      setIpfsReady(Boolean(ipfs))
    }

    startIpfs()
    return function cleanup () {
      if (ipfs && ipfs.stop) {
        ipfs.stop().catch(err => console.error(err))
        ipfs = null
        setIpfsReady(false)
      }
    }
  }, [])

  return { ipfs, isIpfsReady, ipfsInitError }
}
