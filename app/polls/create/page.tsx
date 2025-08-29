import { CreatePollForm } from "@/components/polls/CreatePollForm";

export default function CreatePollPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Create a New Poll</h1>
        <p className="text-gray-600">Set up a poll and let the community vote on it</p>
      </div>
      
      <CreatePollForm />
    </div>
  );
}
