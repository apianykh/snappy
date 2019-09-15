# Snappy React Exercise

Developed with love and under a guide of [Snappy Developers Exercise](https://github.com/ArrDez/snappy/blob/master/docs/Snappy_Developers_Exercise.pdf)

## Quick Start

```bash
# Clone the repository
git clone https://github.com/ArrDez/snappy

# Go inside the directory
cd snappy

# Go inside the directory
cd snappy

# Install dependencies
yarn (or npm install)

# To start webpack development mode
yarn dev (or npm run dev)

# To start express
yarn server (or npm run server)

# To start webpack prodictopn mode
yarn build (or npm run build)

# To run tests
yarn test (or npm run test)
```

### Docker-compose

In the wild, it is running on Digitalocean, with help of docker-compose. The app is serving through Nginx reverse proxy. Or on your host, if you wish 

```shell
docker-compose up -d
```

### Some description
Total time spent on this task approximately 20h, with reading the docs. Must admit that this my first app on react, over the past two years. My main framework currently is Vue.js, and this fact added me some difficulties :)

App builded from scratch. Webpack config and ESLint was picked up from some boilerplate with some changes.

There are two separated dirs. `client` for client code, written in react. And `server`, for server code respectively, written on express.js. Express js is serving static files from `public` dir, and `/api/*` routes for data. Webpack transpiling client code to match ES5 environment, and put the bundle into the public dir. 
As data storage, i've picket mongo db. Migration script from json included in `docker_files/volunes/docker-entrypoint-initdb.d`. 

### Future improvements
- Add errors handlers
- Make some CD pipeline
- Add react-router, push search query to browser history to allow hard reload
- Some SSR maybe?
- Add a lot of tests