
# Personal Portfolio & Blog 
## template borrowed from cyberdev https://www.longth.dev

A modern, responsive personal portfolio and blog website with a futuristic cyberpunk theme. Built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive cyberpunk-themed design
- Homepage with personal introduction and featured content
- Projects showcase with filtering options
- Blog section with comments functionality
- About page with bio, skills, and contact form
- Smooth animations and transitions

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- React Router
- shadcn/ui components
- Lucide React icons

## Project Structure

- `src/components/` - React components
- `src/components/ui/` - UI components from shadcn/ui
- `src/pages/` - Page components
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions

## Getting Started

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
```

2. Navigate to the project directory:
```sh
cd <YOUR_PROJECT_NAME>
```

3. Install dependencies:
```sh
npm install
```

4. Start the development server:
```sh
npm run dev
```

5. Open your browser and visit: `http://localhost:5173`

## Deployment

This project can be easily deployed to GitHub Pages or any other static site hosting service.

For GitHub Pages:
1. Update the `base` property in `vite.config.ts` with your repository name
2. Build the project: `npm run build`
3. Push the `dist` folder to the `gh-pages` branch of your repository

## Customization

You can easily customize the site by:
- Modifying the color scheme in `tailwind.config.ts`
- Updating the content in the component files
- Adding your own projects and blog posts

## Project Structure Overview
The project is a React-based personal website with a cyberpunk aesthetic. It uses TypeScript, Tailwind CSS for styling, React Router for navigation, and shadcn/ui components for UI elements.

## Main Application Files
src/App.tsx

## The main application component
- Sets up routing with React Router
- Renders the Navigation, content pages, Footer, and Toaster components
- Handles page transitions with Suspense for better loading experience
- src/main.tsx

## Entry point for the React application
- Renders the App component into the root DOM element
- src/index.css

## Global CSS styles
- Contains theme variables, custom component styles, and utility classes
- Defines cyberpunk-specific styles like glowing effects and grid backgrounds
- vite.config.ts

## Configuration for Vite (the build tool)
- Sets up path aliases and plugins
- Configures development server settings
- Components
- src/components/Navigation.tsx

## Main navigation bar component
-Handles responsive menu (mobile and desktop versions)
- Contains links to different sections of the website
- Implements cyberpunk styling with hover effects
- src/components/Footer.tsx

## Footer component for the website
- Would typically contain contact information, social links, etc.
- src/components/HomePage.tsx

## Landing page component
- Showcases an introduction to you and your work
- Features highlighted projects and blog posts
- src/components/ProjectsPage.tsx

## Page showing portfolio of projects
- Includes filtering capabilities and project details
- src/components/BlogPage.tsx

## Shows list of blog posts with previews
- Includes filtering and sorting options
- src/components/BlogPostDetail.tsx

## Detailed view of an individual blog post
- Includes content, metadata, and comments section
- src/components/AboutPage.tsx

## Personal information 
- Skills, experience, and contact information
- src/components/animations/FadeIn.tsx

## Reusable animation component
- Creates smooth fade-in effects for elements
- Uses Intersection Observer API for scroll-based animations
- Configurable with parameters for delay, direction, duration, etc.
- UI Components (shadcn/ui)
- The project uses a collection of UI components from shadcn/ui in src/components/ui/. These are highly reusable, accessible UI components built on top of Radix UI. Some key components include:

- utton: Styled button components with various variants
- Card: Card components for displaying content in boxes
- Toast: Notification components for feedback
- Dialog: Modal dialog components
- Form components: Various input components like textarea, checkbox, etc.
- Navigation components: Breadcrumb, tabs, etc.
- Data display: Table, avatar, badge, etc.
- Utilities and Hooks
- src/lib/utils.ts

## Utility functions for the application
- Contains the cn() function which combines Tailwind classes efficiently
- src/hooks/use-toast.ts

## Custom hook for handling toast notifications
- Provides functions to show, update, and dismiss notifications
- src/hooks/use-mobile.tsx

## Hook for detecting mobile devices
- Helps with responsive design decisions in components
- Configuration Files
- tailwind.config.ts

## Configuration for Tailwind CSS
- Defines custom colors, animations, and theme extensions
- Contains cyberpunk-specific color schemes and animation definitions
- README.md

## Project documentation
- Contains setup instructions and feature descriptions
- Other Important Files
- index.html
- Main HTML file
- Contains meta tags for SEO
- Links to external resources like fonts
- Key Functionality

## Routing:
- The app uses React Router for navigation between pages
- Routes are defined in App.tsx

## Responsive Design:
- Components adapt to different screen sizes
- Mobile menu toggle for smaller screens

## Animations:
- Custom fade-in animations for smoother user experience
- Cyberpunk glow effects and transitions

## Styling System:
- Uses Tailwind CSS for utility-based styling
- Custom cyberpunk theme with glowing elements, grid backgrounds, and futuristic UI

## UI Component System:
- Reusable, accessible components from shadcn/ui
- Consistent styling across the application

## Toast Notifications:
- System for showing temporary notifications to users

## License

This project is open source and available under the [MIT License](LICENSE).
