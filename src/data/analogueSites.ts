export type Category = 'mars' | 'lunar';
export type Body = 'mars' | 'moon' | 'earth';

export interface ComparisonMetric {
  label: string;
  earthValue: number;
  spaceValue: number;
  matchPercent: number;
  unit?: string;
  earthDetail: string;
  spaceDetail: string;
}

export interface DetailedRow {
  parameter: string;
  earthParam: string;
  spaceParam: string;
  dataSource: string;
  sourceUrl: string;
}

export interface TestingApp {
  id: string;
  title: string;
  icon: string;
  description: string;
  hardware: string[];
  category: Category | 'all';
  priority: 'High' | 'Medium' | 'Low';
}

export interface AnalogueSite {
  id: string;
  earthName: string;
  earthLocation: string;
  earthCoords: string;
  spaceName: string;
  spaceLocation: string;
  spaceCoords: string;
  body: Body;
  category: Category;
  categoryLabel: string;
  subjectTags: string[];
  earthImage: string;
  spaceImage: string;
  tagline: string;
  description: string;
  metrics: {
    topography: number;
    soilMineral: number;
    radiationShielding: number;
    thermalDelta: number;
  };
  thermalDeltaLabel: string;
  comparisonMetrics: ComparisonMetric[];
  detailedRows: DetailedRow[];
}

