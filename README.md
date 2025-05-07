<!-- PRESENTATION -->
<br />
<p align="center">
  <h1 align="center">Qventus - Take Home Challenge</h1>

  <p align="center">
    Solution proposal for the Qventus Frontend React Challenge
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Technical Specifications](#technical-specifications)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [File structure](#file-structure)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

Welcome to my solution proposal for the Qventus Take Home challenge! In this repository you will find my solution to the coding challenge of creating a react component that works as an password field that accept a list of password requirements.

### Technical Requirements

- [x] Using the React framework
- [x] React component should accept a list of password requirements as a prop:
  - [x] The list of requirements can be flexible (has 1 or more)
  - [x] The following password requirements must be implemented and available in the library:
    - [x] Has one or more of these special characters: !@#$%^&\*
    - [x] Has a number / digit
    - [x] Has an uppercase letter
    - [x] Has NO identical consecutive letters
  - [x] The component should be styled as shown in the GIF, but should be able to be extended
  - [x] There should be a way for us to validate your implementation - this could be automated testing, a reference build, whatever you’re comfortable with.

### Built With

For the development of this project, the main technologies I used were:

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [React Icons Kit](https://react-icons-kit.vercel.app/)
- [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vitest](https://vitest.dev/)

<!-- GETTING STARTED -->

## Getting Started

To download and run the project, please follow these steps:

### Prerequisites

Before running this project, make sure you have installed a [Node](https://nodejs.org/) version equal or higher than 22.15.0

### Installation

1. Clone the repo

```sh
git clone https://github.com/CitlalliDMG/qventus-th-custom-password-input.git
```

2. Install dependencies

```sh
npm install
```

3. Run the development server:

```sh
npm run start
```

4. Open the localhost at the port indicated in your terminal for example [http://localhost:5173](http://localhost:5173) with your browser to see the result.

### File structure

The project folder should contain the following files:

```text
./qventus-th-custom-password-input/
├── dist
├── node_modules
├── public
│   ├── vite.svg
├── src
│   ├── assets
│      ├── react.svg
│   ├── components
│      ├── Header.tsx
│      ├── PasswordField.tsx
│   ├── types
│      ├── passwordFieldTypes.ts
│   ├── utils
│      ├── passwordValidations.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts


```

<!-- USAGE EXAMPLES -->

## Usage

Once the project is running on the test server, you will see the password input interface with the current validations availables.

Try introducing different passwords to see the validations pass according the various criteria available, and modifies the array of options passed to the password input in the App.tsx file to see the validations change in the interface.

<!-- CONTRIBUTING -->

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/yourInitials_AmazingFeature`)
3. Commit your Changes (`git commit -m '[type] Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License.

<!-- CONTACT -->

## Contact

Citlalli Del Moral - [portfolio](https://citlallidmg.github.io/) - citlallidmg@gmail.com

Project Link: [https://github.com/CitlalliDMG/qventus-th-custom-password-input](https://github.com/CitlalliDMG/qventus-th-custom-password-input)
