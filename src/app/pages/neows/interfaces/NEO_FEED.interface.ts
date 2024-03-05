interface Links {
  next: string;
  previous: string;
  self: string;
}

interface EstimatedDiameter {
  kilometers: Kilometers;
  meters: Meters;
  miles: Miles;
  feet: Feet;
}

interface Kilometers {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

interface Meters {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

interface Miles {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

interface Feet {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

interface CloseApproachData {
  close_approach_date: string;
  close_approach_date_full: string;
  epoch_date_close_approach: number;
  relative_velocity: RelativeVelocity;
  miss_distance: MissDistance;
  orbiting_body: string;
}

interface RelativeVelocity {
  kilometers_per_second: string;
  kilometers_per_hour: string;
  miles_per_hour: string;
}

interface MissDistance {
  astronomical: string;
  lunar: string;
  kilometers: string;
  miles: string;
}

export interface NEO {
  links: Links;
  id: string;
  neo_reference_id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: EstimatedDiameter;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: CloseApproachData[];
  is_sentry_object: boolean;
}

export interface NEO_FEED {
  links: Links;
  element_count: number;
  near_earth_objects: { [date: string]: NEO[] };
}
