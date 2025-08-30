import Link from "next/link";
import { HeaderClient } from "./HeaderClient";

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            PollMaster
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/polls" className="text-sm font-medium hover:text-primary">
              Browse Polls
            </Link>
            <Link href="/polls/create" className="text-sm font-medium hover:text-primary">
              Create Poll
            </Link>
          </nav>

          <HeaderClient />
        </div>
      </div>
    </header>
  );
}