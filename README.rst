
=======================
Robotice Mobile Client
=======================

Hybrid mobile client for https://github.com/robotice/robotice-control and https://github.com/robotice/robotice
Based on Ionic framework with Apache Cordova and Phonegap.

Dependencies
-----------
Node.js, NPM, Ionic, Apache Cordova, Phonegap, Bower, Gulp, Android SDK (for Android emulating), XCode and iPhone simulator (for iOS emulating)

Install Ionic

.. code-block:: bash

    npm install -g cordova ionic

Usage
-----
Development in browser

.. code-block:: bash

    ionic serve

Add platform to devstack

.. code-block:: bash 
    
    ionic platform add ios
    ionic platform add android

Build app for platforms(iOS and Android)

.. code-block:: bash

    ionic build ios
    ionic build android

Run simulator 

.. code-block:: bash

    ionic emulate ios
    ionic emulate android

Error logging

Press "c" on running ionic development server, for see error log in server console.

Docs
----

* Ionic CSS components http://ionicframework.com/docs/components/
* Ionic icons http://ionicons.com/
* Ionic CLI http://ionicframework.com/docs/ionic-cli-faq/
* Ionic JS API http://ionicframework.com/docs/api/

Read more
---------

* http://docs.robotice.org
* http://docs.control.robotice.org
* https://github.com/robotice/robotice
* https://github.com/robotice/robotice-control
