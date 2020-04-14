(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <h1>This is an iframe</h1>\r\n</div><br><br>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/xggucT_xl5U\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n</div><br><br>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <img src=\"../../../assets/img/scrum.png\" alt=\"logo\" id=\"about-logo\">\r\n    <h1>This is the about page!</h1>\r\n</div>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  <p>\r\n      Single-origin coffee DIY humblebrag, chia prism meh pour-over. Mlkshk art party paleo, trust fund squid yuccie iPhone laboris aliquip brunch do taxidermy everyday carry photo booth viral. Irure hell of labore 8-bit messenger bag non. Bicycle rights shabby chic flannel, forage post-ironic officia flexitarian gastropub adaptogen occaecat aliquip slow-carb. Green juice anim in brunch, organic vinyl ea ullamco direct trade. Dolor trust fund live-edge enamel pin williamsburg marfa. <br><br>\r\n      IPhone celiac af stumptown velit poke humblebrag consequat. Vinyl chia banh mi yuccie freegan neutra. Sriracha actually hoodie man bun, taxidermy brunch austin raclette cred activated charcoal yuccie dolor. Intelligentsia mlkshk yr minim food truck echo park franzen. Microdosing salvia enim, non fam roof party literally mumblecore helvetica freegan bitters. Schlitz austin polaroid small batch snackwave. Commodo bicycle rights poutine, pickled cliche cray aute YOLO jianbing do adipisicing hammock ut. <br> <br>\r\n      You probably haven't heard of them vice chicharrones before they sold out ennui man bun freegan photo booth affogato hexagon vexillologist proident palo santo thundercats put a bird on it. Humblebrag asymmetrical paleo affogato dolor wayfarers. Man bun neutra artisan, ugh hammock tacos ullamco chillwave blog bitters sed pabst. Chartreuse eiusmod shaman, disrupt voluptate sunt lomo 3 wolf moon reprehenderit kitsch try-hard dreamcatcher vegan. <br> <br>\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/apphome.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/apphome.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout>\r\n    <mat-sidenav-container>\r\n        <mat-sidenav #sidenav role=\"navigation\">\r\n          <app-app-sidenav-list (sidenavClose)=\"sidenav.close()\"></app-app-sidenav-list>\r\n        </mat-sidenav>\r\n        <mat-sidenav-content>\r\n          <app-app-header (sidenavToggle)=\"sidenav.toggle()\"></app-app-header>\r\n          <main>\r\n            <router-outlet></router-outlet>\r\n          </main>\r\n        </mat-sidenav-content>\r\n      </mat-sidenav-container>\r\n</app-layout>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/applanding/applanding.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/applanding/applanding.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <h1>Create a <a (click)=\"openDialog()\" matTooltip=\"Create a new project!\">new project</a>.</h1>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/deleteuser/deleteuser.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/deleteuser/deleteuser.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onDelete(passForm)\" #passForm=\"ngForm\">\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"alldiv\">\r\n      <h1>Type your password</h1>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"preddiv\">\r\n        <mat-form-field>\r\n          <input matInput pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}\" title=\"Must contain at least one number and one uppercase and lowercase letter, and 8 to 12 characters\" type=\"password\" name=\"inPass\" ngModel #password=\"ngModel\" placeholder=\"Password\" required minlength=\"8\" maxlength=\"12\">\r\n          <mat-error *ngIf=\"password.invalid\">Must contain at least one number and one uppercase and lowercase letter, and 8 to 12 characters.</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <button mat-raised-button type=\"submit\" color=\"warn\" id=\"savebtn\">Delete</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/docs/docs.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/docs/docs.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  <img src=\"../../assets/img/swagger-logo.png\" alt=\"\">\r\n</div>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  <h1>Go to the API documentation with Swagger</h1>\r\n</div>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  <a href=\"https://weyves.github.io/ScrumMetrics-Docs/\" target=\"_blank\">\r\n    <button mat-button>Go!</button>\r\n  </a>\r\n</div>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  <h1>Find out more about Swagger.</h1>\r\n</div>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <a href=\"https://swagger.io/\" target=\"_blank\">\r\n      <button mat-button>Learn more.</button>\r\n    </a>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/error-pages/not-found/not-found.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error-pages/not-found/not-found.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{notFoundText}}</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  <img src=\"../../assets/img/scrum.png\" alt=\"logo\" id=\"home-logo\">\r\n</div>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  <img src=\"../../assets/img/graph1.png\" id=\"graph\">\r\n  <h1>This is a web page, <br> made for you to test.</h1>\r\n  <button mat-button background-color=\"primary\" routerLink=\"/start/register\">Get Started</button>\r\n</div>\r\n<div>\r\n  <p>Lorem ipsum dolor amet leggings craft beer tousled, gluten-free live-edge roof party single-origin coffee meh lorem ramps tempor snackwave anim yr cronut. Scenester laboris mumblecore intelligentsia, ethical woke in cillum vegan trust fund fashion axe disrupt. Cray dreamcatcher pok pok est in small batch humblebrag. Retro nulla gochujang XOXO, lumbersexual waistcoat copper mug beard sustainable deep v magna 3 wolf moon tofu labore cillum. Enamel pin tempor velit, fanny pack schlitz qui intelligentsia hot chicken minim swag. </p>\r\n  <p>You probably haven't heard of them etsy photo booth cred paleo.</p>\r\n  <p>Aliqua marfa adipisicing, in jianbing minim aute street art. Celiac ex nisi pinterest tousled cliche irony in bicycle rights coloring book meggings la croix. Street art roof party everyday carry, commodo godard letterpress enim deep v master cleanse dolore semiotics. Yr qui health goth occupy, authentic twee kitsch keffiyeh. </p>\r\n  <p>Mumblecore velit schlitz bicycle rights. Kale chips You should find this roof party taxidermy keffiyeh, echo park cliche cronut kinfolk laborum vinyl selfies ut four loko. Tacos cold-pressed meggings sunt proident drinking vinegar paleo. Blue bottle in in, bitters bushwick vape kogi copper mug. Direct trade shabby chic umami ut readymade mollit. </p>\r\n  <p> Hexagon master cleanse poke put a Subscribe to Pewdiepie bird on it cliche post-ironic taxidermy aute adaptogen. Air plant anim art party intelligentsia everyday carry. Etsy yuccie vexillologist twee et, tilde 3 wolf moon. Pug woke brunch craft beer pour-over eiusmod. Everyday carry offal tousled, kickstarter retro roof party helvetica sustainable beard. </p>\r\n  <p> Truffaut narwhal raclette brunch farm-to-table excepteur crucifix coloring book wolf pabst tempor kitsch. Raclette fam live-edge succulents ut intelligentsia mixtape vinyl pok pok +1 tousled ugh shabby chic adaptogen venmo. Copper mug fugiat bitters quis gentrify four loko qui retro roof party lo-fi pug subway tile viral cliche. Wolf edison bulb asymmetrical lomo vinyl, plaid quis put a bird on it forage pour-over. </p>\r\n  <p> Oh. You need a little dummy text for your mockup? How quaint. </p>\r\n  <p> I bet you’re still using Bootstrap too…</p>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/layout.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/layout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"layout-wrapper\" >\r\n    <div fxFlex=\"100%\" fxFlex.lt-md=\"100%\" class=\"flex-wrapper\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" id=\"first-div\">\r\n  <div id=\"outer-div\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <h1>Login</h1>\r\n    </div>\r\n    <div id=\"inner-div\">\r\n        <form (submit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\">\r\n          <h3>Username:</h3>\r\n          <mat-form-field>\r\n              <input matInput pattern=\"[A-Za-z0-9_-]{6,40}\" type=\"text\" name=\"inUser\" ngModel #user=\"ngModel\" placeholder=\"Username\" required>\r\n              <mat-error>You need to enter a valid username</mat-error>\r\n          </mat-form-field>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n              <a class=\"forgot-a\">Forgot your username?</a>\r\n          </div>\r\n          <h3>Password</h3>\r\n          <mat-form-field>\r\n              <input matInput pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}\" name=\"inPass\" ngModel #pass=\"ngModel\" placeholder=\"Password\" required type=\"password\">\r\n              <mat-error *ngIf=\"pass.invalid\">You need to enter a valid password</mat-error>\r\n          </mat-form-field>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n              <a class=\"forgot-a\">Forgot your password?</a>\r\n          </div><br>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <button mat-raised-button type=\"submit\">Login</button><p>&nbsp;&nbsp;&nbsp;&nbsp;</p>\r\n            <a href=\"www.google.com\">\r\n              <img src=\"../../assets/img/google.png\" alt=\"google_sign-in\">\r\n            </a>\r\n          </div>\r\n          <h4>Don't have an account?</h4>\r\n          <a routerLink=\"/start/register\" class=\"reg-link\">Register.</a>\r\n        </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mainhome.component.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mainhome.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout>\r\n    <mat-sidenav-container>\r\n        <mat-sidenav #sidenav role=\"navigation\">\r\n          <app-sidenav-list (sidenavClose)=\"sidenav.close()\"></app-sidenav-list>\r\n        </mat-sidenav>\r\n        <mat-sidenav-content>\r\n          <app-header (sidenavToggle)=\"sidenav.toggle()\"></app-header>\r\n          <main>\r\n            <router-outlet></router-outlet>\r\n          </main>\r\n        </mat-sidenav-content>\r\n      </mat-sidenav-container>\r\n</app-layout>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navigation/app-header/app-header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navigation/app-header/app-header.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <div>\r\n        <button mat-icon-button (click)=\"onToggleSidenav()\" matTooltip=\"Open the menu.\">\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n    </div>\r\n    <div fxHide.xs>\r\n      <h1 id=\"project-name\" matTooltip=\"The project you were/are on.\">{{projname}} | {{sprintname}}</h1>\r\n    </div>\r\n    <div fxFlex fxLayout fxLayoutAlign=\"end\">\r\n      <img [src]=\"url\" class=\"user-photo\" matTooltip=\"Yep. That's you!\" (click)=\"openProfile()\">\r\n      <h1 class=\"user-name\" matTooltip=\"That should be you. Right?\" (click)=\"openProfile()\">{{fullname}}</h1>\r\n      <button mat-icon-button>\r\n          <mat-icon id=\"settings-icon\" matTooltip=\"Change user settings\">settings</mat-icon>\r\n      </button>\r\n    </div>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navigation/app-sidenav-list/app-sidenav-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navigation/app-sidenav-list/app-sidenav-list.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\r\n  <a mat-list-item (click)=\"onSidenavClose()\" (click)=\"openProfile()\">\r\n    <mat-icon>account_circle</mat-icon><span class=\"nav-caption\" matTooltip=\"Click to see your profile.\">My Profile</span>\r\n  </a>\r\n  <a mat-list-item (click)=\"openProjs()\" (click)=\"onSidenavClose()\">\r\n    <mat-icon>assessment</mat-icon><span class=\"nav-caption\" matTooltip=\"Projects you're part of.\">My Projects</span>\r\n  </a>\r\n  <a mat-list-item (click)=\"onSidenavClose()\">\r\n    <mat-icon>settings</mat-icon><span class=\"nav-caption\" matTooltip=\"Just settings\">Settings</span>\r\n  </a>\r\n  <a mat-list-item (click)=\"endSession()\" (click)=\"onSidenavClose()\">\r\n    <mat-icon>power_settings_new</mat-icon><span class=\"nav-caption\" matTooltip=\"Terminate your current session.\">Sign Out</span>\r\n  </a>\r\n  <button mat-raised-button color=\"primary\" class=\"btnproject\" (click)=\"onSidenavClose()\" (click)=\"openDialog()\" matTooltip=\"Create a new project!\">New Project</button>\r\n</mat-nav-list>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navigation/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navigation/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <div fxHide.gt-xs>\r\n        <button mat-icon-button (click)=\"onToggleSidenav()\">\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n    </div>\r\n    <div>\r\n        <a routerLink=\"/start/home\">\r\n          <img src=\"../../../assets/img/scrum.png\" id=\"logo\" alt=\"logo\">\r\n        </a>\r\n    </div>\r\n    <div fxFlex fxLayout fxLayoutAlign=\"end\" fxHide.xs>\r\n        <ul fxLayout fxLayoutGap=\"40px\" class=\"navigation-items\">\r\n            <li>\r\n                <a routerLink=\"/start/home\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Home</a>\r\n            </li>\r\n            <li>\r\n                <a routerLink=\"/start/about\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">About</a>\r\n            </li>\r\n            <li>\r\n                <button mat-button [matMenuTriggerFor]=\"menu\" class=\"dropbtn\">Getting Started</button>\r\n                  <mat-menu #menu=\"matMenu\">\r\n                    <button mat-menu-item routerLink=\"/start/login\" class=\"matMenuButtons\">Login</button>\r\n                    <button mat-menu-item routerLink=\"/start/register\" class=\"matMenuButtons\">Register</button>\r\n                    <button mat-menu-item routerLink=\"/start/documentation\" class=\"matMenuButtons\">Docs</button>\r\n                  </mat-menu>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n  </mat-toolbar>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navigation/sidenav-list/sidenav-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navigation/sidenav-list/sidenav-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\r\n  <a mat-list-item routerLink=\"/start/home\" (click)=\"onSidenavClose()\">\r\n    <mat-icon>home</mat-icon><span class=\"nav-caption\">Home</span>\r\n  </a>\r\n  <a mat-list-item routerLink=\"/start/about\" (click)=\"onSidenavClose()\">\r\n    <mat-icon>info</mat-icon><span class=\"nav-caption\">About</span>\r\n  </a>\r\n  <mat-list-item [matMenuTriggerFor]=\"menu\">\r\n    <mat-icon>unfold_more</mat-icon>\r\n    <a matline>Getting Started</a>\r\n  </mat-list-item>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item routerLink=\"/start/login\" (click)=\"onSidenavClose()\">Login</button>\r\n    <button mat-menu-item routerLink=\"/start/register\" (click)=\"onSidenavClose()\">Register</button>\r\n    <button mat-menu-item routerLink=\"/start/documentation\" (click)=\"onSidenavClose()\">Docs</button>\r\n  </mat-menu>\r\n</mat-nav-list>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/newproject.component.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/newproject.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"fulldialog\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" id=\"title-div\">\r\n    <h1>New Project</h1>\r\n    <div fxFlex fxLayout fxLayoutAlign=\"end\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"onNoClick()\">X</button>\r\n    </div>\r\n  </div>\r\n  <form (submit)=\"onAddProject(projectForm)\" #projectForm=\"ngForm\">\r\n  <div mat-dialog-content>\r\n    <div fxLayout=\"row\">\r\n      <div fxLayout=\"column\">\r\n        <img [src]=\"url\" alt=\"project-pic\" id=\"project-pic\">\r\n        <div fxLayoutAlign=\"center center\" class=\"divchangepho\">\r\n            <input type=\"file\" (change)=\"onFileChanged($event)\" accept=\"image/*\" class=\"img-input\" #fileInput>\r\n            <mat-icon (click)=\"fileInput.click()\">unarchive</mat-icon>\r\n            <a (click)=\"fileInput.click()\" id=\"changephoto\">Change photo</a>\r\n        </div>\r\n      </div>\r\n    <div fxLayout=\"column\">\r\n      <h3>Name</h3>\r\n      <mat-form-field>\r\n        <input matInput pattern=\"[A-Za-z0-9._%+-\\s]{8,60}\" type=\"text\" name=\"inName\" #name=\"ngModel\" ngModel placeholder=\"The name of your project.\" required>\r\n        <mat-error *ngIf=\"name.invalid\">You need to enter a name.</mat-error>\r\n      </mat-form-field>\r\n      <h3>Description</h3>\r\n      <mat-form-field>\r\n        <textarea matInput pattern=\"[A-Za-z0-9._%+-!@#$^&*()\\s]{20,1024}\" rows=\"6\" name=\"inDesc\" #desc=\"ngModel\" ngModel placeholder=\"Insert a short description of your project here.\" required></textarea>\r\n        <mat-error *ngIf=\"desc.invalid\">You need to enter a description.</mat-error>\r\n      </mat-form-field>\r\n      <h3>Add Members</h3>\r\n      <mat-form-field id=\"select-div\">\r\n          <mat-label>Role</mat-label>\r\n          <select [formControl]=\"myControl2\" matNativeControl>\r\n            <option value=\"ScrumMaster\">Scrum Master</option>\r\n            <option value=\"Product Owner\">Product Owner</option>\r\n            <option value=\"Team Member\">Team Member</option>\r\n          </select>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <input matInput type=\"text\" placeholder=\"Search by username.\" [formControl]=\"myControl\" [matAutocomplete]=\"auto\" aria-label=\"Number\">\r\n        <mat-autocomplete #auto=\"matAutocomplete\">\r\n          <mat-option *ngFor=\"let username of filteredOptions | async\" [value]=\"username\">\r\n            {{username}}\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n        <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"onAddUser(myControl.value, myControl2.value)\">Add</button>\r\n        </div>\r\n      </mat-form-field>\r\n      <mat-accordion multi=\"true\">\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            Members\r\n          </mat-expansion-panel-header>\r\n          <mat-action-row *ngFor=\"let user of storedusers; let i = index\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n              <mat-panel-title>{{storedusers[i]}}</mat-panel-title>\r\n              <p>{{roles[i]}}</p>\r\n            </div>\r\n            <button mat-raised-button color=\"warn\" (click)=\"deleteUser(storedusers[i], i)\" id=\"deletebutton\">Delete</button>\r\n          </mat-action-row>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n      <p class=\"info-text mat-body-1\" *ngIf=\"1 > storedusers.length\">No members added yet.</p>\r\n      <div fxLayout=\"row\">\r\n          <div fxLayout=\"column\">\r\n            <h4>Start Date</h4>\r\n            <mat-form-field>\r\n              <input matInput [matDatepicker]=\"picker\" name=\"inDate1\" #date1=\"ngModel\" ngModel placeholder=\"Choose a date\" readonly=\"true\" required>\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker></mat-datepicker>\r\n              <mat-error *ngIf=\"date1.invalid\">You need to enter an initial date.</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxLayout=\"column\">\r\n              <mat-checkbox (change)=\"changeCheck($event)\" id=\"endbutt\" color=\"primary\">End Date</mat-checkbox>\r\n            <div id=\"date2\">\r\n            <mat-form-field id=\"picker2\">\r\n              <input matInput [matDatepicker]=\"picker2\" name=\"inDate2\" #date2=\"ngModel\" ngModel placeholder=\"Choose a date\" readonly=\"\" [disabled]=\"disabledDate\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker2\" [disabled]=\"disabledDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker2 [disabled]=\"disabledDate\"></mat-datepicker>\r\n              <mat-error *ngIf=\"date2.invalid\">You need to enter a final date.</mat-error>\r\n            </mat-form-field>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  <button mat-raised-button color=\"primary\" id=\"createbutt\" type=\"submit\" matTooltip=\"Remember to add yourself to get a role!\">Create</button>\r\n</div>\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"fulldialog\">\r\n  <form (submit)=\"saveProfile(profileForm)\" #profileForm=\"ngForm\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" id=\"title-div\">\r\n    <h1>My Profile</h1>\r\n    <div fxFlex fxLayout fxLayoutAlign=\"end\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"onNoClick()\">X</button>\r\n    </div>\r\n  </div>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <h4 id=\"usernameh4\">{{username}}</h4>\r\n  </div>\r\n  <div mat-dialog-content>\r\n    <div fxLayout=\"row\">\r\n      <div fxLayout=\"column\">\r\n        <img [src]=\"url\" alt=\"user-pic\" id=\"user-pic\">\r\n        <div fxLayoutAlign=\"center center\" class=\"divchangepho\">\r\n            <input type=\"file\" (change)=\"onFileChanged($event)\" accept=\"image/*\" class=\"img-input\" #fileInput>\r\n            <mat-icon (click)=\"fileInput.click()\">unarchive</mat-icon>\r\n            <a (click)=\"fileInput.click()\" id=\"changephoto\">Change photo</a>\r\n        </div>\r\n      </div>\r\n      <div fxLayout=\"column\">\r\n        <h3>Name</h3>\r\n        <mat-form-field>\r\n          <input matInput pattern=\"([A-z0-9À-ž\\s]){0,256}\" type=\"text\" [ngModel]=curname #name=\"ngModel\" name=\"inName\" [disabled]=\"disabledUser\" required>\r\n          <mat-error *ngIf=\"name.invalid\">Use the  correct format.</mat-error>\r\n        </mat-form-field>\r\n        <button mat-raised-button type=\"button\" color=\"lightgray\" (click)=\"changeCheck($event)\" matTooltip=\"Click to change your name\">Unlock/lock name</button>\r\n        <h3>E-mail</h3>\r\n        <mat-form-field>\r\n          <input matInput pattern=\"[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" type=\"text\" [ngModel]=curemail #email=\"ngModel\" name=\"inMail\" [disabled]=\"disabledEmail\" required>\r\n          <mat-error *ngIf=\"email.invalid\">Use the  correct format</mat-error>\r\n        </mat-form-field>\r\n        <button mat-raised-button type=\"button\" color=\"lightgray\" (click)=\"changeCheck2($event)\" matTooltip=\"Click to change your e-mail\">Unlock/lock e-mail</button>\r\n        <a (click)=\"changePass()\"><h4>Change password</h4></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <button mat-raised-button type=\"submit\" color=\"primary\">Save</button>\r\n  </div>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <button mat-raised-button type=\"button\" color=\"warn\" id=\"deletebtn\" (click)=\"deleteAccount()\">Delete account</button>\r\n  </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profilenewpass/profilenewpass.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profilenewpass/profilenewpass.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onSavePass(passForm)\" #passForm=\"ngForm\">\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"alldiv\">\r\n    <h1>Type your new password</h1>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"preddiv\">\r\n      <mat-form-field>\r\n        <input matInput pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\\$%\\^&]).{8,12}$\" title=\"Must contain at least one number and one uppercase and lowercase letter, and 8 to 12 characters\" type=\"password\" name=\"inPass\" ngModel #password=\"ngModel\" placeholder=\"Password\" required minlength=\"8\" maxlength=\"12\">\r\n        <mat-error *ngIf=\"password.invalid\">Must contain at least one number and one uppercase and lowercase letter, and 8 to 12 characters.</mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <button mat-raised-button type=\"submit\" color=\"primary\" id=\"savebtn\">Save</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/board/board.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/board/board.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"boardall\">\r\n  <div cdkDropListGroup class=\"boards\">\r\n    <div fxLayout=\"row\">\r\n      <div class=\"boardCol\" *ngIf=\"!doneStatus\">\r\n        <h2>Backlog</h2>\r\n        <div cdkDropList [cdkDropListData]=\"backlogA\" class=\"backlist\" id=\"cdk-drop-list-0\" (cdkDropListDropped)=\"drop($event)\">\r\n          <div class=\"listitem\" *ngFor=\"let story of backlogA\" cdkDrag [class.disabled]=\"doneStatus\" (click)=\"onEditStory(story)\">{{story}}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"boardCol\" *ngIf=\"!doneStatus\">\r\n        <h2>To Do</h2>\r\n        <div cdkDropList [cdkDropListData]=\"todoA\" class=\"backlist\" id=\"cdk-drop-list-1\" (cdkDropListDropped)=\"drop($event)\">\r\n          <div class=\"listitem\" *ngFor=\"let story of todoA\" cdkDrag [class.disabled]=\"doneStatus\" (click)=\"onEditStory(story)\">{{story}}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"boardCol\" *ngIf=\"!doneStatus\">\r\n        <h2>In Progress</h2>\r\n        <div cdkDropList [cdkDropListData]=\"progressA\" class=\"backlist\" id=\"cdk-drop-list-2\" (cdkDropListDropped)=\"drop($event)\">\r\n          <div class=\"listitem\" *ngFor=\"let story of progressA\" cdkDrag [class.disabled]=\"doneStatus\" (click)=\"onEditStory(story)\">{{story}}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"boardCol\" *ngIf=\"!doneStatus\">\r\n        <h2>Test</h2>\r\n        <div cdkDropList [cdkDropListData]=\"testA\" class=\"backlist\" id=\"cdk-drop-list-3\" (cdkDropListDropped)=\"drop($event)\">\r\n          <div class=\"listitem\" *ngFor=\"let story of testA\" cdkDrag [class.disabled]=\"doneStatus\" (click)=\"onEditStory(story)\">{{story}}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"boardCol\" *ngIf=\"!doneStatus\">\r\n        <h2>Review</h2>\r\n        <div cdkDropList [cdkDropListData]=\"reviewA\" class=\"backlist\" id=\"cdk-drop-list-4\" (cdkDropListDropped)=\"drop($event)\">\r\n          <div class=\"listitem\" *ngFor=\"let story of reviewA\" cdkDrag [class.disabled]=\"doneStatus\" (click)=\"onEditStory(story)\">{{story}}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"boardCol\">\r\n        <h2>Done</h2>\r\n        <div cdkDropList [cdkDropListData]=\"doneA\" class=\"backlist\" id=\"cdk-drop-list-5\" (cdkDropListDropped)=\"drop($event)\">\r\n          <div class=\"listitem\" *ngFor=\"let story of doneA\" cdkDrag [class.disabled]=\"doneStatus\">{{story}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <button mat-raised-button class=\"endbutton\" color=\"warn\" (click)=\"onEnd()\" [class.disabled]=\"doneStatus\" [disabled]=\"doneStatus\">End Sprint</button>\r\n  <button mat-raised-button class=\"storybutton\" color=\"primary\" (click)=\"onAddStory()\" [class.disabled]=\"doneStatus\" [disabled]=\"doneStatus\">Add Story</button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/board/editstory/editstory.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/board/editstory/editstory.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onEdit(storyForm)\" #storyForm=\"ngForm\" class=\"projform\">\r\n  <mat-form-field class=\"storyarea\">\r\n    <textarea matInput class=\"storyarea\" pattern=\"[A-Za-z0-9._%+-\\s]{0,1024}\" name=\"inStory\" [ngModel]=\"currstory\" rows=\"5\" placeholder=\"Enter the new story here.\"></textarea>\r\n  </mat-form-field>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"end\">\r\n    <button mat-raised-button class=\"createbutton\" type=\"submit\" color=\"primary\">Edit Story</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/board/new-story/new-story.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/board/new-story/new-story.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onCreate(storyForm)\" #storyForm=\"ngForm\" class=\"projform\">\r\n  <mat-form-field class=\"storyarea\">\r\n    <textarea matInput class=\"storyarea\" pattern=\"[A-Za-z0-9._%+-\\s]{0,1024}\" name=\"inStory\" ngModel rows=\"5\" placeholder=\"Enter a story here\"></textarea>\r\n  </mat-form-field>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"end\">\r\n    <button mat-raised-button class=\"createbutton\" type=\"submit\" color=\"primary\">Create Story</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/currentproj/addmember/addmember.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/currentproj/addmember/addmember.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"alldiv\">\r\n  <h1>Add a new member</h1>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"flex-start\" class=\"selectdiv\">\r\n    <mat-form-field>\r\n      <mat-label>Role</mat-label>\r\n      <select [formControl]=\"myControl2\" matNativeControl>\r\n        <option value=\"ScrumMaster\">Scrum Master</option>\r\n        <option value=\"Product Owner\">Product Owner</option>\r\n        <option value=\"Team Member\">Team Member</option>\r\n      </select>\r\n    </mat-form-field>\r\n  </div>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"preddiv\">\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" placeholder=\"Search by username.\" [formControl]=\"myControl\" [matAutocomplete]=\"auto\" aria-label=\"Number\">\r\n      <mat-autocomplete #auto=\"matAutocomplete\">\r\n        <mat-option *ngFor=\"let username of filteredOptions | async\" [value]=\"username\">\r\n          {{username}}\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n    </mat-form-field>\r\n    <button mat-raised-button color=\"primary\" type=\"button\" class=\"addbutton\" (click)=\"onAddMember(myControl.value, myControl2.value)\">Add</button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/currentproj/currentproj.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/currentproj/currentproj.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"allpanel\">\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"projpanel\">\r\n      <div class=\"innerpanel\">\r\n        <div fxLayout=\"row\" class=\"firstrow\">\r\n          <div fxLayout=\"column\">\r\n            <img [src]=\"url\" alt=\"project-pic\" id=\"project-pic\">\r\n            <div fxLayoutAlign=\"center center\" class=\"divchangepho\">\r\n                <input type=\"file\" (change)=\"onFileChanged($event)\" accept=\"image/*\" class=\"img-input\" #fileInput>\r\n                <mat-icon (click)=\"fileInput.click()\">unarchive</mat-icon>\r\n                <a (click)=\"fileInput.click()\" id=\"changephoto\">Change photo</a>\r\n            </div>\r\n          </div>\r\n          <form (submit)=\"setNewDesc(projectForm)\" #projectForm=\"ngForm\" class=\"projform\">\r\n            <div fxLayout=\"column\" class=\"projthings\">\r\n              <h1 class=\"projcont\">{{projname}}</h1>\r\n              <mat-form-field>\r\n                <textarea matInput class=\"descarea\" name=\"inDesc\" [ngModel]=\"projdesc\" rows=\"4\" minlength=\"1\" maxlength=\"1024\"></textarea>\r\n              </mat-form-field>\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"end\">\r\n                <button mat-raised-button class=\"descbutton\" type=\"submit\">Edit Description</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div fxLayout=\"row\" class=\"secondrow\">\r\n          <div fxLayout=\"column\" class=\"datecol\">\r\n            <h3>Start Date</h3>\r\n            <p>{{startdate}}</p>\r\n            <h3>End Date</h3>\r\n            <p>{{enddate}}</p>\r\n          </div>\r\n          <div fxLayout=\"column\" class=\"memberscol\">\r\n            <div name=\"\">\r\n              <h2>Sprints</h2>\r\n              <div class=\"expan\">\r\n                <mat-expansion-panel class=\"exppanel\" *ngFor=\"let sprint of sprints; let i = index\">\r\n                  <mat-expansion-panel-header>\r\n                    <mat-panel-title class=\"pantitle\">\r\n                      {{sprint}}\r\n                    </mat-panel-title>\r\n                  </mat-expansion-panel-header>\r\n                  <div fxLayoutAlign=\"end\">\r\n                    <button mat-raised-button class=\"expbuttons\" (click)=\"openBoard(sprint)\" routerLinkActive=\"router-link-active\" >Go to Board</button>\r\n                  </div>\r\n                </mat-expansion-panel>\r\n                <h5 *ngIf=\"sprints.length <= 0\">You don't have any sprints yet</h5>\r\n              </div>\r\n              <div fxLayoutAlign=\"end\">\r\n                <button mat-raised-button class=\"memberbutton\" (click)=\"addSprint()\">Add Sprint</button>\r\n              </div>\r\n            </div>\r\n            <div name=\"membersdiv\">\r\n              <h2>Members</h2>\r\n              <div class=\"expan\">\r\n                <mat-expansion-panel class=\"exppanel\" *ngFor=\"let member of memberids; let i = index\">\r\n                  <mat-expansion-panel-header>\r\n                    <mat-panel-title class=\"pantitle\">\r\n                      {{membernames[i]}}\r\n                    </mat-panel-title>\r\n                    <mat-panel-description class=\"panrole\">\r\n                      {{memberroles[i]}}\r\n                    </mat-panel-description>\r\n                  </mat-expansion-panel-header>\r\n                  <div fxLayoutAlign=\"end\">\r\n                    <button mat-raised-button color=\"secondary\" class=\"expbuttons\">Stats</button>\r\n                    <button mat-raised-button color=\"primary\" class=\"expbuttons\" (click)=\"newRole(member)\">Edit Role</button>\r\n                    <button mat-raised-button color=\"warn\" class=\"expbuttons\" (click)=\"deleteMember(member)\">Delete</button>\r\n                  </div>\r\n                </mat-expansion-panel>\r\n              </div>\r\n            </div>\r\n            <div fxLayoutAlign=\"end\">\r\n              <button mat-raised-button class=\"memberbutton\" (click)=\"addUser()\">Add Member</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/currentproj/newrole/newrole.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/currentproj/newrole/newrole.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\r\n    <mat-label>Role</mat-label>\r\n    <select [formControl]=\"myControl\" matNativeControl>\r\n      <option value=\"ScrumMaster\">Scrum Master</option>\r\n      <option value=\"Product Owner\">Product Owner</option>\r\n      <option value=\"Team Member\">Team Member</option>\r\n    </select>\r\n</mat-form-field>\r\n<button mat-raised-button color=\"primary\" class=\"savebutton\" (click)=\"onSave()\">Save</button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/currentproj/newsprint/newsprint.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/currentproj/newsprint/newsprint.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Enter the new sprint's name</h3>\r\n<mat-form-field>\r\n  <input matInput type=\"text\" [formControl]=\"myControl\" minlength=\"1\">\r\n</mat-form-field>\r\n<button mat-raised-button color=\"primary\" class=\"createbutton\" (click)=\"onCreate()\">Create</button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/projects.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"projpanel\">\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"projpanel\">\r\n      <mat-expansion-panel class=\"exppanel\" *ngFor=\"let project of userprojs; let i = index\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title class=\"pantitle\">\r\n              {{project.projname}}\r\n            </mat-panel-title>\r\n            <mat-panel-description class=\"panid\">\r\n              {{project.project}}\r\n            </mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <p class=\"pandesc\">{{project.projdesc}}</p>\r\n            <button mat-raised-button color=\"primary\" class=\"openbutton\" (click)=\"openProject(project.projname, project.project)\">Open</button>\r\n          </div>\r\n        </mat-expansion-panel>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" id=\"first-div\">\r\n    <div id=\"outer-div\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n          <h1>Create a new account</h1>\r\n      </div>\r\n      <form (submit)=\"onAddUser(userForm)\" #userForm=\"ngForm\">\r\n      <div id=\"inner-div\">\r\n            <h3>Full Name</h3>\r\n            <mat-form-field>\r\n                <input matInput pattern=\"([A-z0-9À-ž\\s]){0,256}\" type=\"text\" name=\"inName\" ngModel #name=\"ngModel\" placeholder=\"Name\" maxlength=\"256\" required>\r\n                <mat-error *ngIf=\"name.invalid\">You need to enter a name.</mat-error>\r\n            </mat-form-field>\r\n            <h3>E-mail</h3>\r\n            <mat-form-field>\r\n                <input matInput pattern=\"[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" type=\"text\" name=\"inEmail\" ngModel #email=\"ngModel\" placeholder=\"E-mail\" required>\r\n                <mat-error *ngIf=\"email.invalid\">You need to enter a valid E-mail.</mat-error>\r\n            </mat-form-field>\r\n            <h3>Username</h3>\r\n            <mat-form-field>\r\n                <input matInput pattern=\"[A-Za-z0-9_-]{6,40}\" type=\"text\" name=\"inUser\" ngModel #username=\"ngModel\" placeholder=\"Username\" required minlength=\"6\" maxlength=\"40\">\r\n                <mat-error *ngIf=\"username.invalid\">You need to enter a valid username. Lenght: 6-40 characters.</mat-error>\r\n            </mat-form-field>\r\n            <h3>Password</h3>\r\n            <mat-form-field>\r\n                <input matInput pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\\$%\\^&]).{8,12}$\" title=\"Must contain at least one number and one uppercase and lowercase letter, and 8 to 12 characters\" type=\"password\" name=\"inPass\" ngModel #password=\"ngModel\" placeholder=\"Password\" required minlength=\"8\" maxlength=\"12\">\r\n                <mat-error *ngIf=\"password.invalid\">Must contain at least one number and one uppercase and lowercase letter, and 8 to 12 characters.</mat-error>\r\n            </mat-form-field>\r\n            <h3>Confirm Password</h3>\r\n            <mat-form-field>\r\n                <input matInput pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}\" title=\"Must contain at least one number and one uppercase and lowercase letter, and 8 to 12 characters\" type=\"password\" name=\"confPass\" ngModel #password2=\"ngModel\" placeholder=\"Repeat password\" required minlength=\"8\" maxlength=\"12\">\r\n                <mat-error *ngIf=\"password2.invalid\">Must contain at least one number and one uppercase and lowercase letter, and 8 to 12 characters</mat-error>\r\n            </mat-form-field>\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <mat-checkbox (change)=\"changeCheck($event)\" color=\"primary\"><h4>I agree to the <a href=\"/terms\">Terms of use & service</a>.</h4></mat-checkbox>\r\n            </div>\r\n\r\n            <button mat-raised-button [disabled]=\"disabledAgreement\" type=\"submit\">Create an account</button><p></p>\r\n            <a href=\"www.google.com\" id=\"google-reg\">\r\n              Register with   <img src=\"../../assets/img/google.png\" alt=\"google_sign-in\">\r\n            </a>\r\n            <h4>You already have an account?</h4>\r\n            <a routerLink=\"/start/login\" class=\"reg-link\">Log In.</a>\r\n      </div>\r\n    </form>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#about-logo{\r\n  height: 20%;\r\n  width: 20%;\r\n  padding: 5px;\r\n}\r\n\r\np{\r\n  padding: 0% 20% 0% 20%;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWJvdXQtbG9nb3tcclxuICBoZWlnaHQ6IDIwJTtcclxuICB3aWR0aDogMjAlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxucHtcclxuICBwYWRkaW5nOiAwJSAyMCUgMCUgMjAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'scrum-metrics';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navigation/header/header.component */ "./src/app/navigation/header/header.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./navigation/sidenav-list/sidenav-list.component */ "./src/app/navigation/sidenav-list/sidenav-list.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _docs_docs_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./docs/docs.component */ "./src/app/docs/docs.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _error_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./error-pages/not-found/not-found.component */ "./src/app/error-pages/not-found/not-found.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _navigation_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./navigation/app-header/app-header.component */ "./src/app/navigation/app-header/app-header.component.ts");
/* harmony import */ var _mainhome_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./mainhome.component */ "./src/app/mainhome.component.ts");
/* harmony import */ var _apphome_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./apphome.component */ "./src/app/apphome.component.ts");
/* harmony import */ var _navigation_app_sidenav_list_app_sidenav_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./navigation/app-sidenav-list/app-sidenav-list.component */ "./src/app/navigation/app-sidenav-list/app-sidenav-list.component.ts");
/* harmony import */ var _applanding_applanding_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./applanding/applanding.component */ "./src/app/applanding/applanding.component.ts");
/* harmony import */ var _newproject_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./newproject.component */ "./src/app/newproject.component.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile.component.ts");
/* harmony import */ var _date_format__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./date-format */ "./src/app/date-format.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _projects_currentproj_currentproj_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./projects/currentproj/currentproj.component */ "./src/app/projects/currentproj/currentproj.component.ts");
/* harmony import */ var _projects_currentproj_addmember_addmember_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./projects/currentproj/addmember/addmember.component */ "./src/app/projects/currentproj/addmember/addmember.component.ts");
/* harmony import */ var _projects_currentproj_newrole_newrole_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./projects/currentproj/newrole/newrole.component */ "./src/app/projects/currentproj/newrole/newrole.component.ts");
/* harmony import */ var _projects_board_board_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./projects/board/board.component */ "./src/app/projects/board/board.component.ts");
/* harmony import */ var _projects_currentproj_newsprint_newsprint_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./projects/currentproj/newsprint/newsprint.component */ "./src/app/projects/currentproj/newsprint/newsprint.component.ts");
/* harmony import */ var _projects_board_new_story_new_story_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./projects/board/new-story/new-story.component */ "./src/app/projects/board/new-story/new-story.component.ts");
/* harmony import */ var _projects_board_editstory_editstory_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./projects/board/editstory/editstory.component */ "./src/app/projects/board/editstory/editstory.component.ts");
/* harmony import */ var _profilenewpass_profilenewpass_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./profilenewpass/profilenewpass.component */ "./src/app/profilenewpass/profilenewpass.component.ts");
/* harmony import */ var _deleteuser_deleteuser_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./deleteuser/deleteuser.component */ "./src/app/deleteuser/deleteuser.component.ts");















































