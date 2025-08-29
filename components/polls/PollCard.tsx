"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Poll {
  id: string;
  title: string;
  description: string;
  options: string[];
  totalVotes: number;
  createdAt: string;
  author: string;
  isActive: boolean;
}

interface PollCardProps {
  poll: Poll;
  onVote?: (pollId: string, optionIndex: number) => void;
}

export function PollCard({ poll, onVote }: PollCardProps) {
  const handleVote = (optionIndex: number) => {
    if (onVote) {
      onVote(poll.id, optionIndex);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">{poll.title}</CardTitle>
            <CardDescription>{poll.description}</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={poll.isActive ? "default" : "secondary"}>
              {poll.isActive ? "Active" : "Closed"}
            </Badge>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          By {poll.author} • {new Date(poll.createdAt).toLocaleDateString()}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {poll.options.map((option, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm">{option}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleVote(index)}
                disabled={!poll.isActive}
              >
                Vote
              </Button>
            </div>
          ))}
        </div>
        <div className="text-sm text-muted-foreground text-center">
          Total votes: {poll.totalVotes}
        </div>
      </CardContent>
    </Card>
  );
}
