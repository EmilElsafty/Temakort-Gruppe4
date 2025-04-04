ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1377475.166929, 7478877.184641, 1404876.860341, 7491889.658174]);
var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });

        var lyr_Positronnolabelsretina_1 = new ol.layer.Tile({
            'title': 'Positron [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_kommuneplan_2 = new ol.format.GeoJSON();
var features_kommuneplan_2 = format_kommuneplan_2.readFeatures(json_kommuneplan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kommuneplan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kommuneplan_2.addFeatures(features_kommuneplan_2);
var lyr_kommuneplan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kommuneplan_2, 
                style: style_kommuneplan_2,
                popuplayertitle: 'kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/kommuneplan_2.png" /> kommuneplan'
            });
var format_lokalplan_vedtag_3 = new ol.format.GeoJSON();
var features_lokalplan_vedtag_3 = format_lokalplan_vedtag_3.readFeatures(json_lokalplan_vedtag_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lokalplan_vedtag_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lokalplan_vedtag_3.addFeatures(features_lokalplan_vedtag_3);
var lyr_lokalplan_vedtag_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lokalplan_vedtag_3, 
                style: style_lokalplan_vedtag_3,
                popuplayertitle: 'lokalplan_vedtag',
                interactive: true,
    title: 'lokalplan_vedtag<br />\
    <img src="styles/legend/lokalplan_vedtag_3_0.png" /> 1024399<br />\
    <img src="styles/legend/lokalplan_vedtag_3_1.png" /> 1053515<br />\
    <img src="styles/legend/lokalplan_vedtag_3_2.png" /> 1061002<br />\
    <img src="styles/legend/lokalplan_vedtag_3_3.png" /> 1061022<br />\
    <img src="styles/legend/lokalplan_vedtag_3_4.png" /> 1061038<br />\
    <img src="styles/legend/lokalplan_vedtag_3_5.png" /> 1061103<br />\
    <img src="styles/legend/lokalplan_vedtag_3_6.png" /> 1061140<br />\
    <img src="styles/legend/lokalplan_vedtag_3_7.png" /> 1061206<br />\
    <img src="styles/legend/lokalplan_vedtag_3_8.png" /> 1061209<br />\
    <img src="styles/legend/lokalplan_vedtag_3_9.png" /> 1061210<br />\
    <img src="styles/legend/lokalplan_vedtag_3_10.png" /> 1061715<br />\
    <img src="styles/legend/lokalplan_vedtag_3_11.png" /> 1061734<br />\
    <img src="styles/legend/lokalplan_vedtag_3_12.png" /> 1061739<br />\
    <img src="styles/legend/lokalplan_vedtag_3_13.png" /> 1061746<br />\
    <img src="styles/legend/lokalplan_vedtag_3_14.png" /> 1061756<br />\
    <img src="styles/legend/lokalplan_vedtag_3_15.png" /> 1061757<br />\
    <img src="styles/legend/lokalplan_vedtag_3_16.png" /> 1061824<br />\
    <img src="styles/legend/lokalplan_vedtag_3_17.png" /> 1061829<br />\
    <img src="styles/legend/lokalplan_vedtag_3_18.png" /> 1062026<br />\
    <img src="styles/legend/lokalplan_vedtag_3_19.png" /> 1062121<br />\
    <img src="styles/legend/lokalplan_vedtag_3_20.png" /> 1070479<br />\
    <img src="styles/legend/lokalplan_vedtag_3_21.png" /> 1071381<br />\
    <img src="styles/legend/lokalplan_vedtag_3_22.png" /> 1074662<br />\
    <img src="styles/legend/lokalplan_vedtag_3_23.png" /> 1074664<br />\
    <img src="styles/legend/lokalplan_vedtag_3_24.png" /> 1074675<br />\
    <img src="styles/legend/lokalplan_vedtag_3_25.png" /> 1075214<br />\
    <img src="styles/legend/lokalplan_vedtag_3_26.png" /> 1075219<br />\
    <img src="styles/legend/lokalplan_vedtag_3_27.png" /> 1075387<br />\
    <img src="styles/legend/lokalplan_vedtag_3_28.png" /> 1075393<br />\
    <img src="styles/legend/lokalplan_vedtag_3_29.png" /> 1075552<br />\
    <img src="styles/legend/lokalplan_vedtag_3_30.png" /> 1075553<br />\
    <img src="styles/legend/lokalplan_vedtag_3_31.png" /> 1075577<br />\
    <img src="styles/legend/lokalplan_vedtag_3_32.png" /> 1075593<br />\
    <img src="styles/legend/lokalplan_vedtag_3_33.png" /> 1075598<br />\
    <img src="styles/legend/lokalplan_vedtag_3_34.png" /> 1075609<br />\
    <img src="styles/legend/lokalplan_vedtag_3_35.png" /> 1075669<br />\
    <img src="styles/legend/lokalplan_vedtag_3_36.png" /> 1075682<br />\
    <img src="styles/legend/lokalplan_vedtag_3_37.png" /> 1075695<br />\
    <img src="styles/legend/lokalplan_vedtag_3_38.png" /> 1075708<br />\
    <img src="styles/legend/lokalplan_vedtag_3_39.png" /> 1075710<br />\
    <img src="styles/legend/lokalplan_vedtag_3_40.png" /> 1075718<br />\
    <img src="styles/legend/lokalplan_vedtag_3_41.png" /> 1075751<br />\
    <img src="styles/legend/lokalplan_vedtag_3_42.png" /> 1075752<br />\
    <img src="styles/legend/lokalplan_vedtag_3_43.png" /> 1075779<br />\
    <img src="styles/legend/lokalplan_vedtag_3_44.png" /> 1075795<br />\
    <img src="styles/legend/lokalplan_vedtag_3_45.png" /> 1075800<br />\
    <img src="styles/legend/lokalplan_vedtag_3_46.png" /> 1075801<br />\
    <img src="styles/legend/lokalplan_vedtag_3_47.png" /> 1075815<br />\
    <img src="styles/legend/lokalplan_vedtag_3_48.png" /> 1075877<br />\
    <img src="styles/legend/lokalplan_vedtag_3_49.png" /> 1075893<br />\
    <img src="styles/legend/lokalplan_vedtag_3_50.png" /> 1075897<br />\
    <img src="styles/legend/lokalplan_vedtag_3_51.png" /> 1075900<br />\
    <img src="styles/legend/lokalplan_vedtag_3_52.png" /> 1075902<br />\
    <img src="styles/legend/lokalplan_vedtag_3_53.png" /> 1075905<br />\
    <img src="styles/legend/lokalplan_vedtag_3_54.png" /> 1075907<br />\
    <img src="styles/legend/lokalplan_vedtag_3_55.png" /> 1075908<br />\
    <img src="styles/legend/lokalplan_vedtag_3_56.png" /> 1076004<br />\
    <img src="styles/legend/lokalplan_vedtag_3_57.png" /> 1076010<br />\
    <img src="styles/legend/lokalplan_vedtag_3_58.png" /> 1076019<br />\
    <img src="styles/legend/lokalplan_vedtag_3_59.png" /> 1076041<br />\
    <img src="styles/legend/lokalplan_vedtag_3_60.png" /> 1076064<br />\
    <img src="styles/legend/lokalplan_vedtag_3_61.png" /> 1076086<br />\
    <img src="styles/legend/lokalplan_vedtag_3_62.png" /> 1076094<br />\
    <img src="styles/legend/lokalplan_vedtag_3_63.png" /> 1076107<br />\
    <img src="styles/legend/lokalplan_vedtag_3_64.png" /> 1076114<br />\
    <img src="styles/legend/lokalplan_vedtag_3_65.png" /> 1076115<br />\
    <img src="styles/legend/lokalplan_vedtag_3_66.png" /> 1076126<br />\
    <img src="styles/legend/lokalplan_vedtag_3_67.png" /> 1076129<br />\
    <img src="styles/legend/lokalplan_vedtag_3_68.png" /> 1076287<br />\
    <img src="styles/legend/lokalplan_vedtag_3_69.png" /> 1076379<br />\
    <img src="styles/legend/lokalplan_vedtag_3_70.png" /> 1076865<br />\
    <img src="styles/legend/lokalplan_vedtag_3_71.png" /> 1076868<br />\
    <img src="styles/legend/lokalplan_vedtag_3_72.png" /> 1076874<br />\
    <img src="styles/legend/lokalplan_vedtag_3_73.png" /> 1076892<br />\
    <img src="styles/legend/lokalplan_vedtag_3_74.png" /> 1076902<br />\
    <img src="styles/legend/lokalplan_vedtag_3_75.png" /> 1076939<br />\
    <img src="styles/legend/lokalplan_vedtag_3_76.png" /> 1076961<br />\
    <img src="styles/legend/lokalplan_vedtag_3_77.png" /> 1076968<br />\
    <img src="styles/legend/lokalplan_vedtag_3_78.png" /> 1077070<br />\
    <img src="styles/legend/lokalplan_vedtag_3_79.png" /> 1077082<br />\
    <img src="styles/legend/lokalplan_vedtag_3_80.png" /> 1077085<br />\
    <img src="styles/legend/lokalplan_vedtag_3_81.png" /> 1077086<br />\
    <img src="styles/legend/lokalplan_vedtag_3_82.png" /> 1077558<br />\
    <img src="styles/legend/lokalplan_vedtag_3_83.png" /> 1077565<br />\
    <img src="styles/legend/lokalplan_vedtag_3_84.png" /> 1078074<br />\
    <img src="styles/legend/lokalplan_vedtag_3_85.png" /> 1078075<br />\
    <img src="styles/legend/lokalplan_vedtag_3_86.png" /> 1078077<br />\
    <img src="styles/legend/lokalplan_vedtag_3_87.png" /> 1078184<br />\
    <img src="styles/legend/lokalplan_vedtag_3_88.png" /> 1078227<br />\
    <img src="styles/legend/lokalplan_vedtag_3_89.png" /> 1078229<br />\
    <img src="styles/legend/lokalplan_vedtag_3_90.png" /> 1078231<br />\
    <img src="styles/legend/lokalplan_vedtag_3_91.png" /> 1078248<br />\
    <img src="styles/legend/lokalplan_vedtag_3_92.png" /> 1078275<br />\
    <img src="styles/legend/lokalplan_vedtag_3_93.png" /> 1078279<br />\
    <img src="styles/legend/lokalplan_vedtag_3_94.png" /> 1078289<br />\
    <img src="styles/legend/lokalplan_vedtag_3_95.png" /> 1078346<br />\
    <img src="styles/legend/lokalplan_vedtag_3_96.png" /> 1078464<br />\
    <img src="styles/legend/lokalplan_vedtag_3_97.png" /> 1078465<br />\
    <img src="styles/legend/lokalplan_vedtag_3_98.png" /> 1078468<br />\
    <img src="styles/legend/lokalplan_vedtag_3_99.png" /> 1079122<br />\
    <img src="styles/legend/lokalplan_vedtag_3_100.png" /> 1079123<br />\
    <img src="styles/legend/lokalplan_vedtag_3_101.png" /> 1079666<br />\
    <img src="styles/legend/lokalplan_vedtag_3_102.png" /> 1079671<br />\
    <img src="styles/legend/lokalplan_vedtag_3_103.png" /> 1081381<br />\
    <img src="styles/legend/lokalplan_vedtag_3_104.png" /> 1084485<br />\
    <img src="styles/legend/lokalplan_vedtag_3_105.png" /> 1084491<br />\
    <img src="styles/legend/lokalplan_vedtag_3_106.png" /> 1084492<br />\
    <img src="styles/legend/lokalplan_vedtag_3_107.png" /> 1103890<br />\
    <img src="styles/legend/lokalplan_vedtag_3_108.png" /> 1109560<br />\
    <img src="styles/legend/lokalplan_vedtag_3_109.png" /> 1328884<br />\
    <img src="styles/legend/lokalplan_vedtag_3_110.png" /> 1359145<br />\
    <img src="styles/legend/lokalplan_vedtag_3_111.png" /> 1369547<br />\
    <img src="styles/legend/lokalplan_vedtag_3_112.png" /> 1374739<br />\
    <img src="styles/legend/lokalplan_vedtag_3_113.png" /> 1792902<br />\
    <img src="styles/legend/lokalplan_vedtag_3_114.png" /> 1869505<br />\
    <img src="styles/legend/lokalplan_vedtag_3_115.png" /> 2136388<br />\
    <img src="styles/legend/lokalplan_vedtag_3_116.png" /> 2186492<br />\
    <img src="styles/legend/lokalplan_vedtag_3_117.png" /> 2269185<br />\
    <img src="styles/legend/lokalplan_vedtag_3_118.png" /> 2641209<br />\
    <img src="styles/legend/lokalplan_vedtag_3_119.png" /> 2702963<br />\
    <img src="styles/legend/lokalplan_vedtag_3_120.png" /> 2702964<br />\
    <img src="styles/legend/lokalplan_vedtag_3_121.png" /> 2702965<br />\
    <img src="styles/legend/lokalplan_vedtag_3_122.png" /> 2702968<br />\
    <img src="styles/legend/lokalplan_vedtag_3_123.png" /> 2702969<br />\
    <img src="styles/legend/lokalplan_vedtag_3_124.png" /> 2702993<br />\
    <img src="styles/legend/lokalplan_vedtag_3_125.png" /> 2978253<br />\
    <img src="styles/legend/lokalplan_vedtag_3_126.png" /> 3016098<br />\
    <img src="styles/legend/lokalplan_vedtag_3_127.png" /> 3016099<br />\
    <img src="styles/legend/lokalplan_vedtag_3_128.png" /> 3016105<br />\
    <img src="styles/legend/lokalplan_vedtag_3_129.png" /> 3186913<br />\
    <img src="styles/legend/lokalplan_vedtag_3_130.png" /> 3188617<br />\
    <img src="styles/legend/lokalplan_vedtag_3_131.png" /> 3188619<br />\
    <img src="styles/legend/lokalplan_vedtag_3_132.png" /> 3812280<br />\
    <img src="styles/legend/lokalplan_vedtag_3_133.png" /> 3964626<br />\
    <img src="styles/legend/lokalplan_vedtag_3_134.png" /> 3964627<br />\
    <img src="styles/legend/lokalplan_vedtag_3_135.png" /> 3964812<br />\
    <img src="styles/legend/lokalplan_vedtag_3_136.png" /> 9419556<br />\
    <img src="styles/legend/lokalplan_vedtag_3_137.png" /> 9431987<br />\
    <img src="styles/legend/lokalplan_vedtag_3_138.png" /> 9431989<br />\
    <img src="styles/legend/lokalplan_vedtag_3_139.png" /> 9431990<br />\
    <img src="styles/legend/lokalplan_vedtag_3_140.png" /> 9431991<br />\
    <img src="styles/legend/lokalplan_vedtag_3_141.png" /> 9431992<br />\
    <img src="styles/legend/lokalplan_vedtag_3_142.png" /> 9431993<br />\
    <img src="styles/legend/lokalplan_vedtag_3_143.png" /> 9431994<br />\
    <img src="styles/legend/lokalplan_vedtag_3_144.png" /> 9690454<br />\
    <img src="styles/legend/lokalplan_vedtag_3_145.png" /> 9717080<br />\
    <img src="styles/legend/lokalplan_vedtag_3_146.png" /> 9731022<br />\
    <img src="styles/legend/lokalplan_vedtag_3_147.png" /> 9732835<br />\
    <img src="styles/legend/lokalplan_vedtag_3_148.png" /> 9732862<br />\
    <img src="styles/legend/lokalplan_vedtag_3_149.png" /> 9753254<br />\
    <img src="styles/legend/lokalplan_vedtag_3_150.png" /> 10353005<br />\
    <img src="styles/legend/lokalplan_vedtag_3_151.png" /> 10456675<br />\
    <img src="styles/legend/lokalplan_vedtag_3_152.png" /> 10478656<br />\
    <img src="styles/legend/lokalplan_vedtag_3_153.png" /> 10840028<br />\
    <img src="styles/legend/lokalplan_vedtag_3_154.png" /> 10900534<br />\
    <img src="styles/legend/lokalplan_vedtag_3_155.png" /> 10906517<br />\
    <img src="styles/legend/lokalplan_vedtag_3_156.png" /> 10985743<br />\
    <img src="styles/legend/lokalplan_vedtag_3_157.png" /> 11021467<br />\
    <img src="styles/legend/lokalplan_vedtag_3_158.png" /> 11126774<br />\
    <img src="styles/legend/lokalplan_vedtag_3_159.png" /> 11159816<br />\
    <img src="styles/legend/lokalplan_vedtag_3_160.png" /> 11176926<br />\
    <img src="styles/legend/lokalplan_vedtag_3_161.png" /> 11185105<br />\
    <img src="styles/legend/lokalplan_vedtag_3_162.png" /> 11198619<br />\
    <img src="styles/legend/lokalplan_vedtag_3_163.png" /> 11228193<br />\
    <img src="styles/legend/lokalplan_vedtag_3_164.png" /> 11240317<br />\
    <img src="styles/legend/lokalplan_vedtag_3_165.png" /> 11252419<br />\
    <img src="styles/legend/lokalplan_vedtag_3_166.png" /> 11307736<br />\
    <img src="styles/legend/lokalplan_vedtag_3_167.png" /> 11307768<br />\
    <img src="styles/legend/lokalplan_vedtag_3_168.png" /> 11317442<br />\
    <img src="styles/legend/lokalplan_vedtag_3_169.png" /> 11347122<br />\
    <img src="styles/legend/lokalplan_vedtag_3_170.png" /> <br />' });
