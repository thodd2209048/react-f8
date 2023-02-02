
import userEvent from '@testing-library/user-event'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import video1 from './video/video1.mp4'

function Video(props, ref) {
  const videoRef = useRef()
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play()
    },
    pause() {
      videoRef.current.pause()
    }
  }))
  return (
    <video ref={videoRef} src={video1} width={280}/>
  )
}

export default forwardRef(Video)