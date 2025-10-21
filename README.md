# Portfolio Website - Stage 1

A modern, fully responsive multi-page portfolio website built with vanilla HTML, CSS, and JavaScript. This project showcases semantic HTML, accessibility best practices, and comprehensive form validation.

## 🎯 Project Overview

This portfolio website consists of three main pages:
- **Home (Profile Card)** - A clean profile card displaying user information
- **About Me** - A reflective page sharing personal journey and goals
- **Contact Us** - A fully validated contact form

## ✨ Features

### General Features
- 🎨 Clean and modern UI design with custom color scheme
- 📱 Fully responsive (mobile, tablet, and desktop)
- ♿ WCAG compliant accessibility
- ⌨️ Full keyboard navigation support
- 🎯 Semantic HTML throughout
- 🔗 Multi-page navigation system

### Home Page (Profile Card)
- User avatar and bio
- Location information with flag emoji
- Real-time clock display
- Social media links (Twitter, GitHub, LinkedIn)
- Skills showcase
- Hobbies and dislikes sections
- Call-to-action buttons to About and Contact pages

### About Me Page
- Personal bio section
- Program goals and aspirations
- Areas for confidence building
- Motivational note to future self
- Additional thoughts and reflections
- Interactive slide-up content panel
- Image gallery showcase

### Contact Us Page
- **Fully validated contact form** with:
  - Name field (required)
  - Email field (required, format validation)
  - Subject field (required)
  - Message field (required, minimum 10 characters)
