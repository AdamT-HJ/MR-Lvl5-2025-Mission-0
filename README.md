# Mission Ready Level 5 FT 2025: Mission 0  

## Contents
- [Project Brief](#marketing-association-nz---1-page-template-for-digital-news)
- [Installation](#first-git-actions)
- [Project Structure](#project-structure-and-components)
- [RWD](#rwd-responsive-web-design)
- [Components & Explanation](#homepage)
- [Assets](#assets---images)



## Marketing Association NZ - 1 Page Template for Digital News

This project was completed for Mission 0, as part of the Mission Ready 2025 FT Course. The brief, to create a 1 page template for Marketing Association NZ as a template for their new digital news home page. With the requirement that the page be structured following a provided wireframe, including a mobile responsive layout.

The project uses images and color scheme associate with the client, and a re-usable 'ArticleCard' component to populate 'Digital News' articles on page.

At 'mobile' scale the Header menu changes to include a 'hamburger' button, to toggle a full page menu for easier user interaction.


# First Git Actions
- After cloning and pulling the base project change to the project directory in your terminal and run "npm install" to install the required packages:

    `npm install`


- Following that, "npm run dev"  will run the app in development mode:

    `npm run dev`


## Project Structure and Components
Following sections outline key components and features of the project, for use and in case changes are required in the future.

The project makes use of CSS modules for styling, modules are named after the pages/components to which they relate.

### RWD Responsive Web Design
RWD is set in CSS modules, 3 'BreakPoints' have been used consistently:
```
@media screen and (min-width: 1025px )
@media screen and (min-width: 577px) and (max-width: 1024px)
@media screen and (max-width: 576px)

```

### HomePage
The Project has been setup using 'React-Router-Dom' currently with a single 'Route' for the project Homepage:

```
    <Routes>
      
        <Route path="/" element={<HomePage/>} />

      
      </Routes>
```
'HomePage' folder is located in 'src' folder, and also contains project components.

HomePage is structured into 3 sections through components 'Header', 'SearchBarAndImage', and 'ArticleCard'. These are contained within a 'main' element.

The HomePage CSS module contains media query breakpoints, primarily to control the display of the 'ArticleCard' component in CSS Grid format. 'ArticleCard' displays articles for the page - see below. 

### Header & MobileHeader
The 'Header' component contains the header for the page. It includes the 'MobileMenu' component that displays a reduced header and mobile menu operated by a 'hamburger' button. 

- 'MobilMenu' display is controlled by 'max-width: 576px' breakpoint in "Header" CSS Module.

- 'Hamburger' button conditionally renders nav menu based on boolean 'hamburgerState' useState:

     `const [hamburgerState, setHamburgerState] = useState (false);`


### SearchBarAndImage
This component displays the main banner image for the page along with the 'Digital News Title' and Search Bar.
CSS breakpoints set to keep title-text, image, and search bar to scale, and prevent collision/overflow.

### ArticleCard & articlesArray
ArticleCard provides a format for 'Digital News' articles to be displayed. Can be used to populate page via map() method and CSS grid used in 'HomePage'.

Component currently uses array 'articlesArray' to populate page (file located in src/assets/modules), this could be replaced by an Array from any other source provided by client to render news articles on page. 

Use of 'ArticleCard' on 'HomePage':
```
    <section className={styles.articleCardsContainer}>
        {articleCardsArray.map((card) => (
            <ArticleCard key={card.id} articleImage={card.image} articleImageDesc={card.imageText} articleTitle={card.title} articleDescription={card.description}  />
        ))}
    </section>
```

### Assets - Images
Assets located in src/Home

Includes images currently used for main page banner ('SearchBarAndImage' component), and for Digital News article cards ('ArticleCard' component / 'articlesArray')




