"use client";

import React from "react";

type Props = {
  summary: string;
};

export default function Detail({ summary }: Props) {
  return (
    <div className="mt-4 text-lg" dangerouslySetInnerHTML={{ __html: summary }} />
  );
}