var format_frededeomrder_4 = new ol.format.GeoJSON();
var features_frededeomrder_4 = format_frededeomrder_4.readFeatures(json_frededeomrder_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_frededeomrder_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_frededeomrder_4.addFeatures(features_frededeomrder_4);
var lyr_frededeomrder_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_frededeomrder_4, 
                style: style_frededeomrder_4,
                popuplayertitle: 'frededeområder',
                interactive: false,
    title: 'frededeområder<br />\
    <img src="styles/legend/frededeomrder_4_0.png" /> Damhuså<br />\
    <img src="styles/legend/frededeomrder_4_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/frededeomrder_4_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/frededeomrder_4_3.png" /> Vestvolden<br />\
    <img src="styles/legend/frededeomrder_4_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/frededeomrder_4_5.png" /> <br />' });
var format_strandbeskyttelseHvidovre_5 = new ol.format.GeoJSON();
var features_strandbeskyttelseHvidovre_5 = format_strandbeskyttelseHvidovre_5.readFeatures(json_strandbeskyttelseHvidovre_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strandbeskyttelseHvidovre_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strandbeskyttelseHvidovre_5.addFeatures(features_strandbeskyttelseHvidovre_5);
var lyr_strandbeskyttelseHvidovre_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strandbeskyttelseHvidovre_5, 
                style: style_strandbeskyttelseHvidovre_5,
                popuplayertitle: 'strandbeskyttelse Hvidovre',
                interactive: false,
                title: '<img src="styles/legend/strandbeskyttelseHvidovre_5.png" /> strandbeskyttelse Hvidovre'
            });
