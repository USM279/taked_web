<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/obadasakarya/taked-portal">
    <!-- You can optionally place a logo URL here -->
    <!-- <img src="images/logo.png" alt="Logo" width="80" height="80"> -->
  </a>

  <h3 align="center">Taked Portal (تأكيد)</h3>

  <p align="center">
    تأسيس شركات في دبي والإمارات | رخص وإقامة مستثمر - تأكيد
    <br />
    A comprehensive full-stack web platform for establishing companies, acquiring commercial licenses, and processing investor residencies in Dubai and the UAE.
    <br />
    <a href="https://github.com/obadasakarya/taked-portal"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/obadasakarya/taked-portal/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/obadasakarya/taked-portal/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
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
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#scripts">Scripts</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

Taked (تأكيد) is a premier full-stack service portal architected to drastically simplify the complex process of corporate setups in the United Arab Emirates. The platform empowers budding entrepreneurs and large-scale investors alike to seamlessly acquire commercial licenses, investor residencies, and handle A-to-Z business services digitally.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

The project uses a powerful, modern tech stack incorporating both a highly-interactive React frontend and an Express-powered backend, guaranteeing performance and reliable data handling:

* [![React][React.js]][React-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![Vite][Vite]][Vite-url]
* [![TailwindCSS][TailwindCSS]][TailwindCSS-url]
* [![Node.js][Node.js]][Node-url]
* [![Express.js][Express.js]][Express-url]
* [![Firebase][Firebase]][Firebase-url]

(*UI Components are powered by **shadcn/ui**, animations via **Framer Motion**, and forms handling via **react-hook-form*. Additionally, uses Zod for validation and EmailJS for direct communications.)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js and npm installed on your machine
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/obadasakarya/taked-portal.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Set up your environment variables
   Duplicate `.env.example` to `.env` or `.env.local` and add your Firebase and Backend API configurations.
4. Run the development environment
   ```sh
   npm run dev
   ```

*Note: The project contains a `server/` directory running Express.js for backend services. Ensure you configure and run the backend locally if modifying server-dependent features.*

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SCRIPTS -->
## Scripts

- `npm run dev` - Start the Vite frontend development server
- `npm run build` - Create a production build of the frontend
- `npm run build:dev` - Create a development build
- `npm run preview` - Locally preview the frontend production build
- `npm run lint` - Run ESLint across the codebase

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Initial React + Vite Architecture
- [x] Integrate TailwindCSS and shadcn/ui
- [x] Configure Firebase & EmailJS
- [x] Setup Node.js / Express Backend
- [x] Deploy Platform & Secure SEO Metrics
- [ ] Implement User Portal Dashboard
- [ ] Extend Localization (Multi-Language Support)

See the [open issues](https://github.com/obadasakarya/taked-portal/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

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
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Obada Sakarya - [@obadasakarya](https://github.com/usm279)

Project Link: [https://github.com/usm279/taked_web](https://github.com/usm279/taked_web)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[Vite]: https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E
[Vite-url]: https://vitejs.dev/
[Firebase]: https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black
[Firebase-url]: https://firebase.google.com/
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/
