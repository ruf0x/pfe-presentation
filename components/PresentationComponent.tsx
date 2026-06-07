'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Home, Zap } from 'lucide-react';
import {
  TitleSlide,
  ContentsSlide,
  SectionDividerSlide,
  SocOperationsSlide,
  SiemWorkflowSlide,
  ThreatGridSlide,
  WazuhComponentsSlide,
  WazuhPipelineSlide,
  AiSiemSlide,
  SiemMitreSlide,
  AlertFatigueSlide,
  ObjectivesSlide,
  FoundationSlide,
  LLMStrategiesSlide,
  StateOfArtSlide,
  SoaParadigmsSlide,
  SoaDatasetsSlide,
  SoaMlDlSlide,
  SoaLlmWorksSlide,
  SoaGapSlide,
  ContributionMotivationSlide,
  ContributionArchitectureSlide,
  ContributionDatasetSlide,
  ContributionDatasetAnalysisSlide,
  ContributionPreprocessingSlide,
  ContributionFinetuningStrategySlide,
  ContributionFinetuningPipelineSlide,
  ContributionStage1ResultsSlide,
  ContributionStage1ResultsSummarySlide,
  ContributionStage1PlotsSlide,
  ContributionStage2PromptingSlide,
  ContributionStage2ResultsSlide,
  ContributionPipelinePerfSlide,
  ContributionDashboardSlide,
  ContributionDashboardPanelSlide,
  ContributionDiagramSlide,
  ContributionRelatedWorkComparisonSlide,
  ClosingTextSlide,
  ArchitectureSlide,
  DatasetSlide,
  FinetuningSlide,
  ConclusionSlide
} from '@/components/slides';
import { presentationData } from '@/lib/presentationData';

const presentationSections = presentationData
  .map((slide, index) => ({ slide, index }))
  .filter(({ slide }) => slide.type === 'section-divider')
  .map(({ slide, index }) => ({
    index,
    num: (slide as { num: string }).num,
    title: (slide as { title: string }).title,
  }));

const sectionNavLabels: Record<string, string> = {
  Introduction: 'Intro',
  Background: 'Background',
  'State-of-the-Art': 'SotA',
  Contribution: 'Contrib.',
  Conclusion: 'Conclusion',
};

function getActiveSectionIndex(currentSlide: number) {
  return presentationSections.reduce((active, section, i) => {
    return currentSlide >= section.index ? i : active;
  }, 0);
}