var format_matStrandbeskyttelseFlade_Gaeldende_6 = new ol.format.GeoJSON();
var jsonSource_matStrandbeskyttelseFlade_Gaeldende_6 = new ol.source.Vector({
    attributions: ' ',
    format: format_matStrandbeskyttelseFlade_Gaeldende_6
});var lyr_matStrandbeskyttelseFlade_Gaeldende_6 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_matStrandbeskyttelseFlade_Gaeldende_6, 
    style: style_matStrandbeskyttelseFlade_Gaeldende_6,
    interactive: false,
    title: 'mat:StrandbeskyttelseFlade_Gaeldende'
});

function getmatStrandbeskyttelseFlade_Gaeldende_6Json(geojson) {
    var features_matStrandbeskyttelseFlade_Gaeldende_6 = format_matStrandbeskyttelseFlade_Gaeldende_6.readFeatures(geojson);
    jsonSource_matStrandbeskyttelseFlade_Gaeldende_6.addFeatures(features_matStrandbeskyttelseFlade_Gaeldende_6);
}
var format_folkeskolerrigtig_7 = new ol.format.GeoJSON();
var features_folkeskolerrigtig_7 = format_folkeskolerrigtig_7.readFeatures(json_folkeskolerrigtig_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_folkeskolerrigtig_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_folkeskolerrigtig_7.addFeatures(features_folkeskolerrigtig_7);
var lyr_folkeskolerrigtig_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_folkeskolerrigtig_7, 
                style: style_folkeskolerrigtig_7,
                popuplayertitle: 'folkeskoler(rigtig)',
                interactive: true,
                title: '<img src="styles/legend/folkeskolerrigtig_7.png" /> folkeskoler(rigtig)'
            });
