import React, { useState, useMemo } from "react";

import type { CollectionEntry } from "astro:content";

export type Skill = CollectionEntry<"skills">["data"] & { id: string };

interface SkillFilterProps {
	skills: Skill[];
	labels?: {
		filterAll: string;
		filterCore: string;
		filterProficient: string;
		filterFamiliar: string;
	};
}

export const SkillFilter: React.FC<SkillFilterProps> = ({
	skills,
	labels = {
		filterAll: "All Skills",
		filterCore: "Core Focus",
		filterProficient: "Proficient",
		filterFamiliar: "Familiar & Foundations",
	},
}) => {
	const [activeTab, setActiveTab] = useState<
		"all" | "core" | "proficient" | "familiar"
	>("all");
	const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

	// Filter skills based on selected tab
	const filteredSkills = useMemo(() => {
		if (activeTab === "all") return skills;
		return skills.filter((skill) => skill.proficiency === activeTab);
	}, [skills, activeTab]);

	return (
		<div className="space-y-6">
			{/* Tab Filter Controls */}
			<div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
				{(["all", "core", "proficient", "familiar"] as const).map(
					(tab) => {
						const isActive = activeTab === tab;
						const labelMap = {
							all: labels.filterAll,
							core: labels.filterCore,
							proficient: labels.filterProficient,
							familiar: labels.filterFamiliar,
						};

						return (
							<button
								key={tab}
								onClick={() => {
									setActiveTab(tab);
									setSelectedSkill(null); // Reset preview on tab change
								}}
								className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-all ${
									isActive
										? "border border-teal-500/40 bg-teal-500/20 text-teal-300"
										: "border border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700 hover:text-slate-200"
								}`}
							>
								{labelMap[tab]}
							</button>
						);
					},
				)}
			</div>

			{/* Interactive Chip Grid */}
			<div className="flex flex-wrap gap-2">
				{filteredSkills.map((skill) => {
					const isSelected = selectedSkill?.id === skill.id;

					// Color accents based on proficiency
					const badgeStyles = {
						core: isSelected
							? "bg-teal-500 text-slate-950 border-teal-400 font-bold"
							: "bg-teal-500/10 text-teal-300 border-teal-500/30 hover:border-teal-400",
						proficient: isSelected
							? "bg-slate-200 text-slate-950 border-slate-100 font-bold"
							: "bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-600",
						familiar: isSelected
							? "bg-slate-400 text-slate-950 border-slate-300 font-bold"
							: "bg-slate-900/50 text-slate-400 border-slate-800/80 hover:border-slate-700",
					};

					return (
						<button
							key={skill.id}
							onClick={() =>
								setSelectedSkill(isSelected ? null : skill)
							}
							className={`cursor-pointer rounded-full border px-3 py-1 text-xs font-medium transition-all ${
								badgeStyles[skill.proficiency]
							}`}
						>
							{skill.name}
						</button>
					);
				})}
			</div>

			{/* Selected Skill Summary Inspector */}
			{selectedSkill && (
				<div className="animate-in fade-in space-y-1 rounded-lg border border-slate-800 bg-slate-900/80 p-4 text-sm duration-150">
					<div className="mb-1 flex items-center justify-between text-xs text-slate-400">
						<span className="font-semibold tracking-wider text-teal-400 uppercase">
							{selectedSkill.category}
						</span>
						<span className="rounded border border-slate-700 bg-slate-800 px-2 py-0.5 capitalize">
							{selectedSkill.proficiency}
						</span>
					</div>
					<p className="leading-relaxed text-slate-200">
						{selectedSkill.summary}
					</p>
				</div>
			)}
		</div>
	);
};
