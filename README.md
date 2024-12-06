# **AspirePath - Your Path, Our Purpose**

AspirePath is a career mentorship platform designed to connect individuals with mentors to guide their career decisions, provide tailored resources, and support them throughout their career journey.

---

## **Table of Contents**
1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup Instructions](#setup-instructions)
5. [Usage](#usage)
6. [Challenges](#challenges)
7. [Future Goals](#future-goals)
8. [Contributors](#contributors)

---

## **Overview**
AspirePath helps users:
- Navigate career paths with guidance from experienced mentors.
- Access resources such as career assessments, job market insights, and workshops.
- Get personalized support tailored to their goals and interests.

Repository Link: [AspirePath GitHub Repository](https://github.com/dahiy-bytes-github/AspirePath-1)

---

## **Features**
- **User Registration and Profiles**: Create and manage personal profiles with career goals.
- **Mentor Matching**: Match users with mentors based on expertise and user preferences.
- **Resource Library**: Explore career-focused articles, videos, and workshops.
- **CRUD Functionality**:
  - Create: Add new users, mentors, and resources.
  - Read: View profiles, mentor lists, and career resources.
  - Update: Modify user and mentor information.
  - Delete: Remove profiles or mentorship connections.
- **Responsive Design**: Optimized for use on all devices.

---

## **Technologies Used**
- **Frontend**: React, Tailwind CSS, Material UI, Bootstrap.
- **Backend**: JSON Server for API simulation.
- **Routing**: React Router.
- **HTTP Requests**: Axios.

---

## **Setup Instructions**
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/dahiy-bytes-github/AspirePath-1.git
   cd AspirePath-1
2. **Set Up JSON Server**
   Create a `db.json` file in the project root with the following initial structure:
   ```json
   {
     "users": [],
     "mentors": [],
     "resources": []
   }
 3.**Start the JSON server:**  
     npm json-server --watch db.json --port 8001
4.**3Run the Project:**  
    npm start  
    <br>
---
5. **Access the Application**  

    Frontend: Open http://localhost:3000.  

    Backend API: Open http://localhost:8001.  

## **Usage** <br>
**Home Page**: Learn about the platform and get started.  

**Mentor List**: Browse mentors and view detailed profiles.  

**User Profile**: Create, view, and update your career profile.  

**Resources**: Explore and utilize career-enhancing tools.  

**Admin Features**: Use CRUD operations for managing users, mentors, and resources.  

## **Challenges**<br>
-Designing an intuitive UI for diverse user needs.  

-Implementing real-time mentor matching.  

-Handling data updates and synchronization between components and the backend.  

-Implementing efficient mentor-matching logic.<br>

## **Future Goals** <br>

-Introduce real-time chat for user-mentor communication.  

-Implement AI-based career suggestions and insights.  

-Expand the platform with global mentor networks.  

-Develop a mobile application for better accessibility.  

## **Contributors**<br>

-Abdullahi Abdi Dahiye: Program Coordinator  

-Brannon Simiyu: Career Pathway Advisor  

-Dennis Maina Waithuki: Career Pathway Advisor  

-Wilder Ondieki: Career Pathway Advisor  
