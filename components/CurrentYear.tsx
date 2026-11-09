"use client";

import { Suspense, useSyncExternalStore } from "react";

function getCurrentYear(): string {
  return new Date().getFullYear().toString();
}

function subscribe() {
  return () => {};
}

function Year() {
  const year = useSyncExternalStore(subscribe, getCurrentYear, () => "");
  return <>{year}</>;
}

export default function CurrentYear() {
  return (
    <Suspense fallback={null}>
      <Year />
    </Suspense>
  );
}
