# 🎓 Student Platform Backend

A role-based educational backend system powered by **Node.js**, **Express**, **MongoDB**, and **Google Gemini AI**.  
Supports students, teachers, parents, and admin roles — with token-based authentication and AI-powered lesson planning.

---

## 🚀 Features

- 🔐 **Authentication** with JWT & refresh tokens
- 👥 **Role-based access control** (admin, teacher, student, parent)
- 📚 **Course & Assignment** creation and retrieval
- 🤖 **AI Lesson Plan Generator** (Google Gemini)
- 🧠 Clean architecture with Controllers, Routes, Services, Middleware
- 📦 MongoDB integration using Mongoose
- 🧪 Tested via Postman
- 🌐 CORS, Morgan, Dotenv support

---

## 🏗 Folder Structure

student-platform-back-end/
├── server.js                  # ✅ App entry point
├── .env                       # ✅ Secrets and config
├── package.json               # ✅ Project metadata
├── README.md                  # ✅ Project documentation
├── swagger.json               # ✅ OpenAPI 3.0 spec file ✅ Required Deliverable
├── scripts/
│   └── exportSwagger.js       # ✅ Swagger export script (optional but useful)

├── src/
│   ├── config/
│   │   └── db.js              # ✅ MongoDB connection

│   ├── controllers/           # ✅ Route logic (separation of concerns)
│   │   ├── authController.js
│   │   ├── courseController.js
│   │   ├── assignmentController.js
│   │   └── aiController.js

│   ├── models/                # ✅ Mongoose schemas
│   │   ├── User.js
│   │   ├── Course.js
│   │   └── Assignment.js

│   ├── routes/                # ✅ Express routes
│   │   ├── authRoutes.js
│   │   ├── courseRoutes.js
│   │   ├── assignmentRoutes.js
│   │   └── aiRoutes.js

│   ├── middleware/            # ✅ Middleware
│   │   ├── authMiddleware.js
│   │   └── roleMiddleware.js

│   ├── services/
│   │   └── googleGeminiService.js # ✅ AI integration (well-abstracted)

│   └── utils/
│       └── responseHandler.js # ✅ Unified API responses




### 🔑 Authentication Flow

| Endpoint                     | Method | Access                     |
|------------------------------|--------|----------------------------|
| POST /api/v1/auth/register    | POST   | Register (admin, teacher, student, parent) |
| POST /api/v1/auth/login       | POST   | Get accessToken + refreshToken             |
| POST /api/v1/auth/refresh-token | POST | Refresh expired token                       |
| POST /api/v1/auth/logout      | POST   | Invalidate refresh token                    |

             


             📚 Core Routes

    
Courses Route	     Method	    Access
/api/v1/courses	     POST	    Teacher only
/api/v1/courses	     GET	    Teacher, Student
           
           Assignments
        
       Route	                              Method	Access
/api/v1/assignments	                      POST	                       Teacher only
/api/v1/assignments/course/:courseId	  GET	        Teacher, Student
                
                Users

       Route	               Method	Access
/api/v1/users?role=teacher	    GET	    Admin only

             Gemini AI

            Route	                          Method	Access
/api/v1/ai/generate-lesson-plan     	       POST  	Teacher only

             ✨ Powered By
             Node.js
             MongoDB
             Google Gemini API
             Postman


              📄 License
This project is open source and free to use.

       📧 Contact
       Built with ❤️ by Sofiya
      Email: sofiyasin190@gmail.com
       Telegram: @wisdom0746



       ## 🎥 Demonstration Video

Check out the demo of the **Student Platform Backend** here:

[![Demo Video]("
https://www.awesomescreenshot.com/video/42800632?key=6cfd9a24b7d073f6a6d6ed015cd276b2")