var format_Togstationer_8 = new ol.format.GeoJSON();
var features_Togstationer_8 = format_Togstationer_8.readFeatures(json_Togstationer_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_8.addFeatures(features_Togstationer_8);
var lyr_Togstationer_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_8, 
                style: style_Togstationer_8,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_8.png" /> Togstationer'
            });
var format_Parker_9 = new ol.format.GeoJSON();
var features_Parker_9 = format_Parker_9.readFeatures(json_Parker_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parker_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parker_9.addFeatures(features_Parker_9);
var lyr_Parker_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parker_9, 
                style: style_Parker_9,
                popuplayertitle: 'Parker',
                interactive: true,
                title: '<img src="styles/legend/Parker_9.png" /> Parker'
            });
var format_Legeplads_10 = new ol.format.GeoJSON();
var features_Legeplads_10 = format_Legeplads_10.readFeatures(json_Legeplads_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Legeplads_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Legeplads_10.addFeatures(features_Legeplads_10);
var lyr_Legeplads_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Legeplads_10, 
                style: style_Legeplads_10,
                popuplayertitle: 'Legeplads',
                interactive: true,
                title: '<img src="styles/legend/Legeplads_10.png" /> Legeplads'
            });
var format_kirker_11 = new ol.format.GeoJSON();
var features_kirker_11 = format_kirker_11.readFeatures(json_kirker_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kirker_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kirker_11.addFeatures(features_kirker_11);
var lyr_kirker_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kirker_11, 
                style: style_kirker_11,
                popuplayertitle: 'kirker',
                interactive: true,
                title: '<img src="styles/legend/kirker_11.png" /> kirker'
            });
