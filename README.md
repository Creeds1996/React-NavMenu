# Drop down Menu (onHover)
This project implements the basis for a sub-menu that is activated when the user hovers over a link. Whilst activated it will render a sub-menu to display additional navigation links. The sub-menu is deactivated when the user either clicks a link or moves their cursor outside the sub-menu.

#### Things to note before using these components
These components make use of two npm packages that must be either installed on your system or included in your package.json to run this code.

* These components must be wrapped in a Router tag from [react-router-dom](https://www.npmjs.com/package/react-router-dom) as they make use of NavLink.
* The SubMenu makes use of [react-transition-group](https://www.npmjs.com/package/react-transition-group) for a basic CSSTransition.

# How to use these components
### Navbar
Navbar is the root component, it is the container for all the links that are provided. Below I have included a code snippet from which we will build up our drop down menu.

```javascript
<Router>
	<Navbar className="Your-ClassName-Here">
    	{/* Links/Menus will go here */}
    </Navbar>
</Router>
```

#### Props
##### className
By default there is some basic CSS styling on the Navbar from the included files. I have added the ability to add more class names and further style the component with the use of the 'className' prop.

### MenuItem
This component is used to create a basic navigation link to another page, it does not have any sub-menu functionality. This component would be used for a link that does not require a sub-menu. It requires two props, Title and Url, these are used to add content to the MenuItem. Below is a code snippet showing the use of a MenuItem.

```javascript
<Router>
	<Navbar className="Your-ClassName-Here">
    	<MenuItem className="Your-ClassName-Here" Title="Home" Url="/" />
    </Navbar>
</Router>
```

#### Props
##### className
By default there is some basic CSS styling on the MenuItem from the included files. I have added the ability to add more class names and further style the component with the use of the 'className' prop.

##### Title
This is the title that will be used for the MenuItem.

##### Url
This is the URL that the user will be taken to when they click on the MenuItem. If no value is entered the component will default this value to "/".

### SubMenu
This component is used to create a link that has a sub-menu that is activated when the user hovers over the link. This sub-menu is deactivated when the user either clicks a link from the sub-menu or their cursor leaves the sub-menu. The user can still click the root link to be redirected but allows additional links to be shown in the sub-menu. Below is a code snippet showing the use of a SubMenu.

```javascript
<Router>
	<Navbar className="Your-ClassName-Here">
    	<SubMenu className="Your-ClassName-Here" Title="Home" Url="/">
        	<MenuItem className="Your-ClassName-Here" Title="Menu Link" Url="/menuLink" />
        <SubMenu/>
    </Navbar>
</Router>
```

#### Props
##### className
By default there is some basic CSS styling on the MenuDropdown from the included files. I have added the ability to add more class names and further style the component with the use of the 'className' prop.

##### Title
This is the title that will be used for the MenuDropdown.

##### Url
This is the URL that the user will be taken to when they click on the MenuDropdown. If no value is entered the component will default this value to "/".