# Day 13: Express.js Request and Application Methods

- **`app.path()`**:
  - Returns the root path of the application where it is executed.

- **`req.fresh`**:
  - `true` if the client's cache is fresh server sends `304 Not Modified` if true.

- **`req.stale`**:
  - `true` if the client's cache is outdated; server sends updated content with `200 OK`.