var format_HOtel_12 = new ol.format.GeoJSON();
var features_HOtel_12 = format_HOtel_12.readFeatures(json_HOtel_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOtel_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOtel_12.addFeatures(features_HOtel_12);
var lyr_HOtel_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HOtel_12, 
                style: style_HOtel_12,
                popuplayertitle: 'HOtel',
                interactive: true,
                title: '<img src="styles/legend/HOtel_12.png" /> HOtel'
            });
var format_Sportogidrtsanlghvidovre_13 = new ol.format.GeoJSON();
var features_Sportogidrtsanlghvidovre_13 = format_Sportogidrtsanlghvidovre_13.readFeatures(json_Sportogidrtsanlghvidovre_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sportogidrtsanlghvidovre_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sportogidrtsanlghvidovre_13.addFeatures(features_Sportogidrtsanlghvidovre_13);
var lyr_Sportogidrtsanlghvidovre_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sportogidrtsanlghvidovre_13, 
                style: style_Sportogidrtsanlghvidovre_13,
                popuplayertitle: 'Sport- og idrætsanlæg hvidovre',
                interactive: true,
                title: '<img src="styles/legend/Sportogidrtsanlghvidovre_13.png" /> Sport- og idrætsanlæg hvidovre'
            });
var format_Praktiserendelger_14 = new ol.format.GeoJSON();
var features_Praktiserendelger_14 = format_Praktiserendelger_14.readFeatures(json_Praktiserendelger_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Praktiserendelger_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Praktiserendelger_14.addFeatures(features_Praktiserendelger_14);
var lyr_Praktiserendelger_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Praktiserendelger_14, 
                style: style_Praktiserendelger_14,
                popuplayertitle: 'Praktiserende læger',
                interactive: true,
                title: '<img src="styles/legend/Praktiserendelger_14.png" /> Praktiserende læger'
            });
