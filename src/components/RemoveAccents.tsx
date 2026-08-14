"use client";

import { useState, useCallback, useMemo } from "react";
import { FiCopy, FiCheck, FiTrash2 } from "react-icons/fi";

interface Props { locale?: string; }

function removeAccents(text: string, keepEnye: boolean): string {
  const normalized = text.normalize("NFD").replace(/[̀-ͯ]/g, "");
  if (!keepEnye) return normalized;
  // NFD decomposition also strips ñ→n + combining tilde, so restore it
  // specifically when the user wants to keep it (it's not really an accent
  // in Spanish, it's its own letter).
  let out = "";
  let i = 0;
  const orig = Array.from(text);
  const dec = Array.from(normalized);
  for (i = 0; i < orig.length; i++) {
    if (orig[i] === "ñ") out += "ñ";
    else if (orig[i] === "Ñ") out += "Ñ";
    else out += dec[i] ?? "";
  }
  return out;
}

export default function RemoveAccents({ locale = "es" }: Props) {
  const isEs = locale === "es";

  const [input, setInput] = useState("");
  const [keepEnye, setKeepEnye] = useState(true);
  const [copied, setCopied] = useState(false);

  const output = useMemo(() => removeAccents(input, keepEnye), [input, keepEnye]);

  const copy = useCallback(async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [output]);

  const clear = useCallback(() => setInput(""), []);

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-text-muted">{isEs ? "Texto original" : "Original text"}</label>
            <button
              onClick={clear}
              className="flex items-center gap-1.5 rounded-lg border border-border/30 bg-surface/60 px-2.5 py-1 text-xs text-text-muted transition-colors hover:text-text"
            >
              <FiTrash2 className="text-xs" /> {isEs ? "Limpiar" : "Clear"}
            </button>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isEs ? "Pega o escribe tu texto aquí…" : "Paste or type your text here…"}
            rows={10}
            className="w-full resize-none rounded-xl border border-border/30 bg-surface/60 px-4 py-3 text-sm text-text"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-text-muted">{isEs ? "Sin acentos" : "Without accents"}</label>
            <button
              onClick={copy}
              disabled={!output}
              className="flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/20 disabled:opacity-40"
            >
              {copied ? <><FiCheck className="text-xs" /> {isEs ? "Copiado" : "Copied"}</> : <><FiCopy className="text-xs" /> {isEs ? "Copiar" : "Copy"}</>}
            </button>
          </div>
          <textarea
            value={output}
            readOnly
            rows={10}
            className="w-full resize-none rounded-xl border border-border/30 bg-surface/40 px-4 py-3 text-sm text-text"
          />
        </div>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-border/20 bg-surface/30 p-4">
        <div>
          <p className="text-sm font-medium text-text-muted">{isEs ? "Mantener la ñ" : "Keep the ñ"}</p>
          <p className="mt-1 text-xs text-text-muted/50">{isEs ? "La ñ es una letra propia del español, no un acento — puedes conservarla." : "The ñ is its own letter in Spanish, not an accent — you can keep it."}</p>
        </div>
        <button
          onClick={() => setKeepEnye((v) => !v)}
          className={`shrink-0 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
            keepEnye ? "border-primary/50 bg-primary/10 text-primary" : "border-border/30 bg-surface/60 text-text-muted"
          }`}
        >
          {keepEnye ? (isEs ? "Activado" : "On") : (isEs ? "Desactivado" : "Off")}
        </button>
      </div>
    </div>
  );
}
