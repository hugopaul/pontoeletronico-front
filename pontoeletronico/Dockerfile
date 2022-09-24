FROM node as node
WORKDIR /app
COPY / ./
COPY package*.json ./

RUN npm install && \
    npm run build 
COPY . .

FROM nginx:latest 
WORKDIR /app
RUN mkdir /usr/share/nginx/html/pontoeletronico/
COPY --from=node /app/dist/pontoeletronico/ /usr/share/nginx/html/pontoeletronico/

EXPOSE 82

##docker run -d -p 80:80 --name ponto-eletronico-angular  hugopaul/ponto-eletronico-angular
##docker build -t=hugopaul/ponto-eletronico-angular .