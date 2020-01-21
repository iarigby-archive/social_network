## advantages
- publish/subscribe
- 1 click docker setup
- admin panel
- easy authentication


## todo
- add restrictions


## setup

2. update anonymous profile rights to secure installation
```json
{
  "controllers": {
    "auth": {
      "actions": {
        "login": true,
        "checkToken": true,
        "getCurrentUser": true,
        "getMyRights": true
      }
    }
  }
}
```

3. create indices for all the users
