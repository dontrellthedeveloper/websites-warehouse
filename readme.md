<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/dontrellthedeveloper/websites-warehouse">
    <img src="images/logo2.png" alt="Logo" width="150" >
  </a>

<h3 align="center">Websites Warehouse - Node Express Application</h3>

  <p align="center">
    Websites Warehouse is a Node Express Application that has websites templates. This stack includes - Pug.js, Bootstrap, Node, MongoDB, Stripe and Heroku.
    <br />
    <a href="https://github.com/dontrellthedeveloper/websites-warehouse"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://websiteswarehouse.com/">View Demo</a>
    ·
    <a href="https://github.com/dontrellthedeveloper/websites-warehouse/issues">Report Bug</a>
    ·
    <a href="https://github.com/dontrellthedeveloper/websites-warehouse/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
<!--
    <li><a href="#roadmap">Roadmap</a></li>
-->
    <li><a href="#contributing">Contributing</a></li>
<!--
    <li><a href="#license">License</a></li>
-->
    <li><a href="#contact">Contact</a></li>
<!--
    <li><a href="#acknowledgments">Acknowledgments</a></li>
-->
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://websiteswarehouse.com)

<!-- Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `dontrellthedeveloper`, `websites-warehouse`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `Olivia Wilson Boutique`, `project_description` -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Pug][Pug.js]][Pug-url]
* [![Node][Node.js]][Node-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![MongoDB][MongoDB]][MongoDB-url]
* [![Stripe][Stripe]][Stripe-url]
* [![Heroku][Heroku]][Heroku-url]




<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->


## Getting Started


To get a local copy up and running follow the steps below.


<!--
### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install --legacy-peer-deps
  ```

-->

### Installation

1. Create a mongoDB atlas cluster, or add a local mongoDB database.
1. Sign up for SendGrid account. Create SendGrid Secret and Key.
3. Clone the repo
   ```sh
   git clone https://github.com/dontrellthedeveloper/websites-warehouse.git
   ```

4. Install NPM packages
   ```sh
   npm install 
   ```
6. Enter values in `.env` file
   ```js
   NODE_ENV=development
   PORT=3000
   DATABASE='{put your MongoDB connection string here}'
   DATABASE_LOCAL='{put your MongoDB connection string here}'
   DATABASE_PASSWORD='{put your MongoDB password here}'

   JWT_SECRET='{add JWT secret here}'
   JWT_EXPIRES_IN=90d
   JWT_COOKIE_EXPIRES_IN=90

   EMAIL_USERNAME='{put your email username here}'
   EMAIL_PASSWORD='{put your email password here}'
   EMAIL_HOST='{put your email host here}'
   EMAIL_PORT='{put your email post here}'

   EMAIL_FROM='{put your email address here}'

   SENDGRID_USERNAME='{put your SendGrid API key here}'
   SENDGRID_PASSWORD='{put your SendGrid password here}'

   STRIPE_SECRET_KEY='{put your Stripe key here}'
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Please sign up for an account to gain access to the user dashboard. The user dashboard gives you access to your purchase history and wishlist. 


