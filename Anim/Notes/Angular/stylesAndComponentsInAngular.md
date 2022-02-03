# Styles & Component
In a web framework styles and components are two of the core building blocks to the developer. As like React, Vue and many other web framework Angular too provide such code building blocks. In this note we are going to explore our understanding of these two features.

## Styles
In Angular, we can use custom css related to our html. Also we can import css files to be used in entire application of our Angular app. Following is the image from Angular application directory which shows we have two type of css files in an Angular application.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/Angular/styleAngular.png)

So, we get both app.component.css & styles.css files by generating an Angular application. In general, styles.css file has import command to import imported css files from node_modules or cdn. Let's say we use `Bulma` css library in our application. Then we would import bulma from node_modules directory after installing it in our project.

```console
~$ npm install bulma
```

```style.css
@import "bulma/css/bulma.css"
```

Importing it will allow bulma css file to be used in our entire Angular application. But what if we want to update a certain block of a dom from app.component.html file, then do we write those code too in styles.css? No. This is where Angular made boundary.

For this case, we need certain css specific to certain html dom. Then we write those codes only in app.component.css file. So as I wrote in the beginning of this section, styles.css holds the import of css libraries from node_modules or cdn to be used in entire application. On the other hand, app.component.css hold the cascading code which is going to be used on certain html file.

## Components
When we develop a web application there are segments or parts of UI elements in each page. Some segments become repetitive or some segments become hard to handle as there might be parent child relation between each blocks. In naive approach, we used to write html and css for each page. Is it dynamic?

So can't we target each block and write certain html and css codes for it. And based on our UI requirements we re-render as much block as we need. This is what component is all about. Let's say we have a book list where we show books. And it is categorized in certain categories. Then for every categories do we write similar html and css design again and again? No.

We write basic html and css design that component is going to have. And re-render the component based on required logic. Following is the example of component hierarchies.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/Angular/componentHierarchy.png)

So from the diagram app component is the most parent component an Angular application can have. As a page needs navigation and footer, we could make those features components and re-render in every page based on requirements. Now let's say we have book search option, select book category options and by selecting a category we list down books. These all are dynamic and need to be re-rendered.

This can be good example of components. We make a book category a component and book search a component. Then based on selection of book category we need certain lists of book to be shown. So book list is also a component but it is nested to book category. These way components are hierarchically connected to app component. And as said earlier, it is the most parent component of Angular app. So other components are child of it. In Angular apps, each component has it's own class file, css file, html file and spec file to it. Which makes it reusable in different areas based on UI requirements.

It seems 4 different files are required for each components. Isn't it going to be little bit of hectic to write and keep repeating the process every time we need a new component. This is where Angular made this job easier by following command.

```console
~$ ng generate component <name-of-component>
```

It will generate 4 different files in a folder in app directory. Name of the folder will be the name we provide in `<name-of-component>` segment of the command.

## Work Procedure of Components
How Angular loads component or keeps track in it? This is the obvious question which should come into mind. So when we generate an Angular app, it generate many files and directories. There is an index.html file and it is going to be loaded every time we hit or request to http://localhost:4200 URL. Which is the port of Angular Development Server

So when browser gets index.html it gets all well known syntax but a new syntax which it couldn't parse before. Thus it ask again for definition of that new syntax to the Angular Development Server.

```html
<body>
  <app-root></app-root>
</body>
```

`<app-root>` is that syntax or I should say a script which normally browser couldn't understand. Angular Development Server replies with appropriate response to browser and it gets rendering.

How it renders? In `app.component.ts` file there is this weird syntax known as `@Component` and it has a selector attribute which has 'app-root' as selector. Which means Angular binds this `ts` file with `<app-root>` through the selector for Angular related development.

So when Angular Development Server response to browser it can load appropriate definition of `<app-root>`. That's the parent component of an Angular Application.

What happens when a generate a new component? In this case too, new components get bind to `<app-root>` as a child of it. Let's see we have generated a component as named as book. Then we get 44 different files in book component directory in app directory in Angular application.

It should have 4 different files as discussed earlier and in it's `ts` file too there is a selector attribute containing `<app-book>` to be bind with parent component which `<app-root>`.

So, if we write following code in the `app.component.html` file then it loads the book component and binding takes place.

```app.component.html
<app-book></app-book>
```

Now when browser gets the definition of <app-root>, it keeps reading the html file. And when it sees the new undefined definition of child component inside <app-root>, it sends request to Angular Development Server to understand definition of new syntax of child component.

As it is written above, Angular response with the appropriate definition of child component. And browser keep continues with reading the html file. It is a recursive process unless or until all components are finished reading.

Every time a component whether it is parent or child, Angular creates an instance of the class file and tracks down required information to be passed. That's how Angular keeps tracking the component chain in it's ecosystem.

## Reference
- [1] https://www.udemy.com/course/the-modern-angular-bootcamp/
