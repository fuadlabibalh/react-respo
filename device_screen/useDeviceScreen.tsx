import { useEffect, useState } from 'react'
import { DeviceScreens, getOrientation, getOsDevice, getPortSize, getRootFontSize, getScreenDimension, getScreenRasio, getScreenTypes } from './deviceScreen'


function useDeviceScreen(): DeviceScreens {
  const dimension = useDimension()

  let result: DeviceScreens = {
    dimension: dimension,
    orientation: getOrientation(),
    rasio: getScreenRasio(),
    os: getOsDevice(),
    type: getScreenTypes(),
    rootFontSize: getRootFontSize(),
    fontSize: getPortSize()
  }
  return result
}

export const useDimension = () => {
  const [screen, setScreen] = useState(getScreenDimension())

  const handleResize = () => {
    return setScreen(getScreenDimension())
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[screen])
  return  screen
}

export default useDeviceScreen
