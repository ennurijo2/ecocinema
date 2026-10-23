/**
 * Flip to `true` in GitHub to show the Region filter in the map Filters dialog.
 * Uses the Media Locations → Region column in Airtable (already loaded in the app).
 */
export const ENABLE_REGION_FILTER = true;

/**
 * Flip to `true` to list Media (film) records in the map results
 * even when the search box is empty.
 */
export const SHOW_MEDIA_IN_EMPTY_SEARCH = false;

/**
 * Flip to `false` to leave the catalog map unselected on load.
 * When `true`, a random Media Location is chosen if none is already selected.
 */
export const ENABLE_INITIAL_RANDOM_SELECTION = true;
