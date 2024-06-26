# Vitaance Admin Panel V.2

## Development environment

- Next .js (14.2.4)
- React .js (^18),
- React-dom (^18),

## App environments

App runs at 3 environments: **local**, **staging** and **production**. All their keys are placed at the appropriate files: **.env.local**,  **.env.staging** and **.env.production**.

In the repository there is an **.env.example** file where you will find the example of the necessary variables, you can use this guide to create on your local file for  **.env** using the correct data for you local, staging or production.

## How to run development environment

In the terminal

```bash
# 1. Install dependencies
npm install

# 2. Run the project
# On local
npx dotenv -e .env next dev
```

After doing step two, copy and paste the generated path in your browser

## How to build the project

To build, select the environment (update the .env file) you want to use and run:

```bash
  npm run build
```

To start the server, select the environment (update the .env file) you want to use and run:
 
 ```bash
  npm run start
 ```