var AppModule = /** @class */ (function () {
    function AppModule(dateAdapter) {
        this.dateAdapter = dateAdapter;
        dateAdapter.setLocale('en-in'); // DD/MM/YYYY
    }
    AppModule.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_11__["DateAdapter"] }
    ]; };
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_17__["LayoutComponent"],
                _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_18__["SidenavListComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_19__["AboutComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_21__["RegisterComponent"],
                _docs_docs_component__WEBPACK_IMPORTED_MODULE_22__["DocsComponent"],
                _error_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_25__["NotFoundComponent"],
                _navigation_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_28__["AppHeaderComponent"],
                _mainhome_component__WEBPACK_IMPORTED_MODULE_29__["MainhomeComponent"],
                _apphome_component__WEBPACK_IMPORTED_MODULE_30__["ApphomeComponent"],
                _navigation_app_sidenav_list_app_sidenav_list_component__WEBPACK_IMPORTED_MODULE_31__["AppSidenavListComponent"],
                _applanding_applanding_component__WEBPACK_IMPORTED_MODULE_32__["ApplandingComponent"],
                _newproject_component__WEBPACK_IMPORTED_MODULE_33__["NewProjectComponent"],
                _profile_component__WEBPACK_IMPORTED_MODULE_34__["ProfileComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_37__["ProjectsComponent"],
                _projects_currentproj_currentproj_component__WEBPACK_IMPORTED_MODULE_38__["CurrentprojComponent"],
                _projects_currentproj_addmember_addmember_component__WEBPACK_IMPORTED_MODULE_39__["AddmemberComponent"],
                _projects_currentproj_newrole_newrole_component__WEBPACK_IMPORTED_MODULE_40__["NewroleComponent"],
                _projects_board_board_component__WEBPACK_IMPORTED_MODULE_41__["BoardComponent"],
                _projects_currentproj_newsprint_newsprint_component__WEBPACK_IMPORTED_MODULE_42__["NewsprintComponent"],
                _projects_board_new_story_new_story_component__WEBPACK_IMPORTED_MODULE_43__["NewStoryComponent"],
                _projects_board_editstory_editstory_component__WEBPACK_IMPORTED_MODULE_44__["EditstoryComponent"],
                _profilenewpass_profilenewpass_component__WEBPACK_IMPORTED_MODULE_45__["ProfilenewpassComponent"],
                _deleteuser_deleteuser_component__WEBPACK_IMPORTED_MODULE_46__["DeleteuserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _routing_routing_module__WEBPACK_IMPORTED_MODULE_15__["RoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckboxModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_27__["StoreModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckboxModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"]
            ],
            providers: [
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControl"],
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_11__["DateAdapter"], useClass: _date_format__WEBPACK_IMPORTED_MODULE_35__["DateFormat"] },
                _auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]],
            entryComponents: [
                _newproject_component__WEBPACK_IMPORTED_MODULE_33__["NewProjectComponent"],
                _profile_component__WEBPACK_IMPORTED_MODULE_34__["ProfileComponent"],
                _profilenewpass_profilenewpass_component__WEBPACK_IMPORTED_MODULE_45__["ProfilenewpassComponent"],
                _deleteuser_deleteuser_component__WEBPACK_IMPORTED_MODULE_46__["DeleteuserComponent"],
                _projects_currentproj_addmember_addmember_component__WEBPACK_IMPORTED_MODULE_39__["AddmemberComponent"],
                _projects_currentproj_newrole_newrole_component__WEBPACK_IMPORTED_MODULE_40__["NewroleComponent"],
                _projects_currentproj_newsprint_newsprint_component__WEBPACK_IMPORTED_MODULE_42__["NewsprintComponent"],
                _projects_board_new_story_new_story_component__WEBPACK_IMPORTED_MODULE_43__["NewStoryComponent"],
                _projects_board_editstory_editstory_component__WEBPACK_IMPORTED_MODULE_44__["EditstoryComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/apphome.component.css":
/*!***************************************!*\
  !*** ./src/app/apphome.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav{\r\n  height: 100%;\r\n}\r\n\r\nmat-sidenav-content{\r\n  min-width: 250px;\r\n}\r\n\r\nmat-sidenav{\r\n  max-width: 150px;\r\n  min-width: 150px;\r\n  min-height: 500px;\r\n}\r\n\r\napp-app-header{\r\n  height: 100px;\r\n}\r\n\r\nmat-sidenav{\r\n  width: 40%;\r\n}\r\n\r\nmain{\r\n  padding: 0px;\r\n  max-width: 2000px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYtY29udGFpbmVyLCBtYXQtc2lkZW5hdi1jb250ZW50LCBtYXQtc2lkZW5hdntcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2LWNvbnRlbnR7XHJcbiAgbWluLXdpZHRoOiAyNTBweDtcclxufVxyXG5cclxubWF0LXNpZGVuYXZ7XHJcbiAgbWF4LXdpZHRoOiAxNTBweDtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG5hcHAtYXBwLWhlYWRlcntcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdntcclxuICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG5tYWlue1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXgtd2lkdGg6IDIwMDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/apphome.component.ts":
/*!**************************************!*\
  !*** ./src/app/apphome.component.ts ***!
  \**************************************/
/*! exports provided: ApphomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApphomeComponent", function() { return ApphomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ApphomeComponent = /** @class */ (function () {
    function ApphomeComponent() {
        this.title = 'scrum-metrics';
    }
    ApphomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-apphome',
            template: __webpack_require__(/*! raw-loader!./apphome.component.html */ "./node_modules/raw-loader/index.js!./src/app/apphome.component.html"),
            styles: [__webpack_require__(/*! ./apphome.component.css */ "./src/app/apphome.component.css")]
        })
    ], ApphomeComponent);
    return ApphomeComponent;
}());



