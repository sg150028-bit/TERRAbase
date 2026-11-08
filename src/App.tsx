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

  // Bulletproof filter matching all possible data schemas
  const visibleSites = useMemo(() => {
    if (!Array.isArray(analogueSites)) return [];

    return analogueSites.filter((site) => {
      if (!site) return false;

      // Extract every possible body/target key safely
      const rawBody = (site as any).body || (site as any).targetBody || (site as any).category || (site as any).target || '';
      const siteBody = String(rawBody).toLowerCase();
      const currentFilter = String(activeBody || 'all').toLowerCase();

      // Check body filter match (handles 'moon' vs 'lunar' interchangeably)
      let matchesBody = currentFilter === 'all';
      if (!matchesBody) {
        if (currentFilter === 'moon' || currentFilter === 'lunar') {
          matchesBody = siteBody.includes('moon') || siteBody.includes('lunar');
        } else {
          matchesBody = siteBody.includes(currentFilter);
        }
      }

      // Safe search query matching
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

  // Safe selection calculation so ComparisonMatrix NEVER receives null/undefined
  const selectedSite = useMemo(() => {
    if (!analogueSites || analogueSites.length === 0) return null;
    const found = analogueSites.find((s) => s?.id === selectedId);
    return found || visibleSites[0] || analogueSites[0] || null;
  }, [selectedId, visibleSites]);

  const launchArchive = (site: AnalogueSite) => {
    if (!site) return;
    const cat = String((site as any).category || site.body || '').toLowerCase();
    const url = ARCHIVE_LINKS[cat] ?? (cat.includes('mars') ? ARCHIVE_LINKS.mars : ARCHIVE_LINKS.lunar);
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
          {selectedSite ? (
            <ComparisonMatrix site={selectedSite} />
          ) : (
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center text-sm text-slate-400">
              No matching analogue sites found for this filter.
            </div>
          )}
          <SiteGrid sites={visibleSites} searchQuery={searchQuery} onOpenSite={setInspectSite} />
          <HardwareStressTester stress={stress} onStressChange={setStress} searchQuery={searchQuery} />
          <ArchiveDecks />
        </main>
        <Footer sites={analogueSites || []} />
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