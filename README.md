# Profile Card

A clean and responsive profile card component built with vanilla HTML, CSS, and JavaScript. This card displays user information including avatar, bio, skills, hobbies, and social links with real-time clock display.

## Features

- 🎨 Clean and modern UI design
- 📱 Fully responsive (mobile, tablet, and desktop)
- ⏰ Real-time clock display
- 🔗 Social media links integration
- 🎯 Organized sections for skills, hobbies, and dislikes
- ✨ Smooth hover effects and transitions

## Demo

The profile card includes:
- User avatar and name
- Location information
- Live timestamp display
- Social media links (Twitter, GitHub, LinkedIn)
- Personal bio
- Skills showcase
- Hobbies list
- Dislikes section

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/profile-card.git
```

2. Navigate to the project directory:
```bash
cd profile-card
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

## Project Structure

```
profile-card/
│
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── script.js           # JavaScript for time display
└── img/                # Image assets
    ├── ChatGPT Image Oct 17, 2025, 03_07_21 AM.png
    └── clock-circle-svgrepo-com.svg
```

## Customization

### Update Profile Information

Edit `index.html` to customize:
- **Name**: Change the `<h1>` content in the profile-info section
- **Location**: Update the location paragraph
- **Bio**: Modify the bio paragraph text
- **Skills**: Add/remove skills in the skills `<ul>`
- **Hobbies**: Update hobbies list items
- **Social Links**: Change the `href` attributes in the social-links section

### Modify Colors

Edit CSS variables in `style.css`:
```css
:root {
    --bg-color: #cdd8e6;      /* Background color */
    --card-color: #ffffff;     /* Card background */
    --text-color: #1e1e1e;     /* Text color */
}
```

### Change Profile Image

Replace the image in the `img/` folder and update the `src` attribute in `index.html`.

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Styling with custom properties and flexbox
- **JavaScript** - Real-time clock functionality
- **Ionicons** - Social media icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Breakpoints

- **Mobile**: ≤ 767px
- **XS Mobile**: ≤ 375px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Acknowledgments

- Icons provided by [Ionicons](https://ionic.io/ionicons)
- Design inspired by modern UI/UX principles

---

Made with ❤️ by Bishop Josh
