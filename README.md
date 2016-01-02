# [WIP] er

ER model editor/viewer.

## Purpose

* Providing an open source ER modeling tool with following features.
    * Cross platform.
    * Open and readable data format.
    * Easy to integrate to command line operations.
* For me, learning Scala language.

## Prerequisites

* JDK: 1.8
* sbt: 0.13.6
* npm: 3.3.12

## Build

```console
$ git clone https://github.com/ksoichiro/er.git
$ cd er/
$ npm install
$ sbt clean compile fastOptJS
$ npm start
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

    Copyright 2015 Soichiro Kashima

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
