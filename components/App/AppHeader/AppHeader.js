import React, {
  useState,
  useEffect,
} from "react"

import {
  Header,
  HeaderLogo,
  HeaderLink,
  // Container,
  // Container,
} from "./AppHeader.styles"

const AppHeader = () => {

  const [isActive, setIsActive] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const onScroll = () => {
    setScrollY(window.pageYOffset)

    window.pageYOffset > scrollY
    ? setIsActive(true)
    : setIsActive(false)
  }

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", onScroll)
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  })

  return (
    <Header isActive={isActive}>
      <a>AppHeader</a>
    </Header>
  )
}

export default AppHeader