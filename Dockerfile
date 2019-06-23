FROM mhart/alpine-node:10.12.0
WORKDIR /app
COPY . .
RUN yarn install
EXPOSE 3000
# EXPOSE는 호스트와 연결만 할 뿐 외부에 노출은 되지 않습니다. 
# 포트를 외부에 노출하려면 docker run 명령의 -p 옵션을 사용해야 합니다.
CMD ["node", "/app/bin/www.js"]