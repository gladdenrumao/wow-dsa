// Database helper functions for topics
// These functions make it easy to fetch and manage topics from Supabase

import { supabase } from './supabaseClient';

/**
 * Fetch all topics from Supabase
 * @returns {Promise<Array>} Array of topic objects
 */
export async function getAllTopics() {
  if (!supabase) {
    console.warn('⚠️ Supabase not configured, using fallback data');
    return null;
  }

  try {
    const { data, error } = await supabase
      .from('topics')
      .select('*')
      .order('track', { ascending: true })
      .order('name', { ascending: true });

    if (error) {
      console.error('Error fetching topics:', error);
      return null;
    }

    // Transform the data to match the format used in topics.js
    return data.map(topic => ({
      id: topic.slug,  // Use slug as id for consistency with current code
      name: topic.name,
      track: topic.track,
      disabled: topic.disabled,
    }));
  } catch (error) {
    console.error('Unexpected error fetching topics:', error);
    return null;
  }
}

/**
 * Fetch topics for a specific track
 * @param {string} track - The track to filter by ('dsa', 'psp', or 'ada')
 * @returns {Promise<Array>} Array of topic objects for that track
 */
export async function getTopicsByTrack(track) {
  if (!supabase) {
    console.warn('⚠️ Supabase not configured');
    return null;
  }

  try {
    const { data, error } = await supabase
      .from('topics')
      .select('*')
      .eq('track', track)
      .order('name', { ascending: true });

    if (error) {
      console.error('Error fetching topics by track:', error);
      return null;
    }

    return data.map(topic => ({
      id: topic.slug,
      name: topic.name,
      track: topic.track,
      disabled: topic.disabled,
    }));
  } catch (error) {
    console.error('Unexpected error fetching topics by track:', error);
    return null;
  }
}

/**
 * Fetch a single topic by its slug
 * @param {string} slug - The topic slug (e.g., 'trees', 'linked-list')
 * @returns {Promise<Object>} Single topic object
 */
export async function getTopicBySlug(slug) {
  if (!supabase) {
    console.warn('⚠️ Supabase not configured');
    return null;
  }

  try {
    const { data, error } = await supabase
      .from('topics')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error('Error fetching topic:', error);
      return null;
    }

    return {
      id: data.slug,
      name: data.name,
      track: data.track,
      disabled: data.disabled,
    };
  } catch (error) {
    console.error('Unexpected error fetching topic:', error);
    return null;
  }
}
