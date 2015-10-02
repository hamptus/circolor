var SETTINGS = SETTINGS || {};

SETTINGS.debug = false;
SETTINGS.showFps = false;
SETTINGS.gameTop = 100;
SETTINGS.backgroundColor = 0xecf0f1;

// Target SETTINGS
SETTINGS.targetSizes = {
    "tiny": {"size": 25, "health": 1, "healthMulti": {1: 1}, "lineStyle": 0},
    "xsmall": {"size": 40, "health": 2, "healthMulti": {2: 0.9, 1: 0.6}, "lineStyle": 5},
    "small": {"size": 50, "health": 2, "healthMulti": {2: 0.9, 1: 0.6}, "lineStyle": 5},
    "medium": {"size": 75, "health": 3, "healthMulti": {3: 0.9, 2: 0.6, 1: 0.3}, "lineStyle": 6},
    "large": {"size": 95, "health": 3,  "healthMulti": {3: 0.9, 2: 0.6, 1: 0.3}, "lineStyle": 6},
    "xlarge": {"size": 125, "health": 4, "healthMulti": {4: 0.9, 3: 0.65, 2: 0.35, 1: 0.1}, "lineStyle": 6.5},
    "jumbo": {"size": 200, "health": 5, "healthMulti": {5: 0.9, 4: 0.75, 3: 0.575, 2: 0.375, 1: 0.2}, "lineStyle": 10}
};
