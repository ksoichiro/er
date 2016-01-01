enablePlugins(ScalaJSPlugin)

name := "er"

scalaVersion := "2.11.7"

scalaJSStage in Global := FastOptStage

skip in packageJSDependencies := false

libraryDependencies += "com.github.japgolly.scalajs-react" %%% "core" % "0.10.3"
libraryDependencies += "com.github.japgolly.scalacss" %%% "core" % "0.3.1"
libraryDependencies += "com.github.japgolly.scalacss" %%% "ext-react" % "0.3.1"

jsDependencies ++= Seq(
  "org.webjars.bower" % "react" % "0.14.4"
    /        "react-with-addons.js"
    minified "react-with-addons.min.js"
    commonJSName "React",

  "org.webjars.bower" % "react" % "0.14.4"
    /         "react-dom.js"
    minified  "react-dom.min.js"
    dependsOn "react-with-addons.js"
    commonJSName "ReactDOM")

crossTarget in (Compile, fullOptJS) := file("js")
crossTarget in (Compile, fastOptJS) := file("js")
