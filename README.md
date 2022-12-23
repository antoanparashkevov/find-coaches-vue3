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
![home](https://user-images.githubusercontent.com/80749603/209372584-924981fb-67ee-4ca2-bdd8-61a5a81630e0.png)

![details](https://user-images.githubusercontent.com/80749603/209372625-b8f6b745-af37-49d6-9635-b802c12ce8c6.png)

![contact](https://user-images.githubusercontent.com/80749603/209372744-1ae00530-3ad0-472e-ae21-5c274b4ea9b1.png)

![register](https://user-images.githubusercontent.com/80749603/209372793-1c29f7d6-3c4a-4af4-87b9-c80e35229570.png)

![requests](https://user-images.githubusercontent.com/80749603/209372837-6bf7fbd6-389d-44e4-b653-bf700c8da3f3.png)
