import React, {
  useState,
  useEffect,
} from "react"

import Link from "next/link"

import {
  Header,
  HeaderMenu,
} from "./AppHeader.styles"

const AppHeader = () => {

  const [isHidden, setIsHidden] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const onScroll = () => {
    setScrollY(window.pageYOffset)

    window.pageYOffset > scrollY
    ? setIsHidden(true)
    : setIsHidden(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  })

  return (
    <Header isHidden={isHidden}>
      <Link href="/">Logo</Link>

      <HeaderMenu>
        <Link href="/blog">Blog</Link>
      </HeaderMenu>
    </Header>
  )
}

export default AppHeader