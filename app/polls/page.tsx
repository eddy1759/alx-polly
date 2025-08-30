"use client";

import { PollCard } from "@/components/polls/PollCard";

// Sample data - replace with actual API calls
const samplePolls = [
  {
    id: "1",
    title: "What's your favorite programming language?",
    description: "Vote for your preferred programming language for web development",
    options: ["JavaScript", "Python", "TypeScript", "Rust", "Go"],
    totalVotes: 156,
    createdAt: "2024-01-15T10:00:00Z",
    author: "John Doe",
    isActive: true,
  },
  {
    id: "2",
    title: "Best framework for building APIs",
    description: "Which framework do you prefer for building REST APIs?",
    options: ["Express.js", "FastAPI", "Spring Boot", "Laravel", "Django"],
    totalVotes: 89,
    createdAt: "2024-01-14T15:30:00Z",
    author: "Jane Smith",
    isActive: true,
  },
  {
    id: "3",
    title: "Preferred database for production",
    description: "What database system do you use in production?",
    options: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite"],
    totalVotes: 234,
    createdAt: "2024-01-13T09:15:00Z",
    author: "Mike Johnson",
    isActive: false,
  },
];

export default function PollsPage() {
  const handleVote = (pollId: string, optionIndex: number) => {
    // TODO: Implement voting logic
    console.log(`Voting for poll ${pollId}, option ${optionIndex}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Polls</h1>
        <p className="text-gray-600">Discover and vote on polls created by the community</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {samplePolls.map((poll) => (
          <PollCard key={poll.id} poll={poll} onVote={handleVote} />
        ))}
      </div>

      {samplePolls.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No polls available yet. Be the first to create one!</p>
        </div>
      )}
    </div>
  );
}
