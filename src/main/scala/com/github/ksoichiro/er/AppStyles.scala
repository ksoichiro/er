package com.github.ksoichiro.er

import scalacss.Defaults._
import scalacss.mutable.StyleSheet

object AppStyles extends StyleSheet.Inline {

  import dsl._

  val header = style(
    backgroundColor(c"#009CFD"),
    minHeight(48.px)
  )

  val menu = style(
    minHeight(1000.px),
    addClassNames("ui", "secondary", "vertical", "pointing", "menu"),
    width(200.px)
  )

  val subMenu = style(
    addClassNames("item")
  )

  val subMenuHeader = style(
    addClassNames("header")
  )

  val subMenuMenu = style(
    addClassNames("menu")
  )

  val subMenuMenuItem = style(
    addClassNames("item")
  )

  val button = style(
    addClassNames("ui", "button")
  )
}
