require('dotenv').config()
const express = require('express')
// import express from "express"
const app = express()
const port = 4000   //3000 port pe listen kr lo

const githubData = {
    "login": "ArvindKumar6299",
    "id": 148259787,
    "node_id": "U_kgDOCNZDyw",
    "avatar_url": "https://avatars.githubusercontent.com/u/148259787?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ArvindKumar6299",
    "html_url": "https://github.com/ArvindKumar6299",
    "followers_url": "https://api.github.com/users/ArvindKumar6299/followers",
    "following_url": "https://api.github.com/users/ArvindKumar6299/following{/other_user}",
    "gists_url": "https://api.github.com/users/ArvindKumar6299/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ArvindKumar6299/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ArvindKumar6299/subscriptions",
    "organizations_url": "https://api.github.com/users/ArvindKumar6299/orgs",
    "repos_url": "https://api.github.com/users/ArvindKumar6299/repos",
    "events_url": "https://api.github.com/users/ArvindKumar6299/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ArvindKumar6299/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Arvind Kumar",
    "company": null,
    "blog": "",
    "location": "Greater Noida",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 25,
    "public_gists": 0,
    "followers": 1,
    "following": 5,
    "created_at": "2023-10-17T16:22:23Z",
    "updated_at": "2024-02-14T14:31:05Z"
  }

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) =>{
    res.send('YadavJi')
})

app.get('/login',(req,res)=>{
    res.send("<h1>Please Login </h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

