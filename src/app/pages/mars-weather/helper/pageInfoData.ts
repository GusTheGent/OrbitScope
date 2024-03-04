import { IPageInfoData } from 'src/app/shared/interfaces/PageInfoData.interface';

export const MARS_WEATHER_PAGE_INFO_DATA: IPageInfoData = {
  pageTitle: 'INSIGHT: MARS WEATHER SERVICE',
  pageDescription:
    'NASAs InSight Mars lander takes continuous weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars equator. Please note that there are sometimes problems with the sensors on Mars that result in missing data! If you see a long gap, a search result may bring up more information on whether it is a long-lasting problem. This API provides per-Sol summary data for each of the last seven available Sols (Martian Days). As more data from a particular Sol are downlinked from the spacecraft (sometimes several days later), these values are recalculated, and consequently may change as more data are received on Earth. Additionally, please note that wind and other sensor data may not exist for certain date ranges.',
  pageSource: 'https://api.nasa.gov/',
};
