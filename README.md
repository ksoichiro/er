# [WIP] er

ER model editor/viewer.

## Purpose

* Providing an open source ER modeling tool with following features.
    * Cross platform.
    * Open and readable data format.
    * Easy to integrate to command line operations.
* For me, learning Scala language.

## Build

```console
$ git clone https://github.com/ksoichiro/er.git
$ cd er/
$ npm install
$ sbt clean compile fastOptJS
$ electron .
```

## Roadmap

It's so far...  
It might be changed in the development.

### Step 1

* Basic features
    * Creating/editing models.
    * Listing models.
    * Saving to files.
    * No beautiful UI.

### Step 2

* Add more to models, but still bad UI. Should be patient.

### Step 3

* Improve UI.

### Step 4

* WYSIWYG editor. Ability to drag and connnect models.

### Step 5

* Add more practical, useful features for real development.
    * Export models to SQL files.
    * Import models from SQL create table statements.

### Step 6

* Add CLI tools.

## License

MIT &copy; Soichiro Kashima
