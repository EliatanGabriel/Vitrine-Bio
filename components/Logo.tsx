export default function Logo({ withText = true }: { withText?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span
        className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-panel"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/favicon.svg" alt="" width={28} height={28} className="h-7 w-7 rounded-md" />
      </span>
      {withText ? (
        <span className="leading-none">
          <span className="block font-display text-[15px] font-bold tracking-[0.14em] text-white">VITRINE BIO</span>
          <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">
            Sites profissionais
          </span>
        </span>
      ) : null}
    </span>
  );
}
