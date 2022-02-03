# Angular
Angular is component based web application development framework which uses typescript and dependency injection pattern for application development. It is highly scalable because of moduler uses of component. This is the very first note on Angular there are many important issue we need to discuss. Let's deep dive in !

## Angular File Structure
In an Angular application, one file contains a certain meaning of that application. Following are the four important files that we are going to need in Angular based application development.

| File Name | File Type | Description |
| --- | --- | --- |
| app.component.css | Component CSS | Contains CSS design for template files |
| app.component.html | Component Template | Contains HTML file to be displayed to Users |
| app.component.ts | Component class | Contains code to run important events  |
| app.service.ts | Services | Contains code that fetches/stores/update data |
| app.module.ts | Modules | Defines set of services and component that handle all the functionality for a part of our app |

Point to be noted that a component template always going to bind with one component class. This is an one to one relationship. On the other hand a service can have 0 to multiple component class. All of required services are bound together in a module. So a module contain a feature of our web application's development requirement.

## Environment Setup
To work on Angular framework we must install node in our local machine. To verify whether node is installed it or not, we need to run following command in command line.

```console
~$ node -v
```

If we see node version is more than 10.9.0 then we are good to go to work with Angular. But if it is less than 10.9.0 then we must download the node.js's latest or more or equal to 10.9.0 version from the official site of node js. Download link is given in **Reference [2]**

After verifying node in our local machine. We must run following command to install Angular globally in our local machine.

```console
~$ npm install -g @angular/cli
```

Npm is installed and comes with the bundle when node is installed in our local machine. But if there any problem or error occurs then file permission of node_modules or version of node must be checked. For app development of Angular, vscode is preferable. If it is not installed in out local machine than we must install it from the **Reference [3]**.

## Project Overview
When we are done with *Environment Setup* section we can run following type of command in our CLI.

```console
~$ ng new <app-name>
```

**ng** is available due to the installation of Angular CLI. Using **ng** we can generate a new Angular Project in any directories to store source code of Angular Project. After generating the project we must go to installed directory to start the project. From the installed directory we run following commands to start.

```console
~$ npm start
```

Or

```console
~$ ng server
```

These two commands are completely identical. If we run npm start, it runs ng start in the background process. After running one of these commands we can access our project from http://localhost:4200. This is where Angular web application is showcased in our local machine. To stop this process or application from running then using simple ctrl + c would stop it from CLI.

## Event Binding
Now that we have generatted the project and can visualize it on localhost's port 4200, So we must deep dive into coding section. As mentioned earlier that we must showcase our UI through app.component.html file, updating this folder will be first priority. Clearing auto-generated code we write our required HTML code in apps.component.html section. Let's add a simple button in our HTML code.

```html
<div>
  <button>Generate!</button>
</div>
```

As we mentioned in the *File Structure* section, we must invoke an event related code to generate something. As HTML code shows a generate button simple console log will help us understanding how event binding work. In the *File Structure* section, it is written that apps.component.ts is the place where we write component class which is directly binned to component template (HTML) file. Generating code we get following code in app.component.class file.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title='title'
}
```

Now let's add a function called **onButtonClick()** to show a console log in the browser's console. So following is the code after adding **onButtonClick()** function.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onButtonClick() {
    console.log('Button Was Clicked');
  }
}
```

So we have added this function to AppComponent class in app.component.ts file. To get this function running, let's add this function in button element of our html code. Following is the button element code after adding onButtonClick() function.

```html
<div>
  <button (click)="onButtonClick()">Generate!</button>
</div>
```

Now clicking the generate button from browser would show "Button Was Clicked" message in browser console. So what is happening and how this function is working in html code? This is an important question. We are calling click HTML event in the button element and then invoking it invokes the onButtonClick() function.

This is the beauty of event binding of Angualr. On the other framework we would need to pass this.component syntax and then we would get onButtonClick() function from the class. But Angular autowires the binding by itselves. And code remains simple. We can use any of general html events in first bracket as we have written for click event. And it will work in the same way as it is working for click event.

Calling onButtonClick automatically binds with event for html element. This is what event binding in Angular. We bind a component class's method to a particular event in the HTML element and it runs without any special code or syntax. This is where the beauty remains of Angular framework.

## Property Binding
In Even Binding section we have seen event binding processes. Now that what if we want to show our generated value in a HTML element. Let's see following code.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "";
  onButtonClick() {
    this.name = 'Tom & Jerry';
  }
}
```

In the code above, we have added a property in the class. Value property doesn't hold any value. We initialized the value property of the class with empty string as class's variable. We also could code this class variable in a constructor like following code segment.

```typescript
constructor () {
  this.value = "";
}
```

But writing directly in the class holds the same significance. So let's now modify our HTML code in following way.

```html
<div>
  <button (click)="onButtonClick()">Generate!</button>
</div>

<div>
  <label>Your Name</label>
  <input [value]="name" />
</div>
```

At first glance it can seem weird that we are using third bracket and passing value in it. And then we are passing a name string as value. But here is the importance of understanding property binding syntax of Angular. *"name"* is not a string that we passed, it is actually the class property which was declared in app.component.ts file. So writing  `<input [value]="name"` means we are passing name property value to input element's value property.

Now using this code we can see name "Tom & Jerry" when we click the button. This is what called **Property Binding** in Angular and syntax is known as **Property Binding Syntax**. Instead of passing direct property of class we can also invoke the function that returns `name` property from the class. Following code snippet is the updated and appropriate way of passing values from a class using get function.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "";

  onButtonClick() {
    this.name = 'Tom & Jerry';
  }

  getName() {
     return this.name
  }
}
```

```html
<div>
  <button (click)="onButtonClick()">Generate!</button>
</div>

<div>
  <label>Your Name</label>
  <input [value]="getName()" />
</div>
```
## Interpolation Syntax
We have seen **Event Binding Syntax** & **Property Binding Syntax**, now let's see how far we can go with the power of Angular. Let's say we want to direct call the `name` property of app component class. For this requirement Angular allow us to call class as component property call directly in our HTML code. And it is known as **Interpolation Syntax**. Following is the code example of this syntax.

```html
{{ name }}
````

Adding this code will generate name property's value in html to user. But calling name directly would show nothing. Because this property holds empty string at the beginning of our application. Upon the invocation of generate button, `name` properties get the value. What if we pass a function as interpolation syntax. Let's update our app.component.tx file with a get function which will return a name.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getName() {
     return 'Tom & Jerry'
  }
}
```

For get function too, Angular allows Interpolation Syntax available. Following is the code example for functions to be used as **Interpolation Syntax**

```html
{{ getName() }}
```

So for function we pass function name and it works as it worked for a class property. We really understand one thing that again we have called a class function or class property without using any `this` or `this.component` or `app.component`. This is the real power and beauty of Angular. Angular can detect class based component and bind automatically.

## Conclusion
In this note of deep dive I have tried to share my acquired knowledge which I have been grasping going through **Reference [1]**. Learning Angular can be little bit of overwhelming. But when we learn something and take notes and keep going forward, our base acquired knowledge gets stronger. This is the main purpose of writing these notes. Thank you for reading. Let's proceed to next note.

## Reference
- [1] - https://www.udemy.com/course/the-modern-angular-bootcamp/
- [2] - https://nodejs.org/en/download/
- [3] - https://code.visualstudio.com/
