'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

export function LeadForm({
  title = 'Получить подборку объектов',
  subtitle = 'Оставьте контакты — подберём варианты под ваш бюджет и направление.',
  compact = false,
}: {
  title?: string
  subtitle?: string
  compact?: boolean
}) {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-lg border border-border bg-card p-8">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-5 w-5" />
        </span>
        <h3 className="font-serif text-xl">Заявка принята</h3>
        <p className="text-sm text-muted-foreground">
          Менеджер свяжется с вами в течение 15 минут и пришлёт персональную подборку.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
      className="rounded-lg border border-border bg-card p-6 sm:p-8"
    >
      <h3 className="font-serif text-2xl">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{subtitle}</p>
      <div className={`mt-6 grid gap-4 ${compact ? '' : 'sm:grid-cols-2'}`}>
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-wide text-muted-foreground">
            Имя
          </label>
          <input
            required
            placeholder="Ваше имя"
            className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-foreground"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-wide text-muted-foreground">
            Телефон
          </label>
          <input
            required
            type="tel"
            placeholder="+7 900 000-00-00"
            className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-foreground"
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-xs uppercase tracking-wide text-muted-foreground">
          Бюджет
        </label>
        <select className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-foreground">
          <option>до 5 млн ₽</option>
          <option>5–12 млн ₽</option>
          <option>12–20 млн ₽</option>
          <option>20+ млн ₽</option>
        </select>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        Получить подборку
      </button>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
      </p>
    </form>
  )
}
