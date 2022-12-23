# Find A Coach

You can visit the project from here https://find-coach-vue3.web.app
# Table of Contents
- <a href="#about">About</a>
- <a href="#features">Features</a>
- <a href="#project-structure">Project Structure</a>
- <a href="#application-pictures">Application Pictures</a>

# <p id="about">About</p>

Find a Freelancer is a web application that allows users to look for the right freelancers to get the job done or register themselves as a freelancer. The application offers viewing the list of freelancers without registration and even to contact them without having to register on the site which is a convenience. 

# <p id="features">Features</p>

- <strong>Authentication</strong>
    - Login
        - log in with existing account

    - Register
        - create new account

- <strong>Freelancers</strong>
    - Coach
        - browse already registered coaches
        - view a specific coach (detailed information)
        - register as a coach

- <strong>Requests</strong>
    - Messages
        - view incoming messages
        - contact/send a message for a specific coach

    - Unauthorized user
        - browse all registered coaches
        - view details for a specific coach
        - contact/send a message to coach

# <p id="project-structure">Project Structure</p>
- pages
    - auth - <strong>UserAuth.vue</strong>
        - login - login component for user authentication
        - register - register component for user authentication
    - coaches
        - responsible for details page of each coach, list of all coaches, contact form
    - requests 
        - handles logic related to the requests section
            - proposal - it handles logic related to the proposals section like coach registration form, requests received
- components
    - layout
        - the header - holds the navigation bar with all router links, also logout method
- requests
    - request item - holds the structure (the view) for each request
- coaches
    - coach form - holds the form with all submit logic needed for successfully created coach
    - coach item - holds the structure (the view) for each coach
    - filter coach - filtering all coaches with checkboxes
- store
    - vuex store - global state management for the entire application
- ui
    - base components (shared components among the application)
# <p id="application-pictures">Application Pictures</p>

## Desktop
![home](https://user-images.githubusercontent.com/80749603/209162217-c8db6c13-9e07-4c76-ba76-7c13fac0504b.png)

![details](https://user-images.githubusercontent.com/80749603/209162287-f1f9025f-bf33-48ae-ac65-b8b343223fe3.png)

![contact](https://user-images.githubusercontent.com/80749603/209162346-a125e676-216d-4d06-9262-69033b74727b.png)

![proposals](https://user-images.githubusercontent.com/80749603/209162635-dc7150d0-6f73-4752-98b8-3c29857c535a.png)

![auth](https://user-images.githubusercontent.com/80749603/209162403-6fc55a1e-69bd-4477-a0c8-4c4b3bd46b6f.png)

![profile](https://user-images.githubusercontent.com/80749603/209162483-82fb32e3-2bb6-447e-b58f-c3b7c3b7c8db.png)

![edit](https://user-images.githubusercontent.com/80749603/209162550-778fc8af-5baf-4a8a-97ac-0b6814c8c3f4.png)

## Mobile

![home_m](https://user-images.githubusercontent.com/80749603/209163166-d64e6407-b6de-4af3-b46b-3f6d68076ab0.png)

![home_m_nav](https://user-images.githubusercontent.com/80749603/209163234-c7c21c50-b9d2-45a3-9d3a-c0147fb7b184.png)

![profile_m](https://user-images.githubusercontent.com/80749603/209163337-2da2bbf8-92e1-4563-8314-dc6ba61694c2.png)

![proposals_m](https://user-images.githubusercontent.com/80749603/209163420-58c417e5-fca0-4fdf-bc9d-1a65f494b337.png)

![delete_m](https://user-images.githubusercontent.com/80749603/209163502-90620c87-03e0-49db-ba0b-89c0ad218ebb.png)
