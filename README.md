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
- Supabase account (free tier available)

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

3. Set up Supabase:
   - Go to [supabase.com](https://supabase.com) and create a new project
   - Get your project URL and anon key from the API settings
   - Copy `env.example` to `.env.local` and fill in your Supabase credentials:
   ```bash
   cp env.example .env.local
   ```
   - Update `.env.local` with your actual Supabase values

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

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
- **State Management**: React hooks + Context API
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL

## Supabase Setup

### 1. Create a Supabase Project
1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project" and follow the setup wizard
3. Choose a free tier plan
4. Wait for your database to be ready

### 2. Get Your Credentials
1. In your project dashboard, go to Settings → API
2. Copy your Project URL and anon/public key
3. Add them to your `.env.local` file

### 3. Database Schema
The app expects the following tables (you can create them manually or use SQL):

```sql
-- Users table (handled by Supabase Auth)
-- Polls table
CREATE TABLE polls (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  author_id UUID REFERENCES auth.users(id),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Poll options table
CREATE TABLE poll_options (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  poll_id UUID REFERENCES polls(id) ON DELETE CASCADE,
  text TEXT NOT NULL,
  vote_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Votes table
CREATE TABLE votes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  poll_id UUID REFERENCES polls(id) ON DELETE CASCADE,
  option_id UUID REFERENCES poll_options(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(poll_id, user_id)
);
```

## Development Status

This project now has a working authentication system with Supabase. The following areas are implemented:

### Authentication ✅
- [x] Supabase integration
- [x] JWT token management
- [x] User registration and login
- [x] Session management
- [x] Protected routes

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
