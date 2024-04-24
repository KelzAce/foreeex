<!-- Back to Top Navigation Anchor -->

<a name="readme-top"></a>

<!-- Project Shields -->
<div align="center">
  
  [![Contributors][contributors-shield]][contributors-url]
  [![Forks][forks-shield]][forks-url]
  [![Stargazers][stars-shield]][stars-url]
  [![Issues][issues-shield]][issues-url]
  [![MIT License][license-shield]][license-url]
  [![Twitter][twitter-shield]][twitter-url]
</div>

<div>
  <p align="center">
    <a href="https://github.com/KelzAce/foreeex#readme"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!-- <a href="https://blogolicious.cyclic.app/">Demo</a> -->
    ·
    <a href="https://github.com/KelzAce/foreeex/issues">Report Bug</a>
    ·
    <a href="https://github.com/KelzAce/foreeex/issues">Request Feature</a>
  </p>
</div>

<!-- About the API -->

## Forexxx

&mdash; a wonderful Foreign Exchange API built by <a href="https://www.github.com/KelzAce">Ikechi</a>.

<p align="right"><a href="#readme-top">back to top</a></p>

### Built With:

<div align="center">

![Javascript][javascript]
![Node.js][node]
![Nest.js][nest]
![Docker][docker]

</div>

<p align="right"><a href="#readme-top">back to top</a></p>

---

<!-- Project Requirements -->

## Requirements

<details>

<summary> <strong>Requirements for the project</strong> </summary>

- [x] A GitHub repository containing all microservices within a monorepo structure.
- [x] A `docker-compose.yml` file at the repository root to facilitate local deployment and testing.
- [x] A Postman collection or Swagger files for API testing and exploration.

<p align="right"><a href="#readme-top">back to top</a></p>

---

</details>

<br>

