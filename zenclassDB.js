use zenclassDB

// Database collection users
db.createCollection("users");
db.users.insertMany([
    {
        userid:1,
        name:"Amar",
        email:"amar088@gmail.com",
        Age: 22,
    },
    {
        userid:2,
        name:"Suresh",
        email:"Suresh@gmail.com",
        age:23
    },
     {
        userid:3,
        name:"Paul",
        email:"Paul@gmail.com",
        age:25
    },
     {
        userid:4,
        name:"Sangeeta",
        email:"Sangeeta@gmail.com",
        age:24
    },
     {
        userid:5,
        name:"Rashmika",
        email:"Rashmika@gmail.com",
        age:23
    }
    ])
    db.users.find();
    
    // Database for codekata data
    db.createCollection("codekata");
    db.codekata.insertMany([
        {
            userid:1,
            SolvedQue:40
        },
        {
            userid:2,
            SolvedQue:50
        },
        {
            userid:3,
            SolvedQue:47
        },
        {
            userid:4,
            SolvedQue:66
        },
        {
            userid:5,
            SolvedQue:39
        }
    ]);
    db.codekata.find();
    
    // Database for topics
    db.createCollection("topics");
    db.topics.insertMany([
    {
        userid:1,
        topic:"HTML",
        date:"2-Oct-2022"
    },
    {
        userid:2,
        topic:"CSS",
        date:"20-Oct-2022"
    },
    {
        userid:3,
        topic:"CSS",
        date:"22-Oct-2022"
    },
    {
        userid:4,
        topic:"Javascript",
        date:"16-Oct-2022"
    },
    {
        userid:5,
        topic:"HTML",
        date:"11-Oct-2022"
    },
    ]);
    db.topics.find();
    
    // Attendance Database
     db.createCollection("attendance");
     db.attendance.insertMany([
    {
        userid:1, 
        attendance:"present"
    },
    {
        userid:2, 
        attendance:"absent"
    },
    {
        userid:3, 
        attendance:"present"
    },
    {
        userid:4, 
        attendance:"absent"
    },
    {
        userid:5, 
        attendance:"present"
    },
    ])
    db.attendance.find();
    
    // Task database
    db.createCollection("tasks");
    db.tasks.insertMany([
    {
        userid:1,
        status: "Submitted",
        Date:""
    },
    {
        userid:2,
        status: "Not Submitted",
        Date:""
    },
    {
        userid:3,
        status: "Not Submitted",
        Date:""
    },
    {
        userid:4,
        status: "Submitted",
        Date:""
    },
    {
        userid:5,
        status: "Submitted",
        Date:""
    },
    ])
    
    // Mentor database
    db.createCollection("mentors");
    db.mentors.insertMany([
    {
        mentorid:1,
        mentorname:"Ravi",
        mentor_email:"ravi@gmail.com",
        mentee_count: 15
    },
      {
        mentorid:2,
        mentorname:"Praveen",
        mentor_email:"praveen@gmail.com",
        mentee_count:20
    },
      {
        mentorid:3,
        mentorname:"Suman",
        mentor_email:"suman@gmail.com",
        mentee_count:10
    },
      {
        mentorid:4,
        mentorname:"Kishor",
        mentor_email:"kishor@gmail.com",
        mentee_count:18
    },
      {
        mentorid:5,
        mentorname:"Riyaz",
        mentor_email:"riyaz@gmail.com",
        mentee_count:25
    }
    ])

// Drives database
    db.createCollection("companydrives");
      db.comapnydrives.insertMany([
    {
        userid:1,
        drive_date:new Date("5-oct-2022"),
        company:"TCS"
    },
     {
        userid:2,
        drive_date:new Date("18-oct-2022"),
        company:"HCL"
    },
     {
        userid:3,
        drive_date:new Date("23-oct-2022"),
        company:"Amazon"
    },
     {
        userid:4,
        drive_date:new Date("28-oct-2022"),
        company:"Wipro"
    },
     {
        userid:5,
        drive_date:new Date("2-nov-2022"),
        company:"ITC"
    }
    ])
    
// Find all the company drives which appeared between 15 oct-2022 and 31-oct-2022
db.comapnydrives.find({$or:[{drive_date:{$gte:new Date("15-oct-2022")}},
{drive_date:{$lte:new Date("31-0ct-2022")}}]})

// Find all the company drives and students who are appeared for the placement.
db.comapnydrives.aggregate([
    {
        $lookup: {
              from:"companydrives",
              localField:"userid",
              foreignField:"userid",
              as :"userinfo"
             }
    },
    {
        $project:{
            _id:0,
            "userinfo.name":1,
            company:1,
            drive_date:1,
            "userinfo.email":1,
            "userinfo.userid":1
        }
    }
    ])

// Find the number of problems solved by the user in codekata
db.codekata.find({}, {userid:1, SolvedQue : 1});
    
// Find all the mentors with who has the mentee's count more than 15
 db.mentors.find({mentee_count : {$gte: 15 }});
 

 
 