/***/ }),

/***/ "./src/app/applanding/applanding.component.css":
/*!*****************************************************!*\
  !*** ./src/app/applanding/applanding.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n  color: rgba(21, 21, 143, 0.781);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGFuZGluZy9hcHBsYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBK0I7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9hcHBsYW5kaW5nL2FwcGxhbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgY29sb3I6IHJnYmEoMjEsIDIxLCAxNDMsIDAuNzgxKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/applanding/applanding.component.ts":
/*!****************************************************!*\
  !*** ./src/app/applanding/applanding.component.ts ***!
  \****************************************************/
/*! exports provided: ApplandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplandingComponent", function() { return ApplandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _newproject_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../newproject.component */ "./src/app/newproject.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var ApplandingComponent = /** @class */ (function () {
    function ApplandingComponent(dialog) {
        this.dialog = dialog;
    }
    ApplandingComponent.prototype.ngOnInit = function () {
    };
    ApplandingComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_newproject_component__WEBPACK_IMPORTED_MODULE_2__["NewProjectComponent"], {
            minWidth: '500px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ApplandingComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    ApplandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-applanding',
            template: __webpack_require__(/*! raw-loader!./applanding.component.html */ "./node_modules/raw-loader/index.js!./src/app/applanding/applanding.component.html"),
            styles: [__webpack_require__(/*! ./applanding.component.css */ "./src/app/applanding/applanding.component.css")]
        })
    ], ApplandingComponent);
    return ApplandingComponent;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/users.service */ "./src/app/register/users.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.userService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/start/login']);
            return false;
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _register_users_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/date-format.ts":
/*!********************************!*\
  !*** ./src/app/date-format.ts ***!
  \********************************/
/*! exports provided: DateFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormat", function() { return DateFormat; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");


var SUPPORTS_INTL_API = typeof Intl !== 'undefined';
var DateFormat = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DateFormat, _super);
    function DateFormat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.useUtcForDisplay = true;
        return _this;
    }
    DateFormat.prototype.parse = function (value) {
        if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
            var str = value.split('/');
            var year = Number(str[2]);
            var month = Number(str[1]) - 1;
            var date = Number(str[0]);
            return new Date(year, month, date);
        }
        var timestamp = typeof value === 'number' ? value : Date.parse(value);
        return isNaN(timestamp) ? null : new Date(timestamp);
    };
    return DateFormat;
}(_angular_material__WEBPACK_IMPORTED_MODULE_1__["NativeDateAdapter"]));



/***/ }),

