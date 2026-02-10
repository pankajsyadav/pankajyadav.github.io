# Portfolio Website - Quick Reference

## 📁 Project Location
```
/Users/pankaj/MyPortfolio/
```

## 🚀 Quick Start

### View Locally
```bash
cd /Users/pankaj/MyPortfolio
bundle exec jekyll serve
# Visit: http://localhost:4000
```

### Deploy to GitHub
```bash
# 1. Create repo: username.github.io on GitHub
# 2. Add remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git

# 3. Push code
git branch -M main
git push -u origin main

# 4. Enable GitHub Pages in repo Settings
# 5. Visit: https://YOUR-USERNAME.github.io
```

## ✏️ Customize Before Launch

### 1. Update _config.yml
- Change `title` to your name
- Update `email`, `github_username`, `linkedin_username`
- Update `url` for custom domain

### 2. Update Hero Section (_layouts/default.html)
- Change title: `<h1 class="hero-title">`
- Update subtitle: `<p class="hero-subtitle">`
- Edit description: `<p class="hero-description">`

### 3. Update Skills Badges
- Edit `.skills-badges` section with your skills

### 4. Update About Section
- Update work experience items
- Update skill categories and skills
- Update education

### 5. Add Contact Form
1. Go to formspree.io
2. Create form and get ID
3. Update form action in `_layouts/default.html`:
   ```html
   <form action="https://formspree.io/f/YOUR-ID" method="POST">
   ```

### 6. Update Social Links
- LinkedIn, GitHub, Twitter URLs in contact section

### 7. Add Resume
- Add your resume PDF to: `assets/resume/Pankaj_K_Yadav_Resume.pdf`

## 📝 Write Blog Posts

Create new file: `_posts/YYYY-MM-DD-title.md`

```yaml
---
layout: post
title: "Your Post Title"
date: 2026-02-09
excerpt: "Brief description (shown in carousel)"
image: "https://url-to-image.jpg"
---

Your content in Markdown...

## Heading 2
- Bullet point
- Another point

**Bold text** and *italic text*
```

Then commit and push:
```bash
git add .
git commit -m "Add new post: title"
git push
```

## 🎨 Design Features

### Navigation (4 Sections)
- Home: Hero with skills
- About: Experience, skills, education
- Insights: 2-column carousel + timeline of posts
- Contact: Form, email, social links

### Carousel
- Auto-rotates every 10 seconds
- Shows 2 most recent posts
- Click "Read More" to expand content inline
- Manual navigation with indicators

### Timeline
- All blog posts in chronological order
- Alternating left/right layout (desktop)
- Stacked on mobile
- Vertical line connector

### Responsive
- Desktop: 1200px+
- Tablet: 768px-1200px
- Mobile: <768px

## 📂 File Structure

```
/Users/pankaj/MyPortfolio/
├── _config.yml           # Site config
├── Gemfile               # Dependencies
├── README.md             # Documentation
├── DEPLOYMENT.md         # Deploy guide
├── index.html            # Main page
├── _layouts/
│   ├── default.html      # Main template (4 sections)
│   └── post.html         # Blog post template
├── _posts/               # Blog posts (.md files)
├── assets/
│   ├── css/style.css     # Styling
│   ├── js/script.js      # Carousel logic
│   ├── resume/           # Your resume PDF
│   └── images/           # Your images
└── .git/                 # Version control
```

## 🔧 Common Tasks

### Change Colors
Edit `assets/css/style.css`:
- Primary: `#333` (dark)
- Secondary: `#666` (medium)
- Background: `#fafafa` (off-white)

### Add Skill
Add to skills badge or skill category:
```html
<span class="badge">New Skill</span>
```

### Update Phone/Email
Edit contact section in `_layouts/default.html`

### Change Carousel Speed
Edit `assets/js/script.js`:
```javascript
setInterval(nextCarouselSlide, 10000); // 10 seconds
```

### Add More Blog Posts
1. Create `_posts/YYYY-MM-DD-title.md`
2. Add frontmatter with title, date, excerpt, image
3. Write content in Markdown
4. Push to GitHub

## 📊 What's Included

✅ Mobile-responsive design
✅ Auto-rotating carousel (10 sec)
✅ Expandable cards (inline)
✅ Post timeline view
✅ Smooth scroll navigation
✅ Professional styling
✅ SEO-ready
✅ GitHub Pages configured
✅ 3 sample blog posts
✅ Contact form ready
✅ Social links ready

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Build fails | Check YAML syntax in `_config.yml` |
| Site not updating | Wait 1-2 min, hard refresh browser |
| Images not showing | Use absolute URLs (https://...) |
| Form not working | Verify FormSpree ID |
| Carousel not rotating | Check `script.js` loaded |

## 📞 Support

- Jekyll Docs: https://jekyllrb.com/docs/
- GitHub Pages: https://docs.github.com/en/pages
- Markdown Guide: https://www.markdownguide.org/

---

**Everything is ready! Next step: Create GitHub repo and deploy.** 🚀
