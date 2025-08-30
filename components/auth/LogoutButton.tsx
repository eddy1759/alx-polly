'use client';

import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { createClient } from '@/lib/supabase/client';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function LogoutButton() {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <DropdownMenuItem onClick={handleLogout}>
      <LogOut className="h-4 w-4 mr-2" />
      Logout
    </DropdownMenuItem>
  );
}
