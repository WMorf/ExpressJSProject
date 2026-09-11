# Express.js Project

Wesley Morford

| Folder | Contents |
|---|---|
| `express-tutorial/` | Steps 1–9 of the Express.js tutorial — routing, route params, query params, middleware, error handling, static files, and `express.Router()` |
| `express-assignment/` | Products API — the graded assignment |

Built on Express 5.2.1. Note that Express 5 uses a stricter path parser than Express 4: the tutorial's `app.all('*', ...)` catch-all is written as `app.all('/{*splat}', ...)` here.

## Running it

```bash
cd express-assignment
npm install
node app.js
```

Server listens on `http://localhost:8080`. Each tutorial file is standalone — run them individually with `node routes.js`, `node middleware.js`, and so on. Stop the running server with Ctrl+C before starting another, or port 8080 will already be in use.

## Products API

### `GET /products`

Returns the full list.

```json
[
  { "id": 1, "name": "Keyboard", "price": 79.99 },
  { "id": 2, "name": "Monitor", "price": 249 }
]
```

### `POST /products`

Adds a product. Requires header `Content-Type: application/json`.

```json
{ "name": "Webcam", "price": 59.99 }
```

Returns `201` with the created object, including its assigned `id`.

**Validation**

| Field | Rule |
|---|---|
| `name` | Required. Non-empty string. |
| `price` | Required. Number of 0 or higher — a numeric string like `"59.99"` is rejected. |

**Responses**

| Status | Meaning |
|---|---|
| `200` | GET succeeded |
| `201` | Product created |
| `400` | Invalid or missing field, or malformed JSON |
| `404` | No such route |
| `415` | `Content-Type` was not `application/json` |
| `500` | Unhandled server error |

Errors return the reason plus the expected shape:

```json
{
  "error": "Price must be a number of 0 or higher",
  "received": "string",
  "expected": {
    "name": "string (non-empty)",
    "price": "number (0 or higher)"
  }
}
```

## Testing with Postman

For `POST`, set the Body tab to **raw** and change the format dropdown to **JSON** — that is what sets the `Content-Type` header. Leaving it on Text returns a `415`.

Cases worth running:

- `GET /products` — returns the starting list
- `POST` a valid product, then `GET` again — the list has grown
- `{ "name": "", "price": 10 }` — 400, name rejected
- `{ "name": "Mouse", "price": "19.99" }` — 400, price is a string
- `{ "name": "Desk", "price": -5 }` — 400, negative price
- `{ "name": "Webcam"` — 400, malformed JSON caught by the error middleware
- `GET /nonsense` — 404

## Notes

Products are held in an in-memory array, so the list resets to its starting four values every time the server restarts. There is no database.
