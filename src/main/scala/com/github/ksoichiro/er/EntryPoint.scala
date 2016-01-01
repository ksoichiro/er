package com.github.ksoichiro.er

import japgolly.scalajs.react.vdom.prefix_<^._
import japgolly.scalajs.react.{Callback, ReactComponentB, ReactDOM}
import org.scalajs.dom.document

import scala.scalajs.js
import scalacss.Defaults._
import scalacss.ScalaCssReact._

object EntryPoint extends js.JSApp {
  def main() = {
    AppStyles.addToDocument()
    val AddModelButton = ReactComponentB[Unit]("")
      .render(_ => <.button(^.onClick --> Callback.log("Add"), AppStyles.button, "Add model"))
      .buildU
    ReactDOM.render(AddModelButton(), document.getElementById("content"))
  }
}