var format_Dagligvarebutik1_15 = new ol.format.GeoJSON();
var features_Dagligvarebutik1_15 = format_Dagligvarebutik1_15.readFeatures(json_Dagligvarebutik1_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dagligvarebutik1_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dagligvarebutik1_15.addFeatures(features_Dagligvarebutik1_15);
var lyr_Dagligvarebutik1_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dagligvarebutik1_15, 
                style: style_Dagligvarebutik1_15,
                popuplayertitle: 'Dagligvarebutik1',
                interactive: true,
                title: '<img src="styles/legend/Dagligvarebutik1_15.png" /> Dagligvarebutik1'
            });
var format_Museum1rigtig_16 = new ol.format.GeoJSON();
var features_Museum1rigtig_16 = format_Museum1rigtig_16.readFeatures(json_Museum1rigtig_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Museum1rigtig_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Museum1rigtig_16.addFeatures(features_Museum1rigtig_16);
var lyr_Museum1rigtig_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Museum1rigtig_16, 
                style: style_Museum1rigtig_16,
                popuplayertitle: 'Museum1(rigtig)',
                interactive: true,
                title: '<img src="styles/legend/Museum1rigtig_16.png" /> Museum1(rigtig)'
            });
var format_Tankstationer_17 = new ol.format.GeoJSON();
var features_Tankstationer_17 = format_Tankstationer_17.readFeatures(json_Tankstationer_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tankstationer_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tankstationer_17.addFeatures(features_Tankstationer_17);
var lyr_Tankstationer_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tankstationer_17, 
                style: style_Tankstationer_17,
                popuplayertitle: 'Tankstationer',
                interactive: true,
                title: '<img src="styles/legend/Tankstationer_17.png" /> Tankstationer'
            });
var format_Rest_18 = new ol.format.GeoJSON();
var features_Rest_18 = format_Rest_18.readFeatures(json_Rest_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rest_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rest_18.addFeatures(features_Rest_18);
var lyr_Rest_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rest_18, 
                style: style_Rest_18,
                popuplayertitle: 'Rest',
                interactive: true,
                title: '<img src="styles/legend/Rest_18.png" /> Rest'
            });
