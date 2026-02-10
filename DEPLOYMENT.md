# GitHub Pages Deployment Guide

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in to your account
2. Click the **+** icon in the top right → **New repository**
3. **Repository name**: `username.github.io` (replace `username` with your GitHub username)
   - Example: `pankajyadav.github.io`
4. Check **Public** 
5. Click **Create repository**

## Step 2: Push Your Code to GitHub

Open terminal and run these commands:

```bash
cd /Users/pankaj/MyPortfolio

# Configure git (if not already done)
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"

# Add remote repository
git remote add origin https://github.com/your-username/your-username.github.io.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. In left sidebar, click **Pages**
4. Under "Build and deployment":
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main` and `/root`
5. Click **Save**

## Step 4: Wait for Build

GitHub will automatically build your site (30 seconds - 2 minutes):
- Watch the "Actions" tab for build status
- Once complete, you'll see a green checkmark

## Step 5: Access Your Live Site

Your site is now live at: **https://your-username.github.io**

Example: `https://pankajyadav.github.io`

## Using a Custom Domain (Optional)

If you have a domain name (like `pankajyadav.com`):

### DNS Configuration:

1. **With Namecheap, GoDaddy, or similar**:
   - Go to your domain registrar's DNS settings
   - Add these DNS records:
     ```
     Type: A
     Name: @
     Value: 185.199.108.153
     
     Type: A
     Name: @
     Value: 185.199.109.153
     
     Type: A
     Name: @
     Value: 185.199.110.153
     
     Type: A
     Name: @
     Value: 185.199.111.153
     ```
   - Also add CNAME for www:
     ```
     Type: CNAME
     Name: www
     Value: your-username.github.io
     ```

2. **GitHub Pages Settings**:
   - Go to Settings → Pages
   - Under "Custom domain", enter your domain: `yourdomain.com`
   - Click **Save**
   - Check "Enforce HTTPS"

## Updating Your Site

Every time you make changes:

```bash
cd /Users/pankaj/MyPortfolio

# Make your changes...

# Commit and push
git add .
git commit -m "Description of changes"
git push
```

GitHub will automatically rebuild your site (1-2 minutes).

## Adding Blog Posts

1. Create new file in `_posts/` folder:
   ```
   _posts/YYYY-MM-DD-title.md
   ```

2. Add this template:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: 2026-02-09
   excerpt: "Brief description"
   image: "https://url-to-image.jpg"
   ---

   Your post content in Markdown...
   ```

3. Commit and push:
   ```bash
   git add .
   git commit -m "Add new blog post"
   git push
   ```

## Customization Checklist

Before going live, update:

- [ ] `_config.yml` - Your name, email, social links
- [ ] `_layouts/default.html` - Hero title, description, skills
- [ ] Contact form - Add FormSpree ID
- [ ] Social links - LinkedIn, GitHub, Twitter URLs
- [ ] About section - Work experience, skills, education
- [ ] Resume - Add your PDF to `assets/resume/`

## Troubleshooting

### Build fails on GitHub
- Check "Actions" tab for error details
- Common issues: YAML syntax errors in frontmatter
- Solution: Fix the error and push again

### Site not updating
- Wait 1-2 minutes after push
- Hard refresh browser (Cmd+Shift+R on Mac)
- Check "Actions" tab for build status

### 404 Not Found
- Verify repository name is `username.github.io`
- Check GitHub Pages is enabled in Settings
- Ensure branch is set to `main`

### Forms not working
- Verify FormSpree form ID in the form action
- Check that form inputs have `name` attributes

## Useful Commands

```bash
# View git status
git status

# View commit history
git log --oneline

# Undo last commit (keeping changes)
git reset --soft HEAD~1

# View remote URL
git remote -v

# Pull latest changes from GitHub
git pull origin main
```

---

**Your site is now live!** 🎉

Share the link on your LinkedIn profile to direct visitors to your portfolio.
