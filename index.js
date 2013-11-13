var map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.TileJSON({
            url: 'http://api.tiles.mapbox.com/v3/stuporglue.map-vjxc1ck9.jsonp',
            crossOrigin: 'anonymous'
            })
        })
    ],
    renderers: ol.RendererHints.createFromQueryData(),
    target: 'map',
    view: new ol.View2D({
        center: [14517680.342218693, -2678096.7667923407],
        zoom: 4,
        rotation: 3.145
    })
});