/***/ "./src/app/deleteuser/deleteuser.component.css":
/*!*****************************************************!*\
  !*** ./src/app/deleteuser/deleteuser.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#savebtn{\r\n  margin-top: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsZXRldXNlci9kZWxldGV1c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9kZWxldGV1c2VyL2RlbGV0ZXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzYXZlYnRue1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/deleteuser/deleteuser.component.ts":
/*!****************************************************!*\
  !*** ./src/app/deleteuser/deleteuser.component.ts ***!
  \****************************************************/
/*! exports provided: DeleteuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteuserComponent", function() { return DeleteuserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_register_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/register/users.service */ "./src/app/register/users.service.ts");




var DeleteuserComponent = /** @class */ (function () {
    function DeleteuserComponent(dialogRef, userService) {
        this.dialogRef = dialogRef;
        this.userService = userService;
        this.userid = sessionStorage.getItem('userid');
    }
    DeleteuserComponent.prototype.ngOnInit = function () {
    };
    DeleteuserComponent.prototype.onDelete = function (form) {
        if (form.invalid || !form.value.inPass) {
            return;
        }
        else {
            this.userService.deleteAccount(this.userid, form.value.inPass);
            this.dialogRef.close();
        }
    };
    DeleteuserComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: src_app_register_users_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    DeleteuserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deleteuser',
            template: __webpack_require__(/*! raw-loader!./deleteuser.component.html */ "./node_modules/raw-loader/index.js!./src/app/deleteuser/deleteuser.component.html"),
            styles: [__webpack_require__(/*! ./deleteuser.component.css */ "./src/app/deleteuser/deleteuser.component.css")]
        })
    ], DeleteuserComponent);
    return DeleteuserComponent;
}());



/***/ }),

/***/ "./src/app/docs/docs.component.css":
/*!*****************************************!*\
  !*** ./src/app/docs/docs.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n  font-size: 15px;\r\n  background-color: rgb(55, 106, 165);\r\n  color: white;\r\n  border-radius: 15px;\r\n}\r\n\r\na{\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\nbutton:hover{\r\n  color: lightgray;\r\n  background-color: rgb(63, 118, 182);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jcy9kb2NzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1DQUFtQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL2RvY3MvZG9jcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9ue1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTUsIDEwNiwgMTY1KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5idXR0b246aG92ZXJ7XHJcbiAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjMsIDExOCwgMTgyKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/docs/docs.component.ts":
/*!****************************************!*\
  !*** ./src/app/docs/docs.component.ts ***!
  \****************************************/
/*! exports provided: DocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsComponent", function() { return DocsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DocsComponent = /** @class */ (function () {
    function DocsComponent() {
    }
    DocsComponent.prototype.ngOnInit = function () {
    };
    DocsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-docs',
            template: __webpack_require__(/*! raw-loader!./docs.component.html */ "./node_modules/raw-loader/index.js!./src/app/docs/docs.component.html"),
            styles: [__webpack_require__(/*! ./docs.component.css */ "./src/app/docs/docs.component.css")]
        })
    ], DocsComponent);
    return DocsComponent;
}());



/***/ }),

/***/ "./src/app/error-pages/not-found/not-found.component.css":
/*!***************************************************************!*\
  !*** ./src/app/error-pages/not-found/not-found.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n  font-weight: bold;\r\n  font-size: 60px;\r\n  text-align: center;\r\n  color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3ItcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZXJyb3ItcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/error-pages/not-found/not-found.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/error-pages/not-found/not-found.component.ts ***!
  \**************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
        this.notFoundText = "404 NOT FOUND.";
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/error-pages/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/error-pages/not-found/not-found.component.css")]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home-logo{\r\n  padding: 50px;\r\n  height: 25%;\r\n  width: 25%;\r\n}\r\n\r\nh1{\r\n  text-align: center;\r\n  font-size: 25px;\r\n  padding-left: 10%;\r\n  padding-right: 10%;\r\n}\r\n\r\nbutton{\r\n  background-color: rgb(55, 106, 165);\r\n  font-size: 20px;\r\n  color: white;\r\n  border-radius: 15px;\r\n}\r\n\r\np{\r\n  margin: 5% 20% 5% 20%;\r\n  text-align: center;\r\n}\r\n\r\n#graph{\r\n  height: 10%;\r\n  width: 10%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaG9tZS1sb2dve1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbiAgaGVpZ2h0OiAyNSU7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuaDF7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTUsIDEwNiwgMTY1KTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbnB7XHJcbiAgbWFyZ2luOiA1JSAyMCUgNSUgMjAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2dyYXBoe1xyXG4gIGhlaWdodDogMTAlO1xyXG4gIHdpZHRoOiAxMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layout-wrapper{\r\n  height: 100%;\r\n}\r\n\r\n.flex-wrapper{\r\n  height: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxheW91dC13cmFwcGVye1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmZsZXgtd3JhcHBlcntcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout.component.css")]
        })
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#outer-div{\r\n  border-color: black;\r\n  border-radius: 25px;\r\n  width: 40%;\r\n  background-color: rgba(55, 106, 165, 0.671);\r\n  margin: 3% 0 3% 0;\r\n  color: white;\r\n  min-width: 320px;\r\n  max-width: 1080px;\r\n}\r\n\r\n@media screen and (max-width: 600px){\r\n  #outer-div{\r\n    width: 50%;\r\n  }\r\n }\r\n\r\n#first-div{\r\n  background-image: url('buildings.jpg');\r\n  background-repeat: no-repeat;\r\n}\r\n\r\nh1{\r\n  font-size: 45px;\r\n}\r\n\r\nh3{\r\n  font-size: 22px;\r\n}\r\n\r\nmat-error{\r\n  font-size: 12px;\r\n}\r\n\r\nimg{\r\n  height: 35px;\r\n  width: 35px;\r\n  border: 15px;\r\n  border-color: black;\r\n}\r\n\r\nbutton{\r\n  background-color: rgb(42, 87, 138);\r\n  border-radius: 10px;\r\n  color: white;\r\n}\r\n\r\ndiv #inner-div{\r\n  align: center;\r\n  text-align: center;\r\n  margin: 3% 20% 5% 20%;\r\n}\r\n\r\n.forgot-a{\r\n  font-size: 12px;\r\n}\r\n\r\n.reg-link{\r\n  font-size: 15px;\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLDJDQUEyQztFQUMzQyxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtDQUNEOztBQUVEO0VBQ0Usc0NBQXFEO0VBQ3JELDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI291dGVyLWRpdntcclxuICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU1LCAxMDYsIDE2NSwgMC42NzEpO1xyXG4gIG1hcmdpbjogMyUgMCAzJSAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gIG1heC13aWR0aDogMTA4MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgI291dGVyLWRpdntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gfVxyXG5cclxuI2ZpcnN0LWRpdntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9idWlsZGluZ3MuanBnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG5oMXtcclxuICBmb250LXNpemU6IDQ1cHg7XHJcbn1cclxuXHJcbmgze1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxubWF0LWVycm9ye1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuaW1ne1xyXG4gIGhlaWdodDogMzVweDtcclxuICB3aWR0aDogMzVweDtcclxuICBib3JkZXI6IDE1cHg7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgODcsIDEzOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmRpdiAjaW5uZXItZGl2e1xyXG4gIGFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMyUgMjAlIDUlIDIwJTtcclxufVxyXG5cclxuLmZvcmdvdC1he1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnJlZy1saW5re1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _register_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../register/users.service */ "./src/app/register/users.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService) {
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function (form) {
        if (form.invalid) {
            return;
        }
        this.userService.loginUser(form.value.inUser, form.value.inPass);
        form.resetForm();
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _register_users_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mainhome.component.css":
/*!****************************************!*\
  !*** ./src/app/mainhome.component.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav{\r\n  height: 100%;\r\n}\r\n\r\nmat-sidenav{\r\n  width: 40%;\r\n}\r\n\r\nmain{\r\n  padding: 0px;\r\n  max-width: 2000px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tYWluaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYtY29udGFpbmVyLCBtYXQtc2lkZW5hdi1jb250ZW50LCBtYXQtc2lkZW5hdntcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2e1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbm1haW57XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1heC13aWR0aDogMjAwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/mainhome.component.ts":
/*!***************************************!*\
  !*** ./src/app/mainhome.component.ts ***!
  \***************************************/
/*! exports provided: MainhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainhomeComponent", function() { return MainhomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainhomeComponent = /** @class */ (function () {
    function MainhomeComponent() {
        this.title = 'scrum-metrics';
    }
    MainhomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainhome',
            template: __webpack_require__(/*! raw-loader!./mainhome.component.html */ "./node_modules/raw-loader/index.js!./src/app/mainhome.component.html"),
            styles: [__webpack_require__(/*! ./mainhome.component.css */ "./src/app/mainhome.component.css")]
        })
    ], MainhomeComponent);
    return MainhomeComponent;
}());



/***/ }),

/***/ "./src/app/navigation/app-header/app-header.component.css":
/*!****************************************************************!*\
  !*** ./src/app/navigation/app-header/app-header.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#project-name{\r\n  padding-left: 10px;\r\n}\r\n\r\n.user-name{\r\n  margin: 5px 50px 0px 10px;\r\n}\r\n\r\n.user-photo{\r\n  margin-top: 1px;\r\n  height: 35px;\r\n  width: 35px;\r\n  border: solid 2px;\r\n  border-color: white;\r\n  border-radius: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9hcHAtaGVhZGVyL2FwcC1oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9hcHAtaGVhZGVyL2FwcC1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9qZWN0LW5hbWV7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4udXNlci1uYW1le1xyXG4gIG1hcmdpbjogNXB4IDUwcHggMHB4IDEwcHg7XHJcbn1cclxuXHJcbi51c2VyLXBob3Rve1xyXG4gIG1hcmdpbi10b3A6IDFweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgYm9yZGVyOiBzb2xpZCAycHg7XHJcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/navigation/app-header/app-header.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/navigation/app-header/app-header.component.ts ***!
  \***************************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/profile.component */ "./src/app/profile.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_register_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/register/users.service */ "./src/app/register/users.service.ts");





var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent(dialog, userService) {
        var _this = this;
        this.dialog = dialog;
        this.userService = userService;
        this.username = sessionStorage.getItem('username');
        this.fullname = sessionStorage.getItem('name');
        this.projname = sessionStorage.getItem('currproj');
        this.sprintname = sessionStorage.getItem('sprint');
        this.url = '../assets/img/stockprofile.png';
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onToggleSidenav = function () {
            _this.checkProj();
            _this.sidenavToggle.emit();
        };
    }
    AppHeaderComponent.prototype.ngOnInit = function () {
        this.checkProj();
        this.getProfilePic();
    };
    AppHeaderComponent.prototype.openProfile = function () {
        this.checkProj();
        var dialogRef = this.dialog.open(src_app_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"], {
            minWidth: '500px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    AppHeaderComponent.prototype.checkProj = function () {
        if (sessionStorage.getItem('currproj') === null) {
            this.projname = 'No open project';
            this.sprintname = '';
        }
    };
    AppHeaderComponent.prototype.getProfilePic = function () {
        var _this = this;
        this.userService.getUserImg(this.username).then(function (responseData) {
            // tslint:disable: no-string-literal
            var newimg = responseData[0].image;
            if (newimg.length < 5000) {
                _this.url = '../assets/img/stockprofile.png';
            }
            else {
                sessionStorage.setItem('image', newimg);
                _this.convertImage(newimg);
            }
        });
    };
    AppHeaderComponent.prototype.convertImage = function (newimg) {
        var _this = this;
        var imageBlob = this.dataURItoBlob(newimg);
        var imageFile = new File([imageBlob], 'profilePic', { type: 'image/jpeg' });
        var reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onload = function (event1) {
            _this.url = event1.currentTarget;
            _this.url = _this.url.result;
        };
    };
    AppHeaderComponent.prototype.dataURItoBlob = function (dataURI) {
        var byteString = window.atob(dataURI);
        var arrayBuffer = new ArrayBuffer(byteString.length);
        var int8Array = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        var blob = new Blob([int8Array], { type: 'image/jpeg' });
        return blob;
    };
    AppHeaderComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: src_app_register_users_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AppHeaderComponent.prototype, "sidenavToggle", void 0);
    AppHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-header',
            template: __webpack_require__(/*! raw-loader!./app-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/navigation/app-header/app-header.component.html"),
            styles: [__webpack_require__(/*! ./app-header.component.css */ "./src/app/navigation/app-header/app-header.component.css")]
        })
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "./src/app/navigation/app-sidenav-list/app-sidenav-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/navigation/app-sidenav-list/app-sidenav-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btnproject{\r\n  color: white;\r\n  position: absolute;\r\n  bottom: 50px;\r\n  left: 20px;\r\n}\r\n\r\nmat-icon{\r\n  padding-right: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9hcHAtc2lkZW5hdi1saXN0L2FwcC1zaWRlbmF2LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vYXBwLXNpZGVuYXYtbGlzdC9hcHAtc2lkZW5hdi1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRucHJvamVjdHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogNTBweDtcclxuICBsZWZ0OiAyMHB4O1xyXG59XHJcblxyXG5tYXQtaWNvbntcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/navigation/app-sidenav-list/app-sidenav-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/navigation/app-sidenav-list/app-sidenav-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: AppSidenavListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidenavListComponent", function() { return AppSidenavListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_newproject_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/newproject.component */ "./src/app/newproject.component.ts");
/* harmony import */ var src_app_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/profile.component */ "./src/app/profile.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AppSidenavListComponent = /** @class */ (function () {
    function AppSidenavListComponent(dialog, router) {
        var _this = this;
        this.dialog = dialog;
        this.router = router;
        this.sidenavClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSidenavClose = function () {
            _this.sidenavClose.emit();
        };
    }
    AppSidenavListComponent.prototype.ngOnInit = function () {
    };
    AppSidenavListComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(src_app_newproject_component__WEBPACK_IMPORTED_MODULE_3__["NewProjectComponent"], {
            minWidth: '500px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    AppSidenavListComponent.prototype.openProfile = function () {
        var dialogRef = this.dialog.open(src_app_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], {
            minWidth: '500px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    AppSidenavListComponent.prototype.endSession = function () {
        sessionStorage.clear();
        this.router.navigate(['/start/login']);
    };
    AppSidenavListComponent.prototype.openProjs = function () {
        this.router.navigate(['/app/projects']);
    };
    AppSidenavListComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AppSidenavListComponent.prototype, "sidenavClose", void 0);
    AppSidenavListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-sidenav-list',
            template: __webpack_require__(/*! raw-loader!./app-sidenav-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/navigation/app-sidenav-list/app-sidenav-list.component.html"),
            styles: [__webpack_require__(/*! ./app-sidenav-list.component.css */ "./src/app/navigation/app-sidenav-list/app-sidenav-list.component.css")]
        })
    ], AppSidenavListComponent);
    return AppSidenavListComponent;
}());



/***/ }),

