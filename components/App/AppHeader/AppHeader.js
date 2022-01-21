import React, {
  useState,
  useEffect,
} from "react"

import { useRouter } from "next/router"

import Link from "next/link"

import {
  Header,
  HeaderMenu,
  HeaderMenuList,
  HeaderMenuListItem,
} from "./AppHeader.styles"

const AppHeader = () => {
  const router = useRouter()

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
        <HeaderMenuList>
          <HeaderMenuListItem isActive={router.pathname === '/'}>
            <Link href="/">Home</Link>
          </HeaderMenuListItem>

          <HeaderMenuListItem isActive={router.pathname === '/blog'}>
            <Link href="/blog">Blog</Link>
          </HeaderMenuListItem>
        </HeaderMenuList>
      </HeaderMenu>
    </Header>
  )
}

export default AppHeader