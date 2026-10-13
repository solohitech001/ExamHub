import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { StoreProvider } from '@/lib/store';
import { Shell } from '@/components/Shell';

export const metadata: Metadata = { title: 'ExamHub CBT', description: 'Computer-based testing platform (demo)' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body><StoreProvider><Shell>{children}</Shell></StoreProvider></body>
    </html>
  );
}