var format_fitnesscentre_19 = new ol.format.GeoJSON();
var features_fitnesscentre_19 = format_fitnesscentre_19.readFeatures(json_fitnesscentre_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fitnesscentre_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fitnesscentre_19.addFeatures(features_fitnesscentre_19);
var lyr_fitnesscentre_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fitnesscentre_19, 
                style: style_fitnesscentre_19,
                popuplayertitle: 'fitnesscentre',
                interactive: true,
                title: '<img src="styles/legend/fitnesscentre_19.png" /> fitnesscentre'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_Positronnolabelsretina_1.setVisible(true);lyr_kommuneplan_2.setVisible(true);lyr_lokalplan_vedtag_3.setVisible(true);lyr_frededeomrder_4.setVisible(true);lyr_strandbeskyttelseHvidovre_5.setVisible(true);lyr_matStrandbeskyttelseFlade_Gaeldende_6.setVisible(false);lyr_folkeskolerrigtig_7.setVisible(true);lyr_Togstationer_8.setVisible(true);lyr_Parker_9.setVisible(true);lyr_Legeplads_10.setVisible(true);lyr_kirker_11.setVisible(true);lyr_HOtel_12.setVisible(true);lyr_Sportogidrtsanlghvidovre_13.setVisible(true);lyr_Praktiserendelger_14.setVisible(true);lyr_Dagligvarebutik1_15.setVisible(true);lyr_Museum1rigtig_16.setVisible(true);lyr_Tankstationer_17.setVisible(true);lyr_Rest_18.setVisible(true);lyr_fitnesscentre_19.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_Positronnolabelsretina_1,lyr_kommuneplan_2,lyr_lokalplan_vedtag_3,lyr_frededeomrder_4,lyr_strandbeskyttelseHvidovre_5,lyr_matStrandbeskyttelseFlade_Gaeldende_6,lyr_folkeskolerrigtig_7,lyr_Togstationer_8,lyr_Parker_9,lyr_Legeplads_10,lyr_kirker_11,lyr_HOtel_12,lyr_Sportogidrtsanlghvidovre_13,lyr_Praktiserendelger_14,lyr_Dagligvarebutik1_15,lyr_Museum1rigtig_16,lyr_Tankstationer_17,lyr_Rest_18,lyr_fitnesscentre_19];
