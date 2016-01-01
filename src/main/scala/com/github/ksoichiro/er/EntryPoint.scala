package com.github.ksoichiro.er

import japgolly.scalajs.react.vdom.prefix_<^._
import japgolly.scalajs.react.{ReactComponentB, ReactDOM}
import org.scalajs.dom

import scala.scalajs.js

object EntryPoint extends js.JSApp {
  def main() = {
    println("Hello world!")
    val HelloMessage = ReactComponentB[String]("HelloMessage")
      .render($ => <.div("Hello world"))
      .build
    ReactDOM.render(HelloMessage("John"), dom.document.getElementsByTagName("ul")(0))
  }
}
