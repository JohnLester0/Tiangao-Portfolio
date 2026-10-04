-- ===================================================
-- Supabase Database Setup for John Lester's Portfolio
-- ===================================================
-- Run this in your Supabase SQL Editor:
-- Dashboard -> SQL Editor -> New query -> Paste & Run

-- 1. Create the 'messages' table for contact form submissions
create table if not exists public.messages (
  id bigint primary key generated always as identity,
  created_at timestamptz default now() not null,
  name text not null,
  email text not null,
  message text not null,
  is_read boolean default false not null
);

-- 2. Enable Row Level Security (RLS)
alter table public.messages enable row level security;

-- 3. Policy: Allow anyone (portfolio visitors) to send/insert messages
drop policy if exists "Allow public contact form submissions" on public.messages;
create policy "Allow public contact form submissions"
  on public.messages
  for insert
  to anon, authenticated
  with check (true);

-- 4. Policy: Protect privacy - only you (authenticated in Supabase) can view submissions
drop policy if exists "Allow owners to view messages" on public.messages;
create policy "Allow owners to view messages"
  on public.messages
  for select
  to authenticated
  using (true);

-- 5. Optional: Helpful comment on table
comment on table public.messages is 'Contact form submissions received from the portfolio website.';
