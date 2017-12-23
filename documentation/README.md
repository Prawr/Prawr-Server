# Prawr API
This is the api documentation.
---

### <span style="color:red">GET</span> `/user/name-available/:name`
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


### <span style="color:red">GET</span> `/user/email-available/:email`
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