/***/ "./src/app/navigation/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/navigation/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a, button{\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\nbutton{\r\n  font-size: 20px;\r\n  margin-top: -5px;\r\n  margin-left: -20px;\r\n}\r\n\r\n.matMenuButtons{\r\n  font-size: 15px;\r\n  margin-left: 0px;\r\n  margin-top: 0px;\r\n  color: black;\r\n}\r\n\r\n.matMenuButtons:hover{\r\n  color: gray;\r\n  background-color: lightgray;\r\n}\r\n\r\na:hover, a:active, button:hover, button:active{\r\n  color: lightgray;\r\n}\r\n\r\n.navigation-items{\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nmat-toolbar{\r\n  border-radius: 0px;\r\n}\r\n\r\n.active{\r\n  font-weight: bold;\r\n  color: lightgray;\r\n}\r\n\r\n@media(max-width: 959px){\r\n  mat-toolbar{\r\n    border-radius: 0px;\r\n  }\r\n}\r\n\r\n#logo{\r\n  width: 60px;\r\n  height: 60px;\r\n  margin-top: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSwgYnV0dG9ue1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTVweDtcclxuICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbn1cclxuXHJcbi5tYXRNZW51QnV0dG9uc3tcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubWF0TWVudUJ1dHRvbnM6aG92ZXJ7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG5hOmhvdmVyLCBhOmFjdGl2ZSwgYnV0dG9uOmhvdmVyLCBidXR0b246YWN0aXZle1xyXG4gIGNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uLWl0ZW1ze1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxubWF0LXRvb2xiYXJ7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcblxyXG4uYWN0aXZle1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDk1OXB4KXtcclxuICBtYXQtdG9vbGJhcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICB9XHJcbn1cclxuXHJcbiNsb2dve1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/navigation/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/navigation/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        var _this = this;
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onToggleSidenav = function () {
            _this.sidenavToggle.emit();
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], HeaderComponent.prototype, "sidenavToggle", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/navigation/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/navigation/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\na:hover, a:active{\r\n  color: lightgray;\r\n}\r\n\r\n.nav-caption{\r\n  display: inline;\r\n  padding-left: 6px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9zaWRlbmF2LWxpc3Qvc2lkZW5hdi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vc2lkZW5hdi1saXN0L3NpZGVuYXYtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5hOmhvdmVyLCBhOmFjdGl2ZXtcclxuICBjb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG4ubmF2LWNhcHRpb257XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHBhZGRpbmctbGVmdDogNnB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: SidenavListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavListComponent", function() { return SidenavListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidenavListComponent = /** @class */ (function () {
    function SidenavListComponent() {
        var _this = this;
        this.sidenavClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSidenavClose = function () {
            _this.sidenavClose.emit();
        };
    }
    SidenavListComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], SidenavListComponent.prototype, "sidenavClose", void 0);
    SidenavListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav-list',
            template: __webpack_require__(/*! raw-loader!./sidenav-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/navigation/sidenav-list/sidenav-list.component.html"),
            styles: [__webpack_require__(/*! ./sidenav-list.component.css */ "./src/app/navigation/sidenav-list/sidenav-list.component.css")]
        })
    ], SidenavListComponent);
    return SidenavListComponent;
}());



/***/ }),

/***/ "./src/app/newproject.component.css":
/*!******************************************!*\
  !*** ./src/app/newproject.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#fulldialog{\r\n min-width: 400px;\r\n}\r\n\r\n#project-pic{\r\n  height: 150px;\r\n  width: 150px;\r\n  border-radius: 100%;\r\n  margin-right: 20px;\r\n}\r\n\r\n#createbutt{\r\n  margin-top: 20px;\r\n}\r\n\r\n#endbutt{\r\n  margin: 19px 0px 0px 10px;\r\n  font-weight: bold;\r\n}\r\n\r\n#picker2{\r\n  margin-top: -2px;\r\n}\r\n\r\n#changephoto{\r\n  text-decoration: none;\r\n  font-weight: bold;\r\n  color: rgb(51, 51, 143);\r\n}\r\n\r\n#date2{\r\n  margin: 21px 0px 0px 10px;\r\n}\r\n\r\n.divchangepho{\r\n  margin: 15px 0px 0px -20px;\r\n}\r\n\r\n.img-input{\r\n  display: none;\r\n}\r\n\r\n#select-div{\r\n  width: 150px;\r\n  padding-right: 15px;\r\n}\r\n\r\n#deletebutton{\r\n  height: 80%;\r\n  margin: 5px 0px 0px 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cHJvamVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9uZXdwcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZnVsbGRpYWxvZ3tcclxuIG1pbi13aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbiNwcm9qZWN0LXBpY3tcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuI2NyZWF0ZWJ1dHR7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuI2VuZGJ1dHR7XHJcbiAgbWFyZ2luOiAxOXB4IDBweCAwcHggMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI3BpY2tlcjJ7XHJcbiAgbWFyZ2luLXRvcDogLTJweDtcclxufVxyXG5cclxuI2NoYW5nZXBob3Rve1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogcmdiKDUxLCA1MSwgMTQzKTtcclxufVxyXG5cclxuI2RhdGUye1xyXG4gIG1hcmdpbjogMjFweCAwcHggMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5kaXZjaGFuZ2VwaG97XHJcbiAgbWFyZ2luOiAxNXB4IDBweCAwcHggLTIwcHg7XHJcbn1cclxuXHJcbi5pbWctaW5wdXR7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI3NlbGVjdC1kaXZ7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbiNkZWxldGVidXR0b257XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgbWFyZ2luOiA1cHggMHB4IDBweCAxMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/newproject.component.ts":
/*!*****************************************!*\
  !*** ./src/app/newproject.component.ts ***!
  \*****************************************/
/*! exports provided: NewProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProjectComponent", function() { return NewProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/users.service */ "./src/app/register/users.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects.service */ "./src/app/projects.service.ts");







var NewProjectComponent = /** @class */ (function () {
    function NewProjectComponent(dialogRef, userService, projectService) {
        this.dialogRef = dialogRef;
        this.userService = userService;
        this.projectService = projectService;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.myControl2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.usernames = [];
        this.roles = [];
        this.storedusers = [];
        this.disabledDate = true;
        this.url = '../assets/img/scrum.png';
        this.firstDate = null;
        this.usersMap = new Map();
        this.rolesMap = new Map();
    }
    NewProjectComponent.prototype.emptyAll = function () {
        this.storedusers = [];
        this.roles = [];
        this.rolesMap = null;
        this.usersMap = null;
        this.selectedFile = null;
        this.usernames = [];
        this.usernames.length = 0;
    };
    NewProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.emptyAll();
        this.usernames = this.userService.getUsersA();
        this.usersMap = this.userService.getUsersM();
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (username) { return _this._filter(username); }));
    };
    NewProjectComponent.prototype._filter = function (value) {
        return this.usernames.filter(function (username) { return username.includes(value); });
    };
    NewProjectComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    NewProjectComponent.prototype.onAddUser = function (value, role) {
        if (role != null) {
            if (this.usernames.includes(value) && !this.myControl.invalid && role != null) {
                if (!this.storedusers.includes(value)) {
                    if (!this.myControl2.invalid) {
                        this.rolesMap.set(value, role);
                        this.storedusers.push(value);
                        this.roles.push(role);
                        this.myControl.reset();
                        this.myControl2.reset();
                    }
                    else {
                        alert('Please enter a role');
                        this.myControl2.reset();
                    }
                }
                else {
                    alert('This user is already in');
                    this.myControl.reset();
                    this.myControl2.reset();
                }
            }
            else {
                alert('Can\'t find that user.');
                this.myControl.reset();
                this.myControl2.reset();
            }
        }
        else {
            alert('You need to enter a role.');
        }
    };
    NewProjectComponent.prototype.changeCheck = function (event) {
        this.disabledDate = !event.checked;
    };
    NewProjectComponent.prototype.stringLiteralArray = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args;
    };
    NewProjectComponent.prototype.onAddProject = function (form) {
        var _this = this;
        if (form.invalid || this.usersMap.size === 0) {
            return;
        }
        var projectname = form.value.inName;
        var projDesc = form.value.inDesc;
        var firstDate = form.value.inDate1;
        var lastDate = form.value.inDate2;
        var fixedDate = firstDate.getFullYear() + '-' + (firstDate.getMonth() + 1) + '-' + firstDate.getDate();
        var fixedlastDate;
        if (form.value.inDate2 != null) {
            fixedlastDate = lastDate.getFullYear() + '-' + (lastDate.getMonth() + 1) + '-' + lastDate.getDate();
        }
        else {
            fixedlastDate = null;
        }
        if (lastDate < firstDate) {
            alert('You can\'t have the end date before the start date.');
            return;
        }
        this.projectService.setProject(projectname, projDesc, fixedDate, fixedlastDate, this.baseImg).then(function (result) {
            var responseDat = JSON.parse(JSON.stringify(result));
            if (responseDat.error) {
                alert(responseDat.message);
            }
            else {
                _this.storedusers.forEach(function (user) {
                    _this.projectService.setMember(responseDat[0].project_id, _this.usersMap.get(user), _this.rolesMap.get(user));
                });
                alert('Project created');
                _this.emptyAll();
                _this.dialogRef.close();
            }
        });
    };
    NewProjectComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            // tslint:disable-next-line: prefer-const
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(event.target.files[0]);
            reader_1.onload = function (event1) {
                _this.url = event1.currentTarget;
                _this.url = _this.url.result;
                _this.baseImg = reader_1.result.toString().split(',')[1];
            };
        }
        this.selectedFile = event.target.files[0];
    };
    NewProjectComponent.prototype.deleteUser = function (user, i) {
        this.storedusers.splice(i, 1);
        this.roles.splice(i, 1);
        this.rolesMap.delete(user);
    };
    NewProjectComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _register_users_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsService"] }
    ]; };
    NewProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newproject',
            template: __webpack_require__(/*! raw-loader!./newproject.component.html */ "./node_modules/raw-loader/index.js!./src/app/newproject.component.html"),
            styles: [__webpack_require__(/*! ./newproject.component.css */ "./src/app/newproject.component.css")]
        })
    ], NewProjectComponent);
    return NewProjectComponent;
}());



/***/ }),

/***/ "./src/app/profile.component.css":
/*!***************************************!*\
  !*** ./src/app/profile.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#fulldialog{\r\n  min-width: 400px;\r\n}\r\n\r\n#user-pic{\r\n  height: 150px;\r\n  width: 150px;\r\n  border-radius: 100%;\r\n  margin-right: 20px;\r\n}\r\n\r\n.divchangepho{\r\n  margin: 15px 0px 0px -20px;\r\n}\r\n\r\n.img-input{\r\n  display: none;\r\n}\r\n\r\n#usernameh4{\r\n  margin: 0px;\r\n}\r\n\r\n#deletebtn{\r\n  margin-top: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Z1bGxkaWFsb2d7XHJcbiAgbWluLXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuI3VzZXItcGlje1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZGl2Y2hhbmdlcGhve1xyXG4gIG1hcmdpbjogMTVweCAwcHggMHB4IC0yMHB4O1xyXG59XHJcblxyXG4uaW1nLWlucHV0e1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiN1c2VybmFtZWg0e1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4jZGVsZXRlYnRue1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/profile.component.ts":
/*!**************************************!*\
  !*** ./src/app/profile.component.ts ***!
  \**************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/users.service */ "./src/app/register/users.service.ts");
/* harmony import */ var _profilenewpass_profilenewpass_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profilenewpass/profilenewpass.component */ "./src/app/profilenewpass/profilenewpass.component.ts");
/* harmony import */ var _deleteuser_deleteuser_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deleteuser/deleteuser.component */ "./src/app/deleteuser/deleteuser.component.ts");







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(dialogRef, userService, dialog) {
        this.dialogRef = dialogRef;
        this.userService = userService;
        this.dialog = dialog;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.url = '../assets/img/stockprofile.png';
        this.curname = sessionStorage.getItem('name');
        this.curemail = sessionStorage.getItem('email');
        this.username = sessionStorage.getItem('username');
        this.disabledUser = true;
        this.disabledEmail = true;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getProfilePic();
    };
    ProfileComponent.prototype.getProfilePic = function () {
        var _this = this;
        this.userService.getUserImg(this.username).then(function (responseData) {
            // tslint:disable: no-string-literal
            var newimg = responseData[0].image;
            if (newimg.length < 5000) {
                _this.url = '../assets/img/stockprofile.png';
            }
            else {
                sessionStorage.setItem('image', newimg);
                _this.convertImage(newimg);
            }
        });
    };
    ProfileComponent.prototype.convertImage = function (newimg) {
        var _this = this;
        var imageBlob = this.dataURItoBlob(newimg);
        var imageFile = new File([imageBlob], 'profilePic', { type: 'image/jpeg' });
        var reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onload = function (event1) {
            _this.url = event1.currentTarget;
            _this.url = _this.url.result;
        };
    };
    ProfileComponent.prototype.dataURItoBlob = function (dataURI) {
        var byteString = window.atob(dataURI);
        var arrayBuffer = new ArrayBuffer(byteString.length);
        var int8Array = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        var blob = new Blob([int8Array], { type: 'image/jpeg' });
        return blob;
    };
    ProfileComponent.prototype.changeCheck = function (event) {
        if (this.disabledUser === true) {
            this.disabledUser = false;
        }
        else {
            this.disabledUser = true;
        }
    };
    ProfileComponent.prototype.changeCheck2 = function (event) {
        if (this.disabledEmail === true) {
            this.disabledEmail = false;
        }
        else {
            this.disabledEmail = true;
        }
    };
    ProfileComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ProfileComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            // tslint:disable-next-line: prefer-const
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(event.target.files[0]);
            reader_1.onload = function (event1) {
                _this.url = event1.currentTarget;
                _this.url = _this.url.result;
                _this.userService.updateImage(_this.username, reader_1.result.toString().split(',')[1]).then(function (responseData) {
                    // tslint:disable: no-string-literal
                    alert(responseData['message']);
                });
            };
            reader_1.onerror = function (error) {
                console.log(error);
            };
        }
        this.selectedFile = event.target.files[0];
    };
    ProfileComponent.prototype.changePass = function () {
        var dialogRef = this.dialog.open(_profilenewpass_profilenewpass_component__WEBPACK_IMPORTED_MODULE_5__["ProfilenewpassComponent"], {});
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ProfileComponent.prototype.deleteAccount = function () {
        var dialogRef = this.dialog.open(_deleteuser_deleteuser_component__WEBPACK_IMPORTED_MODULE_6__["DeleteuserComponent"], {});
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ProfileComponent.prototype.saveProfile = function (form) {
        // tslint:disable: triple-equals
        if (form.invalid || form.value.inMail == null && form.value.inName == null) {
            return;
        }
        else {
            if (form.value.inMail != null && form.value.inName != null && this.disabledUser == false && this.disabledEmail == false) {
                this.userService.updateAll(this.username, form.value.inName, form.value.inMail);
                this.dialogRef.close();
            }
            else {
                if (form.value.inName != null && this.disabledUser == false) {
                    this.userService.updateName(this.username, form.value.inName);
                    this.dialogRef.close();
                }
                else {
                    if (form.value.inMail != null && this.disabledEmail == false) {
                        this.userService.updateMail(this.username, form.value.inMail);
                        this.dialogRef.close();
                    }
                    else {
                        this.dialogRef.close();
                        return;
                    }
                }
            }
        }
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _register_users_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile.component.css")]
        })
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profilenewpass/profilenewpass.component.css":
/*!*************************************************************!*\
  !*** ./src/app/profilenewpass/profilenewpass.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#savebtn{\r\n  margin-top: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZW5ld3Bhc3MvcHJvZmlsZW5ld3Bhc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGVuZXdwYXNzL3Byb2ZpbGVuZXdwYXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2F2ZWJ0bntcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/profilenewpass/profilenewpass.component.ts":
/*!************************************************************!*\
  !*** ./src/app/profilenewpass/profilenewpass.component.ts ***!
  \************************************************************/
/*! exports provided: ProfilenewpassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilenewpassComponent", function() { return ProfilenewpassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_register_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/register/users.service */ "./src/app/register/users.service.ts");




var ProfilenewpassComponent = /** @class */ (function () {
    function ProfilenewpassComponent(dialogRef, userService) {
        this.dialogRef = dialogRef;
        this.userService = userService;
        this.username = sessionStorage.getItem('username');
    }
    ProfilenewpassComponent.prototype.ngOnInit = function () {
    };
    ProfilenewpassComponent.prototype.onSavePass = function (form) {
        if (form.invalid || !form.value.inPass) {
            return;
        }
        else {
            this.userService.updatePass(this.username, form.value.inPass);
            this.dialogRef.close();
        }
    };
    ProfilenewpassComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: src_app_register_users_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    ProfilenewpassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profilenewpass',
            template: __webpack_require__(/*! raw-loader!./profilenewpass.component.html */ "./node_modules/raw-loader/index.js!./src/app/profilenewpass/profilenewpass.component.html"),
            styles: [__webpack_require__(/*! ./profilenewpass.component.css */ "./src/app/profilenewpass/profilenewpass.component.css")]
        })
    ], ProfilenewpassComponent);
    return ProfilenewpassComponent;
}());



/***/ }),

