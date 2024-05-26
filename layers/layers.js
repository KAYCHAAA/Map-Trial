var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellte Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_BulatanFakultiKejuruteraan_2 = new ol.format.GeoJSON();
var features_BulatanFakultiKejuruteraan_2 = format_BulatanFakultiKejuruteraan_2.readFeatures(json_BulatanFakultiKejuruteraan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BulatanFakultiKejuruteraan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BulatanFakultiKejuruteraan_2.addFeatures(features_BulatanFakultiKejuruteraan_2);
var lyr_BulatanFakultiKejuruteraan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BulatanFakultiKejuruteraan_2, 
                style: style_BulatanFakultiKejuruteraan_2,
                popuplayertitle: "Bulatan Fakulti Kejuruteraan",
                interactive: true,
                title: '<img src="styles/legend/BulatanFakultiKejuruteraan_2.png" /> Bulatan Fakulti Kejuruteraan'
            });
var format_BulatanPintuUtamaUPM_3 = new ol.format.GeoJSON();
var features_BulatanPintuUtamaUPM_3 = format_BulatanPintuUtamaUPM_3.readFeatures(json_BulatanPintuUtamaUPM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BulatanPintuUtamaUPM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BulatanPintuUtamaUPM_3.addFeatures(features_BulatanPintuUtamaUPM_3);
var lyr_BulatanPintuUtamaUPM_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BulatanPintuUtamaUPM_3, 
                style: style_BulatanPintuUtamaUPM_3,
                popuplayertitle: "Bulatan Pintu Utama UPM",
                interactive: true,
                title: '<img src="styles/legend/BulatanPintuUtamaUPM_3.png" /> Bulatan Pintu Utama UPM'
            });
var format_SimpangEmpatPintu15_4 = new ol.format.GeoJSON();
var features_SimpangEmpatPintu15_4 = format_SimpangEmpatPintu15_4.readFeatures(json_SimpangEmpatPintu15_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SimpangEmpatPintu15_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SimpangEmpatPintu15_4.addFeatures(features_SimpangEmpatPintu15_4);
var lyr_SimpangEmpatPintu15_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SimpangEmpatPintu15_4, 
                style: style_SimpangEmpatPintu15_4,
                popuplayertitle: "Simpang Empat (Pintu 15)",
                interactive: true,
                title: '<img src="styles/legend/SimpangEmpatPintu15_4.png" /> Simpang Empat (Pintu 15)'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellteHybrid_1.setVisible(true);lyr_BulatanFakultiKejuruteraan_2.setVisible(true);lyr_BulatanPintuUtamaUPM_3.setVisible(true);lyr_SimpangEmpatPintu15_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellteHybrid_1,lyr_BulatanFakultiKejuruteraan_2,lyr_BulatanPintuUtamaUPM_3,lyr_SimpangEmpatPintu15_4];
lyr_BulatanFakultiKejuruteraan_2.set('fieldAliases', {'id': 'id', 'Day/Time': 'Day/Time', '7.30-8.30': '7.30-8.30', '1.00-2.00': '1.00-2.00', '4.30-5.30': '4.30-5.30', });
lyr_BulatanPintuUtamaUPM_3.set('fieldAliases', {'id': 'id', 'Day': 'Day', '7.30-8.30': '7.30-8.30', '1.00-2.00': '1.00-2.00', '4.30-5.30': '4.30-5.30', });
lyr_SimpangEmpatPintu15_4.set('fieldAliases', {'id': 'id', 'Day': 'Day', '7.30-8.30': '7.30-8.30', '1.00-2.00': '1.00-2.00', '4.30-5.30': '4.30-5.30', });
lyr_BulatanFakultiKejuruteraan_2.set('fieldImages', {'id': 'TextEdit', 'Day/Time': '', '7.30-8.30': '', '1.00-2.00': '', '4.30-5.30': '', });
lyr_BulatanPintuUtamaUPM_3.set('fieldImages', {'id': 'TextEdit', 'Day': 'TextEdit', '7.30-8.30': '', '1.00-2.00': '', '4.30-5.30': '', });
lyr_SimpangEmpatPintu15_4.set('fieldImages', {'id': 'TextEdit', 'Day': 'TextEdit', '7.30-8.30': '', '1.00-2.00': '', '4.30-5.30': '', });
lyr_BulatanFakultiKejuruteraan_2.set('fieldLabels', {'id': 'hidden field', 'Day/Time': 'inline label - visible with data', '7.30-8.30': 'inline label - visible with data', '1.00-2.00': 'inline label - visible with data', '4.30-5.30': 'inline label - visible with data', });
lyr_BulatanPintuUtamaUPM_3.set('fieldLabels', {'id': 'hidden field', 'Day': 'inline label - visible with data', '7.30-8.30': 'inline label - visible with data', '1.00-2.00': 'inline label - visible with data', '4.30-5.30': 'inline label - visible with data', });
lyr_SimpangEmpatPintu15_4.set('fieldLabels', {'id': 'hidden field', 'Day': 'inline label - visible with data', '7.30-8.30': 'inline label - visible with data', '1.00-2.00': 'inline label - visible with data', '4.30-5.30': 'inline label - visible with data', });
lyr_SimpangEmpatPintu15_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});