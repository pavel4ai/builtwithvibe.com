# builtwithvibe.com

Builtwithvibe.com is a lightweight, static showcase of community projects that were "built with vibe." It reads a simple YAML list and renders links with screenshots; once changes are merged, a Cloudflare Worker automatically updates the live site.

## Add your project
1. Edit `public/projects.yaml` and append a new item using this structure:
```yaml
- title: Your Project Name
  url: https://your-project.example/
  screenshot: /your_project.png
```
2. Add a small `.png` screenshot to `public/` (e.g., `public/your_project.png`). Reference it via the leading slash in `screenshot`.
3. Open a Pull Request. After the PR is merged, the Cloudflare Worker will refresh the site automatically.