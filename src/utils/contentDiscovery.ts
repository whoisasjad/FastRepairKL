
// Utility functions to dynamically discover content from markdown files
export interface ContentItem {
  id: string;
  title: string;
  description?: string;
  image?: string;
  category?: string;
  date?: string;
  readTime?: string;
  author?: string;
  price?: string;
  features?: string[];
}

// Function to extract metadata from markdown content
const extractMetadata = (content: string): Partial<ContentItem> => {
  const lines = content.split('\n');
  const metadata: Partial<ContentItem> = {};
  
  // Extract title (first # heading)
  const titleMatch = content.match(/^#\s+(.+)$/m);
  if (titleMatch) {
    metadata.title = titleMatch[1];
  }
  
  // Extract description (first paragraph after title)
  const descMatch = content.match(/^#\s+.+\n\n(.+)$/m);
  if (descMatch) {
    metadata.description = descMatch[1];
  }
  
  return metadata;
};

// Function to get all available content dynamically
export const discoverContent = async (type: 'blogs' | 'services'): Promise<ContentItem[]> => {
  const items: ContentItem[] = [];
  
  // Define known items as fallback (these will be discovered dynamically in a real implementation)
  const knownItems = {
    blogs: [
      'choosing-right-repair-service',
      'smartphone-maintenance-tips', 
      'water-damage-recovery-guide'
    ],
    services: [
      'smartphone-repair',
      'laptop-repair',
      'tablet-repair'
    ]
  };
  
  const defaultImages = {
    blogs: {
      'choosing-right-repair-service': 'https://images.unsplash.com/photo-1609618237010-c8b0cb2a8b9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'smartphone-maintenance-tips': 'https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'water-damage-recovery-guide': 'https://images.unsplash.com/photo-1563203369-26f2e4a5cf38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    services: {
      'smartphone-repair': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'laptop-repair': 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'tablet-repair': 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    }
  };
  
  // Try to load each known item
  for (const itemId of knownItems[type]) {
    try {
      const response = await fetch(`/data/${type}/${itemId}.md`);
      if (response.ok) {
        const content = await response.text();
        const metadata = extractMetadata(content);
        
        items.push({
          id: itemId,
          title: metadata.title || itemId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          description: metadata.description || `Professional ${type.slice(0, -1)} content`,
          image: defaultImages[type][itemId as keyof typeof defaultImages[typeof type]],
          category: type === 'blogs' ? 'General' : 'Repair Services',
          date: 'Recently updated',
          readTime: type === 'blogs' ? '5 min read' : undefined,
          author: type === 'blogs' ? 'Fast Repair Team' : undefined,
          price: type === 'services' ? 'Starting from RM 100' : undefined,
          features: type === 'services' ? ['Professional Service', 'Quality Guarantee', 'Fast Turnaround'] : undefined
        });
      }
    } catch (error) {
      console.warn(`Failed to load ${type} item: ${itemId}`, error);
    }
  }
  
  return items;
};

// Hook for using discovered content
export const useDiscoveredContent = (type: 'blogs' | 'services') => {
  const [items, setItems] = React.useState<ContentItem[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  
  React.useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        const discoveredItems = await discoverContent(type);
        setItems(discoveredItems);
      } catch (err) {
        setError(`Failed to load ${type}`);
        console.error(`Error loading ${type}:`, err);
      } finally {
        setLoading(false);
      }
    };
    
    loadContent();
  }, [type]);
  
  return { items, loading, error };
};

// Add React import for the hook
import React from 'react';
