//make routes
//use that routes at index

import { Router } from "express";

let firstRoute=Router()

firstRoute
.route("/")
.get((req, res, next) => {
    console.log(req.body)
    console.log("a");
})

.post((req, res, next) => {
    console.log("b");
});

firstRoute
.route("/job")
.get((req, res, next) => {
    console.log("c");
})

firstRoute
.route("/:fasdf/a/:id2")
.get((req, res, next) => {
    console.log("dynamic params");
    console.log(req.params);
})



export default firstRoute