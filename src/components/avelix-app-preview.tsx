"use client";

import {
  Bell,
  CalendarDays,
  CirclePlus,
  FileText,
  House,
  Menu,
  MessageCircle,
  Pill,
  Sun,
  UsersRound,
} from "lucide-react";

export type PreviewLocale = "pt" | "en" | "fr";

const dateLocales: Record<PreviewLocale, string> = {
  pt: "pt-BR",
  en: "en-US",
  fr: "fr-CA",
};

const previewCopy = {
  pt: {
    greeting: "Boa tarde,",
    caregiver: "cuidador Fabiano",
    selectPatient: "Selecionar paciente ›",
    todayPrefix: "Hoje",
    dailySummary: "Resumo Diário",
    viewAll: "Ver tudo ›",
    appointment: "Próxima Consulta",
    appointmentTime: "Hoje às 14:30",
    doctor: "Dr. Jennifer Lee",
    clinic: "Centro Médico Riverside",
    details: "Ver detalhes",
    encouragementTitle: "Cuidar é mais leve, todo dia",
    encouragementText: "Você está fazendo um ótimo trabalho.",
    summary: [
      { value: "1/4", label: "Tarefas" },
      { value: "2", label: "Remédios" },
      { value: "4", label: "Consultas" },
      { value: "1", label: "Bem-estar" },
    ],
    actions: [
      { label: "Remédios" },
      { label: "Consultas" },
      { label: "Mensagens" },
      { label: "Notas" },
    ],
    nav: ["Início", "Pacientes", "Adicionar", "Alertas", "Mais"],
  },
  en: {
    greeting: "Good afternoon,",
    caregiver: "caregiver Fabiano",
    selectPatient: "Select patient ›",
    todayPrefix: "Today",
    dailySummary: "Daily Summary",
    viewAll: "View all ›",
    appointment: "Next Appointment",
    appointmentTime: "Today at 2:30 PM",
    doctor: "Dr. Jennifer Lee",
    clinic: "Riverside Medical Center",
    details: "View details",
    encouragementTitle: "Care feels lighter, every day",
    encouragementText: "You are doing a great job.",
    summary: [
      { value: "1/4", label: "Tasks" },
      { value: "2", label: "Meds" },
      { value: "4", label: "Visits" },
      { value: "1", label: "Wellness" },
    ],
    actions: [
      { label: "Meds" },
      { label: "Visits" },
      { label: "Messages" },
      { label: "Notes" },
    ],
    nav: ["Home", "Patients", "Add", "Alerts", "More"],
  },
  fr: {
    greeting: "Bon après-midi,",
    caregiver: "aidant Fabiano",
    selectPatient: "Sélectionner un patient ›",
    todayPrefix: "Aujourd’hui",
    dailySummary: "Résumé quotidien",
    viewAll: "Tout voir ›",
    appointment: "Prochain rendez-vous",
    appointmentTime: "Aujourd’hui à 14 h 30",
    doctor: "Dre Jennifer Lee",
    clinic: "Centre médical Riverside",
    details: "Voir les détails",
    encouragementTitle: "Prendre soin devient plus léger",
    encouragementText: "Vous faites un excellent travail.",
    summary: [
      { value: "1/4", label: "Tâches" },
      { value: "2", label: "Médicaments" },
      { value: "4", label: "Visites" },
      { value: "1", label: "Bien-être" },
    ],
    actions: [
      { label: "Médicaments" },
      { label: "Rendez-vous" },
      { label: "Messages" },
      { label: "Notes" },
    ],
    nav: ["Accueil", "Patients", "Ajouter", "Alertes", "Plus"],
  },
} satisfies Record<
  PreviewLocale,
  {
    greeting: string;
    caregiver: string;
    selectPatient: string;
    todayPrefix: string;
    dailySummary: string;
    viewAll: string;
    appointment: string;
    appointmentTime: string;
    doctor: string;
    clinic: string;
    details: string;
    encouragementTitle: string;
    encouragementText: string;
    summary: { value: string; label: string }[];
    actions: { label: string }[];
    nav: string[];
  }
