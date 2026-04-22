import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { academyModules } from '../lib/data';
import { useMembership } from '../providers/MembershipProvider';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { HomeworkSubmissionModal } from '../components/HomeworkSubmissionModal';

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

  const toggleModule = (moduleId: string) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };

  return (
    <div className="space-y-4">
      <Card>
        <Badge>Five-Module Curriculum</Badge>
        <h1 className="mt-4 text-2xl font-semibold text-white">Baby Billionaire Trading Strategy + The Sovereign Path</h1>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          This is where the regime teaches execution. Track lessons, finish homework, pass quizzes, and forge completion badges that live on your Abraxas ID card.
        </p>
        <div className="mt-5">
          <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.24em] text-cyan-200/70">
            <span>Total progress</span>
            <span>{completionRate}%</span>
          </div>
          <div className="mt-3"><Progress value={completionRate} /></div>
        </div>
      </Card>

      {!isMember ? (
        <Card className="border-violet-300/20 bg-violet-500/8">
          <Badge className="border-amber-300/20 bg-amber-500/10 text-amber-100/80">Token Gated</Badge>
          <h2 className="mt-4 text-xl font-semibold text-white">Genesis membership unlocks the full chamber.</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Module 1 is unlocked for preview. Explore the first curriculum to see how the regime teaches. Genesis NFT required to submit homework, take quizzes, and earn badges on all modules.
          </p>
        </Card>
      ) : null}

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
            {/* Module Header - Always visible */}
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
                <div className="flex flex-col items-end gap-2">
                  <ChevronDown
                    className={`h-5 w-5 text-cyan-300 transition-transform ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.24em] text-cyan-200/70">
                <span>{moduleCompletion}% complete</span>
              </div>
              <div className="mt-2">
                <Progress value={moduleCompletion} />
              </div>
            </button>

            {/* Expanded Content */}
            {isExpanded && canViewModule && (
              <div className="mt-5 space-y-4 border-t border-white/8 pt-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="rounded-full border border-violet-300/20 bg-violet-500/12 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-violet-100/80">
                      {module.signal}
                    </div>
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
                        <div className="text-right flex-none">
                          <p className={`text-xs uppercase tracking-[0.2em] ${complete ? 'text-cyan-100' : 'text-slate-500'}`}>{complete ? '✓' : canSubmit ? '—' : 'locked'}</p>
                        </div>
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
                      onClick={() => {
                        completeQuiz(module.id);
                      }}
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

            {/* Locked Module Message */}
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
    </div>
  );
}
