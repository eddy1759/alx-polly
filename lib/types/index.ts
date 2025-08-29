export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface Poll {
  id: string;
  title: string;
  description: string;
  options: string[];
  totalVotes: number;
  createdAt: string;
  updatedAt: string;
  author: string;
  authorId: string;
  isActive: boolean;
  expiresAt?: string;
}

export interface Vote {
  id: string;
  pollId: string;
  userId: string;
  optionIndex: number;
  createdAt: string;
}

export interface PollOption {
  id: string;
  pollId: string;
  text: string;
  voteCount: number;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user: User;
  token: string;
}

export interface CreatePollRequest {
  title: string;
  description: string;
  options: string[];
  expiresAt?: string;
}

export interface VoteRequest {
  pollId: string;
  optionIndex: number;
}