- **Real-time validation** on blur events
- **Individual error messages** for each field
- **Success notification** with auto-dismiss
- **Accessible form design** with proper labels and ARIA attributes
- Image gallery for visual appeal

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
```

2. Navigate to the project directory:
```bash
cd portfolio-website
```

3. Open `index.html` in your browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

## 📁 Project Structure

```
portfolio-website/
│
├── index.html              # Home page (Profile Card)
├── about.html              # About Me page
├── contact.html            # Contact Us page
│
├── style.css               # Home page styles
├── about.css               # About page styles
├── contact.css             # Contact page styles
│
├── script.js               # JavaScript for all pages
│
├── img/                    # Image assets
│   ├── avatar.jpeg
│   ├── clock-circle-svgrepo-com.svg
│   ├── Stylized 3D Character.png
│   ├── Stylized Red Ant.png
│   ├── Cozy Desk Setup.png
│   └── Cartoon Sandwich Art.png
│
└── README.md               # Project documentation
```

## 🎨 Customization

### Update Profile Information

**In `index.html`:**
- **Name**: Change the `<h1 data-testid="test-user-name">` content
- **Location**: Update the location paragraph
- **Bio**: Modify the bio paragraph text
- **Skills**: Add/remove skills in the skills `<ul>`
- **Hobbies**: Update hobbies list items
- **Social Links**: Change the `href` attributes in social-links section

**In `about.html`:**
- Update each section's content within the corresponding `data-testid` divs
- Modify the bio, goals, confidence areas, future note, and extra thoughts

**In `contact.html`:**
- The form structure is fixed for validation purposes
- You can customize the introductory paragraph and styling

### Modify Colors

Edit CSS variables in any of the stylesheets:

```css
:root {
    --bg-color: #e6e6e6;        /* Background color */
    --card-color: #ffffff;       /* Card background */
    --text-color: #1e1e1e;       /* Primary text */
    --text-color-1: #3d98ec;     /* Blue accent */
    --text-color-2: #54ce51;     /* Green accent */
    --text-color-3: #f47f2b;     /* Orange accent */
}
```

### Change Images

Replace images in the `img/` folder and update the `src` attributes in the respective HTML files.

## 🔍 Form Validation Details

### Validation Rules

1. **Name Field**
   - Required field
   - Cannot be empty or only whitespace
   - Error message: "Please enter your full name."

2. **Email Field**
   - Required field
   - Must match email format: `name@example.com`
   - Uses regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
   - Error message: "Please enter a valid email address (e.g., name@example.com)."

3. **Subject Field**
   - Required field
   - Cannot be empty or only whitespace
   - Error message: "Please enter a subject."

4. **Message Field**
   - Required field
   - Minimum 10 characters (after trimming whitespace)
   - Error message: "Please enter a message of at least 10 characters."

### Validation Behavior

- **Real-time validation**: Triggers on `blur` event (when user clicks away from field)
- **Visual feedback**: Red border on invalid fields
- **Error messages**: Display below each invalid field
- **Submit validation**: All fields validated on form submission
- **Success state**: Shows success message and resets form when all validations pass
- **Auto-dismiss**: Success message automatically hides after 3 seconds

### Accessibility Features

- All inputs have associated `<label>` elements with `for` attribute
- Error messages linked via `aria-describedby`
- Proper focus states for keyboard navigation
- Success message announced to screen readers
- Form uses `novalidate` to implement custom JavaScript validation

## 📊 Data Test IDs

All interactive elements include `data-testid` attributes for automated testing:

### Home Page
- `test-profile-card` - Main profile card
- `test-user-avatar` - Profile image
- `test-user-name` - User name
- `test-user-time` - Time display
- `test-user-social-links` - Social links container
- `test-user-social-twitter` - Twitter link
- `test-user-social-github` - GitHub link
- `test-user-social-linkedin` - LinkedIn link
- `test-user-bio` - Bio paragraph
- `test-user-hobbies` - Hobbies list
- `test-user-dislikes` - Dislikes list

### About Page
- `test-about-page` - Main container
- `test-about-bio` - Bio section
- `test-about-goals` - Goals section
- `test-about-confidence` - Low confidence areas section
- `test-about-future-note` - Future self note section
- `test-about-extra` - Extra thoughts section

### Contact Page
- `test-contact-name` - Name input
- `test-contact-email` - Email input
- `test-contact-subject` - Subject input
- `test-contact-message` - Message textarea
- `test-contact-submit` - Submit button
- `test-contact-error-name` - Name error message
- `test-contact-error-email` - Email error message
- `test-contact-error-subject` - Subject error message
- `test-contact-error-message` - Message error message
- `test-contact-success` - Success message

## 🌐 Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Styling with custom properties, Grid, and Flexbox
- **JavaScript (ES6+)** - Form validation and interactivity
- **Ionicons** - Icon library for social media and UI elements
- **Google Fonts** - Custom typography (Inter, BBH Sans Bartle)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android)

## 📐 Responsive Breakpoints

### Mobile
- **XS Mobile**: ≤ 375px
- **Mobile**: ≤ 767px
  - Single column layout
  - Stacked navigation
  - Adjusted font sizes
  - Full-width forms

### Tablet
- **Tablet**: 768px - 1024px
  - Two-column layouts where appropriate
  - Adjusted grid structures
  - Optimized image galleries

### Desktop
- **Desktop**: > 1024px
  - Multi-column layouts
  - Full navigation bar
  - Optimal spacing and typography

## ✅ Acceptance Criteria Met

### Contact Us Page
- ✅ All required fields with correct `data-testid` attributes
- ✅ Validation prevents invalid submissions
- ✅ Success message only shows after valid submission
- ✅ Individual error messages for each field
- ✅ Full accessibility with labels and ARIA attributes

### About Me Page
- ✅ All required sections with correct `data-testid` attributes
- ✅ Semantic HTML (main, section, h1-h3, ul, p)
- ✅ Proper heading hierarchy
- ✅ Meaningful content structure

### General Requirements
- ✅ Semantic HTML throughout
- ✅ Accessible (labels, ARIA, alt text)
- ✅ Fully responsive across all devices
- ✅ Keyboard navigable
- ✅ Clean, modular, and maintainable code

## 🙏 Acknowledgments

- Icons provided by [Ionicons](https://ionic.io/ionicons)
- Fonts from [Google Fonts](https://fonts.google.com)
- Design inspired by modern UI/UX principles
- Images from placeholder services and custom assets

---

Made with ❤️ and ☕ by Bishop Josh

**Stage 1 Complete** ✅ | Multi-page Application with Form Validation
