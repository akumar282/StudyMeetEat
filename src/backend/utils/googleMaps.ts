import axios from 'axios';

export async function getGeolocation(address: string, apiKey: string): Promise<{ lat: number, lng: number } | null> {
  const formattedAddress = address.replace(' ', '%20');
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    if (data.status === 'OK' && data.results.length > 0) {
      const location = data.results[0].geometry.location;
      const lat = location.lat;
      const lng = location.lng;
      return { lat, lng };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