## Development

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Nest.js](https://nestjs.com/)
- [Docker] (https://docker.io/)

#### Clone this repo

```sh
git clone https://github.com/KelzAce/foreeex.git
```

#### Install project dependencies

```sh
npm install
```

or

```sh
yarn install
```

#### Update .env with [example.env](https://github.com/KelzAce/foreeex/blob/master/example.env)

#### Run a development server for each application


#### Api-gateway

```sh
npm run start:dev
```


#### Auth/User Application

```sh
npm run start:dev auth
```

#### Wallet Application

```sh
npm run start:dev wallet
```

#### Transaction Application
```sh
npm run start:dev transaction
```

#### Rate Application
```sh
npm run start:dev rate
```

or

#### Api-gateway

```sh
yarn run start:dev
```

#### Auth/User Application
```sh
yarn run start:dev auth
```

#### Wallet Application
```sh
yarn run start:dev wallet
```

#### Transaction Application
```sh
yarn run start:dev transaction
```

#### Rate Application
```sh
yarn run start:dev rate
```


#### For testing, run

```sh
npm run test
```

or

```sh
yarn run test
```

#### Entities

#### User


| field       |  data_type         | constraints      |
| ----------- | ------------------ | ---------------- |
| id          | number             | required, unique |
| firstName   | string             | required         |
| lastName    | string             | required         |
| email       | string             | required, unique |
| password    | string             | required         |
| wallet      | ref - Wallet       |                  |
| transaction | ref - Transaction  |                  |


#### Wallet

| field       |  data_type         | constraints      |
| ----------- | ------------------ | ---------------- |
| id          | string             | required, unique |
| currency    | string             | required         |
| balance     | string             | required         |
| createdAt   | Date               | required, unique |
| user        | ref - User         | required         |
| transaction | ref - Transaction  |                  |

#### Transaction

| field        | data_type     | constraints             |
| ------------ | ------------- | ----------------------- |
| id           | string        | required, unique        |
| type         | string        | required                |
| amount       | number        |                         |
| owner        | string        |                         |
| user         | ref - User    | required                |
| wallet       | ref - Wallet  |                         |

#### Rate

| field        | data_type            | constraints             |
| ------------ | ------------------   | ----------------------- |
| id           | string               | required, unique        |
| type         | string               | required                |
| amount       | number               |                         |
| price        | string               |                         |
| transaction  | ref - Transaction    | required                |


<p align="right"><a href="#readme-top">back to top</a></p>

---

## Usage

<!-- ### Base URL

- https://blogolicious.cyclic.app -->

### Creating a user

- Route: api//auth/register
- Method: POST

:point_down: Body

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "joe@mail.com",
  "password": "Password0!"
}
```

:point_down: Response

```json
{
  "status": "success",
  "data": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "joe@mail.com",
    "wallet": [],
    "transaction": [],
    "_id": { " "}
  }
}
```

<p align="right"><a href="#readme-top">back to top</a></p>

---

### Logging in

- Route: api/auth/login
- Method: POST

:point_down: Body

```json
{
  "email": "mightyjoe",
  "password": "Password0!"
}
```

:point_down: Response

```json
{
  "token": {token},
  "username": "mightyjoe",
  "name": "John"
}
```

<p align="right"><a href="#readme-top">back to top</a></p>

---

### Create a Wallet

- Route: api/wallet/createWallet
- Method: POST
- Header
  - Authorization: Bearer {token}

:point_down: Body

```json
{
  "currency": "NGN",
}
```

:point_down: Response

```json
{
  "status": "success",
  "data": {
    "currency": "NGN",
  }
}
```

<p align="right"><a href="#readme-top">back to top</a></p>

---

### Get Wallet

- Route:  api/wallet/getBalance
- Method: GET
- Header
  - Authorization: Bearer {token}

:point_down: Body

:point_down: Response

- Query params:

  - id

<p align="right"><a href="#readme-top">back to top</a></p>

---

#### Get Transaction
- Route:   api/transaction/History
- Method: GET
- Header
  - Authorization: Bearer {token}

:point_down: Response

- Query params:
  - id


## Lessons Learned

While building this project, I learned about:

- Test Driven Development
- Testing the backend
- Database Modelling
- Database Management
- Debugging
- User Authentication
- User Authorization
- Documentation
- Microservices Architecture 

<p align="right"><a href="#readme-top">back to top</a></p>

---

<!-- License -->

## License

Distributed under the MIT License. See <a href="https://github.com/KelzAce/foreeex/blob/master/LICENSED.md">LICENSE</a> for more information.

<p align="right"><a href="#readme-top">back to top</a></p>

---

<!-- Contact -->

## Contact

- Twitter - [@KelzAce](https://twitter.com/KelzAce)
- email - ikechigreat@gmail.com

<!-- Project Link: [ForeeexMarket](https://github.com/tobisupreme/blogolicious) -->

<p align="right"><a href="#readme-top">back to top</a></p>

---

<!-- Acknowledgements -->

## Acknowledgements

This project was made possible by:

- [Mastering Backend](https://masteringbackend.com/)
- [Othneil Drew's README Template](https://github.com/othneildrew/Best-README-Template)
- [Ileriayo's Markdown Badges](https://github.com/Ileriayo/markdown-badges)
- [markdown-emojis](https://github.com/markdown-templates/markdown-emojis)

<p align="right"><a href="#readme-top">back to top</a></p>
<!-- Markdown Links & Images -->

[contributors-shield]: https://img.shields.io/github/contributors/KelzAce/foreeex.svg?style=for-the-badge
[contributors-url]: https://github.com/KelzAce/foreeex/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/KelzAce/foreeex.svg?style=for-the-badge
[forks-url]: https://github.com/KelzAce/foreeex/tree/master/network/members
[stars-shield]: https://img.shields.io/github/stars/KelzAce/foreeex.svg?style=for-the-badge
[stars-url]: https://github.com/KelzAce/foreeex/stargazers
[issues-shield]: https://img.shields.io/github/issues/KelzAce/foreeex.svg?style=for-the-badge
[issues-url]: https://github.com/KelzAce/foreeex/issues
[license-shield]: https://img.shields.io/github/license/KelzAce/foreeex.svg?style=for-the-badge
[license-url]: https://github.com/KelzAce/foreeex/blob/master/LICENSED.md
[twitter-shield]: https://img.shields.io/badge/-@Kelzgod-1ca0f1?style=for-the-badge&logo=twitter&logoColor=white&link=https://twitter.com/Kelzgod
[twitter-url]: https://twitter.com/Kelzgod
[javascript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1C
[node]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Nest]: https://img.shields.io/badge/nest.js-%23404d59.svg?style=for-the-badge&logo=nest&logoColor=%2361DAFB
[Docker]: https://img.shields.io/badge/docker.io-%23404d59.svg?style=for-the-badge&logo=nest&logoColor=%2361DAFB
[Postgres]: https://img.shields.io/badge/POSTGRESQL-%234ea94b.svg?style=for-the-badge&logo=posgresdb&logoColor=white
