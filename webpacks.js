/*
**************   API's  ************

Purpose: APIs allow developers to access the functionality of a software system or service without needing
to understand its internal workings. They provide a layer of abstraction, making it easier to
integrate different software components.

Ex: 
Weather Data APIs => Retrieves current weather conditions for a specified location.
Cloud Storage APIs (Amazon S3 API) => Provides scalable object storage in the cloud.
Payment Gateway APIs (stripe API) => Enables businesses to accept and manage online payments.

************** WEBPACKS ************


Webpack is a tool used in web development to bundle, or package, all the resources and files of a
project into a final optimized output. It takes JavaScript files, CSS stylesheets, images,
and other assets, and transforms them into a format that's efficient for the web to load.

tool => bundle/package => resesources/files of project => final optimized output

Some core concepts of webpack are:

1. Entry
2. Output
3. Loaders
4. Plugins
5. Mode

1.  Entry: An entry point defines which module webpack should use to start building out its internal dependency graph.
    The entry point’s default value is ./src/index.js, but in the webpack configuration., you can specify a
    different or multiple entry points by setting an entry property within this file.

2.  Output: The output property indicates webpack where to emit the bundles it creates and tells the way to name these files.
    By default, its value is ./dist/main.js for the main output file and it is ./dist folder for any other
    generated file, but we can change this part of the process by specifying an output field in our configuration.

3.  Loaders: Since webpack only understands JavaScript and JSON files. Loaders process other types of files and after that,
    it converts them into the valid modules which can be consumed by our application, and add them to the dependency graph.
    a) The test property
    b) The use property

4.  Pluging: While loaders are used to preprocess certain types of modules, plugins can be used to carry out a wider range of
    tasks like an injection of environment variables, asset management, and bundle optimization.

    In order to use a plugin, we have to require() it and add it to the plugins array. Plugins can be customized
    through options. Since a plugin can be used multiple times in a configuration for different purposes, we need
    to create an instance of it by calling it with the new operator.

5.  Mode: We can enable webpack’s built-in optimizations that correspond to each environment by setting the mode parameter to either
    development,
    production,
    or none.
    Its default value is production.
*/