/***/ "./src/app/projects.service.ts":
/*!*************************************!*\
  !*** ./src/app/projects.service.ts ***!
  \*************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProjectsService = /** @class */ (function () {
    function ProjectsService(http) {
        this.http = http;
        this.host = 'https://scrum-metrics.herokuapp.com';
    }
    // tslint:disable-next-line: variable-name
    ProjectsService.prototype.setProject = function (name, description, start_date, end_date, image) {
        var project = { name: name, description: description, start_date: start_date, end_date: end_date, image: image };
        return this.http.post(this.host + '/api/postproject', project).toPromise();
    };
    ProjectsService.prototype.getProject = function (name) {
        var projname = { name: name };
        return this.http.post(this.host + '/api/lastproject', projname).toPromise();
    };
    ProjectsService.prototype.setMember = function (projid, user, role) {
        var member = { projid: projid, user: user, role: role };
        return this.http.post(this.host + '/api/postmember', member).toPromise();
    };
    ProjectsService.prototype.getUserProjects = function (userid) {
        var usid = { userid: userid };
        return this.http.post(this.host + '/api/userprojs', usid).toPromise();
    };
    ProjectsService.prototype.getProjectInfo = function (projectid) {
        var proj = { projectid: projectid };
        return this.http.post(this.host + '/api/projectinfo', proj).toPromise();
    };
    ProjectsService.prototype.setNewProjImg = function (projid, newimage) {
        var proj = { projid: projid, newimage: newimage };
        return this.http.put(this.host + '/api/setnewprojimg', proj).toPromise();
    };
    ProjectsService.prototype.getProjImg = function (projid) {
        var proj = { projid: projid };
        return this.http.post(this.host + '/api/getprojectimage', proj).toPromise();
    };
    ProjectsService.prototype.getMembers = function (projid) {
        var project = { projid: projid };
        return this.http.post(this.host + '/api/projmembers', project).toPromise();
    };
    ProjectsService.prototype.setNewDesc = function (projid, description) {
        var project = { projid: projid, description: description };
        return this.http.put(this.host + '/api/setnewdesc', project).toPromise();
    };
    ProjectsService.prototype.deleteMember = function (userid, projid) {
        var user = { userid: userid, projid: projid };
        return this.http.post(this.host + '/api/deletemember', user).toPromise();
    };
    ProjectsService.prototype.updRole = function (projid, userid, role) {
        var member = { projid: projid, userid: userid, role: role };
        return this.http.put(this.host + '/api/updmemrole', member).toPromise();
    };
    ProjectsService.prototype.getSprints = function (projid) {
        var proj = { projid: projid };
        return this.http.post(this.host + '/api/getsprints', proj).toPromise();
    };
    ProjectsService.prototype.newSprint = function (name, projid) {
        var sprint = { name: name, projid: projid };
        return this.http.post(this.host + '/api/setsprint', sprint).toPromise();
    };
    ProjectsService.prototype.getCurSprint = function (projid, name) {
        var cursprint = { projid: projid, name: name };
        return this.http.post(this.host + '/api/currsprint', cursprint).toPromise();
    };
    ProjectsService.prototype.getStories = function (projid, sprintid) {
        var story = { projid: projid, sprintid: sprintid };
        return this.http.post(this.host + '/api/getstories', story).toPromise();
    };
    ProjectsService.prototype.setStory = function (description, sprintid, projid) {
        var story = { description: description, sprintid: sprintid, projid: projid };
        return this.http.post(this.host + '/api/poststory', story).toPromise();
    };
    ProjectsService.prototype.updStoryCol = function (colid, storyname, sprintid, projid) {
        var story = { colid: colid, storyname: storyname, sprintid: sprintid, projid: projid };
        return this.http.put(this.host + '/api/updstorycol', story).toPromise();
    };
    ProjectsService.prototype.checkSprint = function (sprintid, projid) {
        var sprint = { sprintid: sprintid, projid: projid };
        return this.http.post(this.host + '/api/sprintstatus', sprint).toPromise();
    };
    ProjectsService.prototype.endSprint = function (sprintid, projid) {
        var sprint = { sprintid: sprintid, projid: projid };
        return this.http.put(this.host + '/api/endsprint', sprint).toPromise();
    };
    ProjectsService.prototype.moveStory = function (sprintid, projid, storyid) {
        var story = { sprintid: sprintid, projid: projid, storyid: storyid };
        return this.http.put(this.host + '/api/movestory', story).toPromise();
    };
    ProjectsService.prototype.getUnfinishedStories = function (sprintid, projid) {
        var story = { sprintid: sprintid, projid: projid };
        return this.http.post(this.host + '/api/unfinishedstories', story).toPromise();
    };
    ProjectsService.prototype.getNextSprint = function (projid) {
        var sprint = { projid: projid };
        return this.http.post(this.host + '/api/getnextsprint', sprint).toPromise();
    };
    ProjectsService.prototype.editStory = function (sprintid, projid, oldstory, newstory) {
        var story = { sprintid: sprintid, projid: projid, oldstory: oldstory, newstory: newstory };
        return this.http.put(this.host + '/api/editstory', story).toPromise();
    };
    ProjectsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "./src/app/projects/board/board.component.css":
/*!****************************************************!*\
  !*** ./src/app/projects/board/board.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".boardall{\r\n  height: 100%;\r\n  min-height: 500px;\r\n  min-width: 500px;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.title{\r\n  margin-left: 25px;\r\n}\r\n\r\n.boards{\r\n  margin-left: 10px;\r\n}\r\n\r\n.boardCol{\r\n  width: 15%;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n  max-width: 100%;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\n.storybutton{\r\n  width: 100px;\r\n  position: fixed;\r\n  left: auto;\r\n  top: auto;\r\n  right: 180px;\r\n  bottom: 30px;\r\n}\r\n\r\n.endbutton{\r\n  width: 100px;\r\n  position: fixed;\r\n  left: auto;\r\n  top: auto;\r\n  right: 50px;\r\n  bottom: 30px;\r\n}\r\n\r\n.backlist{\r\n  border: solid 1px #ccc;\r\n  min-height: 60px;\r\n  background: white;\r\n  border-radius: 4px;\r\n  overflow: hidden;\r\n  display: block;\r\n}\r\n\r\n.listitem{\r\n  padding: 20px 10px;\r\n  border-bottom: solid 1px #ccc;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  box-sizing: border-box;\r\n  cursor: -webkit-grab;\r\n  cursor: grab;\r\n  background: white;\r\n  font-size: 14px;\r\n  text-align: center;\r\n}\r\n\r\n.cdk-drag-preview {\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.cdk-drag-placeholder {\r\n  opacity: 0;\r\n  cursor: -webkit-grabbing;\r\n  cursor: grabbing;\r\n}\r\n\r\n.cdk-drag-animating {\r\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.listitem:last-child {\r\n  border: none;\r\n}\r\n\r\n.backlist.cdk-drop-list-dragging .listitem:not(.cdk-drag-placeholder) {\r\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.disabled {\r\n  cursor: not-allowed;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUztFQUNULFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsb0JBQVk7RUFBWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCOztnREFFOEM7QUFDaEQ7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysd0JBQWdCO0VBQWhCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNFQUFzRDtFQUF0RCw4REFBc0Q7RUFBdEQsc0RBQXNEO0VBQXRELDBHQUFzRDtBQUN4RDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNFQUFzRDtFQUF0RCw4REFBc0Q7RUFBdEQsc0RBQXNEO0VBQXRELDBHQUFzRDtBQUN4RDs7QUFHQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9hcmRhbGx7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gIG1pbi13aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4uYm9hcmRze1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uYm9hcmRDb2x7XHJcbiAgd2lkdGg6IDE1JTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4uc3RvcnlidXR0b257XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiBhdXRvO1xyXG4gIHRvcDogYXV0bztcclxuICByaWdodDogMTgwcHg7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZW5kYnV0dG9ue1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogYXV0bztcclxuICB0b3A6IGF1dG87XHJcbiAgcmlnaHQ6IDUwcHg7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uYmFja2xpc3R7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubGlzdGl0ZW17XHJcbiAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGN1cnNvcjogZ3JhYjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGN1cnNvcjogZ3JhYmJpbmc7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLmxpc3RpdGVtOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmJhY2tsaXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmxpc3RpdGVtOm5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcblxyXG4uZGlzYWJsZWQge1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/projects/board/board.component.ts":
/*!***************************************************!*\
  !*** ./src/app/projects/board/board.component.ts ***!
  \***************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/projects.service */ "./src/app/projects.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _new_story_new_story_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-story/new-story.component */ "./src/app/projects/board/new-story/new-story.component.ts");
/* harmony import */ var _editstory_editstory_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editstory/editstory.component */ "./src/app/projects/board/editstory/editstory.component.ts");








var BoardComponent = /** @class */ (function () {
    function BoardComponent(router, projectsService, dialog) {
        this.router = router;
        this.projectsService = projectsService;
        this.dialog = dialog;
        // tslint:disable: no-string-literal
        this.sprintid = sessionStorage.getItem('sprintid');
        this.projid = sessionStorage.getItem('currprojid');
        this.backlogA = [];
        this.todoA = [];
        this.progressA = [];
        this.testA = [];
        this.reviewA = [];
        this.doneA = [];
    }
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emptyAll();
        if (sessionStorage.getItem('sprint') === null) {
            this.router.navigate(['/app/currentproject']);
        }
        this.projectsService.checkSprint(this.sprintid, this.projid).then(function (responseData) {
            var response = JSON.parse(JSON.stringify(responseData));
            response.forEach(function (Object) {
                if (Object['done'] === 1) {
                    _this.doneStatus = true;
                }
                else {
                    _this.doneStatus = false;
                }
            });
        });
        this.projectsService.getStories(this.projid, this.sprintid).then(function (responseData) {
            var response = JSON.parse(JSON.stringify(responseData));
            response.forEach(function (Object) {
                if (Object['col_id'] === 1) {
                    _this.backlogA.push(Object['description']);
                }
                if (Object['col_id'] === 2) {
                    _this.todoA.push(Object['description']);
                }
                if (Object['col_id'] === 3) {
                    _this.progressA.push(Object['description']);
                }
                if (Object['col_id'] === 4) {
                    _this.testA.push(Object['description']);
                }
                if (Object['col_id'] === 5) {
                    _this.reviewA.push(Object['description']);
                }
                if (Object['col_id'] === 6) {
                    _this.doneA.push(Object['description']);
                }
            });
        });
    };
    BoardComponent.prototype.drop = function (event) {
        var _this = this;
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            this.ngOnInit();
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            var storyname = event.container.data[event.currentIndex];
            var newcol = void 0;
            if (event.container.id === 'cdk-drop-list-0') {
                newcol = '1';
            }
            if (event.container.id === 'cdk-drop-list-1') {
                newcol = '2';
            }
            if (event.container.id === 'cdk-drop-list-2') {
                newcol = '3';
            }
            if (event.container.id === 'cdk-drop-list-3') {
                newcol = '4';
            }
            if (event.container.id === 'cdk-drop-list-4') {
                newcol = '5';
            }
            if (event.container.id === 'cdk-drop-list-5') {
                newcol = '6';
            }
            if (newcol === '1') {
                this.ngOnInit();
            }
            else {
                if (event.previousContainer.id === 'cdk-drop-list-5' ||
                    event.previousContainer.id === 'cdk-drop-list-2' && event.container.id === 'cdk-drop-list-1' ||
                    event.previousContainer.id === 'cdk-drop-list-3' && event.container.id === 'cdk-drop-list-1' ||
                    event.previousContainer.id === 'cdk-drop-list-4' && event.container.id === 'cdk-drop-list-1' ||
                    event.previousContainer.id === 'cdk-drop-list-5' && event.container.id === 'cdk-drop-list-1') {
                    this.ngOnInit();
                }
                else {
                    this.projectsService.updStoryCol(newcol, storyname, this.sprintid, this.projid).then(function (responseData) {
                        _this.ngOnInit();
                    });
                }
            }
        }
    };
    BoardComponent.prototype.onAddStory = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_new_story_new_story_component__WEBPACK_IMPORTED_MODULE_6__["NewStoryComponent"], {});
        dialogRef.afterClosed().subscribe(function (result) {
            _this.ngOnInit();
        });
    };
    BoardComponent.prototype.onEditStory = function (story) {
        var _this = this;
        sessionStorage.setItem('story', story);
        var dialogRef = this.dialog.open(_editstory_editstory_component__WEBPACK_IMPORTED_MODULE_7__["EditstoryComponent"], {});
        dialogRef.afterClosed().subscribe(function (result) {
            sessionStorage.removeItem('story');
            _this.ngOnInit();
        });
    };
    BoardComponent.prototype.onEnd = function () {
        var _this = this;
        var newsprint;
        if (confirm('Are you sure you want to end this Sprint? Every unfinished story will go to the next Sprint.')) {
            this.projectsService.getNextSprint(this.projid).then(function (sprintResponses) {
                var response = JSON.parse(JSON.stringify(sprintResponses));
                response.some(function (Object) {
                    newsprint = Object['sprint_id'];
                    return newsprint > _this.sprintid;
                });
            }).then(function () {
                _this.projectsService.getUnfinishedStories(_this.sprintid, _this.projid).then(function (responseData) {
                    var response2 = JSON.parse(JSON.stringify(responseData));
                    response2.forEach(function (Object1) {
                        var storyid = Object1['story_id'];
                        _this.projectsService.moveStory(newsprint, _this.projid, storyid).then(function (responseData2) {
                            console.log(responseData2['message']);
                        });
                    });
                });
            }).finally(function () {
                _this.projectsService.endSprint(_this.sprintid, _this.projid).then(function (responseData) {
                    console.log(responseData['message']);
                    _this.ngOnInit();
                });
            });
        }
    };
    BoardComponent.prototype.emptyAll = function () {
        this.backlogA = [];
        this.todoA = [];
        this.progressA = [];
        this.testA = [];
        this.reviewA = [];
        this.doneA = [];
    };
    BoardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
    ]; };
    BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! raw-loader!./board.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.css */ "./src/app/projects/board/board.component.css")]
        })
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/projects/board/editstory/editstory.component.css":
/*!******************************************************************!*\
  !*** ./src/app/projects/board/editstory/editstory.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projform{\r\n  margin: 0px 25px 0px 25px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvYm9hcmQvZWRpdHN0b3J5L2VkaXRzdG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvYm9hcmQvZWRpdHN0b3J5L2VkaXRzdG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2pmb3Jte1xyXG4gIG1hcmdpbjogMHB4IDI1cHggMHB4IDI1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/projects/board/editstory/editstory.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/projects/board/editstory/editstory.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditstoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditstoryComponent", function() { return EditstoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/projects.service */ "./src/app/projects.service.ts");




var EditstoryComponent = /** @class */ (function () {
    function EditstoryComponent(dialogRef, projectService) {
        this.dialogRef = dialogRef;
        this.projectService = projectService;
        this.currstory = sessionStorage.getItem('story');
        this.sprintid = sessionStorage.getItem('sprintid');
        this.projid = sessionStorage.getItem('currprojid');
    }
    EditstoryComponent.prototype.ngOnInit = function () {
    };
    EditstoryComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditstoryComponent.prototype.onEdit = function (form) {
        var _this = this;
        this.projectService.editStory(this.sprintid, this.projid, this.currstory, form.value.inStory).then(function (responseData) {
            // tslint:disable: no-string-literal
            alert(responseData['message']);
            _this.onNoClick();
        });
    };
    EditstoryComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] }
    ]; };
    EditstoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editstory',
            template: __webpack_require__(/*! raw-loader!./editstory.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/board/editstory/editstory.component.html"),
            styles: [__webpack_require__(/*! ./editstory.component.css */ "./src/app/projects/board/editstory/editstory.component.css")]
        })
    ], EditstoryComponent);
    return EditstoryComponent;
}());



/***/ }),

/***/ "./src/app/projects/board/new-story/new-story.component.css":
/*!******************************************************************!*\
  !*** ./src/app/projects/board/new-story/new-story.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".storyarea{\r\n  min-width: 300px;\r\n  width: 400px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvYm9hcmQvbmV3LXN0b3J5L25ldy1zdG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL2JvYXJkL25ldy1zdG9yeS9uZXctc3RvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdG9yeWFyZWF7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/projects/board/new-story/new-story.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/projects/board/new-story/new-story.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewStoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewStoryComponent", function() { return NewStoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/projects.service */ "./src/app/projects.service.ts");




