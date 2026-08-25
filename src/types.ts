export interface MenuItem {
  id: string;
  name: string;
  category: 'steaks' | 'starters' | 'sides' | 'salads' | 'desserts' | 'beverages';
  description: string;
  price: string;
  badge?: string;
  tags?: string[];
  image?: string;
  isChefSpecial?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'steaks' | 'atmosphere' | 'plating' | 'desserts';
  image: string;
  aspect?: 'tall' | 'wide' | 'square';
  caption: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  review: string;
  tag: string;
  highlight: string;
}

export interface ReservationFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: 'indoor-main' | 'private-dining' | 'window-view' | 'chef-counter';
  occasion?: string;
  specialRequests?: string;
}
