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
  const [selectedId, setSelectedId] = useState(analogueSites[0]?.id ?? '');
  const [stress, setStress] = useState<StressState>(initialStress);
  const [inspectSite, setInspectSite] = useState<AnalogueSite | null>(null);

  const visibleSites = useMemo(() => {
    return (analogueSites || []).filter((site) => {
      if (!site) return false;

      const siteBody = (site.body || site.targetBody || '').toLowerCase();
      const currentFilter = (activeBody || 'all').toLowerCase();
      const matchesBody = currentFilter === 'all' || siteBody === currentFilter;

      const query = (searchQuery || '').trim().toLowerCase();
      const matchesSearch =
        !query ||
        (site.name && site.name.toLowerCase().includes(query)) ||
        (site.location && site.location.toLowerCase().includes(query)) ||
        (site.targetSite && site.targetSite.toLowerCase().includes(query)) ||
        siteBody.includes(query);

      return matchesBody && matchesSearch;
    });
  }, [activeBody, searchQuery]);

  const selectedSite = useMemo(
    () => analogueSites.find((s) => s.id === selectedId) ?? visibleSites[0] ?? analogueSites[0],
    [selectedId, visibleSites]
  );

  const launchArchive = (site: AnalogueSite) => {
    const url = ARCHIVE_LINKS[site.category] ?? ARCHIVE_LINKS[site.body === 'mars' ? 'mars' : 'lunar'];
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05070B]">
      {!booted && <BootLoader onDone={() => setBooted(true)} />}

      <div className="pointer-events-none fixed inset-0 bg-grid opacity-20" />
      <div className="pointer-events-none fixed inset-0 bg-stars opacity-25" />
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-br from-[#05070B] via-[#0a1020] to-[#0b132b]" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Header
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeBody={activeBody}
          onBodyChange={setActiveBody}
        />
        <main className="mx-auto w-full max-w-6xl flex-1 space-y-10 px-4 py-8 sm:px-6 lg:px-8">
          <HeroBanner />
          <MissionOverview />
          <SiteSelector
            sites={visibleSites}
            selectedId={selectedId}
            onSelect={setSelectedId}
            searchQuery={searchQuery}
          />
          {selectedSite && <ComparisonMatrix site={selectedSite} />}
          <SiteGrid sites={visibleSites} searchQuery={searchQuery} onOpenSite={setInspectSite} />
          <HardwareStressTester stress={stress} onStressChange={setStress} searchQuery={searchQuery} />
          <ArchiveDecks />
        </main>
        <Footer sites={analogueSites} />
      </div>

      {inspectSite && (
        <SiteInspectionModal
          site={inspectSite}
          onClose={() => setInspectSite(null)}
          onLaunchArchive={launchArchive}
        />
      )}
    </div>
  );
}