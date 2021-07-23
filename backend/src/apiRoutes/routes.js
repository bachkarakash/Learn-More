const express = require('express');
const mongoose = require('mongoose');
const Course = require('../models/course');
const Topic = require('../models/topic');
const User = require('../models/user')
const Content = require('../models/content');
const Subtopic = require('../models/subtopic');
const bcryptjs = require('bcryptjs');
const multer = require("multer");


let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
        console.log("in storage dest");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' && ext !== '.png' && ext !== '.mp4') {
            return cb(res.status(400).end('only jpg, png, mp4 is allowed'), false);
        }
        cb(null, true)
    }
});

const upload = multer({ storage: storage }).single("file");

const router = express.Router();

router.get('/', (request, response) => {
    response.send("Router Test")
});



router.post('/user/register', async (request, response) => {
    console.log(request.body);
    try {
        const { name, email, mobile, password } = request.body;

        if (!name || !email || !mobile || !password) {
            return response.status(406).json({ error: "Mandatory fields are empty" });
        }
        const isPresent = await User.findOne({ email: email });

        if (isPresent) {
            return response.status(409).json({ error: "Email already present" });
        }

        const user = new User({ name, email, mobile, password });

        const newUser = await user.save();

        return response.status(200).json({ message: "User Added" });

    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ error: error });
    }
});

router.post('/user/login', async (request, response) => {

    try {
        let token;
        const { email, password } = request.body;

        if (!email || !password) {
            return response.status(400).json({ error: "All fields are mandatory" });
        }

        const user = await User.findOne({ email: email });

        const isAuthorized = await bcryptjs.compare(password, user.password); //apply hash on first argument(password) and then compare with second argument user.password

        if (isAuthorized) {
            token = await user.getToken();
            console.log(token);
            response.cookie("user token", token, {
                expires: new Date(Date.now() + 86400000),
                httpOnly: true
            })
            return response.status(200).json({ message: "Logged in.." })
        }
        else {
            return response.status(203).json({ message: "Login error" });
        }
    }
    catch (error) {
        console.log(error);
        return response.status(403).json({ error: error });
    }
});

router.put('/user/editUser', async (request, response) => {

    try {
        const { name, email, mobile, password } = request.body;
        const user = await User.findOneAndUpdate({ email: email }, request.body);
        if (!user) {
            return response.status(404).json({ error: "User Not found" });
        }
        return response.status(200).json({ message: "User detailes updated" });

    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ error: error });
    }
});



router.get('/user/get', async (request, response) => {

    try {
        const users = await User.find();
        return response.json(users);
    }
    catch (error) {
        console.log(error);
        return response.json(error);
    }

});

router.post("/uploadfiles", (req, res) => {
    // console.log("inside backend upload", req);
    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err });
        }
        return res.json({ success: true, url: res.req.file.path, fileName: res.req.file.filename });
    });
});

router.post('/addContent', async (request, response) => {

    try {
        console.log("in add content");
        const { userEmail, courseName, title, content } = request.body;
        console.log("request", content, title, courseName, userEmail);

        const validUser = await User.findOne({ email: userEmail, role: "Writer" });

        if (!validUser) {
            return response.status(401).json({ error: "User is not authorized to add content" });
        }

        const userId = mongoose.Types.ObjectId(validUser._id);

        console.log("user id", userId);

        let coursePresent = await Course.findOne({ name: courseName });

        if (!coursePresent) {
            coursePresent = await new Course({ name: courseName }).save();
        }

        const courseId = mongoose.Types.ObjectId(coursePresent._id);

        console.log("course", courseId);
        // let topicPresent = await Topic.findOne({name: topicName, courseId: courseId});

        // if(!topicPresent) {
        //     topicPresent = await new Topic({name: topicName, courseId: courseId}).save();
        // }

        // const topicId = mongoose.Types.ObjectId(topicPresent._id);
        // let subtopicPresent = await Subtopic.findOne({name: subtopicName, topicId: topicId});

        // if(!subtopicPresent) {
        //     subtopicPresent = await new Subtopic({name: subtopicName, topicId: topicId}).save();
        // }

        // const subtopicId = mongoose.Types.ObjectId(subtopicPresent._id);

        console.log("info", content, title, courseId, userId);
        const newContent = await new Content({ content: content, title: title, courseId: courseId, userId: userId }).save();

        return response.status(200).json({ message: newContent });

    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ error: error });
    }

});

router.get('/course/getAll', async (req, res) => {

    try {
        const courses = await Course.find();
        return res.json(courses);
    }
    catch (error) {
        return res.status(500).json({ error: error });
    }
})

