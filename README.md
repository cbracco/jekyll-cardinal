# jekyll-cardinal

A boilerplate for Jekyll using the [Cardinal LESS framework](https://github.com/cbracco/cardinal).

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)

# Getting Started

The following instructions will help you get up and running, so that you can start using this project from your local machine.

## Prerequisites

This project depends on some software that must already be installed on your machine before proceeding.

- [Git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git) (Mac users should already have this)
- [Ruby](https://www.ruby-lang.org/en/documentation/installation/) (Mac users should already have this)
- [Bundler](http://bundler.io/)

  After installing Git and Ruby, you can install Bundler by running the following command(s)*:

  ```
  gem install bundler
  ```

  *Mac users may need to use `sudo gem install bundler` instead.

- [NodeJS](http://nodejs.org/) (Use [the installer](http://nodejs.org/download/))
- [Bower](http://bower.io/)

  After installing Git, Ruby, and Node, you can install Bower by running the following command(s)*:

  ```
  npm install -g bower
  ```

  *Mac users may need to use `sudo npm install -g bower` instead.

## Installation

Once you have the above tools installed, you can [clone this repository](http://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository#Cloning-an-Existing-Repository) to your local machine, where you will be making your changes.

1. Create a directory for this project on your machine, navigate to it, and clone this repository from GitHub into your directory by running the following command(s):

  ```
  cd path/to/your/projects/folder
  mkdir bigroomstudios.com; cd bigroomstudios.com
  git clone https://github.com/BigRoomStudios/bigroomstudios.com.git .
  ```

2. Install project dependencies by running the following command(s):

  ```
  bundle
  npm install
  bower install
  ```

3. Build the site and spin up a local server by running the following command(s) from your terminal:

  ```
  gulp
  ```

4. Navigate to [http://127.0.0.1.xip.io:9999](http://127.0.0.1.xip.io:9999) in your browser and begin working!*

  *This project uses [BrowserSync](http://www.browsersync.io/) and [xip.io](http://xip.io/) to automatically refresh your web browser on save, and to synchronize file changes and basic browser interactions (scrolling, clicking) across multiple devices. After running `gulp` in the terminal, you will see an “External URL” (e.g. [http://192.168.1.114.xip.io:9999](http://192.168.1.114.xip.io:9999)) that you can use for your various devices. Simply navigate to this URL in the browser of another device connected to your network, and watch your changes and interactions happen across multiple devices at the same time!



