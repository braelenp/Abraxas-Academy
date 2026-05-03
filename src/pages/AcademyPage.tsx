import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, X } from 'lucide-react';
import {
  academyModules,
  manifestoLines,
  sovereignLifestyleManifesto,
  sovereignLifestyleSlideshow,
  digitalTwinManifesto,
  digitalTwinSlideshow,
  regimeVideos,
} from '../lib/data';
import { useMembership } from '../providers/MembershipProvider';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { HomeworkSubmissionModal } from '../components/HomeworkSubmissionModal';
import { Slideshow } from '../components/Slideshow';
import { VideoCard } from '../components/VideoCard';

export function AcademyPage() {
  const {
    isMember,
    completionRate,
    progress,
    toggleLesson,
    completeHomework,
    completeQuiz,
    completedBadges,
    markHomeworkSubmitted,
  } = useMembership();
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set());
  const [submissionModal, setSubmissionModal] = useState<{ moduleId: string; moduleName: string } | null>(null);
  const [showManifestoModal, setShowManifestoModal] = useState<'regime' | 'lifestyle' | 'digital-twin' | null>(null);
  const [showHomeView, setShowHomeView] = useState(true);

  const toggleModule = (moduleId: string) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };

  const renderManifestoModal = (content: string[], title: string) => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden px-4">
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setShowManifestoModal(null)}
        />
        <div className="relative z-51 mx-auto flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-3xl border border-purple-300/30 bg-black/85 shadow-[0_0_80px_rgba(153,69,255,0.2)] backdrop-blur-2xl">
          <div className="sticky top-0 z-10 flex flex-none items-center justify-between border-b border-purple-300/15 bg-black/90 px-6 py-4 backdrop-blur-xl">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-purple-200/70">Academy Reference</p>
              <h2 className="mt-1 text-lg font-bold text-purple-100">{title}</h2>
            </div>
            <button
              onClick={() => setShowManifestoModal(null)}
              className="flex-none rounded-lg bg-purple-500/10 p-2 text-purple-300 transition hover:bg-purple-500/20"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <div className="text-sm leading-relaxed text-slate-200">
              {content.map((line, idx) => (
                <div
                  key={idx}
                  className={line === '' ? 'h-3' : line === line.toUpperCase() && line.length > 1 ? 'mt-4 font-bold uppercase tracking-wider text-purple-300 mb-2' : 'mb-2'}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {showHomeView && (
        <div className="space-y-4">
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <Badge>Genesis - First 100 Founding Cohort</Badge>
                <h1 className="mt-4 text-2xl font-semibold text-white">Sovereign Regime Academy</h1>
              </div>
              <button
                onClick={() => setShowHomeView(false)}
                className="text-xs font-semibold text-purple-300 hover:text-purple-200"
              >
                View Curriculum →
              </button>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              You are learning the complete edge. From trading discipline that generates capital outside crypto, to on-chain tokenization, to autonomous compounding. Education → Capital → On-Chain → Automation. The Regime flows from vision to mastery.
            </p>
            <div className="mt-5">
              <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.24em] text-cyan-200/70">
                <span>Academy Progress</span>
                <span>{completionRate}%</span>
              </div>
              <div className="mt-3">
                <Progress value={completionRate} />
              </div>
            </div>
          </Card>

          <Card>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-purple-300/70 mb-3">Foundation Reading</p>
              <button
                onClick={() => setShowManifestoModal('regime')}
                className="w-full rounded-lg border border-purple-300/20 bg-purple-500/8 px-4 py-3 text-left transition hover:bg-purple-500/15"
              >
                <p className="font-semibold text-purple-200">Sovereign Regime Manifesto</p>
                <p className="mt-1 text-xs text-slate-400">The six components. The philosophy. The call to action.</p>
              </button>
              <button
                onClick={() => setShowManifestoModal('lifestyle')}
                className="w-full rounded-lg border border-purple-300/20 bg-purple-500/8 px-4 py-3 text-left transition hover:bg-purple-500/15"
              >
                <p className="font-semibold text-purple-200">Sovereign Lifestyle Manifesto</p>
                <p className="mt-1 text-xs text-slate-400">Capital sovereignty. Optionality. Discipline. Tribe.</p>
              </button>
              <button
                onClick={() => setShowManifestoModal('digital-twin')}
                className="w-full rounded-lg border border-purple-300/20 bg-purple-500/8 px-4 py-3 text-left transition hover:bg-purple-500/15"
              >
                <p className="font-semibold text-purple-200">Digital Twin Architecture</p>
                <p className="mt-1 text-xs text-slate-400">Why on-chain parallels matter. The 4 layers. Your path.</p>
              </button>
            </div>
          </Card>

          <Card>
            <p className="text-xs uppercase tracking-[0.3em] text-purple-300/70 mb-4">Visual Journeys</p>
            <div className="space-y-4">
              <div className="rounded-lg border border-purple-300/20 bg-purple-500/8 overflow-hidden">
                <div className="p-3 border-b border-purple-300/20">
                  <p className="font-semibold text-purple-200">Sovereign Lifestyle Gallery</p>
                  <p className="mt-1 text-xs text-slate-400">Capital sovereignty through daily rituals and discipline</p>
                </div>
                <Slideshow slides={sovereignLifestyleSlideshow} />
              </div>
              <div className="rounded-lg border border-purple-300/20 bg-purple-500/8 overflow-hidden">
                <div className="p-3 border-b border-purple-300/20">
                  <p className="font-semibold text-purple-200">Digital Twin Journey</p>
                  <p className="mt-1 text-xs text-slate-400">From design to mastery. 4 phases. 4 layers. Your institution.</p>
                </div>
                <Slideshow slides={digitalTwinSlideshow} />
              </div>
            </div>
          </Card>

          <Card>
            <p className="text-xs uppercase tracking-[0.3em] text-purple-300/70 mb-4">Regime Mastery: 4 Videos</p>
            <div className="space-y-3">
              {regimeVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  title={video.title}
                  description={video.description}
                  thumbnailUrl={video.thumbnailUrl}
                  videoUrl={video.videoUrl}
                  youtubeId={video.youtubeId}
                  duration={video.duration}
                />
              ))}
            </div>
          </Card>

          <Card className="border-cyan-300/30 bg-cyan-500/8">
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70 mb-2">Your Journey</p>
            <p className="text-sm leading-6 text-slate-300">
              <strong>Landing Page</strong> → Vision. Manifestos.
              <br />
              <strong>Academy Home</strong> → Reference materials + slideshows.
              <br />
              <strong>Full Curriculum</strong> → 14 modules from trading edge through idea incubation.
              <br />
              <strong>Tokenization</strong> → On-chain Black Cards + Sophia Vaults.
              <br />
              <strong>Sovereignty</strong> → Capital compounding forever.
            </p>
          </Card>

          <Button
            onClick={() => setShowHomeView(false)}
            className="w-full"
          >
            Explore Full 14-Module Curriculum
          </Button>
        </div>
      )}

      {!showHomeView && (
        <>
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-white">Curriculum</h1>
                <p className="mt-1 text-xs text-slate-400">14 modules. Trading edge. Sovereign lifestyle. On-chain mastery.</p>
              </div>
              <button
                onClick={() => setShowHomeView(true)}
                className="text-xs font-semibold text-purple-300 hover:text-purple-200"
              >
                ← Back to Home
              </button>
            </div>
            <div className="mt-5">
              <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.24em] text-cyan-200/70">
                <span>Academy Progress</span>
                <span>{completionRate}%</span>
              </div>
              <div className="mt-3">
                <Progress value={completionRate} />
              </div>
            </div>
          </Card>

          {isMember && (
            <Link to="/app/tokenization">
              <Card className="border-cyan-300/30 bg-cyan-500/8 hover:bg-cyan-500/12 transition cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <Badge className="border-cyan-300/30 bg-cyan-500/15 text-cyan-100/80 text-[10px]">Next Step</Badge>
                    <h3 className="mt-2 text-base font-semibold text-white">Ready to Tokenize?</h3>
                    <p className="mt-1 text-xs text-slate-400">Convert your trading profits into sovereign on-chain assets via the Tokenization Engine.</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-cyan-300 flex-shrink-0" />
                </div>
              </Card>
            </Link>
          )}

          {!isMember && (
            <Card className="border-violet-300/20 bg-violet-500/8">
              <Badge className="border-amber-300/20 bg-amber-500/10 text-amber-100/80">Genesis NFT Required</Badge>
              <h2 className="mt-4 text-xl font-semibold text-white">Join the First 100: Sovereign Regime Founding Members</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Module 1 is unlocked for preview. Explore the trading foundation that builds real capital outside the system. Full curriculum access requires Genesis NFT membership.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-cyan-300/20 bg-cyan-500/5 p-3">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">Global Leader</p>
                  <p className="mt-2 text-lg font-bold text-white">$497</p>
                  <p className="mt-1 text-xs text-slate-400">3x yield • Leadership • IRL priority</p>
                </div>
                <div className="rounded-lg border border-violet-300/20 bg-violet-500/5 p-3">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-100">Member</p>
                  <p className="mt-2 text-lg font-bold text-white">$247</p>
                  <p className="mt-1 text-xs text-slate-400">Full curriculum • Cadabra • Founding</p>
                </div>
              </div>
            </Card>
          )}

          {academyModules.map((module, moduleIndex) => {
            const moduleProgress = progress[module.id];
            const totalSteps = module.lessons.length + 2;
            const completeSteps = moduleProgress.lessons.length + Number(moduleProgress.homeworkDone) + Number(moduleProgress.quizDone);
            const moduleCompletion = Math.round((completeSteps / totalSteps) * 100);
            const earned = completedBadges.includes(module.badge);
            const isExpanded = expandedModules.has(module.id);
            const isFirstModule = moduleIndex === 0;
            const canViewModule = isMember || isFirstModule;
            const canSubmit = isMember || isFirstModule;

            return (
              <Card key={module.id} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => canViewModule && toggleModule(module.id)}
                  className={canViewModule ? '' : 'cursor-not-allowed'}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-200/65">Module {module.index}</p>
                        {isFirstModule && !isMember && (
                          <Badge className="border-cyan-300/30 bg-cyan-500/15 text-cyan-100 text-[10px] px-2 py-0.5">Preview</Badge>
                        )}
                      </div>
                      <h2 className="mt-2 text-lg font-semibold text-white">{module.title}</h2>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-cyan-300 transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.24em] text-cyan-200/70">
                    <span>{moduleCompletion}% complete</span>
                  </div>
                  <div className="mt-2">
                    <Progress value={moduleCompletion} />
                  </div>
                </button>

                {isExpanded && canViewModule && (
                  <div className="mt-5 space-y-4 border-t border-white/8 pt-4">
                    <div>
                      <div className="rounded-full border border-violet-300/20 bg-violet-500/12 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-violet-100/80">
                        {module.signal}
                      </div>
                    </div>

                    <p className="text-sm leading-6 text-slate-300">{module.summary}</p>

                    <div className="space-y-3">
                      {module.lessons.map((lesson) => {
                        const complete = moduleProgress.lessons.includes(lesson.id);
                        return (
                          <button
                            key={lesson.id}
                            type="button"
                            onClick={() => canSubmit && toggleLesson(module.id, lesson.id)}
                            className={`flex w-full items-start justify-between gap-3 rounded-[1.2rem] border px-3 py-2 text-left transition text-sm ${complete ? 'border-cyan-300/25 bg-cyan-300/10' : 'border-white/8 bg-white/[0.03]'} ${canSubmit ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                          >
                            <div>
                              <p className="font-semibold text-white">{lesson.title}</p>
                              <p className="mt-0.5 text-xs leading-4 text-slate-400">{lesson.outcome}</p>
                            </div>
                            <p className={`text-xs uppercase tracking-[0.2em] flex-none ${complete ? 'text-cyan-100' : 'text-slate-500'}`}>{complete ? '✓' : canSubmit ? '—' : 'locked'}</p>
                          </button>
                        );
                      })}
                    </div>

                    <div className="grid gap-3 lg:grid-cols-2">
                      <div className="rounded-[1.3rem] border border-white/8 bg-white/[0.03] p-3 flex flex-col">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-200/65">Homework</p>
                        <Button
                          className="mt-auto w-full text-xs"
                          variant="ghost"
                          disabled={!canSubmit || moduleProgress.homeworkDone}
                          onClick={() => {
                            if (moduleProgress.homeworkSubmitted) {
                              completeHomework(module.id);
                            } else {
                              setSubmissionModal({ moduleId: module.id, moduleName: module.title });
                            }
                          }}
                        >
                          {moduleProgress.homeworkDone ? 'Logged' : moduleProgress.homeworkSubmitted ? 'Submitted' : 'Submit'}
                        </Button>
                      </div>

                      <div className="rounded-[1.3rem] border border-white/8 bg-white/[0.03] p-3 flex flex-col">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-200/65">Quiz</p>
                        <Button
                          className="mt-auto w-full text-xs"
                          variant="ghost"
                          disabled={!canSubmit || moduleProgress.quizDone}
                          onClick={() => completeQuiz(module.id)}
                        >
                          {moduleProgress.quizDone ? 'Passed' : 'Take Quiz'}
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 rounded-[1.3rem] border border-violet-300/14 bg-violet-500/8 px-3 py-2">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.3em] text-violet-100/70">Badge</p>
                        <p className="mt-1 text-xs font-semibold text-white">{module.badge}</p>
                      </div>
                      {canSubmit ? (
                        <Badge className={`text-[9px] ${earned ? '' : 'border-white/10 bg-white/[0.03] text-slate-400'}`}>{earned ? 'Forged' : 'Locked'}</Badge>
                      ) : (
                        <Badge className="text-[9px] border-white/10 bg-white/[0.03] text-slate-400">Genesis</Badge>
                      )}
                    </div>
                  </div>
                )}

                {isExpanded && !canViewModule && (
                  <div className="mt-5 border-t border-white/8 pt-4">
                    <div className="rounded-lg border border-violet-300/20 bg-violet-500/10 p-4 text-center">
                      <p className="text-sm font-semibold text-violet-100">🔒 Locked Module</p>
                      <p className="mt-2 text-xs text-violet-100/70">Genesis NFT required to unlock all curriculum modules.</p>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </>
      )}

      {submissionModal && (
        <HomeworkSubmissionModal
          isOpen={true}
          onClose={() => {
            if (submissionModal.moduleId) {
              markHomeworkSubmitted(submissionModal.moduleId);
            }
            setSubmissionModal(null);
          }}
          moduleName={submissionModal.moduleName}
          moduleId={submissionModal.moduleId}
        />
      )}

      {showManifestoModal === 'regime' && renderManifestoModal(manifestoLines, 'Sovereign Regime Manifesto')}
      {showManifestoModal === 'lifestyle' && renderManifestoModal(sovereignLifestyleManifesto, 'Sovereign Lifestyle Manifesto')}
      {showManifestoModal === 'digital-twin' && renderManifestoModal(digitalTwinManifesto, 'Digital Twin Architecture')}
    </div>
  );
}
