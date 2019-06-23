# Docker

Docker는 소프트웨어를 컨테이너라는 표준화된 유닛으로 패키징하며, 이 컨테이너에는 라이브러리, 시스템 도구, 코드, 런타임 등 소프트웨어를 실행하는 데 필요한 모든 것이 포함되어 있습니다. Docker를 사용하면 환경에 구애받지 않고 애플리케이션을 신속하게 배포 및 확장할 수 있으며 코드가 문제없이 실행될 것임을 확신할 수 있습니다.

가상 머신 자체는 완전한 컴퓨터라 항상 게스트 OS를 설치해야 합니다. 그래서 이미지 안에 OS가 포함되기 때문에 이미지 용량이 커집니다.

Docker는 반가상화보다 좀더 경량화된 방식입니다. 그림 1-6와 같이 게스트 OS를 설치하지 않습니다. Docker 이미지에 서버 운영을 위한 프로그램과 라이브러리만 격리해서 설치할 수 있고, OS 자원(시스템 콜)은 호스트와 공유합니다. 이렇게 되면서 이미지 용량이 크게 줄어들었습니다.

## Docker 설치

- [on Window](https://docs.docker.com/docker-for-windows/install/)
- [on Mac](https://docs.docker.com/docker-for-mac/install/)

## Docker 간단 사용법

```
docker build

docker images

docker ps

docker run

docker run -i -t --name hello ubuntu /bin/bash

docker attach hello

docker exec hello echo "Hello World"
```

## Dockerfile

```
FROM ubuntu:14.04
MAINTAINER Foo Bar <foo@bar.com>

RUN apt-get update
RUN apt-get install -y nginx
RUN echo "\ndaemon off;" >> /etc/nginx/nginx.conf
RUN chown -R www-data:www-data /var/lib/nginx

VOLUME ["/data", "/etc/nginx/site-enabled", "/var/log/nginx"]

WORKDIR /etc/nginx

CMD ["nginx"]

EXPOSE 80
EXPOSE 443
```

## Docker 파일

- FROM: 어떤 이미지를 기반으로 할지 설정합니다. Docker 이미지는 기존에 만들어진 이미지를 기반으로 생성합니다. <이미지 이름>:<태그> 형식으로 설정합니다.
- MAINTAINER: 메인테이너 정보입니다.
- RUN: 셸 스크립트 혹은 명령을 실행합니다.
    - 이미지 생성 중에는 사용자 입력을 받을 수 없으므로 apt-get install 명령에서 -y 옵션을 사용합니다(yum install도 동일).
    - 나머지는 nginx 설정입니다.
    - VOLUME: 호스트와 공유할 디렉터리 목록입니다. docker run 명령에서 -v 옵션으로 설정할 수 있습니다. 예) -v /root/data:/data는 호스트의 /root/data 디렉터리를 Docker 컨테이너의 /data 디렉터리에 연결합니다.
- CMD: 컨테이너가 시작되었을 때 실행할 실행 파일 또는 셸 스크립트입니다.
- WORKDIR: CMD에서 설정한 실행 파일이 실행될 디렉터리입니다.
- EXPOSE: 호스트와 연결할 포트 번호입니다.

## Docker Compose

## Reference
- http://pyrasis.com/docker.html