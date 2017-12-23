# Prawr API
This is the api documentation.
---

### ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) GET `/user/name-available/:name`
Returns if a username is still available for use.
**Parameters**

| Parameter | Description |
| -- | -- |
| `name` | The name of the user to check

**Example Response**
```json
{
    "name": "demo",
    "available": true
}
```

### ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) GET `/user/email-available/:email`
Returns if an email is still available for use.
**Parameters**

| Parameter | Description |
| -- | -- |
| `email` | The email of the user to check

**Example Response**
```json
{
    "email": "demo",
    "available": true
}
```