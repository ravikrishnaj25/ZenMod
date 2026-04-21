import { supabase } from './client';

export async function getSubscription(userId: string) {
  // Try to fetch, but silently catch errors to prevent Next.js dev server overlays
  // when running without a proper Supabase backend configured
  try {
    const { data, error } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) {
      return null;
    }

    return data;
  } catch (e) {
    return null;
  }
}
