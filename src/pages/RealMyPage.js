import React from 'react'
import { MypageProvider } from '../context/MypageContext'
import MyPage from './MyPage'

const RealMyPage = () => {
  return (
    <MypageProvider>
      <MyPage/>
    </MypageProvider>
  )
}

export default RealMyPage