var NewStoryComponent = /** @class */ (function () {
    function NewStoryComponent(dialogRef, projectService) {
        this.dialogRef = dialogRef;
        this.projectService = projectService;
        this.sprintid = sessionStorage.getItem('sprintid');
        this.projid = sessionStorage.getItem('currprojid');
    }
    NewStoryComponent.prototype.ngOnInit = function () {
    };
    NewStoryComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    NewStoryComponent.prototype.onCreate = function (form) {
        var _this = this;
        this.projectService.setStory(form.value.inStory, this.sprintid, this.projid).then(function (responseData) {
            // tslint:disable: no-string-literal
            if (responseData['error']) {
                alert(responseData['message']);
            }
            else {
                alert(responseData['message']);
            }
            _this.onNoClick();
        });
    };
    NewStoryComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] }
    ]; };
    NewStoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-story',
            template: __webpack_require__(/*! raw-loader!./new-story.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/board/new-story/new-story.component.html"),
            styles: [__webpack_require__(/*! ./new-story.component.css */ "./src/app/projects/board/new-story/new-story.component.css")]
        })
    ], NewStoryComponent);
    return NewStoryComponent;
}());



/***/ }),

/***/ "./src/app/projects/currentproj/addmember/addmember.component.css":
/*!************************************************************************!*\
  !*** ./src/app/projects/currentproj/addmember/addmember.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alldiv{\r\n  width: 350px;\r\n  height: 200px;\r\n}\r\n\r\n.selectdiv{\r\n  margin-left: 0px;\r\n}\r\n\r\n.addbutton{\r\n  margin-left: 50px;\r\n}\r\n\r\n.preddiv{\r\n  margin-left: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvY3VycmVudHByb2ovYWRkbWVtYmVyL2FkZG1lbWJlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL2N1cnJlbnRwcm9qL2FkZG1lbWJlci9hZGRtZW1iZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGxkaXZ7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5zZWxlY3RkaXZ7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLmFkZGJ1dHRvbntcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLnByZWRkaXZ7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/projects/currentproj/addmember/addmember.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/projects/currentproj/addmember/addmember.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddmemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmemberComponent", function() { return AddmemberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_register_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/register/users.service */ "./src/app/register/users.service.ts");
/* harmony import */ var src_app_projects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/projects.service */ "./src/app/projects.service.ts");







var AddmemberComponent = /** @class */ (function () {
    function AddmemberComponent(dialogRef, userService, projectsService) {
        this.dialogRef = dialogRef;
        this.userService = userService;
        this.projectsService = projectsService;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.myControl2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.projid = sessionStorage.getItem('currprojid');
        this.usernames = [];
        this.usersMap = new Map();
    }
    AddmemberComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usernames = this.userService.getUsersA();
        this.usersMap = this.userService.getUsersM();
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (username) { return _this._filter(username); }));
    };
    AddmemberComponent.prototype._filter = function (value) {
        return this.usernames.filter(function (username) { return username.includes(value); });
    };
    AddmemberComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddmemberComponent.prototype.onAddMember = function (username, role) {
        this.projectsService.setMember(this.projid, this.usersMap.get(username), role).then(function (responseData) {
            // tslint:disable: no-string-literal
            alert(responseData['message']);
        });
        this.onNoClick();
    };
    AddmemberComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: src_app_register_users_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: src_app_projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsService"] }
    ]; };
    AddmemberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addmember',
            template: __webpack_require__(/*! raw-loader!./addmember.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/currentproj/addmember/addmember.component.html"),
            styles: [__webpack_require__(/*! ./addmember.component.css */ "./src/app/projects/currentproj/addmember/addmember.component.css")]
        })
    ], AddmemberComponent);
    return AddmemberComponent;
}());



/***/ }),

/***/ "./src/app/projects/currentproj/currentproj.component.css":
/*!****************************************************************!*\
  !*** ./src/app/projects/currentproj/currentproj.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".allpanel{\r\n  width: 100%;\r\n  height: 100%;\r\n  background-image: url('citybuilding.jpg')\r\n}\r\n\r\n.projpanel{\r\n  min-width: 500px;\r\n  width: 70%;\r\n  min-height: 500px;\r\n  border: 3px;\r\n  border-color: black;\r\n  border-radius: 30px;\r\n  background-color: #3f51b5ef;\r\n  margin-top: 50px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.innerpanel{\r\n  margin: 50px 30px 50px 30px;\r\n  width: 90%;\r\n}\r\n\r\n#project-pic{\r\n  height: 150px;\r\n  width: 150px;\r\n  border-radius: 100%;\r\n  margin-right: 20px;\r\n}\r\n\r\n.divchangepho{\r\n  color: white;\r\n  margin: 15px 0px 0px -20px;\r\n}\r\n\r\n.img-input{\r\n  display: none;\r\n}\r\n\r\n.projthings{\r\n  width: 100%;\r\n}\r\n\r\n.projform{\r\n  min-width: 300px;\r\n  width: 100%;\r\n}\r\n\r\n.projcont{\r\n  color: white;\r\n}\r\n\r\n.descarea{\r\n  color: white;\r\n  width: 100%;\r\n}\r\n\r\n.descbutton{\r\n  margin: 10px 10px 0px 0px;\r\n  width: 150px;\r\n}\r\n\r\n.firstrow{\r\n  width: 100%;\r\n}\r\n\r\n.secondrow{\r\n  margin: 20px 10px 0px 20px;\r\n  color: white;\r\n  width: 100%;\r\n}\r\n\r\n.datecol{\r\n  min-width: 100px;\r\n}\r\n\r\n.boardbutton{\r\n  text-align: center;\r\n  margin-top: 50px;\r\n}\r\n\r\n.memberscol{\r\n  margin-left: 60px;\r\n  width: 100%;\r\n}\r\n\r\n.expan{\r\n  min-width: 50px;\r\n  max-width: 800px;\r\n}\r\n\r\n.exppanel{\r\n  min-width: 100px;\r\n  width: 95%;\r\n}\r\n\r\n.pantitle{\r\n  min-width: 40px;\r\n  width: 10%;\r\n  padding: 0% 10% 0% 3%;\r\n  font-weight: bold;\r\n}\r\n\r\n.expbuttons{\r\n  margin: 0px 0px 0px 15px;\r\n}\r\n\r\n.memberbutton{\r\n  margin: 30px 35px 0px 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvY3VycmVudHByb2ovY3VycmVudHByb2ouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9jdXJyZW50cHJvai9jdXJyZW50cHJvai5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsbHBhbmVse1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvY2l0eWJ1aWxkaW5nLmpwZycpXHJcbn1cclxuXHJcbi5wcm9qcGFuZWx7XHJcbiAgbWluLXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gIGJvcmRlcjogM3B4O1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1ZWY7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uaW5uZXJwYW5lbHtcclxuICBtYXJnaW46IDUwcHggMzBweCA1MHB4IDMwcHg7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuI3Byb2plY3QtcGlje1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZGl2Y2hhbmdlcGhve1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDE1cHggMHB4IDBweCAtMjBweDtcclxufVxyXG5cclxuLmltZy1pbnB1dHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucHJvanRoaW5nc3tcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnByb2pmb3Jte1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9qY29udHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5kZXNjYXJlYXtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kZXNjYnV0dG9ue1xyXG4gIG1hcmdpbjogMTBweCAxMHB4IDBweCAwcHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4uZmlyc3Ryb3d7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWNvbmRyb3d7XHJcbiAgbWFyZ2luOiAyMHB4IDEwcHggMHB4IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZGF0ZWNvbHtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uYm9hcmRidXR0b257XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5tZW1iZXJzY29se1xyXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhwYW57XHJcbiAgbWluLXdpZHRoOiA1MHB4O1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbn1cclxuXHJcbi5leHBwYW5lbHtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gIHdpZHRoOiA5NSU7XHJcbn1cclxuXHJcbi5wYW50aXRsZXtcclxuICBtaW4td2lkdGg6IDQwcHg7XHJcbiAgd2lkdGg6IDEwJTtcclxuICBwYWRkaW5nOiAwJSAxMCUgMCUgMyU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5leHBidXR0b25ze1xyXG4gIG1hcmdpbjogMHB4IDBweCAwcHggMTVweDtcclxufVxyXG5cclxuLm1lbWJlcmJ1dHRvbntcclxuICBtYXJnaW46IDMwcHggMzVweCAwcHggMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/projects/currentproj/currentproj.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/projects/currentproj/currentproj.component.ts ***!
  \***************************************************************/
/*! exports provided: CurrentprojComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentprojComponent", function() { return CurrentprojComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/projects.service */ "./src/app/projects.service.ts");
/* harmony import */ var src_app_register_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/register/users.service */ "./src/app/register/users.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _addmember_addmember_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addmember/addmember.component */ "./src/app/projects/currentproj/addmember/addmember.component.ts");
/* harmony import */ var _newrole_newrole_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./newrole/newrole.component */ "./src/app/projects/currentproj/newrole/newrole.component.ts");
/* harmony import */ var _newsprint_newsprint_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./newsprint/newsprint.component */ "./src/app/projects/currentproj/newsprint/newsprint.component.ts");









var CurrentprojComponent = /** @class */ (function () {
    function CurrentprojComponent(router, projectService, usersService, dialog) {
        this.router = router;
        this.projectService = projectService;
        this.usersService = usersService;
        this.dialog = dialog;
        this.url = '../assets/img/scrum.png';
        this.projname = sessionStorage.getItem('currproj');
        this.projid = sessionStorage.getItem('currprojid');
        this.membersMap = new Map();
        this.memberids = [];
        this.membernames = [];
        this.memberroles = [];
        this.sprints = [];
    }
    CurrentprojComponent.prototype.ngOnInit = function () {
        sessionStorage.removeItem('sprint');
        if (sessionStorage.getItem('currproj') === null) {
            this.router.navigate(['/app/projects']);
        }
        this.cleanAll();
        this.getProjectInfo();
        this.getProjectMembers();
        this.getSprints();
        this.getProjectPic();
    };
    CurrentprojComponent.prototype.getProjectPic = function () {
        var _this = this;
        this.projectService.getProjImg(this.projid).then(function (responseData) {
            // tslint:disable: no-string-literal
            var newimg = responseData[0].image;
            if (newimg.length < 5000) {
                _this.url = '../assets/img/scrum.png';
            }
            else {
                sessionStorage.setItem('image', newimg);
                _this.convertImage(newimg);
            }
        });
    };
    CurrentprojComponent.prototype.convertImage = function (newimg) {
        var _this = this;
        var imageBlob = this.dataURItoBlob(newimg);
        var imageFile = new File([imageBlob], 'profilePic', { type: 'image/jpeg' });
        var reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onload = function (event1) {
            _this.url = event1.currentTarget;
            _this.url = _this.url.result;
        };
    };
    CurrentprojComponent.prototype.dataURItoBlob = function (dataURI) {
        var byteString = window.atob(dataURI);
        var arrayBuffer = new ArrayBuffer(byteString.length);
        var int8Array = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        var blob = new Blob([int8Array], { type: 'image/jpeg' });
        return blob;
    };
    CurrentprojComponent.prototype.cleanAll = function () {
        this.membersMap = new Map();
        this.memberids = [];
        this.membernames = [];
        this.memberroles = [];
        this.sprints = [];
    };
    CurrentprojComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            // tslint:disable-next-line: prefer-const
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(event.target.files[0]);
            reader_1.onload = function (event1) {
                _this.url = event1.currentTarget;
                _this.url = _this.url.result;
                _this.projectService.setNewProjImg(_this.projid, reader_1.result.toString().split(',')[1]).then(function (responseData) {
                    // tslint:disable: no-string-literal
                    alert(responseData['message']);
                });
            };
        }
        this.selectedFile = event.target.files[0];
    };
    CurrentprojComponent.prototype.getProjectInfo = function () {
        var _this = this;
        this.projectService.getProjectInfo(this.projid).then(function (responseData) {
            var projinfo = JSON.parse(JSON.stringify(responseData));
            // tslint:disable: no-string-literal
            projinfo.forEach(function (Object) {
                _this.projdesc = Object['description'];
                var start = Object['start_date'];
                var end = Object['end_date'];
                _this.startdate = start.slice(0, start.indexOf('T'));
                if (Object['end_date'] === null) {
                    _this.enddate = 'Not given.';
                }
                else {
                    _this.enddate = end.slice(0, end.indexOf('T'));
                }
            });
        });
    };
    CurrentprojComponent.prototype.getProjectMembers = function () {
        var _this = this;
        this.projectService.getMembers(this.projid).then(function (responseData) {
            var response = JSON.parse(JSON.stringify(responseData));
            response.forEach(function (Object) {
                _this.memberids.push(Object['user_id']);
                _this.memberroles.push(Object['user_type']);
                _this.usersService.getUserName(Object['user_id']).then(function (responseData2) {
                    var response2 = JSON.parse(JSON.stringify(responseData2));
                    response2.forEach(function (Object2) {
                        _this.membernames.push(Object2['name']);
                    });
                });
            });
        });
    };
    CurrentprojComponent.prototype.getSprints = function () {
        var _this = this;
        this.projectService.getSprints(this.projid).then(function (responseData) {
            var response = JSON.parse(JSON.stringify(responseData));
            response.forEach(function (Object) {
                _this.sprints.push(Object['name']);
            });
        });
    };
    CurrentprojComponent.prototype.addUser = function () {
        var dialogRef = this.dialog.open(_addmember_addmember_component__WEBPACK_IMPORTED_MODULE_6__["AddmemberComponent"], {});
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    CurrentprojComponent.prototype.addSprint = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_newsprint_newsprint_component__WEBPACK_IMPORTED_MODULE_8__["NewsprintComponent"], {});
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.ngOnInit();
        });
    };
    CurrentprojComponent.prototype.newRole = function (userid) {
        sessionStorage.setItem('userupd', userid);
        var dialogRef = this.dialog.open(_newrole_newrole_component__WEBPACK_IMPORTED_MODULE_7__["NewroleComponent"], {});
        dialogRef.afterClosed().subscribe(function (result) {
            sessionStorage.removeItem('userupd');
            console.log('The dialog was closed');
        });
    };
    CurrentprojComponent.prototype.setNewDesc = function (form) {
        this.projectService.setNewDesc(this.projid, form.value.inDesc).then(function (responseData) {
            if (responseData['error']) {
                alert('Error. Try again.');
            }
            else {
                alert(responseData['message']);
            }
        });
    };
    CurrentprojComponent.prototype.deleteMember = function (userid) {
        this.projectService.deleteMember(userid, this.projid).then(function (responseData) {
            if (responseData['error']) {
                alert('Error. Try again.');
            }
            else {
                alert(responseData['message']);
            }
        });
    };
    CurrentprojComponent.prototype.openBoard = function (sprint) {
        this.projectService.getCurSprint(this.projid, sprint).then(function (responseData) {
            var response = JSON.parse(JSON.stringify(responseData));
            response.forEach(function (Object) {
                sessionStorage.setItem('sprintid', (Object['sprint_id']));
            });
            sessionStorage.setItem('sprint', sprint);
            setTimeout(window.location.href = '/app/board', 0);
        });
    };
    CurrentprojComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] },
        { type: src_app_register_users_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
    ]; };
    CurrentprojComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-currentproj',
            template: __webpack_require__(/*! raw-loader!./currentproj.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/currentproj/currentproj.component.html"),
            styles: [__webpack_require__(/*! ./currentproj.component.css */ "./src/app/projects/currentproj/currentproj.component.css")]
        })
    ], CurrentprojComponent);
    return CurrentprojComponent;
}());



/***/ }),

/***/ "./src/app/projects/currentproj/newrole/newrole.component.css":
/*!********************************************************************!*\
  !*** ./src/app/projects/currentproj/newrole/newrole.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".savebutton{\r\n  margin-left: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvY3VycmVudHByb2ovbmV3cm9sZS9uZXdyb2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9jdXJyZW50cHJvai9uZXdyb2xlL25ld3JvbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYXZlYnV0dG9ue1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/projects/currentproj/newrole/newrole.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/projects/currentproj/newrole/newrole.component.ts ***!
  \*******************************************************************/
