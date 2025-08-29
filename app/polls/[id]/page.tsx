import { PollCard } from "@/components/polls/PollCard";

// Sample data - replace with actual API calls
const samplePoll = {
  id: "1",
  title: "What's your favorite programming language?",
  description: "Vote for your preferred programming language for web development. This poll will help us understand the community's preferences and plan future content accordingly.",
  options: ["JavaScript", "Python", "TypeScript", "Rust", "Go"],
  totalVotes: 156,
  createdAt: "2024-01-15T10:00:00Z",
  author: "John Doe",
  isActive: true,
};

export default function PollDetailPage({ params }: { params: { id: string } }) {
  const handleVote = (pollId: string, optionIndex: number) => {
    // TODO: Implement voting logic
    console.log(`Voting for poll ${pollId}, option ${optionIndex}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Poll Details</h1>
        <p className="text-gray-600">View and vote on this poll</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <PollCard poll={samplePoll} onVote={handleVote} />
      </div>
    </div>
  );
}