lyr_kommuneplan_2.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_lokalplan_vedtag_3.set('fieldAliases', {'fid': 'fid', 'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_frededeomrder_4.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_length': 'Shape_length', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_strandbeskyttelseHvidovre_5.set('fieldAliases', {'fid': 'fid', 'forretningshaendelse': 'forretningshaendelse', 'senesteSagLokalId': 'senesteSagLokalId', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalId': 'id.lokalId', 'paataenktHandling': 'paataenktHandling', 'registreringFra': 'registreringFra', 'virkningFra': 'virkningFra', 'virkningsaktoer': 'virkningsaktoer', 'temaFladeID': 'temaFladeID', 'tematype': 'tematype', 'jordstykkeLokalId': 'jordstykkeLokalId', });
lyr_matStrandbeskyttelseFlade_Gaeldende_6.set('fieldAliases', {'forretningshaendelse': 'forretningshaendelse', 'senesteSagLokalId': 'senesteSagLokalId', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalId': 'id.lokalId', 'paataenktHandling': 'paataenktHandling', 'registreringFra': 'registreringFra', 'virkningFra': 'virkningFra', 'virkningsaktoer': 'virkningsaktoer', 'temaFladeID': 'temaFladeID', 'tematype': 'tematype', 'jordstykkeLokalId': 'jordstykkeLokalId', });
lyr_folkeskolerrigtig_7.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Togstationer_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Parker_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Legeplads_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_kirker_11.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_HOtel_12.set('fieldAliases', {'fid': 'fid', 'Hotel': 'Hotel', 'Adresse': 'Adresse', 'By': 'By', 'Telefonnum': 'Telefonnum', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Sportogidrtsanlghvidovre_13.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Praktiserendelger_14.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Dagligvarebutik1_15.set('fieldAliases', {'Butik': 'Butik', 'Adresse': 'Adresse', 'By': 'By', 'Telefonnum': 'Telefonnum', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Museum1rigtig_16.set('fieldAliases', {'Museum': 'Museum', 'Adresse': 'Adresse', 'By': 'By', 'Telefonnum': 'Telefonnum', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Tankstationer_17.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Rest_18.set('fieldAliases', {'fid': 'fid', 'Restuarant': 'Restuarant', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_fitnesscentre_19.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_kommuneplan_2.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_lokalplan_vedtag_3.set('fieldImages', {'fid': '', 'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_frededeomrder_4.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'Range', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'DateTime', 'Systid_til': 'DateTime', 'Oprettet': 'DateTime', 'Oprindkode': 'Range', 'Oprindelse': 'TextEdit', 'Statuskode': 'Range', 'Status': 'TextEdit', 'Off_kode': 'Range', 'Offentlig': 'TextEdit', 'CVR_kode': 'Range', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_length': 'TextEdit', 'Fred_tkode': 'Range', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'Range', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'Range', 'Gyldig_fra': 'DateTime', 'Gyldig_til': 'DateTime', });
lyr_strandbeskyttelseHvidovre_5.set('fieldImages', {'fid': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senesteSagLokalId': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalId': 'TextEdit', 'paataenktHandling': 'TextEdit', 'registreringFra': 'DateTime', 'virkningFra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temaFladeID': 'Range', 'tematype': 'TextEdit', 'jordstykkeLokalId': 'TextEdit', });
lyr_matStrandbeskyttelseFlade_Gaeldende_6.set('fieldImages', {'forretningshaendelse': '', 'senesteSagLokalId': '', 'forretningsproces': '', 'id.namespace': '', 'id.lokalId': '', 'paataenktHandling': '', 'registreringFra': '', 'virkningFra': '', 'virkningsaktoer': '', 'temaFladeID': '', 'tematype': '', 'jordstykkeLokalId': '', });
lyr_folkeskolerrigtig_7.set('fieldImages', {'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Togstationer_8.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Parker_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Legeplads_10.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_kirker_11.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_HOtel_12.set('fieldImages', {'fid': 'TextEdit', 'Hotel': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonnum': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Sportogidrtsanlghvidovre_13.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Praktiserendelger_14.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Dagligvarebutik1_15.set('fieldImages', {'Butik': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonnum': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Museum1rigtig_16.set('fieldImages', {'Museum': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonnum': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Tankstationer_17.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Rest_18.set('fieldImages', {'fid': 'TextEdit', 'Restuarant': 'Hidden', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_fitnesscentre_19.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_kommuneplan_2.set('fieldLabels', {'fid': 'hidden field', 'oid': 'hidden field', 'id': 'inline label - always visible', 'planid': 'inline label - always visible', 'objektkode': 'hidden field', 'komnr': 'hidden field', 'plannavn': 'hidden field', 'doklink': 'inline label - always visible', 'datoforsl': 'hidden field', 'datovedt': 'inline label - always visible', 'datoaflyst': 'hidden field', 'datoikraft': 'hidden field', 'datoslut': 'hidden field', 'aktuel': 'hidden field', 'datooprt': 'hidden field', 'datoopdt': 'hidden field', 'status': 'hidden field', 'datostart': 'hidden field', 'glkomnr': 'hidden field', 'kommunenavn': 'hidden field', 'glkomnavn': 'hidden field', 'glkomnavn_besk': 'hidden field', });
lyr_lokalplan_vedtag_3.set('fieldLabels', {'fid': 'no label', 'planid': 'inline label - always visible', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_frededeomrder_4.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_length': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_strandbeskyttelseHvidovre_5.set('fieldLabels', {'fid': 'no label', 'forretningshaendelse': 'no label', 'senesteSagLokalId': 'inline label - always visible', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalId': 'no label', 'paataenktHandling': 'no label', 'registreringFra': 'no label', 'virkningFra': 'no label', 'virkningsaktoer': 'no label', 'temaFladeID': 'no label', 'tematype': 'no label', 'jordstykkeLokalId': 'no label', });
lyr_matStrandbeskyttelseFlade_Gaeldende_6.set('fieldLabels', {'forretningshaendelse': 'no label', 'senesteSagLokalId': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalId': 'no label', 'paataenktHandling': 'no label', 'registreringFra': 'no label', 'virkningFra': 'no label', 'virkningsaktoer': 'no label', 'temaFladeID': 'no label', 'tematype': 'no label', 'jordstykkeLokalId': 'no label', });
lyr_folkeskolerrigtig_7.set('fieldLabels', {'Skolenavn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_Togstationer_8.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Parker_9.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Legeplads_10.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'inline label - always visible', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_kirker_11.set('fieldLabels', {'fid': 'no label', 'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefonnum': 'inline label - always visible', });
lyr_HOtel_12.set('fieldLabels', {'fid': 'no label', 'Hotel': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefonnum': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Sportogidrtsanlghvidovre_13.set('fieldLabels', {'fid': 'no label', 'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_Praktiserendelger_14.set('fieldLabels', {'fid': 'no label', 'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_Dagligvarebutik1_15.set('fieldLabels', {'Butik': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefonnum': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Museum1rigtig_16.set('fieldLabels', {'Museum': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefonnum': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Tankstationer_17.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label - always visible', });
lyr_Rest_18.set('fieldLabels', {'fid': 'no label', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_fitnesscentre_19.set('fieldLabels', {'fid': 'no label', 'Navn': 'inline label - visible with data', 'Adresse': 'inline label - visible with data', 'By': 'inline label - visible with data', 'Hjemmeside': 'inline label - visible with data', });
lyr_fitnesscentre_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});