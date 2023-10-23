"use client";

// Зарезервированное название компонента

export default function ErrorWrapper({ error }: { error: Error }) {
  return <div className='error'>Oops!!Error: {error.message}</div>;
}
