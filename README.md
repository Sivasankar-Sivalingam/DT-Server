# DT-Server
It provides the Backend codeBase for Project DT.

## Steps to run Project DT-Server

1. GitClone or Download the [DT-Server](https://github.com/Sivasankar-Sivalingam/DT-Server).

2. To start with an NodeJs application, we are going to need node.js. 
If node has been already installed kindly skip to step 3. Else the next step is to install node.js. We can get that installed from the below website: https://nodejs.org/en/

3. After installing NodeJs, Open the node.js command prompt.

4. Get into the project folder. i.e, run the cmd `cd  project_folder_path`.

5. Now install all the dependecies and devDependencies for the project by running the cmd `npm install`, this will in-trun create a folder `node_modules` in the project structure and it will contain all the dependent files.

6. Now the DT-Server - Node app is ready to run. But still we need to run the DB to get the app run functionaly. So now we need to refer to the MongoDb app: [DT-MongoDb](https://github.com/Sivasankar-Sivalingam/DT-MongoDb) and follow the instructions to get it up and running. 

7. Run the cmd `npm run dev` form the DT-Server. Navigate to `http://localhost:3000/`. The Project DT-Server app will up and runnning in that URL. But we are not going to use this URL to work around as it acts as an REST API.

8. Now return to  [Project DT](https://github.com/Sivasankar-Sivalingam/DT).
