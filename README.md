# CheckPoint2 - FrontEnd2 - CTD Digital House

## Our Stack
<div style="display: inline_block"><br>
  <img align="center" alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="Bootstrap" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg">
  <img align="center" alt="Sass" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/sass/sass-original.svg"> 
  <img align="center" alt="JS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="jQuery" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/jquery/jquery-plain.svg">
</div>

## 📖 Introduction

At the end of the 2nd quarter of the CTD bootcamp by Digital House we had to create a TO-DO List. 
We had to gather all the knowledge acquired over the Front-End 2 coursework namely:
- DOM Manipulation
- Using fetch() to consume public available APIs
- Storing Information with LocalStorage

## 👨‍🎤 Goals
The Project's goal was that the user could create Tasks, adding to a list of cards with tasks whose still
should be completed and tasks already completed, and this way being able to manipulate completion state, or remove tasks you want. In another part of the application
tasks should be presented from an API, where these tasks could be listed, manipulated and deleted by the user.


Our group decided to elevate the challenge and make it more complete, doing everything in the same application, where tasks were brought in from API and saved in localStorage, with tasks that user could create later.
One of the biggest challenges was to join these two parts to work as one, therefore new concepts were studied and used in this application, such as, Object.keys to obtain all the keys present in the localStorage and so be able to fetch the data of each task and manipulate them. Another new concept was the object
MutationObserver that allowed us to monitor the changes present in the DOM elements, facilitating the creation of a SPA with only jQuery and JS.
And also the use of jQuery to facilitate manipulation of elements in the DOM, form's validation to create new tasks and all types of events present in application.

## 🎯 Funcionalities
- Add Tasks
- Remove Tasks
- Edit Tasks
- Delete Tasks
- LocalStorage
- API Consuming compatibilities

## 🌀 Future Improvement

The project meets all the functionalities required by the School, however, it can, and must be further improved with the advancement of knowledge acquired by the group during the rest of course.

### 🎛 Running the Project

#### Start the project and Install the dependencies

```bash
npm install
```

#### Stylesheet files
##### Path directory
```bash
cd src/css
```
##### Compile Sass' files
```bash
sass -w .
```
<hr>
Made with 💜 By <br>
[Dafne Barbosa](https://github.com/DafneBarbosa),<br>
[Diego Decrescenzo](https://github.com/diegodecrescenzo),<br>  
[Gabriel Gomes](https://github.com/GabrielGPena793),<br> 
[Katherine Duarte](https://github.com/katamarieth),<br>
[Vitor Dutra](https://github.com/vitordutra),<br>
[Wallace Souza](https://github.com/WallaceCS21)
