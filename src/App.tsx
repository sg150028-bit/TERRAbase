import { useMemo, useState } from 'react';
import { Header } from '@/components/Header';
import { HeroBanner } from '@/components/HeroBanner';
import { MissionOverview } from '@/components/MissionOverview';
import { SiteSelector } from '@/components/SiteSelector';
import { ComparisonMatrix } from '@/components/ComparisonMatrix';
import { SiteGrid } from '@/components/SiteGrid';
import { HardwareStressTester, type StressState } from '@/components/HardwareStressTester';
import { ArchiveDecks } from '@/components/ArchiveDecks';
import { Footer } from '@/components/Footer';
import { BootLoader } from '@/components/BootLoader';
import { SiteInspectionModal } from '@/components/SiteInspectionModal';
import { analogueSites, type AnalogueSite, type Body } from '@/data/analogueSites';

const ARCHIVE_LINKS: Record<string, string> = {
  mars: 'https://terrabase-martian-archive.framer.website/',
  lunar: 'https://terrabase-lunar-archive.framer.website/',
  moon: 'https://terrabase-lunar-archive.framer.website/',
};

const initialStress: StressState = {
  payload: {
    id: 'viper-wheel',
    label: 'VIPER Lunar Rover Wheel',
    idealTemperature: -80,
    idealBasalt: 72,
    idealShielding: 3,
    baseRisk: 8,
    vector: 'Thermal fatigue at the wheel hub',
  },
  temperature: -80,
  basalt: 72,
  shielding: 3,
};

export default function App() {
  const [booted, setBooted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBody, setActiveBody] = useState<Body | 'all'>('all');
  const [selectedId, setSelectedId] = useState<string>(() => analogueSites?.[0]?.id ?? '');
  const [stress, setStress] = useState<StressState>(initialStress);
  const [inspectSite, setInspectSite] = useState<AnalogueSite | null>(null);

  const visibleSites = useMemo(() => {
    if (!Array.isArray(analogueSites)) return [];

    return analogueSites.filter((site) => {
      if (!site) return false;

      const rawBody =
        (site as any).body ||
        (site as any).targetBody ||
        (site as any).category ||
        (site as any).target ||
        '';
      const siteBody = String(rawBody).toLowerCase();
      const currentFilter = String(activeBody || 'all').toLowerCase();

      let matchesBody = currentFilter === 'all';
      if (!matchesBody) {
        if (currentFilter === 'moon' || currentFilter === 'lunar') {
          matchesBody = siteBody.includes('moon') || siteBody.includes('lunar');
        } else {
          matchesBody = siteBody.includes(currentFilter);
        }
      }

      const query = String(searchQuery || '').trim().toLowerCase();
      const siteName = String(site.name || '').toLowerCase();
      const siteLoc = String(site.location || '').toLowerCase();
      const siteTarget = String((site as any).targetSite || '').toLowerCase();

      const matchesSearch =
        !query ||
        siteName.includes(query) ||
        siteLoc.includes(query) ||
        siteTarget.includes(query) ||
        siteBody.includes(query);

      return matchesBody && matchesSearch;
    });
  }, [activeBody, searchQuery]);

  // DEBUG: remove once everything works
  console.log({
    activeBody,