>;

const summaryTones = [
  "bg-[color-mix(in_srgb,var(--color-primary)_18%,white)] text-[var(--color-primary)]",
  "bg-[color-mix(in_srgb,var(--color-secondary)_20%,white)] text-[var(--color-secondary)]",
  "bg-[color-mix(in_srgb,var(--color-accent)_22%,white)] text-[var(--color-accent)]",
  "bg-[color-mix(in_srgb,var(--color-primary)_18%,white)] text-[var(--color-primary)]",
];

const actionIcons = [Pill, CalendarDays, MessageCircle, FileText];
const actionTones = [
  "bg-[color-mix(in_srgb,var(--color-primary)_18%,white)] text-[var(--color-primary)]",
  "bg-[color-mix(in_srgb,var(--color-secondary)_20%,white)] text-[var(--color-secondary)]",
  "bg-[color-mix(in_srgb,var(--color-primary)_14%,white)] text-[var(--color-primary)]",
  "bg-[color-mix(in_srgb,var(--color-accent)_22%,white)] text-[var(--color-accent)]",
];

const navIcons = [House, UsersRound, CirclePlus, Bell, Menu];

/**
 * Renders the Avelix app UI as live HTML/CSS inside a phone frame, using the
 * same markup/token approach as the Avelix product itself, instead of static
 * screenshots.
 */
