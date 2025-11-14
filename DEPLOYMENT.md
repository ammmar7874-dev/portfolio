# Vercel Deployment Guide

## Quick Deployment Steps

### Method 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Navigate to your project directory**:
   ```bash
   cd d:\react\portfolio
   ```

4. **Deploy to Vercel**:
   ```bash
   vercel
   ```
   - Follow the prompts
   - It will ask for project settings (just press Enter for defaults)
   - First deployment will be a preview

5. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

### Method 2: Using Vercel Dashboard (Easiest)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub

3. **Import Project**:
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Vercel will auto-detect React settings

4. **Configure Build Settings** (if needed):
   - Framework Preset: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

5. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live!

### Method 3: Using Vercel GitHub Integration

1. **Connect GitHub to Vercel**:
   - Go to Vercel Dashboard
   - Settings → Git → Connect GitHub

2. **Auto-Deploy**:
   - Every push to main branch = Production deployment
   - Every pull request = Preview deployment

## Important Notes

- ✅ `vercel.json` is already configured
- ✅ Build output directory: `build`
- ✅ All routes redirect to `index.html` (for React Router compatibility)
- ✅ Environment variables can be added in Vercel Dashboard → Settings → Environment Variables

## Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. SSL certificate is automatically provided by Vercel

## Troubleshooting

### Build Fails
- Check Node.js version (Vercel uses Node 18.x by default)
- Ensure all dependencies are in `package.json`
- Check build logs in Vercel Dashboard

### 404 Errors on Refresh
- `vercel.json` already handles this with rewrites
- If issues persist, check routing configuration

### Environment Variables
- Add in Vercel Dashboard → Settings → Environment Variables
- Redeploy after adding variables

## Post-Deployment

After deployment, you'll get:
- ✅ Live URL (e.g., `your-project.vercel.app`)
- ✅ HTTPS automatically enabled
- ✅ Global CDN
- ✅ Automatic deployments on git push

Enjoy your live portfolio! 🚀

