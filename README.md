# Tanzania Developers Community Website 🇹🇿

A website connecting and showcasing the vibrant developer community in Tanzania. This project serves as the first step in building a comprehensive platform for Tanzanian developers.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🌟 Current Features

- Community overview and mission statement
- Featured developers and projects
- Upcoming tech events calendar
- Blog posts and tech articles
- Community guidelines
- Contact and social media links

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **UI Components:** shadcn/ui
- **Styling:** TailwindCSS
- **Deployment:** GitHub Pages
- **Content Management:** TSX/MD/MDX for content

## 🗺️ Platform Roadmap

### Phase 1: Website Launch (Current)
- ✅ Responsive landing page
- 🔄️ Event listings
- 🔄️ Blog section
- 🔄️ Community showcases

### Phase 2: Community Features (Q2 2025)
- 🔄 User authentication and profiles
- 🔄 Developer directory
- 🔄 Project portfolio showcases
- 🔄 Interactive event calendar

### Phase 3: Collaboration Tools (Q3 2025)
- 📋 Discussion forums
- 📋 Resource sharing platform
- 📋 Job board
- 📋 Mentorship matching system

### Phase 4: Platform Growth (2026)
- 📋 Real-time chat and networking
- 📋 Virtual meetup capabilities
- 📋 Learning management system
- 📋 API for community integrations

## 📋 Prerequisites

- Node.js 20.0 or higher
- pnpm 8.x>

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/tanzania-developers/community-website.git
cd community-website
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
pnpm dev
```

Visit `http://localhost:3000` to view the website.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── blog/
│   ├── events/
│   ├── about/
│   └── layout.tsx
├── components/
│   ├── ui/
│   └── shared/
├── content/
│   ├── blog/
│   └── events/
├── lib/
│   └── utils/
└── styles/
```

## 🤝 Contributing

We welcome contributions from developers of all skill levels! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a PR.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Environment Variables

```env
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_GA_ID="your-analytics-id"
```

## 🧪 Running Tests

```bash

# Run unit tests
pnpm test

# Run tests with coverage
pnpm test:coverage
```

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Core Team

- [Alpha Olomi] (@alphaolomi) - Project Lead

<!--
- [Team Member] (@username) - Frontend Developer
- [Team Member] (@username) - Content Manager
-->

## 🙏 How to Support

- Star this repository
- Share with other developers in Tanzania
- Contribute to the codebase
- Provide feedback and suggestions
- Join our community events

## 📞 Contact

- Website: [https://tanzaniadevs.org](https://tanzania-developers-community.github.io/)

<!--
- Twitter: [@TanzaniaDevs](https://twitter.com/tanzaniadevs)
-->

## 🌱 Getting Involved

We're looking for contributors who can help us build the future platform features. If you're interested in any of the roadmap items, please reach out to us through:

1. Opening an issue to discuss implementation,
2. Joining our WhatsApp community,
3. Emailing admin at alphaolomi at gmail dot com.