export const analogueSites: AnalogueSite[] = [
  {
    id: 'eldhraun-arsia',
    earthName: 'Eldhraun Lava Field',
    earthLocation: 'Iceland',
    earthCoords: '63.97°N, 18.09°W',
    spaceName: 'Arsia Mons Lava Tubes',
    spaceLocation: 'Mars',
    spaceCoords: '8.31°S, 121.89°W',
    body: 'mars',
    category: 'mars',
    categoryLabel: 'Martian Analog',
    subjectTags: ['Mars Analogs', 'Lava Tubes', 'Extremophiles'],
    earthImage: 'https://images.pexels.com/photos/9531450/pexels-photo-9531450.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    spaceImage: 'https://images.pexels.com/photos/20337601/pexels-photo-20337601.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tagline: 'Subterranean volcanic architecture meets Martian lava tube exploration',
    description:
      'The Eldhraun lava field, formed in the 1783-84 Skaftareldar eruption, is one of Earth\'s largest recent basaltic lava flows. Its collapsed tube systems mirror the morphology of Arsia Mons lava tubes on Mars — prime candidates for habitable subsurface habitats.',
    metrics: {
      topography: 87,
      soilMineral: 82,
      radiationShielding: 91,
      thermalDelta: 78,
    },
    thermalDeltaLabel: '−40°C to +15°C',
    comparisonMetrics: [
      {
        label: 'Topography & Terrain Structure',
        earthValue: 87,
        spaceValue: 89,
        matchPercent: 87,
        earthDetail: 'Pāhoehoe & ʻaʻā basalt, collapsed tube skylights, ~15 km flow length',
        spaceDetail: 'Inflated sheet lava flows, rille-like collapse chains, tubes up to 400 m wide',
      },
      {
        label: 'Soil / Regolith Mineral Composition',
        earthValue: 82,
        spaceValue: 85,
        matchPercent: 82,
        earthDetail: 'Basaltic glass, olivine, pyroxene, plagioclase; low alteration',
        spaceDetail: 'Basaltic regolith, olivine-bearing, pyroxene + plagioclase per MRO/CRISM',
      },
      {
        label: 'Environmental & Radiation Shielding',
        earthValue: 91,
        spaceValue: 95,
        matchPercent: 91,
        earthDetail: 'Tube ceilings 2-8 m thick; year-round thermal stability',
        spaceDetail: 'Estimated 50-1000 m ceilings; could block galactic cosmic rays',
      },
      {
        label: 'Thermal Delta Range',
        earthValue: 78,
        spaceValue: 72,
        matchPercent: 78,
        unit: '°C',
        earthDetail: 'Annual range: −40°C to +15°C (sub-Arctic)',
        spaceDetail: 'Diurnal range: −100°C to +0°C; subsurface stable ~−30°C',
      },
    ],
    detailedRows: [
      {
        parameter: 'Lava Composition',
        earthParam: 'Tholeiitic basalt, FeO ~12 wt%, low K',
        spaceParam: 'Iron-rich basalt, FeO ~18 wt% (Spirit/Opportunity)',
        dataSource: 'USGS Volcano Hazards Program',
        sourceUrl: 'https://www.usgs.gov/programs/VHP',
      },
      {
        parameter: 'Tube Geometry',
        earthParam: 'Sinuous rilles, 2-15 m diameter, skylights present',
        spaceParam: 'Sinuous rilles, 100-400 m diameter, skylights (HiRISE)',
        dataSource: 'NASA / JPL — HiRISE',
        sourceUrl: 'https://www.uahirise.org/',
      },
      {
        parameter: 'Spectral Signature',
        earthParam: 'Basaltic glass + palagonite (hypersthenic)',
        spaceParam: 'Basaltic glass + phyllosilicates in floor deposits',
        dataSource: 'NASA Earthdata / CRISM',
        sourceUrl: 'https://earthdata.nasa.gov',
      },
      {
        parameter: 'Atmospheric Pressure',
        earthParam: '~1013 hPa (sea-level Iceland)',
        spaceParam: '~6-7 hPa (Mars surface average)',
        dataSource: 'NASA Mars Fact Sheet',
        sourceUrl: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html',
      },
      {
        parameter: 'Microbial Ecology',
        earthParam: 'Cyanobacteria & chemolithotrophs in basalt fractures',
        spaceParam: 'Potential subsurface biosphere — unconfirmed',
        dataSource: 'ESA Astrobiology Lab',
        sourceUrl: 'https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Exploration/ExoMars',
      },
    ],
  },
  {
    id: 'atacama-jezero',
    earthName: 'Atacama Desert',
    earthLocation: 'Chile',
    earthCoords: '24.50°S, 69.25°W',
    spaceName: 'Jezero Crater',
    spaceLocation: 'Mars',
    spaceCoords: '18.44°N, 77.69°E',
    body: 'mars',
    category: 'mars',
    categoryLabel: 'Martian Analog',
    subjectTags: ['Mars Analogs', 'Extremophiles'],
    earthImage: 'https://images.pexels.com/photos/27036922/pexels-photo-27036922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    spaceImage: 'https://images.pexels.com/photos/12498801/pexels-photo-12498801.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tagline: 'Hyperarid lakebed sediments mirror the Jezero paleolake delta',
    description:
      'The Atacama is Earth\'s driest non-polar desert, with soils so depleted in organic matter they serve as a proxy for Martian regolith. Its evaporitic deposits and ancient lakebeds parallel Jezero Crater\'s delta sediments, where Perseverance hunts for biosignatures.',
    metrics: {
      topography: 74,
      soilMineral: 90,
      radiationShielding: 65,
      thermalDelta: 70,
    },
    thermalDeltaLabel: '−25°C to +38°C',
    comparisonMetrics: [
      {
        label: 'Topography & Terrain Structure',
        earthValue: 74,
        spaceValue: 79,
        matchPercent: 74,
        earthDetail: 'Saline flat (salar) with alluvial fan deposits & delta remnants',
        spaceDetail: '45 km impact crater with well-preserved fluvial delta fan',
      },
      {
        label: 'Soil / Regolith Mineral Composition',
        earthValue: 90,
        spaceValue: 92,
        matchPercent: 90,
        earthDetail: 'Sulfates, perchlorates, halite, poorly crystalline phyllosilicates',
        spaceDetail: 'Mg-sulfate, perchlorate detections; smectite clays in delta',
      },
      {
        label: 'Environmental & Radiation Shielding',
        earthValue: 65,
        spaceValue: 62,
        matchPercent: 65,
        earthDetail: 'Extreme UV index >20; minimal atmospheric shielding',
        spaceDetail: 'Thin CO₂ atmosphere; surface radiation ~100× Earth',
      },
      {
        label: 'Thermal Delta Range',
        earthValue: 70,
        spaceValue: 68,
        matchPercent: 70,
        unit: '°C',
        earthDetail: 'Diurnal: −25°C to +38°C in Yungay hyperarid core',
        spaceDetail: 'Diurnal: −85°C to +5°C at Jezero landing site',
      },
    ],
    detailedRows: [
      {
        parameter: 'Mineral Assemblage',
        earthParam: 'Halite, gypsum, perchlorate, montmorillonite',
        spaceParam: 'Sulfate, carbonate, smectite clays (Perseverance SHERLOC)',
        dataSource: 'NASA Mars 2020 Mission',
        sourceUrl: 'https://mars.nasa.gov/mars2020/',
      },
      {
        parameter: 'Organic Carbon Content',
        earthParam: '<20 ppw TOC in Yungay core — detection limit analog',
        spaceParam: 'Organics detected by SHERLOC, ppb-level concentrations',
        dataSource: 'NASA Astrobiology',
        sourceUrl: 'https://astrobiology.nasa.gov/',
      },
      {
        parameter: 'Evaporite Deposits',
        earthParam: 'Salar de Atacama — extensive halite + sulfate crusts',
        spaceParam: 'Delta-margin carbonates & sulfates (Jezero)',
        dataSource: 'NASA Earthdata / CRISM',
        sourceUrl: 'https://earthdata.nasa.gov',
      },
      {
        parameter: 'UV Radiation Environment',
        earthParam: 'Surface UV-B / UV-C elevated at high altitude',
        spaceParam: 'Unattenuated solar UV; UVC reaches surface',
        dataSource: 'ESA ExoMars TGO',
        sourceUrl: 'https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Exploration/ExoMars',
      },
      {
        parameter: 'Soil Moisture',
        earthParam: '<2% in hyperarid core; decades without rain',
        spaceParam: 'Transient brine; bulk regolith <1% H₂O',
        dataSource: 'Copernicus Sentinel-2',
        sourceUrl: 'https://www.copernicus.eu/en/sentinel-2',
      },
    ],
  },
  {
    id: 'haughton-shackleton',
    earthName: 'Haughton Impact Crater',
    earthLocation: 'Canadian Arctic',
    earthCoords: '75.37°N, 89.62°W',
    spaceName: 'Shackleton Crater',
    spaceLocation: 'Moon',
    spaceCoords: '89.90°S, 0.00°E',
    body: 'moon',
    category: 'lunar',
    categoryLabel: 'Lunar Analog',
    subjectTags: ['Lunar Analogs'],
    earthImage: 'https://images.pexels.com/photos/32369748/pexels-photo-32369748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    spaceImage: 'https://images.pexels.com/photos/7615732/pexels-photo-7615732.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tagline: 'Polar impact crater terrain validates permanently shadowed lunar exploration',
    description:
      'Haughton Crater on Devon Island is a 23 km diameter impact structure in the Arctic polar desert. Its cold, dry, heavily brecciated terrain and polygonal ground patterns make it a premier analog for Shackleton Crater — a permanently shadowed lunar south pole crater with water ice deposits.',
    metrics: {
      topography: 81,
      soilMineral: 76,
      radiationShielding: 85,
      thermalDelta: 88,
    },
    thermalDeltaLabel: '−45°C to +5°C',
    comparisonMetrics: [
      {
        label: 'Topography & Terrain Structure',
        earthValue: 81,
        spaceValue: 84,
        matchPercent: 81,
        earthDetail: '23 km impact crater; brecciated melt rock, polygonal terrain',
        spaceDetail: '21 km crater; rim permanently sunlit, floor in permanent shadow',
      },
      {
        label: 'Soil / Regolith Mineral Composition',
        earthValue: 76,
        spaceValue: 73,
        matchPercent: 76,
        earthDetail: 'Impact breccia, carbonate melt, sulfate & gypsum veins',
        spaceDetail: 'Anorthositic regolith, ice mixed with silicates, pyroxene',
      },
      {
        label: 'Environmental & Radiation Shielding',
        earthValue: 85,
        spaceValue: 90,
        matchPercent: 85,
        earthDetail: 'Polar desert; low temperatures preserve volatiles',
        spaceDetail: 'Permanently shadowed region <−230°C; cold traps preserve ice',
      },
      {
        label: 'Thermal Delta Range',
        earthValue: 88,
        spaceValue: 93,
        matchPercent: 88,
        unit: '°C',
        earthDetail: 'Annual range: −45°C to +5°C',
        spaceDetail: 'Floor: −238°C; sunlit rim: −50°C; extreme thermal gradient',
      },
    ],
    detailedRows: [
      {
        parameter: 'Crater Diameter & Age',
        earthParam: '23 km diameter, ~39 Ma (Eocene)',
        spaceParam: '21 km diameter, ~3.2 Ga (Nectarian)',
        dataSource: 'USGS Astrogeology',
        sourceUrl: 'https://www.usgs.gov/centers/astrogeology-science-center',
      },
      {
        parameter: 'Breccia Composition',
        earthParam: 'Polymict impact breccia, carbonate + silicate melt',
        spaceParam: 'Regolith breccia, anorthosite + norite + troctolite',
        dataSource: 'NASA Lunar Reconnaissance Orbiter',
        sourceUrl: 'https://www.nasa.gov/mission_pages/LRO/main/index.html',
      },
      {
        parameter: 'Water Ice Presence',
        earthParam: 'Ground ice & permafrost active layer',
        spaceParam: 'Surface water ice confirmed in PSR (LCROSS impact)',
        dataSource: 'NASA LCROSS Mission',
        sourceUrl: 'https://www.nasa.gov/mission_pages/LCROSS/main/',
      },
      {
        parameter: 'Temperature Profile',
        earthParam: 'Mean annual air temp −16°C; permafrost continuous',
        spaceParam: 'PSR floor <−238°C; rim −50°C (Diviner radiometer)',
        dataSource: 'NASA Diviner Lunar Radiometer',
        sourceUrl: 'https://www.nasa.gov/mission_pages/LRO/instruments/diviner.html',
      },
      {
        parameter: 'Polar Day/Night Cycle',
        earthParam: 'Continuous daylight ~80 days / darkness ~100 days',
        spaceParam: 'Permanently shadowed floor; sunlit rim nearly year-round',
        dataSource: 'ESA Lunar Exploration',
        sourceUrl: 'https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Exploration/Lunar_exploration',
      },
    ],
  },
  {
    id: 'clifton-enceladus',
    earthName: 'Lake Clifton Thrombolites',
    earthLocation: 'Western Australia',
    earthCoords: '32.78°S, 115.65°E',
    spaceName: 'Enceladus Ocean Analog',
    spaceLocation: 'Saturn Moon',
    spaceCoords: '0.00°, 0.00°',
    body: 'moon',
    category: 'lunar',
    categoryLabel: 'Ocean World Analog',
    subjectTags: ['Lunar Analogs', 'Extremophiles'],
    earthImage: 'https://images.pexels.com/photos/30304112/pexels-photo-30304112.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    spaceImage: 'https://images.pexels.com/photos/12491653/pexels-photo-12491653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tagline: "Living microbialites bridge Earth's stromatolites to Enceladus's subsurface ocean",
    description:
      "Lake Clifton hosts one of the largest living thrombolite (microbialite) reef systems on Earth. These organosedimentary structures formed by cyanobacterial communities offer a window into how microbial life might survive in Enceladus's alkaline, saline subsurface ocean, confirmed by Cassini plume sampling.",
    metrics: {
      topography: 58,
      soilMineral: 71,
      radiationShielding: 82,
      thermalDelta: 60,
    },
    thermalDeltaLabel: '+10°C to +35°C',
    comparisonMetrics: [
      {
        label: 'Topography & Terrain Structure',
        earthValue: 58,
        spaceValue: 63,
        matchPercent: 58,
        earthDetail: 'Shallow lake with domal microbialite structures up to 1.5 m',
        spaceDetail: 'Subsurface ocean beneath 20-30 km ice shell; hydrothermal vents',
      },
      {
        label: 'Soil / Regolith Mineral Composition',
        earthValue: 71,
        spaceValue: 75,
        matchPercent: 71,
        earthDetail: 'Aragonite & calcite microcrystalline precipitate, halite margins',
        spaceDetail: 'Na-Cl-CO₃ alkaline ocean; silica nanoparticles (Cassini)',
      },
      {
        label: 'Environmental & Radiation Shielding',
        earthValue: 82,
        spaceValue: 95,
        matchPercent: 82,
        earthDetail: 'Water column attenuates UV; microbialite interior protects microbes',
        spaceDetail: 'Ice shell 20-30 km thick; total radiation shielding',
      },
      {
        label: 'Thermal Delta Range',
        earthValue: 60,
        spaceValue: 65,
        matchPercent: 60,
        unit: '°C',
        earthDetail: 'Water: +10°C to +35°C (seasonal lake)',
        spaceDetail: 'Ocean: ~0°C to +90°C near hydrothermal vents',
      },
    ],
    detailedRows: [
      {
        parameter: 'Microbial Community',
        earthParam: 'Cyanobacteria-dominated biofilm; Scytonema, Plectonema',
        spaceParam: 'Hypothetical chemolithoautotrophs; H₂ + CO₂ metabolism',
        dataSource: 'NASA Astrobiology / Cassini',
        sourceUrl: 'https://astrobiology.nasa.gov/missions/cassini/',
      },
      {
        parameter: 'Water Chemistry',
        earthParam: 'Alkaline (pH 8.5-9.0), moderate salinity, carbonate-rich',
        spaceParam: 'Alkaline (pH 8.5-9.0), Na-Cl-CO₃, silica-rich (plume)',
        dataSource: 'NASA Cassini Mission',
        sourceUrl: 'https://solarsystem.nasa.gov/missions/cassini/',
      },
      {
        parameter: 'Energy Source',
        earthParam: 'Photosynthesis (surface) + low-level chemotrophy',
        spaceParam: 'Hydrothermal H₂ serpentinization; radiolysis',
        dataSource: 'ESA — Life in Ocean Worlds',
        sourceUrl: 'https://www.esa.int/Science_Exploration/Space_Science/Enceladus',
      },
      {
        parameter: 'Hydrothermal Activity',
        earthParam: 'Groundwater seepage; low-temperature vents',
        spaceParam: 'Hydrothermal vents on seafloor (MIMI/INMS plume data)',
        dataSource: 'NASA Earthdata / Ocean Worlds',
        sourceUrl: 'https://earthdata.nasa.gov',
      },
      {
        parameter: 'Ice / Shield Cover',
        earthParam: 'No ice cover; microbialite matrix shields micro-environment',
        spaceParam: '20-30 km ice shell (Cassini gravity + shape data)',
        dataSource: 'NASA Cassini CIRS',
        sourceUrl: 'https://pds-atmospheres.nmsu.edu/data_and_services/atmospheres_data/Cassini/CIRS.html',
      },
    ],
  },
];

