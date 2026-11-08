# TERRAbase // Interplanetary Surface Analogue Engine

> **Official Submission for the NASA Space Apps Challenge 2026**  
> Developed Solo by **Archisha Mandal**

---

##  Live Portal & Planetary Decks
* **Central Intelligence Workstation (Bolt Core):** [https://terrabase-analogue.bolt.host](https://terrabase-analogue.bolt.host)
* **Martian Planetary Archive (Framer):** [https://terrabase-martian-archive.framer.website](https://terrabase-martian-archive.framer.website/)
* **Lunar Planetary Archive (Framer):** [https://terrabase-lunar-archive.framer.website](https://terrabase-lunar-archive.framer.website/)

---

##  Project Overview
**TERRAbase** is a unified research platform designed to quantify Earth-to-Space site synergy and prevent mission hardware failure on Mars and the Moon using open-source telemetry. 

Testing rovers, drills, and habitats against isolated GIS layers often creates a false sense of readiness. TERRAbase matches spectral, topographic, environmental, and radiation shielding parameters across terrestrial analogue field sites (such as Eldhraun Lava Field and the Atacama Desert) and target extraterrestrial sites to ensure hardware is stress-tested against realistic operational conditions.

---

##  Core Features & Capabilities
* **Mission Hardware Stress-Tester:** Interactive failure-vector simulator dynamically computing payload risk percentages based on real-time adjustments to temperature deltas, basalt density, and shielding depth.
* **Analogue Pair Selector:** Instant pairing engine matching Earth field testing sites with extraterrestrial targets (e.g., Eldhraun Lava Field $\rightarrow$ Arsia Mons Lava Tubes).
* **Compatibility Score Matrix:** Clean comparative view evaluating site synergy across terrain structure, regolith composition, radiation shielding, and thermal delta ranges.
* **Dynamic Surface Search & Filtering:** Real-time spatial dataset filtering across Earth, Lunar, and Martian targets.

---

##  Integrated NASA & USGS Open Data Sources

1. **NASA Lunar Reconnaissance Orbiter (LRO) / LOLA Altimetry:**
   * *Data Product:* Lunar Orbiter Laser Altimeter Digital Elevation Models (LOLA DEM)
   * *Source:* NASA Planetary Data System (PDS) Geosciences Node
   * *Link:* [https://pds-geosciences.wustl.edu/missions/lro/lola.htm](https://pds-geosciences.wustl.edu/missions/lro/lola.htm)

2. **NASA Mars Reconnaissance Orbiter (MRO) / HiRISE & CRISM:**
   * *Data Product:* High Resolution Imaging Science Experiment (HiRISE) Digital Terrain Models & Compact Reconnaissance Imaging Spectrometer for Mars (CRISM) Mineral Maps
   * *Source:* NASA Planetary Data System (PDS) / University of Arizona
   * *Links:* [https://hirise.lpl.arizona.edu](https://hirise.lpl.arizona.edu) | [https://crism.jhuapl.edu](https://crism.jhuapl.edu)

3. **NASA Mars Exploration Rovers (Spirit & Opportunity):**
   * *Data Product:* APXS Regolith Spectral & Iron (FeO wt%) Basaltic Analysis
   * *Source:* NASA JPL Mars Exploration Program Data Archives
   * *Link:* [https://mars.nasa.gov/mer/](https://mars.nasa.gov/mer/)

4. **USGS Astrogeology Science Center:**
   * *Data Product:* Planetary Terrestrial Analogue Database & USGS Volcano Hazards Program (Eldhraun Tholeiitic Lava Field GIS Datasets)
   * *Source:* United States Geological Survey Astrogeology Research Program
   * *Links:* [https://astrogeology.usgs.gov](https://astrogeology.usgs.gov) | [https://www.usgs.gov/programs/vhp](https://www.usgs.gov/programs/vhp)

---

##  Tech Stack
* **Frontend Core:** React, TypeScript, Tailwind CSS
* **Sub-Site Archives:** Framer Engine
* **Icons & Animation:** Lucide React, Dynamic Canvas & 3D Tilt FX
* **Deployment & Hosting:** Bolt Host, GitHub Pages

---

##  License
This project is open-source software licensed under the [MIT License](LICENSE).
