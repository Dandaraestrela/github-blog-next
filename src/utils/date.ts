import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR";

export const formatHoverDate = (date: Date) =>
  format(date, "dd 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });

export const dateRelativeToNow = (date: Date) =>
  formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
