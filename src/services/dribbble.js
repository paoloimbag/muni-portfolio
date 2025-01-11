const DRIBBBLE_ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN';
const DRIBBBLE_USER = 'YOUR_USERNAME';

export async function getDribbbleShots() {
  try {
    const response = await fetch(
      `https://api.dribbble.com/v2/user/shots?access_token=${DRIBBBLE_ACCESS_TOKEN}`
    );
    const data = await response.json();
    return data.map(shot => ({
      id: shot.id,
      name: shot.title,
      description: shot.description,
      image: shot.images.hidpi || shot.images.normal,
      url: shot.html_url,
      tags: shot.tags,
      category: shot.tags[0] || 'Design'
    }));
  } catch (error) {
    console.error('Error fetching Dribbble shots:', error);
    return [];
  }
} 