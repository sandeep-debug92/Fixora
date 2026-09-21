import React, { useState } from 'react';
import { 
  SAMPLE_PUBLIC_ISSUES 
} from '../data/mockData';
import { 
  PublicIssueItem 
} from '../types';
import { 
  AlertTriangle, 
  MapPin, 
  ThumbsUp, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Send,
  Droplets,
  LightbulbOff,
  Trash2,
  Train,
  PlusCircle
} from 'lucide-react';

interface PublicReportingSectionProps {
  onReportPublicProblem: (issueTitle?: string) => void;
}

export const PublicReportingSection: React.FC<PublicReportingSectionProps> = ({
  onReportPublicProblem,
}) => {
  const [issues, setIssues] = useState<PublicIssueItem[]>(SAMPLE_PUBLIC_ISSUES);
  const [upvotedIds, setUpvotedIds] = useState<Record<string, boolean>>({});

  const publicExamples = [
    'Broken road',
    'Pothole',
    'Open drain',
    'Water leakage',
    'Garbage problem',
    'Broken street light',
    'Public toilet issue',
    'Railway station issue',
    'Bus station issue',
    'School infrastructure issue',
    'Government facility issue',
  ];

  const handleUpvote = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setUpvotedIds((prev) => {
      const isCurrentlyUpvoted = !!prev[id];
      const nextState = !isCurrentlyUpvoted;

      setIssues((currentIssues) =>
        currentIssues.map((issue) => {
          if (issue.id === id) {
            return {
              ...issue,
              upvotes: nextState ? issue.upvotes + 1 : issue.upvotes - 1,
            };
          }
          return issue;
        })
      );

      return { ...prev, [id]: nextState };
    });
  };

  const getStatusBadge = (status: PublicIssueItem['status']) => {
    switch (status) {
      case 'Work In Progress':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Inspected':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Resolved':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getIconForIssue = (iconName: string) => {
    switch (iconName) {
      case 'Droplets': return Droplets;
      case 'LightbulbOff': return LightbulbOff;
      case 'Trash2': return Trash2;
      case 'Train': return Train;
      default: return AlertTriangle;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold text-amber-600 tracking-wider uppercase bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
              Community & Civic Watch
            </span>
            <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Report problems around you.
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-xl font-normal">
              Notice a cracked bridge, overflowing sewer, or dead streetlamp? Submit civic hazards directly so local municipal bodies can act.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={() => onReportPublicProblem()}
              className="px-6 py-3 rounded-xl font-semibold text-white bg-amber-600 hover:bg-amber-700 shadow-md shadow-amber-600/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Report Public Problem</span>
            </button>
          </div>
        </div>

        {/* Quick Example Tags */}
        <div className="mb-8 p-4 rounded-2xl bg-amber-50/50 border border-amber-100">
          <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
            Everyday Community Problems Fixora Solves:
          </div>
          <div className="flex flex-wrap gap-2">
            {publicExamples.map((ex, idx) => (
              <button
                key={idx}
                onClick={() => onReportPublicProblem(ex)}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-white text-slate-700 border border-amber-200/80 hover:bg-amber-100 hover:text-amber-900 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <span>{ex}</span>
                <span className="text-amber-500 font-bold">+</span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Public Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {issues.map((issue) => {
            const IssueIcon = getIconForIssue(issue.icon);
            const isUpvoted = !!upvotedIds[issue.id];

            return (
              <div
                key={issue.id}
                onClick={() => onReportPublicProblem(issue.title)}
                className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-5 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${getStatusBadge(issue.status)}`}>
                      {issue.status}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {issue.reportedAgo}
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-amber-600 flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      <IssueIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-['Outfit',sans-serif] text-sm font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-amber-700 transition-colors">
                        {issue.title}
                      </h3>
                      <div className="text-[11px] font-medium text-slate-500 mt-1">
                        {issue.category}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    <span className="line-clamp-1">{issue.location}</span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between">
                  <button
                    onClick={(e) => handleUpvote(issue.id, e)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      isUpvoted
                        ? 'bg-amber-100 text-amber-800 border border-amber-300'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                    }`}
                    title="Upvote severity to prioritize municipal inspection"
                  >
                    <ThumbsUp className={`w-3.5 h-3.5 ${isUpvoted ? 'fill-amber-600' : ''}`} />
                    <span>{issue.upvotes} Priority Votes</span>
                  </button>

                  <span className="text-xs font-semibold text-amber-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
