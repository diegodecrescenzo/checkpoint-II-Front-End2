## CheckPoint2 - FrontEnd2 - CTD Digital House

#### Stacks Utilizadas no Projeto
<div style="display: inline_block"><br>
  <img align="center" alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="Bootstrap" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg">
  <img align="center" alt="Sass" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/sass/sass-original.svg"> 
  <img align="center" alt="JS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="jQuery" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/jquery/jquery-plain.svg">
</div>

##

For the conclusion of the 2nd Bimester of the CTD course, the project proposed by Digital House was to create a TO-DO list, where we should integrate all the knowledge
acquired over the Front-End 2 classes. Project's goal was that the user could create Tasks, adding to a list of cards with tasks whose still
should be completed and tasks already completed, and this way being able to manipulate completion state, or remove tasks you want. In another part of the application
tasks should be presented from an API, where these tasks could be listed, manipulated and deleted by the user.

<br>

Our group decided to elevate the challenge and make it a little more complete, doing everything in the same application, where tasks were brought in from API and saved in localStorage, with tasks that user could create later.
One of the biggest challenges was to join these two parts to work as one, therefore new concepts were studied and used in this application, such as, Object.keys to obtain all the keys present in the localStorage and so be able to fetch the data of each task and manipulate them. Another new concept was the object
MutationObserver that allowed us to monitor the changes present in the DOM elements, facilitating the creation of a SPA with only jQuery and JS.
And also the use of jQuery to facilitate manipulation of elements in the DOM, form's validation to create new tasks and all types of events present in application.

<br>

The project meets all the functionalities required by the School, however, it can, and must be further improved with the advancement of knowledge acquired by the group during the rest of course.

<br>

We hope you like it...


#### The next steps must be followed

##### Command to Start the project and Install dependencies
```
npm install
```

##### And commands to compiling stylesheet files
###### Path directory
```
cd src/css
```
###### Compiling files with sass
```
sass -w .
```

