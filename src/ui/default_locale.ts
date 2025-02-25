import {extend} from '../util/util';

let defaultLocale = {
    'AttributionControl.ToggleAttribution': 'Toggle attribution',
    'AttributionControl.MapFeedback': 'Map feedback',
    'FullscreenControl.Enter': 'Enter fullscreen',
    'FullscreenControl.Exit': 'Exit fullscreen',
    'GeolocateControl.FindMyLocation': 'Find my location',
    'GeolocateControl.LocationNotAvailable': 'Location not available',
    'LogoControl.Title': 'Mapbox logo',
    'NavigationControl.ResetBearing': 'Reset bearing to north',
    'NavigationControl.ZoomIn': 'Zoom in',
    'NavigationControl.ZoomOut': 'Zoom out',
    'ScaleControl.Feet': 'ft',
    'ScaleControl.Meters': 'm',
    'ScaleControl.Kilometers': 'km',
    'ScaleControl.Miles': 'mi',
    'ScaleControl.NauticalMiles': 'nm',
    'TerrainControl.enableTerrain': 'Enable terrain',
    'TerrainControl.disableTerrain': 'Disable terrain'
};
defaultLocale = extend({}, defaultLocale, {
    'NavControl.ResetBearing': 'Reset bearing to north',
    'NavControl.ZoomIn': 'Zoom in',
    'NavControl.ZoomOut': 'Zoom out'
})
export default defaultLocale;
