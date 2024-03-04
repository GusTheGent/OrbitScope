interface IRouteItem {
  title: string;
  url: string;
  icon: string;
}

export const routeItems: IRouteItem[] = [
  { title: 'APOD', url: 'apod', icon: 'image' },
  { title: 'MARS Weather', url: 'mars-weather', icon: 'cloud' },
  {
    title: 'Neows',
    url: 'neows',
    icon: 'planet',
  },
  { title: 'Earth', url: 'earth', icon: 'earth' },
  { title: 'DONKI', url: 'donki', icon: 'analytics' },
  { title: 'EONET', url: 'eonet', icon: 'telescope' },
];
