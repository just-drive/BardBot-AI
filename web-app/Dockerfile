# pull official base image
FROM node:13.12.0-alpine

# create node user to make 'root' unavalable
WORKDIR /usr/src/app
RUN chown node:node ./
#USER node
USER root

#### THIS IS FOR THE NODEJS SERVER ####
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install app dependencies
COPY ["package.json", "package-lock.json*", "./"]
RUN rm -Rf node_modules
RUN npm cache clean --force
RUN npm clean-install

# print node and npm version
RUN npm --version # v6.14.4
RUN node --version # v13.12.0

# add app
COPY . ./

### THIS IS FOR THE PYTHON SERVER ###
WORKDIR /usr/src/app/python-server
#USER root
RUN apk update
RUN apk add python3
RUN python3 --version
RUN pip3 install -r requirements.txt
#USER node
WORKDIR /usr/src/app

# start app
#CMD ["npm", "start"]
CMD ["sh", "startup.sh"]

# expose port
# nodejs
EXPOSE 3000 
# python
EXPOSE 8080 