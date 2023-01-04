# 0x04. Typescript
================

This repo is included in Specializations - Web Stack programming ― Back-end Course of Holberton School. We will cover the `Typescript` language

![Logo](https://www.howtogeek.com/wp-content/uploads/2021/05/laptop-with-terminal-big.png?height=200p&trim=2,2,2,50)

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://intranet.hbtn.io/rltoken/aX7Gkwy_SjB_XijDudIwkg "explain to anyone"), **without the help of Google**:

*   Basic types in Typescript
*   Interfaces, Classes, and functions
*   How to work with the DOM and Typescript
*   Generic types
*   How to use namespaces
*   How to merge declarations
*   How to use an ambient Namespace to import an external library
*   Basic nominal typing with Typescript

Resources
---------

**Read or watch**:

*   [TypeScript in 5 minutes](https://intranet.hbtn.io/rltoken/HfycOAryDcML-UBtDoUdaA "TypeScript in 5 minutes")
*   [TypeScript documentation](https://intranet.hbtn.io/rltoken/bWrVUKXkt6lJgpZ5vahDMw "TypeScript documentation")

Configuration Files
-------------------

Please use these files for the following tasks.

### `package.json`

```
{
  "name": "typescript_dependencies",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start-dev": "webpack-dev-server --open",
    "build": "webpack",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/plugin-proposal-export-default-from": "^7.5.2",
    "@babel/preset-typescript": "^7.7.2",
    "@types/jest": "^24.0.23",
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.9.0",
    "source-map": "^0.7.3",
    "ts-jest": "^24.1.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}

```
### `.eslintrc.js`

```
module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  rules:  {
  },
};
```

### `tsconfig.json`

```
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true,
    "moduleResolution": "node"
  }
}
```

### `webpack.config.js`

```
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
```

Tasks
-----

### 0\. Creating an interface for a student

Copy the following configuration files (provided above) into the `task_0` directory: `package.json`, `.eslintrc.js`, `tsconfig.json`, `webpack.config.js`

Write your code in the `main.ts` file:

*   Write an interface named Student that accepts the following elements: `firstName(string)`, `lastName(string)`, `age(number)`, and `location(string)`
*   Create two students, and create an array named `studentsList` containing the two variables
*   Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
*   Each row should contain the first name of the student and the location

Requirements:

*   When running, Webpack should return `No type errors found`.
*   Every variable should use TypeScript when possible.

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x04-TypeScript`
*   File: [task_0/js/main.ts](), [task_0/package.json](), [task_0/.eslintrc.js](), [task_0/tsconfig.json](), [task_0/webpack.config.js]()

### 1\. Let's build a Teacher interface

Create a directory `task_1` and copy these configuration files into this folder: `package.json`, `tsconfig.json`, `webpack.config.js`

*   `firstName(string)` and `lastName(string)`. These two attributes should only be modifiable when a Teacher is first initialized
*   `fullTimeEmployee(boolean)` this attribute should always be defined
*   `yearsOfExperience(number)` this attribute is optional
*   `location(string)` this attribute should always be defined
*   Add the possibility to add any attribute to the Object like `contract(boolean)` without specifying the name of the attribute

Example:

    const teacher3: Teacher = {
      firstName: 'John',
      fullTimeEmployee: false,
      lastName: 'Doe',
      location: 'London',
      contract: false,
    };
    
    console.log(teacher3);
    
    // should print
    // Object
    // contract: false
    // firstName: "John"
    // fullTimeEmployee: false
    // lastName: "Doe"
    // location: "London"
    

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x04-TypeScript`
*   File: [task_1/js/main.ts](), [task_1/webpack.config.js](), [task_1/tsconfig.json](), [task_1/package.json]()

### 2\. Extending the Teacher class

Write an interface named `Directors` that extends `Teacher`. It requires an attribute named `numberOfReports(number)`

Example:

    const director1: Directors = {
      firstName: 'John',
      lastName: 'Doe',
      location: 'London',
      fullTimeEmployee: true,
      numberOfReports: 17,
    };
    console.log(director1);
    
    // should print
    // Object
    // firstName: "John"
    // fullTimeEmployee: true
    // lastName: "Doe"
    // location: "London"
    // numberOfReports: 17
    

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x04-TypeScript`
*   File: [task_1/js/main.ts]()

### 3\. Printing teachers

Write a function `printTeacher`:

*   It accepts two arguments `firstName` and `lastName`
*   It returns the first letter of the firstName and the full lastName
*   Example: `printTeacher("John", "Doe") -> J. Doe`

Write an interface for the function named `printTeacherFunction`.

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x04-TypeScript`
*   File: [task_1/js/main.ts]()

### 4\. Writing a class

Write a Class named `StudentClass`:

*   The constructor accepts `firstName(string)` and `lastName(string)` arguments
*   The class has a method named `workOnHomework` that return the string `Currently working`
*   The class has a method named `displayName`. It returns the firstName of the student
*   The constructor of the class should be described through an Interface
*   The class should be described through an Interface

Requirements:

*   You can reuse the Webpack configuration from the previous exercise to compile the code.
*   When running `npm run build`, no TypeScript error should be displayed.
*   Every variable should use TypeScript when possible.

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x04-TypeScript`
*   File: [task_1/js/main.ts]

### 5\. Advanced types Part 1

Create the `DirectorInterface` interface with the 3 expected methods:

*   `workFromHome()` returning a string
*   `getCoffeeBreak()` returning a string
*   `workDirectorTasks()` returning a string

Create the `TeacherInterface` interface with the 3 expected methods:

*   `workFromHome()` returning a string
*   `getCoffeeBreak()` returning a string
*   `workTeacherTasks()` returning a string

Create a class `Director` that will implement `DirectorInterface`

*   `workFromHome` should return the string `Working from home`
*   `getToWork` should return the string `Getting a coffee break`
*   `workDirectorTasks` should return the string `Getting to director tasks`

Create a class `Teacher` that will implement `TeacherInterface`

*   `workFromHome` should return the string `Cannot work from home`
*   `getCoffeeBreak` should return the string `Cannot have a break`
*   `workTeacherTasks` should return the string `Getting to work`

Create a function `createEmployee` with the following requirements:

*   It can return either a `Director` or a `Teacher` instance
*   It accepts 1 arguments:
    *   `salary`(either number or string)
*   if `salary` is a number and less than 500 - It should return a new `Teacher`. Otherwise it should return a `Director`

Expected result:

    console.log(createEmployee(200));
    Teacher
    console.log(createEmployee(1000));
    Director
    console.log(createEmployee('$500'));
    Director
    

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x04-TypeScript`
*   File: [task_2/js/main.ts](), [task_2/webpack.config.js](), [task_2/tsconfig.json](), [task_2/package.json]()

### 6\. Creating functions specific to employees

Write a function `isDirector`:

*   it accepts `employee` as an argument
*   it will be used as a type predicate and if the employee is a director

Write a function `executeWork`:

*   it accepts `employee` as an argument
*   if the employee is a Director, it will call `workDirectorTasks`
*   if the employee is a Teacher, it will call `workTeacherTasks`

Expected result:

    executeWork(createEmployee(200));
    Getting to work
    executeWork(createEmployee(1000));
    Getting to director tasks
    

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x04-TypeScript`
*   File: [task_2/js/main.ts]()

Write a String literal type named `Subjects` allowing a variable to have the value `Math` or `History` only. Write a function named `teachClass`:

*   it takes `todayClass` as an argument
*   it will return the string `Teaching Math` if `todayClass` is `Math`
*   it will return the string `Teaching History` if `todayClass` is `History`

Expected result:

    teachClass('Math');
    Teaching Math
    teachClass('History');
    Teaching History
    

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x04-TypeScript`
*   File: [task_2/js/main.ts]

### 8\. Ambient Namespaces

Create a directory called `task_3` and copy these configuration files into it: `package.json`, `webpack.config.js`, `tsconfig.json`.

The first part of will require that you build an `interface` and a `type`. Inside a file named `interface.ts`:

*   Create a type `RowID` and set it equal to `number`
*   Create an interface `RowElement` that contains these 3 fields:
    *   `firstName`: `string`
    *   `lastName`: `string`
    *   `age?`: `number`

You are building the next part of the application architecture. The goal is to save the entities to a database. Because of time constraints, you can’t write a connector to the database, and you decided to download a library called `crud.js`. Copy this file into the `task_3/js` directory.

Here it is

    export function insertRow(row) {
      console.log('Insert row', row);
      return Math.floor(Math.random() * Math.floor(1000));
    }
    
    export function deleteRow(rowId) {
      console.log('Delete row id', rowId);
      return;
    }
    
    export function updateRow(rowId, row) {
      console.log(`Update row ${rowId}`, row);
    
      return rowId;
    }
    

Write an ambient file within `task_3/js`, named `crud.d.ts` containing the type declarations for each crud function. At the top of the file import `RowID` and `RowElement` from `interface.ts`.

In `main.ts`

*   At the top of the file create a [triple slash directive](https://intranet.hbtn.io/rltoken/Fq_dzOvVafRRBbH1bc-ODA "triple slash directive") that includes all the dependencies from `crud.d.ts`
*   Import the `rowID` type and `rowElement` from `interface.ts`
*   Import everything from `crud.js` as `CRUD`

Create an object called `row` with the type `RowElement` with the fields set to these values:

*   `firstName`: `Guillaume`
*   `lastName`: `Salva`

Create a `const` variable named `newRowID` with the type `RowID` and assign the value the `insertRow` command.

Next, create a `const` variable named `updatedRow` with the type `RowElement` and update `row` with an age field set to `23`

Finally, call the `updateRow` and `deleteRow` commands.

Expected result:

    const obj = {firstName: "Guillaume", lastName: "Salva"};
    CRUD.insertRow(obj)
    // Insert row {firstName: "Guillaume", lastName: "Salva"}
    
    const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
    CRUD.updateRow(newRowID, updatedRow);
    // Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}
    
    CRUD.deleteRow(125);
    // Delete row id 125
    

Requirements:

*   When running `npm run build`, no TypeScript error should be displayed.
*   Every variable should use TypeScript when possible.
*   The main file and the ambient file should both import the types defined in the interface file.
*   You can easily test your ambient file by looking at the intellisense of your IDE when using the 3rd party functions.

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x04-TypeScript`
*   File: [task_3/js/main.ts](), [task_3/js/interface.ts](), [task_3/js/crud.d.ts]()

### 9\. Namespace & Declaration merging

Create a new directory `task_4` and copy the above `tsconfig.json` and put this `package.json` in there

    {
      "name": "task_4",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "build": "webpack",
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "@typescript-eslint/eslint-plugin": "^2.4.0",
        "@typescript-eslint/parser": "^2.4.0",
        "clean-webpack-plugin": "^3.0.0",
        "fork-ts-checker-webpack-plugin": "^1.5.1",
        "html-webpack-plugin": "^3.2.0",
        "ts-loader": "^6.2.0",
        "typescript": "^3.6.4",
        "webpack": "^4.41.2",
        "webpack-cli": "^3.3.9",
        "webpack-dev-server": "^3.8.2"
      }
    }
    

In `task_4/js/subjects`:

*   Create a file `Teacher.ts` and write a `Teacher` interface in a namespace named `Subjects`.
    
    *   the interface requires `firstName` and `lastName` as string
*   Create a file `Subject.ts` and write a `Subject` class in the same namespace named `Subjects`.
    
    *   the class has one attribute `teacher` that implements the `Teacher` interface
    *   the class has one setter method `setTeacher` that accepts a `teacher` in argument (and as setter, set the instance attribute `teacher` with it)
*   Create a file `Cpp.ts` and make the following modifications in the same namespace.
    
    *   Using declaration merging, add a new optional attribute `experienceTeachingC` (number) to the `Teacher` interface
    *   Create a class `Cpp` extending from `Subject`
    *   Write a method named `getRequirements` that will return a string `Here is the list of requirements for Cpp`
    *   Write a method named `getAvailableTeacher` that will return a string `Available Teacher: <first name of teacher>`
    *   If the teacher doesn’t have any experience in teaching C, then the method should return a string `No available teacher`
*   Create a file `React.ts` and write a `React Class` in the same namespace.
    
    *   Add a new attribute `experienceTeachingReact?` (number) to the `Teacher` interface
    *   In the class, write a method named `getRequirements` that will return a string `Here is the list of requirements for React`
    *   Write a method named `getAvailableTeacher` that will return a string `Available Teacher: <first name of teacher>`
    *   If the teacher doesn’t have any experience in teaching React, then the method should return a string `No available teacher`
*   Create a file `Java.ts` and write a `Java Class` in the same namespace.
    
    *   Add a new attribute `experienceTeachingJava?` (number) to the `Teacher` interface
    *   In the class, write a method named `getRequirements` that will return a string `Here is the list of requirements for Java`
    *   Write a method named `getAvailableTeacher` that will return a string `Available Teacher: <first name of teacher>`
    *   If the teacher doesn’t have any experience in teaching Java, then the method should return a string `No available teacher`

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x04-TypeScript`
*   File: [task_4/package.json](), [task_4/tsconfig.json](), [task_4/js/subjects/Cpp.ts](), [task_4/js/subjects/Java.ts(), [task_4/js/subjects/React.ts](), [task_4/js/subjects/Subject.ts](), [task_4/js/subjects/Teacher.ts]()

### 10\. Update task\_4/js/main.ts

*   create and export a constant `cpp` for Cpp Subjects
*   create and export a constant `java` for Java Subjects
*   create and export a constant `react` for React Subjects
*   create and export one Teacher object `cTeacher` with `experienceTeachingC = 10`
*   for Cpp subject, log to the console `C++`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher` and print the strings they return
*   for Java subject, log to the console `Java`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher`, and print the strings they return
*   for React subject, log to the console `React`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher`, and print the strings they return

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x04-TypeScript`
*   File: [task_4/js/main.ts]()

### 11\. Brand convention & Nominal typing

Create a directory `task_5` and copy these configuration files into the root of `task_5`: `package.json`, `tsconfig.json`, `webpack.config.js`

Create two interfaces `MajorCredits` and `MinorCredits` in `task_5/js/main.ts`:

*   Each interface defines a number named `credits`
*   Add a brand property to each interface in order to uniquely identify each of them

Create two functions named `sumMajorCredits` and `sumMinorCredits` in `task_5/js/main.ts`:

*   Each function takes two arguments `subject1` and `subject2`
*   `sumMajorCredits` returns `MajorCredits` value and `sumMinorCredits` returns `MinorCredits` value
*   Each function sums the credits of the two subjects

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x04-TypeScript`
*   File: [task_5/js/main.ts](), [task_5/package.json](), [task_5/webpack.config.js](), [task_5/tsconfig.json]()

<p dir="auto">
</p><h2 dir="auto"><a id="user-content-author-full-stack-developer" class="anchor" aria-hidden="true" href="#author-full-stack-developer"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><a id="user-content-author-african-codernorman" href="#author-african-codernorman"></a>Author:</h2>
<ul dir="auto">
<li><strong><a href="mailto:karlkamakia@gmail.com?subject=I would like to work with you after viewing your GitHub Profile" rel="nofollow">Karl Kamakia (Full Stack Developer)Karl Irungu</a></strong>
</li></ul>
<h2 dir="auto"><a id="user-content-acknowledgements-" class="anchor" aria-hidden="true" href="#acknowledgements-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><a id="user-content-acknowledgements-pray" href="#acknowledgements-pray"></a>Acknowledgements <g-emoji class="g-emoji" alias="pray" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64f.png">🙏</g-emoji></h2>
<p dir="auto">All work contained in this project is progressive project covered  as part of the curriculum offered by the ALX-Holberton Software Engineering Programme. Alx is an online Software Engineering Programme (digital-like bootcamp) that thoroughly equips one with the needed Full Stack skills needed the tech industry. It consists of theoretical and practical learning concepts all put rogether using the <a href="https://fs.blog/feynman-learning-technique/" rel="nofollow">Feyman Learning Technique</a>. It entails a mixture of solo research, high level and low level language programming, and peer learning. For more information, visit
<a href="https://www.alxafrica.com/" rel="nofollow">this link</a>.</p>
<p align="center" dir="auto">
  <a href="https://camo.githubusercontent.com/349d47b359c21448b0415bfdb1ec6ae1db87b60a55243b187d514d0071f930ad/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f7648314854486871374249457568494475456332577263324c675a6967734a455744523536414c754446525a76392d6a714367484e4875424849422d664c727262777037744a3862377165494a6f3056744855683d7330" rel="nofollow"><img src="https://camo.githubusercontent.com/349d47b359c21448b0415bfdb1ec6ae1db87b60a55243b187d514d0071f930ad/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f7648314854486871374249457568494475456332577263324c675a6967734a455744523536414c754446525a76392d6a714367484e4875424849422d664c727262777037744a3862377165494a6f3056744855683d7330" alt="ALX logo" style="max-width: 100%;"></a>
</p>
