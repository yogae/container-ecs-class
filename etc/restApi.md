# REST API(Representational State Transfer)

## REST API 구성

- http uri를 resouce(자원)로 봅니다.
- http method를 verb(행위)로 봅니다.

```http
GET      /user/1
{행위}    {자원}
```

## Rest API 특징

1. URI는 정보의 자원을 표현해야 한다.

- 리소스명은 동사보다는 명사를 사용

2. 자원에 대한 행위는 HTTP Method로 표현한다. 

3. 구분자(/)는 계층 관계를 나타내는 데 사용한다.

```http
# rest api 예시
POST /users # user 생성

GET /users # user 전체 정보

GET /users/1 # 첫번째 user 정보만 확인

PUT /users/1 # 첫번째 user 정보 변경

DELETE /users/1 # 첫번째 user 정보 삭제

# 다른 resource와 연관 uri 예시

POST /users/1/books # 첫번째 user의 book 생성

GET /users/1/books # 첫번째 user의 book 전체 정보

GET /users/1/books/1 # 첫번째 user의 첫번째 book 정보 확인

...
```