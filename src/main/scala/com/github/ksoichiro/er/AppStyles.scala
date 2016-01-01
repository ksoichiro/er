package com.github.ksoichiro.er

import scalacss.Defaults._
import scalacss.mutable.StyleSheet

object AppStyles extends StyleSheet.Inline {

  import dsl._

  val button = style(
    addClassNames("pure-button", "pure-button-primary")
  )
}
