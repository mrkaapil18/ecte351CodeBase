import express from 'express';

const app = express();

app.get('/api/admin/test',(req,res) => {
    const arrayOfObjects = [
        {
            id: 1,
            title: "First Object",
            content: "This is the content of the first object."
        },
        {
            id: 2,
            title: "Second Object",
            content: "This is the content of the second object."
        },
        {
            id: 3,
            title: "Third Object",
            content: "This is the content of the third object."
        },
        {
            id: 4,
            title: "Fourth Object",
            content: "This is the content of the fourth object."
        },
        {
            id: 5,
            title: "Fifth Object",
            content: "This is the content of the fifth object."
        },
        {
            id: 6,
            title: "Sixth Object",
            content: "This is the content of the sixth object."
        },
        {
            id: 7,
            title: "Seventh Object",
            content: "This is the content of the seventh object."
        },
        {
            id: 8,
            title: "Eighth Object",
            content: "This is the content of the eighth object."
        },
        {
            id: 9,
            title: "Ninth Object",
            content: "This is the content of the ninth object."
        },
        {
            id: 10,
            title: "Tenth Object",
            content: "This is the content of the tenth object."
        }
    ];
    res.send(arrayOfObjects);
})

const PORT = process.env.PORT || 2008;

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
});

