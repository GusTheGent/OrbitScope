interface IRouteItem {
  title: string;
  url: string;
  icon: string;
  disabled: boolean;
}

export const routeItems: IRouteItem[] = [
  { title: 'APOD', url: 'apod', icon: 'image', disabled: false },
  {
    title: 'NeoWS',
    url: 'neows',
    icon: 'planet',
    disabled: false,
  },
  {
    title: 'SNAPI',
    url: 'snapi',
    icon: 'newspaper',
    disabled: false,
  },
  {
    title: 'MARS Weather (Coming Soon)',
    url: 'mars-weather',
    icon: 'cloud',
    disabled: true,
  },
  { title: 'Earth (Coming Soon)', url: 'earth', icon: 'earth', disabled: true },
  {
    title: 'DONKI (Coming Soon)',
    url: 'donki',
    icon: 'analytics',
    disabled: true,
  },
  {
    title: 'EONET (Coming Soon)',
    url: 'eonet',
    icon: 'telescope',
    disabled: true,
  },
];
