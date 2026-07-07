import React from 'react'

export function TextAreaField({ id, label, value, onChange, placeholder, error }){
  return (
    <div>
      {label && (
        <label className="text-xs font-semibold tracking-widest text-white/60" htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 h-32 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
      {error ? <p className="mt-2 text-xs text-red-300">{error}</p> : null}
    </div>
  )
}

