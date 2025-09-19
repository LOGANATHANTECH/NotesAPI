# Note App API

This is a simple RESTful API for managing notes.  
Built with Node.js and Express.js.

---

## Base URL  
`http://localhost:3000/note`

---

## Endpoints

### GET /

- **Description:** Basic server health check.
- **Response:**  
  - Status: 200 OK  
  - Body: `"i am working"` (plain text)

---

### GET /note

- **Description:** Retrieve all notes.
- **Responses:**  
  - 200 OK: Returns a JSON array of notes.  
  - 204 No Content: No notes available, returns  
    ```
    {
      "message": "No notes found"
    }
    ```

---

### GET /note/:id

- **Description:** Retrieve a single note by ID.
- **Parameters:**  
  - `id` (Number, path param): Note ID.
- **Responses:**  
  - 200 OK: Returns the note object.  
  - 404 Not Found: If no note with given ID exists.  
    ```
    {
      "message": "No id Found or Enter valid id"
    }
    ```

---

### POST /note

- **Description:** Create a new note.
- **Request Body:** JSON with:  
  - `title` (String)  
  - `content` (String)
- **Responses:**  
  - Success: Plain text `"note added (-_-)"`  
  - 400 Bad Request: Missing required fields.  
    ```
    {
      "message": "title and content are required !"
    }
    ```

---

### PUT /note

- **Description:** Update an existing note by ID.
- **Request Body:** JSON with:  
  - `id` (Number)  
  - `title` (String, optional)  
  - `content` (String, optional)
- **Responses:**  
  - Success: Plain text `"note updated (-_-)"`  
  - 400 Bad Request: Missing/invalid fields.  
    ```
    {
      "message": "title or content is required with id !"
    }
    ```  
  - 404 Not Found: Note ID not found.  
    ```
    {
      "message": "id not found !"
    }
    ```  
  - 204 No Content: Attempt to update deleted note.  
    ```
    {
      "message": "you update after delete"
    }
    ```

---

### DELETE /note/:id

- **Description:** Delete a note by ID.
- **Parameters:**  
  - `id` (Number, path param): Note ID.
- **Responses:**  
  - 204 No Content: Successful deletion.  
    ```
    {
      "message": "Note deleted successfully"
    }
    ```  
  - 404 Not Found: Note not found.  
    ```
    {
      "message": "No id found to Delete !"
    }
    ```

---

## Installation
```
1. Clone the repository:  
2. npm i  
2. npm start  
```