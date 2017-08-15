# make-your-day
<strong>Website for Day-Of Coordinator business startup out of Bloomington Minnesota, Make Your Day.</strong>

I created a web application for Make Your Day (a startup in Bloomington, Minnesota) to assist in explaining their services as a day-of coordinator.  The application enables potential clients to learn about Make Your Day's services, read testimonials, peruse frequently asked questions, and contact the company for work.

The home page features a carousel of information that delivers an overview of Make Your Day to the visitor, as well as a tagline description of the company.

![home](https://user-images.githubusercontent.com/28768183/29323582-fabd7854-81a6-11e7-860c-757d9997a984.PNG)

Make Your Day offers several different services with a variety of "packages" in each, depending on the clients needs.  The "services" page provides a 10,000-ft view of the service types, with a "Learn More" button that navigates to a page with service-specific pricing.

![service](https://user-images.githubusercontent.com/28768183/29323986-4de28a1e-81a8-11e7-9fa9-ecf5cdec680b.PNG)

Each service-specific page outlines several pricing packages available to the client if they are interested in hiring Make Your Day.

Below the service descriptions is a contact form to discuss opportunities with the company.  Make Your Day wanted a contact form that didn't shoehorn potential customers into anything concrete due to the variablility of the services and to allow a commitment-free outreach to discuss employment.

![request](https://user-images.githubusercontent.com/28768183/29324054-7748dfca-81a8-11e7-8b58-e98e30171ffa.PNG)

The form is not hooked up to a backend yet, so the feature is still under development until Make Your Day is prepared to launch the site onto the internet.

The testimonials page offers exactly what you expect: reviews from previous clients.  It is formatted with a picture from the event/client and a short testimony of their experience.

![testimonials](https://user-images.githubusercontent.com/28768183/29324334-58f04972-81a9-11e7-947f-92a99348d26c.PNG)

Make Your Day is not ready for the internet yet, so the website is partially populated with stock photography and psuedo-reviews.  Additionally, the FAQ is unfinished as well until the company is prepared for launch.  I was brought on to assist in creating a website for future use by Make Your Day, so the current codebase reflects such.

<strong>The Code</strong>

The web application was built on the shoulders of Angular, which made sense for maintaining loading speed, easy navigation, strong data organization, and modern web application design.  This made particular sense with how structured the different service packages were, allowing recycling of the same HTML partial and set of directives with different arrays of objects that represent the service packages.

To integrate a carousel on the front page, I used Bootstrap, but admittedly fought against that framework for the remainder of the project, opting to design styles with flexbox instead.  In similar projects, I would design the carousel with alternative methods or fully embrace the Bootstrap framework in the application.

I did not minify any code or images in the site yet, but this will occur prior to launch of the application when Make Your Day has content ready for the placeholder imagery in the site.  This will be accomplished using a task runner like Grunt to concatenate/minify the javascript and optimize the images to reduce their size without losing quality.

Another significant TODO is to flex the site to be responsive.  It was designed with this endpoint in mind, but requires a few extra breakpoints and navigation-menu design to polish the application for mobile circumstances.  The client wanted an attractive desktop layout, so that was designed first for their consumption.  A mobile layout will be completed as part of the final 10% of the web application design when Make Your Day is ready to launch.

Version control was accomplished with GIT from the "git go".