export const subjectTags = [
  'Mars Analogs',
  'Lunar Analogs',
  'Lava Tubes',
  'Extremophiles',
];

export const filterTabs = [
  { id: 'all', label: 'All Sites' },
  { id: 'mars', label: 'Martian Analogs' },
  { id: 'lunar', label: 'Lunar Analogs' },
] as const;

export const bodyFilters: { id: Body | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'moon', label: 'Moon' },
  { id: 'mars', label: 'Mars' },
  { id: 'earth', label: 'Earth' },
] as const;

export const testingApps: TestingApp[] = [
  {
    id: 'rover',
    title: 'Autonomous Rover Traversal',
    icon: 'Bot',
    description:
      'Validate pathfinding algorithms across basaltic rubble and polygonal ground. Test wheel-soil interaction on loose regolith simulants with embedded obstacle fields.',
    hardware: ['Clearpath Husky A200', 'NavCam stereo pair', 'RTK-GPS', 'LiDAR — Velodyne VLP-16'],
    category: 'all',
    priority: 'High',
  },
  {
    id: 'lidar',
    title: 'LiDAR Mapping',
    icon: 'ScanLine',
    description:
      'Generate centimeter-resolution 3D point clouds of lava tube interiors and crater walls. Test SLAM performance in low-light, feature-poor subterranean environments.',
    hardware: ['Velodyne VLP-16', 'FARO Focus S350', 'ZED2 stereo cam', 'Onboard NVIDIA Jetson'],
    category: 'mars',
    priority: 'High',
  },
  {
    id: 'radio',
    title: 'Subterranean Radio Wave Attenuation',
    icon: 'Radio',
    description:
      'Measure UHF/S-band signal attenuation through basalt and regolith walls. Characterize communication blackout zones for cave-resident rover relays and mesh networks.',
    hardware: ['SDR — Ettus B210', 'UHF dipole antenna array', 'Spectrum analyzer', 'Signal generator'],
    category: 'mars',
    priority: 'Medium',
  },
  {
    id: 'biosignature',
    title: 'Bio-signature Drilling',
    icon: 'Microscope',
    description:
      'Deploy rotary-percussive coring drills to extract stratified sediment and evaporite cores. Test biosignature detection instruments on low-biomass, high-mineral-background samples.',
    hardware: ['Honeybee Robotics corer', 'SHERLOC-class Raman spectrometer', 'GC-MS prototype', 'Sample caching system'],
    category: 'all',
    priority: 'High',
  },
];
