# Pankaj K. Yadav - Portfolio Website

A modern, responsive portfolio website built with Jekyll and deployed on GitHub Pages.

## Features

✅ **Light Minimalist Design** - Clean, professional layout with smooth scroll effects  
✅ **4-Section Navigation** - Home, About, Insights, Contact  
✅ **Auto-Rotating Carousel** - Latest 2 posts rotate every 10 seconds  
✅ **Expandable Cards** - Inline expansion for full post content  
✅ **Timeline View** - All past posts displayed in an interactive timeline  
✅ **Responsive Design** - Mobile-friendly on all devices  
✅ **Jekyll Integration** - Easy markdown-based blog posts  
✅ **GitHub Pages Ready** - Simple deployment workflow  

## Project Structure

```
/Users/pankaj/MyPortfolio/
├── _config.yml              # Jekyll configuration
├── Gemfile                  # Ruby dependencies
├── index.html               # Main page
├── _layouts/
│   ├── default.html         # Main layout template
│   └── post.html            # Blog post template
├── _posts/                  # Blog posts (Markdown files)
│   ├── 2026-02-09-etl-pipeline-optimization.md
│   ├── 2026-02-02-ml-evaluation-metrics.md
│   └── 2026-01-26-cloud-dw-comparison.md
└── assets/
    ├── css/
    │   └── style.css        # Main stylesheet
    ├── js/
    │   └── script.js        # Carousel and interactivity
    └── images/              # Image assets
```

## Setup Instructions

### Local Development

1. **Install Jekyll** (if not already installed):
   ```bash
   gem install bundler jekyll
   ```

2. **Navigate to project directory**:
   ```bash
   cd /Users/pankaj/MyPortfolio
   ```

3. **Install dependencies**:
   ```bash
   bundle install
   ```

4. **Build and serve locally**:
   ```bash
   bundle exec jekyll serve
   ```

5. **View in browser**:
   - Open `http://localhost:4000`

### Deployment to GitHub Pages

1. **Create GitHub repository**:
   - Go to [github.com](https://github.com) and create new repo named `username.github.io`

2. **Add remote and push code**:
   ```bash
   git remote add origin https://github.com/your-username/your-username.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select `main` branch as source
   - Save

4. **Access your site**:
   - Visit `https://your-username.github.io`
   - Or use custom domain by updating DNS settings

## Customization Guide

### Update Personal Information

Edit `_config.yml`:
```yaml
title: Your Name
email: your-email@example.com
github_username: your-github-username
linkedin_username: your-linkedin-username
url: "https://yourdomain.com"  # For custom domain
```

### Update Hero Section

Edit `_layouts/default.html` (Home section):
```html
<h1 class="hero-title">Your Name</h1>
<p class="hero-subtitle">Your Title</p>
<p class="hero-description">Your professional description...</p>
```

### Update Skills Badges

Edit `.skills-badges` section in `_layouts/default.html`:
```html
<span class="badge">Your Skill</span>
```

### Add a New Blog Post

1. Create new file in `_posts/` folder:
   ```
   YYYY-MM-DD-post-title.md
   ```

2. Add frontmatter:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: 2026-02-09
   excerpt: "Brief description of your post"
   image: "https://url-to-image.com/image.jpg"
   ---
   ```

3. Write your post in Markdown format

4. Commit and push:
   ```bash
   git add .
   git commit -m "Add new post: post title"
   git push
   ```

### Update Contact Information

Edit Contact section in `_layouts/default.html`:
- Email address
- Phone number
- Social media links (LinkedIn, GitHub, Twitter)

### Configure Contact Form

1. Go to [formspree.io](https://formspree.io)
2. Sign up and create a new form
3. Copy your form ID
4. Update the form action in `_layouts/default.html`:
   ```html
   <form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
   ```

## Design Features

### Color Scheme
- **Primary**: #333 (Dark charcoal)
- **Secondary**: #666 (Medium gray)
- **Background**: #fafafa (Off-white)
- **Accent**: #f5f5f5 (Light gray)

### Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1200px
- Mobile: < 768px

### Smooth Scroll
- All navigation links enable smooth scrolling
- CSS: `scroll-behavior: smooth;`

### Carousel Features
- **Auto-Rotation**: 10 seconds per slide
- **Manual Control**: Click indicators to navigate
- **Expandable Content**: Click "Read More" to expand posts inline

### Timeline
- Vertical timeline of all blog posts
- Alternating left/right layout on desktop
- Responsive stacked layout on mobile

## Key Files to Know

| File | Purpose |
|------|---------|
| `_config.yml` | Jekyll configuration and site settings |
| `_layouts/default.html` | Main page template with all 4 sections |
| `_layouts/post.html` | Blog post template |
| `assets/css/style.css` | All styling (1000+ lines) |
| `assets/js/script.js` | Carousel and interaction logic |
| `_posts/*.md` | Individual blog posts |

## Troubleshooting

**Issue**: Build fails with gem errors
- **Solution**: Run `bundle update` then `bundle exec jekyll serve`

**Issue**: Images not showing
- **Solution**: Use absolute URLs (https://...) or place images in `assets/images/`

**Issue**: Contact form not working
- **Solution**: Make sure FormSpree form ID is correct in the form action URL

**Issue**: Carousel not rotating
- **Solution**: Check browser console for JavaScript errors, ensure `script.js` is loading

## Next Steps

1. ✅ Upload your resume PDF to `assets/resume/`
2. ✅ Set up FormSpree contact form
3. ✅ Update social media links
4. ✅ Create GitHub repository and deploy
5. ✅ Configure custom domain (optional)
6. ✅ Start writing blog posts!

## Helpful Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Guide](https://docs.github.com/en/pages)
- [Markdown Syntax](https://www.markdownguide.org/basic-syntax/)
- [FormSpree Docs](https://formspree.io/help/)

---

**Built with** ❤️ using Jekyll and GitHub Pages
