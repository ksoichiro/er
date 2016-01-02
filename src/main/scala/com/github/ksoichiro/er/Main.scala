package com.github.ksoichiro.er

import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.prefix_<^._
import org.scalajs.dom.document

import scala.scalajs.js
import scala.scalajs.js.annotation.JSExport
import scalacss.Defaults._
import scalacss.ScalaCssReact._

object Main extends js.JSApp {
  @JSExport
  def main(): Unit = {
    AppStyles.addToDocument()

    val Header = ReactComponentB[Unit]("Header")
      .render(_ =>
      <.div(AppStyles.header))
      .buildU

    val Menu = ReactComponentB[Unit]("Menu")
      .render(_ =>
      <.div(AppStyles.menu,
        <.div(AppStyles.subMenu,
          <.div(AppStyles.subMenuHeader, "Models"),
          <.div(AppStyles.subMenuMenu,
            <.a(AppStyles.subMenuMenuItem, "Company"),
            <.a(AppStyles.subMenuMenuItem, "Department"),
            <.a(AppStyles.subMenuMenuItem, "Employee"),
            <.a(AppStyles.subMenuMenuItem, "+ Add new model")
          )
        ),
        <.div(AppStyles.subMenu,
          <.div(AppStyles.subMenuHeader, "Indexes"),
          <.div(AppStyles.subMenuMenu,
            <.a(AppStyles.subMenuMenuItem, "+ Add new index")
          )
        )
      ))
      .buildU

    val Container = ReactComponentB[Unit]("Container")
      .render(_ =>
      <.div(
        Header(),
        Menu()))
      .buildU

    ReactDOM.render(Container(), document.getElementById("container"))
  }
}
