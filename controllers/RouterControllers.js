const express = require('express');
const router = express.Router();
const notes = [];
const bodyParser = require('body-parser');
const { parseInt } = require('lodash');


router.use("/", bodyParser.json())

router.get('/', (req, res) => {
    if (notes.length === 0) {
        return res.status(204).send({ "message": "No notes found" }); // optional
    }
    res.status(200).send(notes);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id != NaN && id < notes.length + 1) {

        

        const note = notes.find(el => el.id == id);
        if (note) {
            return res.status(200).send(note);
            
        }
         return res.status(200).send(notes[id-1]);
       
    
    
    
    } else {
        return res.status(404).send({ "message": "No id Found or Enter valid id" });
    }
});

router.post('/', (req, res) => {
    const { title, content } = req.body;

    if (title && content) {

        notes.push({ "id": notes.length + 1, "title": title, "content": content });
    } else {
        return res.status(400).send({ "message": " title and content are required !" });
    }
    res.send("note added (-_-)");
});

router.put('/', (req, res) => {
    const newNote = req.body;
    const propertyCount = Object.keys(newNote).length;

    if (newNote && (propertyCount < 4 && propertyCount > 0) && ((newNote.title || newNote.content) && newNote.id)) {
       
        if (newNote.id < notes.length + 1) {
            const oldValue = notes.find((element) => { return element.id == newNote.id });
           
            if (oldValue.id) {
                
                if (newNote.title) {
                    console.log(newNote.title);

                    oldValue.title = newNote.title;
                } else if (newNote.content) {
                    oldValue.content = newNote.content;
                }
                oldValue.title = newNote.title
                notes[oldValue.id - 1] = oldValue
                res.send("note updated (-_-)");
            }else{
                return res.status(204).send({"message":"you update after delete"});
            }
        } else {
            return res.status(404).send({ "message": "id not found !" });
        }
    } else {
        return res.status(400).send({ "message": " title or content is required with id !" });
    }
});

router.delete("/:id", (req, res) => {
    const id = req.params.id
    console.log(id);


    if (notes.find((element) => { return element.id == id })) {
        notes[id - 1] = { "message": "This Note was Deleted you only" }
        return res.status(204).send({ "message": "Note deleted successfully" });
    } else {
        return res.status(404).send({ "message": "No id found to Delete !" });
    }

});

module.exports = router;