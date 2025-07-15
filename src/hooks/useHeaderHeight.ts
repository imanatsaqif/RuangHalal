import { useEffect, useState } from 'react'

export const useHeaderHeight = () => {
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    const header = document.querySelector('header')
    if (header) {
      setHeaderHeight(header.clientHeight)
    }

    const handleResize = () => {
      const header = document.querySelector('header')
      if (header) {
        setHeaderHeight(header.clientHeight)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return headerHeight
}