[![Product Name Screen Shot][product-screenshot3]](https://websiteswarehouse.com/)




[![Product Name Screen Shot][product-screenshot2]](https://websiteswarehouse.com/)


_For more examples, please refer to the [website](https://websiteswarehouse.com/)_



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->

<!--

## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).




<p align="right">(<a href="#readme-top">back to top</a>)</p>

-->


<!-- CONTRIBUTING -->




## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- LICENSE -->

<!--
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

-->

<!-- CONTACT -->
## Contact

Dontrell Washington - [@dontrellthedev_](https://twitter.com/dontrellthedev_) - dontrellthedeveloper@gmail.com

Project Link: [https://github.com/dontrellthedeveloper/websites-warehouse](https://github.com/dontrellthedeveloper/websites-warehouse)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->

<!--
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>

-->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/dontrellthedeveloper/websites-warehouse.svg?style=for-the-badge
[contributors-url]: https://github.com/dontrellthedeveloper/websites-warehouse/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dontrellthedeveloper/websites-warehouse.svg?style=for-the-badge
[forks-url]: https://github.com/dontrellthedeveloper/websites-warehouse/network/members
[stars-shield]: https://img.shields.io/github/stars/dontrellthedeveloper/websites-warehouse.svg?style=for-the-badge
[stars-url]: https://github.com/dontrellthedeveloper/websites-warehouse/stargazers
[issues-shield]: https://img.shields.io/github/issues/dontrellthedeveloper/websites-warehouse.svg?style=for-the-badge
[issues-url]: https://github.com/dontrellthedeveloper/websites-warehouse/issues
[license-shield]: https://img.shields.io/github/license/dontrellthedeveloper/websites-warehouse.svg?style=for-the-badge
[license-url]: https://github.com/dontrellthedeveloper/websites-warehouse/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/dontrell-washington
[product-screenshot]: images/screenshot2.png
[product-screenshot2]: images/screenshot3.png
[product-screenshot3]: images/screenshot4.png
[Next.js]: https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Next-url]: https://nextjs.org/


[Netlify]: https://img.shields.io/badge/Netlify-111111?style=for-the-badge&logo=netlify&logoColor=00C7B7
[Netlify-url]: https://www.netlify.com/

[Heroku]: https://img.shields.io/badge/heroku-430098?style=for-the-badge&logo=heroku&logoColor=fff
[Heroku-url]: https://heroku.com/

[Node.js]: https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/

[Pug.js]: https://img.shields.io/badge/pug-A86454?style=for-the-badge&logo=pug&logoColor=white
[Pug-url]: https://redux.js.org/

[Firebase]: https://img.shields.io/badge/firebase-666666?style=for-the-badge&logo=firebase&logoColor=FFCA28
[Firebase-url]: https://firebase.google.com/

[MongoDB]: https://img.shields.io/badge/Mongo%20DB-333333?style=for-the-badge&logo=mongodb&logoColor=47A248
[MongoDB-url]: https://www.mongodb.com/

[Nginx]: https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white
[Nginx-url]: https://www.nginx.com/

[DigitalOcean]: https://img.shields.io/badge/DigitalOcean-0080FF?style=for-the-badge&logo=digitalocean&logoColor=white
[DigitalOcean-url]: https://www.digitalocean.com/

[Stripe]: https://img.shields.io/badge/stripe-333333?style=for-the-badge&logo=stripe&logoColor=008CDD
[Stripe-url]: https://stripe.com/

[AntDesign]: https://img.shields.io/badge/AntDesign-0170FE?style=for-the-badge&logo=ant-design&logoColor=white
[AntDesign-url]: https://ant.design/

[Cloudinary]: https://img.shields.io/badge/Cloudinary-a1a0a1.svg?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAA21BMVEVHcEz0tS8OL1oOL1oAcboOL1oAcboKL2QJRYIOL1r0shsAcboOL1oGKVoAcboAcboEcbgAcbsHUYwKLFsBcroMLVrbgSbbgibzsyIAcbsAcboAcbwOL1oOL1oAcLwEcbj2rhsOL1oOL1rolCHy2GYAcboAcbsAcboAcboILFsAcLrggiPcgiYKLVvzsyDrnCD64GXqrBzy2WXysSL832X0shsAcbqffU4AcboAcbr9hQ/uph70shvagify2GXbgib0shvy2GXy2GXy2Wfy2WcUebPyAAHbgiby2GXUbCP0AAAARnRSTlMABHRvxwW/Cwdp/TFlGSR7X1IBEkQlvrddb40XQV4RWQ+GfiSroJU70jBjb81SZxYZLNVWJOOtHrFNDEW8n27ut7bux4Rvn2ei3QAAAO1JREFUeNpiIBkAGp0GNAdiKJyMHbcds7bW9v0vVPPjxnnvl+e3AhxelShWmj660fhlkSicAmD0FPsE81CH7J+oSQ/FttIit/uP1wnau5d+58P+oA+zbCOAAyXdFm0tfKj9Dh6f3qZwAsC9Fu6KCaz/1kaWNfqavcBE25olWrotNiyrMft7h7bi7fPgfXH++VdxDe09efr8Wp8vl43qo/ruGduSqgMwLsusnI4niwXcwYzYiYWr66w73Fwuc5muAiG5cmEWw1zKC8mUcjk2GdAdxzEdU5ZN2YxMWYoieaepqvp2GoZq6IbaFeD/Yw281BWp+nFYjQAAAABJRU5ErkJggg==
[Cloudinary-url]: https://ant.design/

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
