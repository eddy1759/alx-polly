# PollMaster - Next.js Polling Application

A modern, full-stack polling application built with Next.js 15, TypeScript, Tailwind CSS, and Shadcn/ui components.

## Features

- **User Authentication**: Login and registration system
- **Poll Management**: Create, view, and vote on polls
- **Real-time Updates**: Live poll results and voting
- **Responsive Design**: Mobile-first, modern UI
- **Type Safety**: Full TypeScript support

## Project Structure

```
alx-polly/
├── app/                          # Next.js 15 app directory
│   ├── api/                      # API routes
│   │   ├── auth/                 # Authentication endpoints
│   │   │   ├── login/            # Login API
│   │   │   └── register/         # Registration API
│   │   └── polls/                # Poll management endpoints
│   │       └── route.ts          # Polls CRUD operations
│   ├── auth/                     # Authentication pages
│   │   ├── login/                # Login page
│   │   └── register/             # Registration page
│   ├── polls/                    # Poll pages
│   │   ├── create/               # Create poll page
│   │   ├── [id]/                 # Individual poll page
│   │   └── page.tsx              # Polls listing page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/                    # React components
│   ├── auth/                     # Authentication components
│   │   ├── LoginForm.tsx         # Login form
│   │   └── RegisterForm.tsx      # Registration form
│   ├── layout/                   # Layout components
│   │   └── Header.tsx            # Navigation header
│   ├── polls/                    # Poll-related components
│   │   ├── CreatePollForm.tsx    # Poll creation form
│   │   └── PollCard.tsx          # Individual poll display
│   └── ui/                       # Shadcn/ui components
├── lib/                          # Utility libraries
│   ├── auth/                     # Authentication utilities
│   │   └── auth.ts               # Auth service
│   ├── types/                    # TypeScript type definitions
│   │   └── index.ts              # Main types
│   └── utils.ts                  # Utility functions
├── public/                       # Static assets
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # Project documentation
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd alx-polly
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **State Management**: React hooks (local state)

## Development Status

This is a scaffolded project with placeholder implementations. The following areas need to be implemented:

### Authentication
- [ ] Database integration
- [ ] JWT token management
- [ ] Password hashing
- [ ] Session management

### Poll Management
- [ ] Database models
- [ ] CRUD operations
- [ ] Real-time updates
- [ ] Vote validation

### Features
- [ ] User profiles
- [ ] Poll analytics
- [ ] Search and filtering
- [ ] Poll sharing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