/*! exports provided: NewroleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewroleComponent", function() { return NewroleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/projects.service */ "./src/app/projects.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var NewroleComponent = /** @class */ (function () {
    function NewroleComponent(dialogRef, projectsService) {
        this.dialogRef = dialogRef;
        this.projectsService = projectsService;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.projid = sessionStorage.getItem('currprojid');
        this.userid = sessionStorage.getItem('userupd');
    }
    NewroleComponent.prototype.ngOnInit = function () {
    };
    NewroleComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    NewroleComponent.prototype.onSave = function () {
        this.projectsService.updRole(this.projid, this.userid, this.myControl.value).then(function (responseData) {
            // tslint:disable: no-string-literal
            if (responseData['error']) {
                alert('Error, try again.');
            }
            else {
                alert(responseData['message']);
            }
        });
        this.onNoClick();
    };
    NewroleComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] }
    ]; };
    NewroleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newrole',
            template: __webpack_require__(/*! raw-loader!./newrole.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/currentproj/newrole/newrole.component.html"),
            styles: [__webpack_require__(/*! ./newrole.component.css */ "./src/app/projects/currentproj/newrole/newrole.component.css")]
        })
    ], NewroleComponent);
    return NewroleComponent;
}());



/***/ }),

/***/ "./src/app/projects/currentproj/newsprint/newsprint.component.css":
/*!************************************************************************!*\
  !*** ./src/app/projects/currentproj/newsprint/newsprint.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".createbutton{\r\n  margin-left: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvY3VycmVudHByb2ovbmV3c3ByaW50L25ld3NwcmludC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvY3VycmVudHByb2ovbmV3c3ByaW50L25ld3NwcmludC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZWF0ZWJ1dHRvbntcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/projects/currentproj/newsprint/newsprint.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/projects/currentproj/newsprint/newsprint.component.ts ***!
  \***********************************************************************/
/*! exports provided: NewsprintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsprintComponent", function() { return NewsprintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/projects.service */ "./src/app/projects.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var NewsprintComponent = /** @class */ (function () {
    function NewsprintComponent(dialogRef, projectsService) {
        this.dialogRef = dialogRef;
        this.projectsService = projectsService;
        this.projid = sessionStorage.getItem('currprojid');
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
    }
    NewsprintComponent.prototype.ngOnInit = function () {
    };
    NewsprintComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    NewsprintComponent.prototype.onCreate = function () {
        var _this = this;
        this.projectsService.newSprint(this.myControl.value, this.projid).then(function (responseData) {
            // tslint:disable: no-string-literal
            if (responseData['error']) {
                alert('Error, try again.');
            }
            else {
                alert(responseData['message']);
            }
            _this.onNoClick();
        });
    };
    NewsprintComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] }
    ]; };
    NewsprintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newsprint',
            template: __webpack_require__(/*! raw-loader!./newsprint.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/currentproj/newsprint/newsprint.component.html"),
            styles: [__webpack_require__(/*! ./newsprint.component.css */ "./src/app/projects/currentproj/newsprint/newsprint.component.css")]
        })
    ], NewsprintComponent);
    return NewsprintComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projpanel{\r\n  width: 100%;\r\n  height: 100%;\r\n  margin-top: 25px;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.exppanel{\r\n  min-width: 350px;\r\n  width: 70%;\r\n}\r\n\r\n.pantitle{\r\n  min-width: 100px;\r\n  width: 150px;\r\n  padding: 0% 10% 0% 3%;\r\n  font-weight: bold;\r\n}\r\n\r\n.panid{\r\n  padding: 0% 50% 0% 0%;\r\n}\r\n\r\n.openbutton{\r\n  width: 50px;\r\n  height: 40px;\r\n  margin: 0% 3% 0% 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvanBhbmVse1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5leHBwYW5lbHtcclxuICBtaW4td2lkdGg6IDM1MHB4O1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5wYW50aXRsZXtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBwYWRkaW5nOiAwJSAxMCUgMCUgMyU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wYW5pZHtcclxuICBwYWRkaW5nOiAwJSA1MCUgMCUgMCU7XHJcbn1cclxuXHJcbi5vcGVuYnV0dG9ue1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW46IDAlIDMlIDAlIDUwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projects.service */ "./src/app/projects.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projectService, router) {
        this.projectService = projectService;
        this.router = router;
        this.useridd = sessionStorage.getItem('userid');
        this.userprojids = [];
        this.userprojs = [];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        sessionStorage.removeItem('currproj');
        sessionStorage.removeItem('currprojid');
        sessionStorage.removeItem('sprint');
        sessionStorage.removeItem('sprintid');
        this.projectService.getUserProjects(this.useridd).then(function (responseData) {
            var projectids = JSON.parse(JSON.stringify(responseData));
            projectids.forEach(function (Object) {
                var currproj = Object.project_id;
                _this.userprojids.push(currproj);
            });
        }).then(function () {
            _this.userprojids.forEach(function (project) {
                _this.projectService.getProjectInfo(project).then(function (responseData) {
                    var projinfo = JSON.parse(JSON.stringify(responseData));
                    projinfo.forEach(function (Object) {
                        // tslint:disable: no-string-literal
                        var projname = Object['name'];
                        var projdesc = Object['description'];
                        var objproj = { project: project, projname: projname, projdesc: projdesc };
                        _this.userprojs.push(objproj);
                    });
                });
            });
        });
    };
    ProjectsComponent.prototype.openProject = function (projname, projid) {
        sessionStorage.setItem('currproj', projname);
        sessionStorage.setItem('currprojid', projid.toString());
        setTimeout(window.location.href = '/app/currentproject', 0);
        // this.router.navigate(['/app/currentproject']);
        // this.navBar.ngOnInit();
    };
    ProjectsComponent.ctorParameters = function () { return [
        { type: _projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        })
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#outer-div{\r\n  border-color: black;\r\n  border-radius: 25px;\r\n  width: 50%;\r\n  background-color: rgba(55, 106, 165, 0.781);\r\n  margin: 3% 0 3% 0;\r\n  color: white;\r\n  min-width: 320px;\r\n  max-width: 1080px;\r\n}\r\n\r\n@media screen and (max-width: 600px){\r\n  #outer-div{\r\n    width: 60%;\r\n  }\r\n }\r\n\r\n#first-div{\r\n  background-image: url('building1.jpg');\r\n  background-repeat: no-repeat;\r\n}\r\n\r\nh1{\r\n  text-align: center;\r\n  font-size: 45px;\r\n}\r\n\r\nh3{\r\n  font-size: 22px;\r\n  margin: 10px 0px 0px 0px;\r\n}\r\n\r\nmat-error{\r\n  font-size: 12px;\r\n}\r\n\r\nimg{\r\n  height: 35px;\r\n  width: 35px;\r\n  border: 15px;\r\n  border-color: black;\r\n}\r\n\r\nbutton{\r\n  background-color: rgba(34, 75, 122, 0.932);\r\n  border-radius: 10px;\r\n  color: white;\r\n}\r\n\r\ndiv #inner-div{\r\n  align: center;\r\n  text-align: center;\r\n  margin: 3% 20% 5% 20%;\r\n}\r\n\r\n.reg-link{\r\n  font-size: 15px;\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\na{\r\n  text-decoration: none;\r\n  color: lightgrays;\r\n}\r\n\r\n#google-reg{\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLDJDQUEyQztFQUMzQyxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtDQUNEOztBQUVEO0VBQ0Usc0NBQXFEO0VBQ3JELDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjb3V0ZXItZGl2e1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTUsIDEwNiwgMTY1LCAwLjc4MSk7XHJcbiAgbWFyZ2luOiAzJSAwIDMlIDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1pbi13aWR0aDogMzIwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAjb3V0ZXItZGl2e1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICB9XHJcbiB9XHJcblxyXG4jZmlyc3QtZGl2e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2J1aWxkaW5nMS5qcGcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbmgxe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDQ1cHg7XHJcbn1cclxuXHJcbmgze1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbm1hdC1lcnJvcntcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbmltZ3tcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgYm9yZGVyOiAxNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM0LCA3NSwgMTIyLCAwLjkzMik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmRpdiAjaW5uZXItZGl2e1xyXG4gIGFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMyUgMjAlIDUlIDIwJTtcclxufVxyXG5cclxuLnJlZy1saW5re1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5he1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogbGlnaHRncmF5cztcclxufVxyXG5cclxuI2dvb2dsZS1yZWd7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ "./src/app/register/users.service.ts");



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService) {
        this.userService = userService;
        this.disabledAgreement = true;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.changeCheck = function (event) {
        this.disabledAgreement = !event.checked;
    };
    RegisterComponent.prototype.onAddUser = function (form) {
        if (form.invalid) {
            return;
        }
        else {
            if (form.value.inPass === form.value.confPass) {
                this.userService.setUser(form.value.inName, form.value.inEmail, form.value.inUser, form.value.inPass);
                form.resetForm();
            }
            else {
                alert('Passwords don\'t match.');
                return;
            }
        }
    };
    RegisterComponent.prototype.validatePass = function () {
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/register/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/register/users.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserService = /** @class */ (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.usernames = [];
        this.usersMap = new Map();
        this.host = 'https://scrum-metrics.herokuapp.com';
    }
    UserService.prototype.setUser = function (name, email, username, password) {
        var _this = this;
        var user = { name: name, email: email, username: username, password: password };
        this.http.post(this.host + '/api/postuser', user).subscribe(function (responseData) {
            alert(responseData.message);
            if (responseData.error) {
                return;
            }
            else {
                _this.router.navigate(['/start/login']);
            }
        });
    };
    UserService.prototype.loginUser = function (username, password) {
        var _this = this;
        var userLog = { username: username, password: password };
        this.http.post(this.host + '/api/login', userLog).subscribe(function (responseData) {
            if (responseData.error) {
                alert(responseData.message);
                return;
            }
            else {
                sessionStorage.setItem('token', responseData.message);
                sessionStorage.setItem('username', username);
                _this.getUserInfo(username);
            }
        });
    };
    UserService.prototype.getUserInfo = function (username) {
        var _this = this;
        var user = { username: username };
        return this.http.post(this.host + '/api/user', user).subscribe(function (responseData) {
            var user1 = JSON.parse(JSON.stringify(responseData));
            user1.forEach(function (Object) {
                // tslint:disable: no-string-literal
                var curname = Object['name'];
                var curemail = Object['e_mail'];
                var curid = Object['user_id'];
                var curimg = Object['image'];
                sessionStorage.setItem('name', curname);
                sessionStorage.setItem('email', curemail);
                sessionStorage.setItem('userid', curid);
                sessionStorage.setItem('image', curimg);
                _this.router.navigate(['/app/project']);
            });
        });
    };
    UserService.prototype.getUserImg = function (username) {
        var user = { username: username };
        return this.http.post(this.host + '/api/getprofileimage', user).toPromise();
    };
    UserService.prototype.loggedIn = function () {
        return !!sessionStorage.getItem('token');
    };
    UserService.prototype.getUsersM = function () {
        var _this = this;
        this.http.get(this.host + '/api/usersquery').subscribe(function (responseData) {
            _this.users = JSON.parse(JSON.stringify(responseData));
            _this.users.forEach(function (Object) {
                // tslint:disable: no-string-literal
                var currentuser = Object['username'];
                var currentid = Object['user_id'];
                _this.usersMap.set(currentuser, currentid);
            });
        });
        return this.usersMap;
    };
    UserService.prototype.getUsersA = function () {
        var _this = this;
        this.http.get(this.host + '/api/usersquery').subscribe(function (responseData) {
            _this.users = JSON.parse(JSON.stringify(responseData));
            _this.users.forEach(function (Object) {
                var currentuser = Object['username'];
                _this.usernames.push(currentuser);
            });
        });
        return this.usernames;
    };
    UserService.prototype.updateName = function (username, name) {
        var userupd = { username: username, name: name };
        this.http.put(this.host + '/api/nameupd', userupd).subscribe(function (responseData) {
            if (responseData.error) {
                alert('Error, refresh and try again');
            }
            else {
                alert('Name changed, reload page');
                sessionStorage.setItem('name', name);
            }
        });
    };
    UserService.prototype.updateMail = function (username, email) {
        var userupd = { username: username, email: email };
        this.http.put(this.host + '/api/mailupd', userupd).subscribe(function (responseData) {
            if (responseData.error) {
                alert('Error, refresh and try again');
            }
            else {
                alert('E-mail changed, reload page');
                sessionStorage.setItem('email', email);
            }
        });
    };
    UserService.prototype.updatePass = function (username, newpass) {
        var passupd = { username: username, newpass: newpass };
        this.http.put(this.host + '/api/passupd', passupd).subscribe(function (responseData) {
            if (responseData.error) {
                alert('Error, refresh and try again');
            }
            else {
                alert('Password updated succesfully');
            }
        });
    };
    UserService.prototype.updateImage = function (username, newimage) {
        var imgupd = { username: username, newimage: newimage };
        return this.http.put(this.host + '/api/picupd', imgupd).toPromise();
    };
    UserService.prototype.updateAll = function (username, name, email) {
        var userupd = { username: username, name: name, email: email };
        this.http.put(this.host + '/api/allupd', userupd).subscribe(function (responseData) {
            if (responseData.error) {
                alert(responseData.message);
            }
            else {
                alert('Success, reload page');
                sessionStorage.setItem('name', name);
                sessionStorage.setItem('email', email);
            }
        });
    };
    UserService.prototype.deleteAccount = function (userid, password) {
        var deluser = { userid: userid, password: password };
        this.http.post(this.host + '/api/deluser', deluser).subscribe(function (responseData) {
            if (responseData.error) {
                alert(responseData.message);
            }
            else {
                alert(responseData.message);
                sessionStorage.clear();
                window.location.reload();
            }
        });
    };
    UserService.prototype.getUserName = function (userid) {
        var user = { userid: userid };
        return this.http.post(this.host + '/api/username', user).toPromise();
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _docs_docs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../docs/docs.component */ "./src/app/docs/docs.component.ts");
/* harmony import */ var _error_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../error-pages/not-found/not-found.component */ "./src/app/error-pages/not-found/not-found.component.ts");
/* harmony import */ var _mainhome_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mainhome.component */ "./src/app/mainhome.component.ts");
/* harmony import */ var _apphome_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../apphome.component */ "./src/app/apphome.component.ts");
/* harmony import */ var _applanding_applanding_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../applanding/applanding.component */ "./src/app/applanding/applanding.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _projects_currentproj_currentproj_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../projects/currentproj/currentproj.component */ "./src/app/projects/currentproj/currentproj.component.ts");
/* harmony import */ var _projects_board_board_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../projects/board/board.component */ "./src/app/projects/board/board.component.ts");

















var routes = [
    { path: 'start', component: _mainhome_component__WEBPACK_IMPORTED_MODULE_10__["MainhomeComponent"], children: [
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
            { path: '', redirectTo: '/start/home', pathMatch: 'full' },
            { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
            { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
            { path: 'documentation', component: _docs_docs_component__WEBPACK_IMPORTED_MODULE_8__["DocsComponent"] },
            { path: '404', component: _error_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"] },
            { path: '**', redirectTo: '/start/404', pathMatch: 'full' }
        ] },
    { path: '', redirectTo: '/start/home', pathMatch: 'full' },
    { path: 'app', component: _apphome_component__WEBPACK_IMPORTED_MODULE_11__["ApphomeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]], children: [
            { path: 'project', component: _applanding_applanding_component__WEBPACK_IMPORTED_MODULE_12__["ApplandingComponent"] },
            { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsComponent"] },
            { path: 'currentproject', component: _projects_currentproj_currentproj_component__WEBPACK_IMPORTED_MODULE_15__["CurrentprojComponent"] },
            { path: 'board', component: _projects_board_board_component__WEBPACK_IMPORTED_MODULE_16__["BoardComponent"] },
            { path: '', redirectTo: '/app/project', pathMatch: 'full' },
            { path: '404', component: _error_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"] },
            { path: '**', redirectTo: '/app/404', pathMatch: 'full' }
        ] },
    { path: '404', component: _error_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"] },
    { path: '**', redirectTo: '/start/404', pathMatch: 'full' }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\46729\Desktop\scrum metrics\Scrum-Metrics\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map