export function PresentationComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideInput, setSlideInput] = useState('1');
  const isTransitioningRef = useRef(false);
  const touchStartXRef = useRef<number | null>(null);
  const totalSlides = presentationData.length;
  const activeSectionIndex = getActiveSectionIndex(currentSlide);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartXRef.current = e.touches[0]?.clientX ?? null;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartXRef.current === null || isTransitioningRef.current) return;

      const touchEndX = e.changedTouches[0]?.clientX;
      if (touchEndX === undefined) return;

      const deltaX = touchEndX - touchStartXRef.current;
      touchStartXRef.current = null;

      if (Math.abs(deltaX) < 50) return;

      if (deltaX < 0) {
        goToSlide(Math.min(currentSlide + 1, totalSlides - 1));
      } else {
        goToSlide(Math.max(currentSlide - 1, 0));
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSlide, totalSlides]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'f') setIsFullscreen(!isFullscreen);
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, isFullscreen]);

  useEffect(() => {
    setSlideInput(String(currentSlide + 1));
  }, [currentSlide]);

  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;

    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (e.target instanceof HTMLInputElement) return;

      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      if (Math.abs(deltaX) < 60 || Math.abs(deltaX) < Math.abs(deltaY)) return;

      if (deltaX < 0) {
        goToSlide(Math.min(currentSlide + 1, totalSlides - 1));
      } else {
        goToSlide(Math.max(currentSlide - 1, 0));
      }
    };

    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [currentSlide, totalSlides]);

  const goToSlide = (targetSlide: number) => {
    if (isTransitioningRef.current || targetSlide === currentSlide) return;

    isTransitioningRef.current = true;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(targetSlide);
      setIsTransitioning(false);
      isTransitioningRef.current = false;
    }, 300);
  };

  const nextSlide = () => {
    goToSlide(Math.min(currentSlide + 1, totalSlides - 1));
  };
  
  const prevSlide = () => {
    goToSlide(Math.max(currentSlide - 1, 0));
  };

  const firstSlide = () => {
    goToSlide(0);
  };

  const submitSlideInput = () => {
    const slideNumber = Number.parseInt(slideInput, 10);

    if (Number.isNaN(slideNumber)) {
      setSlideInput(String(currentSlide + 1));
      return;
    }

    const targetSlide = Math.min(Math.max(slideNumber, 1), totalSlides) - 1;
    goToSlide(targetSlide);
    setSlideInput(String(targetSlide + 1));
  };

  const renderSlide = () => {
    const slide = presentationData[currentSlide] as any;

    switch (slide.type) {
      case 'title':
        return (
          <TitleSlide
            title={slide.title}
            presenter={slide.presenter}
            specialty={slide.specialty}
            supervisor={slide.supervisor}
          />
        );
      case 'contents':
        return <ContentsSlide title={slide.title} items={slide.items} />;
      case 'section-divider':
        return <SectionDividerSlide num={slide.num} title={slide.title} />;
      case 'soc-operations':
        return <SocOperationsSlide title={slide.title} items={slide.items} roles={slide.roles} />;
      case 'siem-workflow':
        return (
          <SiemWorkflowSlide
            title={slide.title}
            definition={slide.definition}
            functions={slide.functions}
            limitations={slide.limitations}
          />
        );
      case 'threat-grid':
        return <ThreatGridSlide title={slide.title} rows={slide.rows} note={slide.note} />;
      case 'wazuh-components':
        return <WazuhComponentsSlide title={slide.title} components={slide.components} />;
      case 'wazuh-pipeline':
        return <WazuhPipelineSlide title={slide.title} flow={slide.flow} ruleDetails={slide.ruleDetails} />;
      case 'ai-siem':
        return (
          <AiSiemSlide
            title={slide.title}
            why={slide.why}
            approaches={slide.approaches}
            wazuh={slide.wazuh}
          />
        );
      case 'siem-mitre':
        return (
          <SiemMitreSlide
            title={slide.title}
            siem={slide.siem}
            mitre={slide.mitre}
          />
        );
      case 'alert-fatigue':
        return (
          <AlertFatigueSlide
            title={slide.title}
            items={slide.items}
            stat={slide.stat}
            conclusion={slide.conclusion}
          />
        );
      case 'objectives':
        return <ObjectivesSlide title={slide.title} items={slide.items} />;
      case 'foundation':
        return (
          <FoundationSlide
            title={slide.title}
            wazuh={slide.wazuh}
            quote={slide.quote}
          />
        );
      case 'llm-strategies':
        return (
          <LLMStrategiesSlide
            title={slide.title}
            intro1={slide.intro1}
            intro2={slide.intro2}
            table={slide.table}
          />
        );
      case 'state-of-art':
        return (
          <StateOfArtSlide
            title={slide.title}
            items={slide.items}
            quote={slide.quote}
          />
        );
      case 'soa-paradigms':
        return <SoaParadigmsSlide title={slide.title} paradigms={slide.paradigms} note={slide.note} />;
      case 'soa-datasets':
        return <SoaDatasetsSlide title={slide.title} datasets={slide.datasets} />;
      case 'soa-ml-dl':
        return <SoaMlDlSlide title={slide.title} rows={slide.rows} takeaway={slide.takeaway} />;
      case 'soa-llm-works':
        return <SoaLlmWorksSlide title={slide.title} groups={slide.groups} />;
      case 'soa-gap':
        return (
          <SoaGapSlide
            title={slide.title}
            headers={slide.headers}
            rows={slide.rows}
            gap={slide.gap}
            contribution={slide.contribution}
          />
        );
      case 'contribution-motivation':
        return <ContributionMotivationSlide title={slide.title} cards={slide.cards} />;
      case 'contribution-architecture':
        return (
          <ContributionArchitectureSlide
            title={slide.title}
            image={slide.image}
            caption={slide.caption}
          />
        );
      case 'contribution-dataset':
        return (
          <ContributionDatasetSlide
            title={slide.title}
            sources={slide.sources}
            summary={slide.summary}
          />
        );
      case 'contribution-dataset-analysis':
        return (
          <ContributionDatasetAnalysisSlide
            title={slide.title}
            metrics={slide.metrics}
            binaryNotes={slide.binaryNotes}
            conclusion={slide.conclusion}
            images={slide.images}
          />
        );
      case 'contribution-preprocessing':
        return (
          <ContributionPreprocessingSlide
            title={slide.title}
            intro={slide.intro}
            fields={slide.fields}
            sample={slide.sample}
          />
        );
      case 'contribution-finetuning-strategy':
        return (
          <ContributionFinetuningStrategySlide
            title={slide.title}
            columns={slide.columns}
            note={slide.note}
          />
        );
      case 'contribution-finetuning-pipeline':
        return (
          <ContributionFinetuningPipelineSlide
            title={slide.title}
            steps={slide.steps}
            hyperparams={slide.hyperparams}
          />
        );
      case 'contribution-stage1-results':
        return (
          <ContributionStage1ResultsSlide
            title={slide.title}
            rows={slide.rows}
            takeaways={slide.takeaways}
            images={slide.images}
          />
        );
      case 'contribution-stage1-results-summary':
        return (
          <ContributionStage1ResultsSummarySlide
            title={slide.title}
            rows={slide.rows}
            takeaways={slide.takeaways}
          />
        );
      case 'contribution-stage1-plots':
        return (
          <ContributionStage1PlotsSlide
            title={slide.title}
            images={slide.images}
          />
        );
      case 'contribution-stage2-prompting':
        return (
          <ContributionStage2PromptingSlide
            title={slide.title}
            whyNoFinetune={slide.whyNoFinetune}
            outputSchema={slide.outputSchema}
            rows={slide.rows}
            reasoning={slide.reasoning}
          />
        );
      case 'contribution-stage2-results':
        return (
          <ContributionStage2ResultsSlide
            title={slide.title}
            benchRows={slide.benchRows}
            deployStats={slide.deployStats}
            escalationRows={slide.escalationRows}
            triggers={slide.triggers}
          />
        );
      case 'contribution-pipeline-perf':
        return (
          <ContributionPipelinePerfSlide
            title={slide.title}
            rows={slide.rows}
            bullets={slide.bullets}
            throughputStat={slide.throughputStat}
            throughputLabel={slide.throughputLabel}
          />
        );
      case 'contribution-dashboard':
        return (
          <ContributionDashboardSlide
            title={slide.title}
            stack={slide.stack}
            panels={slide.panels}
          />
        );
      case 'contribution-dashboard-panel':
        return (
          <ContributionDashboardPanelSlide
            title={slide.title}
            stack={slide.stack}
            panel={slide.panel}
          />
        );
      case 'contribution-diagram':
        return (
          <ContributionDiagramSlide
            title={slide.title}
            image={slide.image}
            caption={slide.caption}
          />
        );
      case 'contribution-related-work-comparison':
        return (
          <ContributionRelatedWorkComparisonSlide
            title={slide.title}
            headers={slide.headers}
            rows={slide.rows}
            note={slide.note}
          />
        );
      case 'closing-text':
        return <ClosingTextSlide title={slide.title} subtitle={slide.subtitle} />;
      case 'architecture':
        return (
          <ArchitectureSlide
            title={slide.title}
            stages={slide.stages}
            features={slide.features}
          />
        );
      case 'dataset':
        return (
          <DatasetSlide
            title={slide.title}
            dataSource={slide.dataSource}
            dataNote={slide.dataNote}
            preprocessing={slide.preprocessing}
          />
        );
      case 'finetuning':
        return (
          <FinetuningSlide
            title={slide.title}
            approach={slide.approach}
            hyperparameters={slide.hyperparameters}
          />
        );
      case 'conclusion':
        return (
          <ConclusionSlide
            title={slide.title}
            contributions={slide.contributions}
            futures={slide.futures}
            quote={slide.quote}
          />
        );
      default:
        return <div>Unknown slide type</div>;
    }
  };

  return (
    <div className="presentation-root flex h-dvh min-h-dvh flex-col overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-2 sm:px-4 md:px-8 lg:px-12">
      {/* Animated Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-48 w-48 animate-pulse rounded-full bg-cyan-500/10 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute bottom-0 right-1/4 h-48 w-48 animate-pulse rounded-full bg-blue-500/10 blur-3xl sm:h-96 sm:w-96" style={{ animationDelay: '1s' }} />
      </div>

      {/* Navigation Bar */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-cyan-400/20 bg-slate-900/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-2 py-2 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between gap-2">
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 sm:h-10 sm:w-10">
                <Zap size={18} className="text-slate-900 sm:hidden" />
                <Zap size={24} className="hidden text-slate-900 sm:block" />
              </div>
              <div className="hidden text-sm font-bold tracking-wider text-cyan-300 sm:block md:text-base">
                WAZUH CLASSIFIER
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-1.5 sm:gap-3 lg:gap-4">
              <div className="font-mono text-xs text-gray-400 sm:text-sm">
                <span className="text-cyan-300">{currentSlide + 1}</span>
                <span className="text-gray-500">/</span>
                <span>{presentationData.length}</span>
              </div>

              <div className="hidden items-center rounded-lg border border-cyan-400/25 bg-slate-800/40 px-2 py-1 sm:flex">
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={slideInput}
                  onChange={(e) => setSlideInput(e.target.value)}
                  onBlur={submitSlideInput}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.currentTarget.blur();
                    }
                  }}
                  className="h-7 w-12 rounded-md border border-cyan-400/25 bg-slate-950/70 px-2 text-center text-xs font-mono text-cyan-200 outline-none transition-colors focus:border-cyan-300 sm:h-8 sm:w-14 sm:text-sm"
                  aria-label="Go to slide number"
                />
              </div>

              <button
                onClick={prevSlide}
                disabled={isTransitioning || currentSlide === 0}
                className="rounded-lg border border-cyan-400/30 bg-slate-800/50 p-1.5 text-cyan-300 transition-all duration-200 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-200 disabled:opacity-50 sm:p-2"
                aria-label="Previous slide"
              >
                <ChevronLeft size={18} className="sm:hidden" />
                <ChevronLeft size={20} className="hidden sm:block" />
              </button>

              <button
                onClick={nextSlide}
                disabled={isTransitioning || currentSlide === totalSlides - 1}
                className="rounded-lg border border-cyan-400/30 bg-slate-800/50 p-1.5 text-cyan-300 transition-all duration-200 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-200 disabled:opacity-50 sm:p-2"
                aria-label="Next slide"
              >
                <ChevronRight size={18} className="sm:hidden" />
                <ChevronRight size={20} className="hidden sm:block" />
              </button>

              <button
                onClick={firstSlide}
                disabled={isTransitioning || currentSlide === 0}
                className="rounded-lg border border-cyan-400/30 bg-slate-800/50 p-1.5 text-cyan-300 transition-all duration-200 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-200 disabled:opacity-50 sm:p-2"
                aria-label="Go to first slide"
              >
                <Home size={18} className="sm:hidden" />
                <Home size={20} className="hidden sm:block" />
              </button>
            </div>
          </div>

          <div className="presentation-nav-scroll mt-2 flex gap-1 overflow-x-auto pb-1 md:justify-center">
            {presentationSections.map((section, i) => {
              const isActive = i === activeSectionIndex;
              const label = sectionNavLabels[section.title] ?? section.title;

              return (
                <button
                  key={section.title}
                  type="button"
                  onClick={() => goToSlide(section.index)}
                  disabled={isTransitioning}
                  title={section.title}
                  aria-label={`Go to ${section.title}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`shrink-0 rounded-lg border px-2 py-1 text-[11px] font-medium whitespace-nowrap transition-all duration-200 disabled:opacity-50 sm:px-2.5 sm:py-1.5 sm:text-xs ${
                    isActive
                      ? 'border-cyan-400/60 bg-cyan-400/15 text-cyan-200 shadow-sm shadow-cyan-500/10'
                      : 'border-cyan-400/20 bg-slate-800/40 text-gray-400 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200'
                  }`}
                >
                  <span className={`font-mono sm:mr-1.5 ${isActive ? 'text-cyan-300' : 'text-cyan-500/70'}`}>
                    {section.num}
                  </span>
                  <span className="hidden sm:inline md:hidden lg:inline">{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative flex min-h-0 flex-1 flex-col pb-3 pt-[6.75rem] sm:pb-6 sm:pt-28 md:pt-[7.25rem]">
        <div className={`mx-auto flex h-full w-full max-w-5xl min-h-0 flex-1 transition-all duration-300 ${isTransitioning ? 'scale-[0.98] opacity-0' : 'scale-100 opacity-100'}`}>
          <div className="presentation-slide-scroll flex h-full w-full min-h-0 flex-col overflow-y-auto overflow-x-hidden rounded-xl border border-cyan-400/20 bg-gradient-to-br from-slate-800/40 to-slate-900/40 p-3 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl sm:rounded-2xl sm:p-6 md:p-8 lg:p-12">
            <div className="w-full min-h-0 flex-1">
              {renderSlide()}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-slate-800/50">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / presentationData.length) * 100}%` }}
        ></div>
      </div>

      {/* Footer */}
      {/* <footer className="fixed bottom-1 left-0 right-0 py-4 px-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs text-gray-500">
          <p>Arrow keys or buttons to navigate</p>
          <p>Slide {currentSlide + 1} of {presentationData.length}</p>
        </div>
      </footer> */}
    </div>
  );
}
