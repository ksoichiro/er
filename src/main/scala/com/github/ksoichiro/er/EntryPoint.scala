package com.github.ksoichiro.er

import japgolly.scalajs.react.vdom.prefix_<^._
import japgolly.scalajs.react.{ReactComponentB, ReactDOM}
import org.scalajs.dom.document

import scala.scalajs.js
import scalacss.Defaults._
import scalacss.ScalaCssReact._

object EntryPoint extends js.JSApp {
  def main() = {
    AppStyles.addToDocument()
    val HelloMessage = ReactComponentB[Unit]("")
      .render(_ => <.div(AppStyles.title, "Hello world"))
      .build
    ReactDOM.render(HelloMessage(""), document.getElementById("demo"))
  }
}
