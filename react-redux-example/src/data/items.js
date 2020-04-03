let id = 1;

export default [
  {
    id: id++,
    title: `React`,
    image: `data:image/png;base64,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`,
    content: `In computing, React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.`
  },
  {
    id: id++,
    title: `React Native`,
    image: `https://miro.medium.com/max/900/1*SluXAlSPIxxWjwUsiqD2Kw.png`,
    content: `In computing, React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.`
  },
  {
    id: id++,
    title: `Node.js`,
    image: `https://cdn-images-1.medium.com/max/2000/1*aeWo6e6FC8InJwBl3TmpDw.jpeg`,
    content: `Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. Typically, JavaScript is used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML and run client-side by a JavaScript engine in the user's web browser. Node.js lets developers use JavaScript to write Command Line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web application development around a single programming language, rather than different languages for server side and client side scripts.`
  },
  {
    id: id++,
    title: `javascript`,
    image: `https://cdn-images-1.medium.com/max/1109/1*TWVs8hNCI7B7t2Y4tA-u1A.png`,
    content: `JavaScript often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.`
  },
  {
    id: id++,
    title: `Babel`,
    image: `https://ih1.redbubble.net/image.370343333.1917/pp,550x550.jpg`,
    content: `Babel or Babel.js is a free and open-source JavaScript compiler and configurable transpiler used in web development. Babel allows software developers to write source code in a preferred programming language or markup language and have it translated by Babel into JavaScript, a language understood by modern web browsers.`
  },
  {
    id: id++,
    title: `ES6`,
    image: `https://cdn-images-1.medium.com/max/1200/1*SL4sWHdjGR3vo0x5ta3xfw.jpeg`,
    content: `The 6th edition, officially known as ECMAScript 2015, was finalized in June 2015. This update adds significant new syntax for writing complex applications, including classes and modules, but defines them semantically in the same terms as ECMAScript 5 strict mode. Other new features include iterators and for/of loops, Python-style generators, arrow functions, binary data, typed arrays, collections (maps, sets and weak maps), promises, number and math enhancements, reflection, and proxies (metaprogramming for virtual objects and wrappers). The complete list is extensive.`
  },
  {
    id: id++,
    title: `Nginx`,
    image: `https://tr2.cbsistatic.com/hub/i/r/2017/09/28/3a9d4076-ba4c-4f6f-a5d8-161625cc8716/resize/770x/2db5d54233e54e1a7e45d1ce9a434cac/nginxhero.jpg`,
    content: `Nginx is a web server which can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache. The software was created by Igor Sysoev and first publicly released in 2004. A company of the same name was founded in 2011 to provide support and Nginx plus paid software.`
  },
  {
    id: id++,
    title: `AWS`,
    image: `https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png`,
    content: `Amazon Web Services (AWS) is a subsidiary of Amazon.com that provides on-demand cloud computing platforms to individuals, companies and governments, on a paid subscription basis. The technology allows subscribers to have at their disposal a virtual cluster of computers, available all the time, through the Internet. AWS's version of virtual computers emulate most of the attributes of a real computer including hardware (CPU(s) & GPU(s) for processing, local/RAM memory, hard-disk/SSD storage); a choice of operating systems; networking; and pre-loaded application software such as web servers, databases, CRM, etc. Each AWS system also virtualizes its console I/O (keyboard, display, and mouse), allowing AWS subscribers to connect to their AWS system using a modern browser. The browser acts as a window into the virtual computer, letting subscribers log-in, configure and use their virtual systems just as they would a real physical computer. They can choose to deploy their AWS systems to provide internet-based services for themselves and their customers.`
  },
  {
    id: id++,
    title: `Docker`,
    image: `https://i1.wp.com/wp.laravel-news.com/wp-content/uploads/2016/10/docker.png?resize=2200%2C1125`,
    content: `Docker is used to run software packages called "containers". Containers are isolated from each other and bundle their own application, tools, libraries and configuration files; they can communicate with each other through well-defined channels. All containers are run by a single operating system kernel and are thus more lightweight than virtual machines. Containers are created from "images" that specify their precise contents. Images are often created by combining and modifying standard images downloaded from public repositories.`
  },
  {
    id: id++,
    title: `Redis`,
    image: `https://adevait.com/wp-content/uploads/2017/12/redis-1.png`,
    content: `Redis is an open-source in-memory data structure project implementing a distributed, in-memory key-value database with optional durability. Redis supports different kinds of abstract data structures, such as strings, lists, maps, sets, sorted sets, hyperloglogs, bitmaps, streams and spatial indexes. The project is mainly developed by Salvatore Sanfilippo and is currently sponsored by Redis Labs.`
  },
  {
    id: id++,
    title: `PostgreSQL`,
    image: `data:image/png;base64,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`,
    content: `PostgreSQL, often simply Postgres, is an object-relational database management system (ORDBMS) with an emphasis on extensibility and standards compliance. It can handle workloads ranging from small single-machine applications to large Internet-facing applications (or for data warehousing) with many concurrent users; on macOS Server, PostgreSQL is the default database; and it is also available for Microsoft Windows and Linux (supplied in most distributions).`
  },
  {
    id: id++,
    title: `MongoDB`,
    image: `https://zdnet3.cbsistatic.com/hub/i/r/2018/02/16/8abdb3e1-47bc-446e-9871-c4e11a46f680/resize/370xauto/8a68280fd20eebfa7789cdaa6fb5eff1/mongo-db-logo.png`,
    content: `MongoDB is a cross-platform document-oriented database program that used to be free and open-source but has since changed to a proprietary license (Server Side Public License). Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemata. MongoDB is developed by MongoDB Inc.`
  },
  {
    id: id++,
    title: `MySQL`,
    image: `https://cdn-images-1.medium.com/max/1600/0*AhVo_3sCq-ft64ki.jpg`,
    content: `MySQL is an open source relational database management system (RDBMS). Its name is a combination of "My", the name of co-founder Michael Widenius's daughter, and "SQL", the abbreviation for Structured Query Language. The MySQL development project has made its source code available under the terms of the GNU General Public License, as well as under a variety of proprietary agreements. MySQL was owned and sponsored by a single for-profit firm, the Swedish company MySQL AB, now owned by Oracle Corporation. For proprietary use, several paid editions are available, and offer additional functionality.`
  },
  {
    id: id++,
    title: `lodash`,
    image: `https://www.agiliacenter.com/wp-content/uploads/2018/04/Lodash.png`,
    content: `Lodash is a JavaScript library which provides utility functions for common programming tasks using the functional programming paradigm.`
  },
  {
    id: id++,
    title: `Vue`,
    image: `https://cdn-images-1.medium.com/max/1200/1*-PlqbnwqjqJi_EVmrhmuDQ.jpeg`,
    content: `Vue.js is an open-source JavaScript framework for building user interfaces and single-page applications.`
  },
  {
    id: id++,
    title: `Angular JS`,
    image: `https://s3.amazonaws.com/coursetro/posts/171-full.png`,
    content: `AngularJS is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications. The JavaScript components complement Apache Cordova, a framework used for developing cross-platform mobile apps. It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications. (This flexibility has led to the acronym MVW, which stands for "model-view-whatever" and may also encompass model–view–presenter and model–view–adapter.) In 2014, the original AngularJS team began working on the Angular application platform.`
  }
];
