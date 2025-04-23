import { type ClassValue, clsx } from 'clsx'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTimeAgo(dateString: string | null): string {
  if (!dateString) return 'Data não disponível'
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return 'Data inválida'

  return formatDistanceToNow(date, { addSuffix: true, locale: ptBR })
}
