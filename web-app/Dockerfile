# pull official base image
FROM node:13.12.0-alpine

# create node user to make 'root' unavalable
WORKDIR /usr/src/app
RUN chown node:node ./
USER node

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY ["package.json", "package-lock.json*", "./"]
RUN rm -Rf node_modules
RUN npm cache clean --force
RUN npm clean-install

# add app
COPY . ./

# start app
CMD ["npm", "start"]

# expose port
EXPOSE 3000