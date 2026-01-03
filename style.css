/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --bg-primary: #ffffff;
    --bg-secondary: #f5f5f5;
    --text-primary: #000000;
    --text-secondary: #666666;
    --accent: #333333;
    --border: #e0e0e0;
    --shadow: rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] {
    --bg-primary: #000000;
    --bg-secondary: #1a1a1a;
    --text-primary: #ffffff;
    --text-secondary: #cccccc;
    --accent: #ffffff;
    --border: #333333;
    --shadow: rgba(255, 255, 255, 0.1);
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
}

/* Header Styles */
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background-color: var(--bg-primary);
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 1000;
}

.header-left {
    display: flex;
    align-items: center;
    gap: 15px;
}

/* Hamburger Button */
.hamburger {
    width: 30px;
    height: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
}

.hamburger span {
    width: 100%;
    height: 3px;
    background-color: var(--text-primary);
    transition: all 0.3s ease;
    border-radius: 2px;
}

.hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
}

.hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
}

/* Search Bar */
.search-container {
    position: relative;
    display: flex;
    align-items: center;
}

.search-bar {
    width: 0;
    padding: 8px 12px;
    border: 1px solid var(--border);
    border-radius: 20px;
    background-color: var(--bg-secondary);
    color: var(--text-primary);
    font-size: 14px;
    transition: width 0.3s ease;
    outline: none;
}

.search-bar.expanded {
    width: 200px;
}

.search-btn {
    background: none;
    border: none;
    color: var(--text-primary);
    cursor: pointer;
    padding: 8px;
    margin-left: 5px;
    border-radius: 50%;
    transition: background-color 0.3s ease;
}

.search-btn:hover {
    background-color: var(--bg-secondary);
}

/* Navigation */
.nav {
    display: flex;
    gap: 30px;
}

.nav-link {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 20px;
    transition: background-color 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
    background-color: var(--bg-secondary);
}

/* Theme Switcher */
.header-right {
    display: flex;
    align-items: center;
}

.theme-switcher {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--bg-secondary);
    border: 2px solid var(--border);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    position: relative;
}

.theme-indicator {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--text-primary);
    transition: background-color 0.3s ease;
}

.theme-switcher:hover {
    transform: scale(1.1);
}

/* Drawer */
.drawer {
    position: fixed;
    top: 0;
    left: -300px;
    width: 300px;
    height: 100vh;
    background-color: var(--bg-primary);
    border-right: 1px solid var(--border);
    transition: left 0.3s ease;
    z-index: 999;
    overflow-y: auto;
}

.drawer.open {
    left: 0;
}

.drawer-content {
    padding: 20px;
}

.drawer-close {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    color: var(--text-primary);
    font-size: 20px;
    cursor: pointer;
    padding: 5px;
}

.drawer-section {
    margin-bottom: 30px;
}

.drawer-section h3 {
    margin-bottom: 15px;
    color: var(--text-primary);
    font-size: 18px;
}

.drawer-menu {
    list-style: none;
}

.drawer-menu li {
    margin-bottom: 10px;
}

.drawer-menu a {
    color: var(--text-secondary);
    text-decoration: none;
    padding: 8px 12px;
    display: block;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.drawer-menu a:hover {
    background-color: var(--bg-secondary);
    color: var(--text-primary);
}

/* Main Content */
.main {
    margin-top: 60px;
    min-height: calc(100vh - 60px);
}

.section {
    display: none;
    padding: 40px 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.section.active {
    display: block;
}

.section-title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
}

/* Home Section */
.profile-container {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

.circular-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--border);
    margin-bottom: 20px;
}

.profile-name {
    font-size: 36px;
    font-weight: bold;
    color: white;
    background: linear-gradient(45deg, #333, #666);
    padding: 10px 20px;
    border-radius: 10px;
    display: inline-block;
    margin-bottom: 10px;
}

.profile-title {
    font-size: 18px;
    color: var(--text-secondary);
    margin-bottom: 20px;
}

.profile-description {
    margin-bottom: 30px;
    color: var(--text-secondary);
}

.social-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    margin-top: 30px;
}

.social-link {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    background-color: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 10px;
    color: var(--text-primary);
    text-decoration: none;
    transition: all 0.3s ease;
}

.social-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--shadow);
}

.social-link i {
    font-size: 18px;
    width: 20px;
}

.social-link span {
    font-size: 14px;
}

/* Projects Section */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 30px;
}

.project-card {
    background-color: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 15px;
    padding: 30px;
    text-align: center;
    transition: all 0.3s ease;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px var(--shadow);
}

.project-icon {
    font-size: 48px;
    color: var(--accent);
    margin-bottom: 20px;
}

.project-card h3 {
    font-size: 20px;
    margin-bottom: 10px;
}

.project-card p {
    color: var(--text-secondary);
    margin-bottom: 20px;
}

.project-link {
    display: inline-block;
    padding: 10px 20px;
    background-color: var(--accent);
    color: var(--bg-primary);
    text-decoration: none;
    border-radius: 20px;
    transition: all 0.3s ease;
}

.project-link:hover {
    transform: scale(1.05);
}

/* Blog Section */
.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-top: 30px;
}

.blog-card {
    background-color: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.3s ease;
}

.blog-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px var(--shadow);
}

.blog-thumbnail {
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.blog-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.blog-content {
    padding: 20px;
}

.blog-content h3 {
    font-size: 18px;
    margin-bottom: 10px;
}

.blog-excerpt {
    color: var(--text-secondary);
    margin-bottom: 15px;
    font-size: 14px;
}

.blog-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: var(--text-secondary);
}

.blog-tags {
    color: var(--accent);
}

/* About Section */
.about-content {
    max-width: 800px;
    margin: 0 auto;
}

.profile-section {
    background-color: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 15px;
    padding: 30px;
    margin-bottom: 30px;
}

.profile-section h3 {
    font-size: 24px;
    margin-bottom: 20px;
    color: var(--accent);
}

.profile-info p {
    margin-bottom: 10px;
    color: var(--text-secondary);
}

.profile-info strong {
    color: var(--text-primary);
}

/* Responsive Design */
@media (max-width: 768px) {
    .header {
        padding: 0 15px;
    }
    
    .nav {
        display: none;
    }
    
    .search-bar.expanded {
        width: 150px;
    }
    
    .social-links {
        grid-template-columns: 1fr;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
    }
    
    .blog-grid {
        grid-template-columns: 1fr;
    }
    
    .section {
        padding: 20px 15px;
    }
    
    .profile-name {
        font-size: 28px;
    }
    
    .section-title {
        font-size: 24px;
    }
}

@media (max-width: 480px) {
    .header {
        padding: 0 10px;
    }
    
    .search-bar.expanded {
        width: 120px;
    }
    
    .profile-container {
        padding: 0 10px;
    }
    
    .circular-image {
        width: 120px;
        height: 120px;
    }
    
    .profile-name {
        font-size: 24px;
    }
}