export function AvelixAppPreview({ locale }: { locale: PreviewLocale }) {
  const copy = previewCopy[locale];
  const today = new Intl.DateTimeFormat(dateLocales[locale], {
    day: "numeric",
    month: "short",
  })
    .format(new Date())
    .replace(".", "");

  return (
    <div className="relative mx-auto aspect-[7/12] w-[210px] overflow-hidden rounded-[38px] border border-[var(--color-border)] bg-[var(--color-text)] p-[5px] shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:w-[230px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,color-mix(in_srgb,var(--color-primary)_24%,transparent),transparent_55%)]" />
      <div className="relative z-10 flex h-full min-h-0 flex-col overflow-hidden rounded-[34px] border border-[color-mix(in_srgb,var(--color-primary)_24%,transparent)] bg-[var(--color-text)] shadow-[0_0_80px_color-mix(in_srgb,var(--color-primary)_20%,transparent)]">
        <div className="min-h-0 flex-1 p-2">
          <div className="relative h-full overflow-hidden rounded-[24px] border border-[color-mix(in_srgb,var(--color-surface)_18%,transparent)] bg-[color-mix(in_srgb,var(--color-surface)_8%,transparent)] p-2 shadow-[0_20px_60px_rgba(47,58,69,0.20)]">
            <div className="relative z-10 h-full w-full overflow-hidden rounded-[18px] bg-[var(--color-background)] text-[var(--color-secondary-text)]">
              <div className="flex h-full min-h-0 flex-col overflow-hidden">
                <div className="flex shrink-0 items-center justify-between px-3 pb-2 pt-2 text-[9px] font-semibold text-[var(--color-secondary-text)]">
                  <span>1:10</span>
                  <span className="tracking-[0.18em]">◼ ◒ 6● ▴</span>
                </div>

                <div className="shrink-0 px-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[13px] font-semibold leading-none text-[var(--color-secondary-text)]">
                        {copy.greeting}
                      </p>
                      <h3 className="text-[15px] font-black leading-tight text-[var(--color-text)]">
                        {copy.caregiver} <span className="text-[var(--color-accent)]">❤</span>
                      </h3>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-accent)_22%,white)] text-[var(--color-accent)]">
                      <Sun aria-hidden="true" size={16} strokeWidth={2.4} />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="mt-2 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_16%,white)] px-3 py-1.5 text-[9px] font-bold text-[var(--color-primary)]"
                  >
                    {copy.selectPatient}
                  </button>
                </div>

                <div className="mt-2 min-h-0 flex-1 space-y-2 overflow-y-auto px-3 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  <section className="rounded-[14px] border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-2.5 shadow-[0_4px_10px_rgba(47,58,69,0.10)]">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-surface)]">
                          <span className="text-[var(--color-accent)]">❤</span>
                        </div>
                        <div>
                          <h4 className="text-[11px] font-black leading-none text-[var(--color-text)]">
                            {copy.dailySummary}
                          </h4>
                          <p className="mt-1 text-[9px] font-semibold text-[var(--color-secondary-text)]">
                            {copy.todayPrefix}, {today}
                          </p>
                        </div>
                      </div>
                      <span className="text-[9px] font-black text-[var(--color-primary)]">{copy.viewAll}</span>
                    </div>
                    <div className="mt-2.5 grid grid-cols-4 gap-1.5">
                      {copy.summary.map((item, index) => (
                        <div className="text-center" key={item.label}>
                          <div
                            className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-black ${summaryTones[index]}`}
                          >
                            {item.value}
                          </div>
                          <p className="mt-1 text-[8px] font-black leading-tight text-[var(--color-text)]">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="rounded-[14px] border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-2.5 shadow-[0_4px_10px_rgba(47,58,69,0.10)]">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-secondary)_20%,white)] text-[var(--color-secondary)] text-[10px]">
                          ▤
                        </div>
                        <div>
                          <h4 className="text-[11px] font-black leading-none text-[var(--color-text)]">
                            {copy.appointment}
                          </h4>
                          <p className="mt-1 text-[9px] font-black text-[var(--color-secondary)]">
                            {copy.appointmentTime}
                          </p>
                          <p className="mt-1 text-[9px] font-black text-[var(--color-text)]">{copy.doctor}</p>
                          <p className="text-[8px] font-semibold text-[var(--color-secondary-text)]">
                            {copy.clinic}
                          </p>
                        </div>
                      </div>
                      <span className="rounded-full bg-[color-mix(in_srgb,var(--color-secondary)_20%,white)] px-2 py-1 text-[8px] font-black text-[var(--color-secondary)]">
                        {copy.details}
                      </span>
                    </div>
                  </section>

                  <section className="grid grid-cols-4 gap-1.5 rounded-[14px] border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-2.5 shadow-[0_4px_10px_rgba(47,58,69,0.10)]">
                    {copy.actions.map((action, index) => {
                      const ActionIcon = actionIcons[index];

                      return (
                        <div className="text-center" key={action.label}>
                          <div
                            className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-black ${actionTones[index]}`}
                          >
                            <ActionIcon aria-hidden="true" size={13} strokeWidth={2.4} />
                          </div>
                          <p className="mt-1 text-[8px] font-black leading-tight text-[var(--color-text)]">
                            {action.label}
                          </p>
                        </div>
                      );
                    })}
                  </section>

                  <section className="rounded-[14px] bg-[color-mix(in_srgb,var(--color-secondary)_18%,white)] px-3 py-2.5 text-[var(--color-text)]">
                    <div className="flex items-center gap-2">
                      <span className="text-base text-[var(--color-secondary)]">♡</span>
                      <div>
                        <h4 className="text-[11px] font-black leading-none">{copy.encouragementTitle}</h4>
                        <p className="mt-1 text-[9px] font-semibold">{copy.encouragementText}</p>
                      </div>
                    </div>
                  </section>
                </div>

                <div className="grid shrink-0 grid-cols-5 border-t border-[var(--color-border)] bg-[var(--color-surface)] px-1.5 py-1.5">
                  {copy.nav.map((label, index) => {
                    const NavIcon = navIcons[index];

                    return (
                      <div
                        className={`flex flex-col items-center gap-0.5 text-[7px] font-bold ${
                          index === 0 ? "text-[var(--color-primary)]" : "text-[var(--color-secondary-text)]"
                        }`}
                        key={label}
                      >
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] ${
                            index === 2 ? "bg-[var(--color-primary)] text-[var(--color-surface)]" : ""
                          }`}
                        >
                          <NavIcon aria-hidden="true" size={16} strokeWidth={2.4} />
                        </span>
                        {label}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_15%,rgba(255,255,255,0.08)_35%,transparent_55%)]" />
    </div>
  );
}
