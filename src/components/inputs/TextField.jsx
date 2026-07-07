import React from 'react'

export function TextField({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  error,
  autoComplete
}){
  return (
    <div>
      {label && (
        <label className="text-xs font-semibold tracking-widest text-white/60" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
      {error ? <p className="mt-2 text-xs text-red-300">{error}</p> : null}
    </div>
  )
}

