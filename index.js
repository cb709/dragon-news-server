const express = require('express')
const app = express()
const port = process.env.PORT || 5000 ;
const cors = require('cors')

app.use(cors())

const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send('Hello World!!')
})

app.get('/categories', (req, res)=> {
    res.send(categories)
})
app.get('/category/:id', (req, res)=> {
    const id = req.params.id;
    const newsCategories = news.filter(category => category.category_id === id); 
    if(id == '08') {
        res.send(news);
    }else {
        res.send(newsCategories);
    }
})
app.get('/news/:id', (req, res)=> {
    const id = req.params.id;
    const selectedNews = news.find(news => news._id === id); 
    res.send(selectedNews)
})

app.get('/news', (req, res)=> {
    res.send(news)
})

app.listen(port, ()=>{
    console.log('Running: ', port)
})