router.get('/content/getAll', async (request, response) => {

    try {
        const contents = await Content.find().populate('courseId').populate('userId');
        var jsonList = []
        // console.log(contents)
        for (var i = 0; i < contents.length; i++) {

            jsonList.push({
                "courseId": contents[i].courseId._id,
                "courseName": contents[i].courseId.name,
                "userId": contents[i].userId._id,
                "userName": contents[i].userId.name,
                "userTokens": contents[i].userId.tokens,
                "title": contents[i].title,
                "contentId": contents[i]._id,
                "content": contents[i].content,
                "createdOn": contents[i].createdAt
            })
        }
        console.log(jsonList)

        return response.json(jsonList);
    }
    catch (error) {
        return response.status(500).json({ error: error });
    }
})

router.get('/content/getContent/:contentId', async (request, response) => {

    try {
        const contentId = mongoose.Types.ObjectId(request.params.contentId);

        const contents = await Content.findOne({ _id: contentId }).populate('courseId').populate('userId');


        console.log(contents)

        const jsonList = {
            "courseId": contents.courseId._id,
            "courseName": contents.courseId.name,
            "userId": contents.userId._id,
            "userName": contents.userId.name,
            "userTokens": contents.userId.tokens,
            "title": contents.title,
            "contentId": contents._id,
            "content": contents.content,
            "createdOn": contents.createdAt
        }

        console.log(jsonList)

        return response.json(jsonList);
    }
    catch (error) {
        return response.status(500).json({ error: error });
    }
})

router.get('/content/getAll/:courseId', async (request, response) => {

    try {
        const courseId = mongoose.Types.ObjectId(request.params.courseId);

        const contents = await Content.find({ courseId: courseId }).populate('courseId').populate('userId');
        var jsonList = []
        // console.log(contents)
        for (var i = 0; i < contents.length; i++) {

            jsonList.push({
                "courseId": contents[i].courseId._id,
                "courseName": contents[i].courseId.name,
                "userId": contents[i].userId._id,
                "userName": contents[i].userId.name,
                "userTokens": contents[i].userId.tokens,
                "title": contents[i].title,
                "contentId": contents[i]._id,
                "content": contents[i].content,
                "createdOn": contents[i].createdAt
            })
        }
        console.log(jsonList)

        return response.json(jsonList);
    }
    catch (error) {
        return response.status(500).json({ error: error });
    }
})

// router.get('/course/get', async (request,response) => {

//     try {
//         const course = await Course.find();
//         return response.json(course);
//     }
//     catch(error) {
//         console.log(error);
//         return response.status(500).json({error: error});
//     }
// });

// router.get('/course/topic/get', async(request,response) => {

//     try {
//         const courseName = request.body.courseName;
//         const course = await Course.findOne({name: courseName});

//         if(!course) {
//             return response.status(404).json({message: "No course present"});
//         }
//         const courseId = mongoose.Types.ObjectId(course._id);

//         const topics = await Topic.find({courseId: courseId});

//         return response.json(topics);
//     }
//     catch(error) {
//         console.log(error);
//         return response.status(500).json({error: error});
//     }
// });

// router.get('/course/topic/subtopic/get', async(request,response) => {

//     try {
//         const topicName = request.body.topicName;
//         const topic = await Topic.findOne({name: topicName});

//         if(!topic) {
//             return response.status(404).json({message: "No topic present"});
//         }

//         const topicId = mongoose.Types.ObjectId(topic._id);

//         const subtopics = await Subtopic.find({topicId: topicId});

//         return response.json(subtopics);
//     }
//     catch(error) {
//         console.log(error);
//         return response.status(500).json({error: error});
//     }
// });

// router.get('/course/topic/subtopic/content/get', async(request,response) => {

//     try {
//         const subtopicName = request.body.subtopicName;
//         const subtopic = await Subtopic.findOne({name: subtopicName});

//         if(!subtopic) {
//             return response.status(404).json({message: "No topic present"});
//         }

//         const subtopicId = mongoose.Types.ObjectId(subtopic._id);

//         const contents = await Content.find({subtopicId: subtopicId}).populate('userId');

//         return response.json(contents);
//     }
//     catch(error) {
//         console.log(error);
//         return response.status(500).json({error: error});
//     }
// });


// router.post('/testRelation', async (request,response) => {
//     try {
//         const course = new Course({name: request.body.course});

//         let res = await Course.findOne({name: request.body.course});

//         if(!res) {
//             res = await course.save();
//         }

//         const courseId = mongoose.Types.ObjectId(res._id);
//         const topic = new Topic({name: request.body.topic,courseId: courseId});

//         let topicRes = await Topic.findOne({name: request.body.topic,courseId: courseId});

//         if(!topicRes) {
//             topicRes = await topic.save();
//         }
//         const topics = await Topic.find().populate('courseId');
//         response.send(topics);
//     }
//     catch(error) {
//         console.log(error);
//     }

// });

// router.get('/getTopics', async (request,response) => {
//     const topics = await Topic.find().populate('courseId');
//     response.send(topics);
// });


module.exports = router;